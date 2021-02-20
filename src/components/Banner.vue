<template>
  <div class="banner_box">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#fff">
      <van-swipe-item
        v-for="item in bannerList"
        :key="item.id"
        @click="handle(item.id)"
      >
        <div class="desc">
          <h1>{{ item.title }}</h1>
          <p>{{ item.hint }}</p>
        </div>
        <div class="pic">
          <img :src="item.image" alt="" />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "BANNER_BOX",
  props: ["bannerList"],
  methods: {
    handle(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style lang="less">
.banner_box {
  width: 100%;
  height: 300px;

  .my-swipe {
    height: 100%;
    position: relative;

    .desc {
      position: absolute;
      left: 30px;
      bottom: 30px;
      color: #fff;
      text-align: left;

      h1 {
        font-size: 18px;
        padding-block: 16px;
        overflow: hidden;
      }
      p {
        font-size: 13px;
      }
    }

    .pic {
      width: 100%;
      height: 100%;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>