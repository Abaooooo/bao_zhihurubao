<template>
  <div class="home_box" v-if="time">
    <Header :time="time"></Header>
    <Banner :bannerList="bannerList"></Banner>
    <van-list v-model="isLoading" @load="loadMore">
      <NewsItem v-for="item in list" :key="item.id" :item="item"></NewsItem>
    </van-list>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import NewsItem from "@/components/NewsItem";
export default {
  name: "HOME_PAGE",
  components: {
    Header,
    Banner,
    NewsItem,
  },
  data() {
    return {
      list: [],
      bannerList: [],
      time: "",
      lastTime: "",
      isLoading: false,
    };
  },
  methods: {
    async getLatest() {
      let res = await this.$api.getLatest();
      let { date, stories, top_stories } = res;
      this.list = stories;
      this.bannerList = top_stories;
      this.time = date;
      this.lastTime = date;
    },
    loadMore() {
      let timer = setTimeout(async () => {
        let res = await this.$api.getBefore(this.lastTime);
        let { date, stories } = res;
        this.isLoading = false;
        this.lastTime = date;
        this.list = this.list.concat(stories);
        clearTimeout(timer);
      }, 500);
    },
  },
  created() {
    this.getLatest();
  },
};
</script>

<style lang="less">
.home_box {
  width: 100%;
  padding-top: 60px;
}
</style>