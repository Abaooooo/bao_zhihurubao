<template>
  <router-link :to="{ path: `/detail/${item.id}` }" class="newsitem_box">
    <div class="content">
      <h1>{{ item.title }}</h1>
      <p>{{ item.hint }}</p>
    </div>
    <div class="pic">
      <img :src="item.images[0]" alt="" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NewsItem_BOX",
  props: ["item"],
};
</script>

<style lang="less">
.newsitem_box {
  width: 100%;
  height: 128px;
  padding: 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .content {
    margin-right: 18px;
    text-align: left;

    h1 {
      font-size: 18px;
      line-height: 24px;
      font-weight: normal;
      overflow: hidden;
      margin-bottom: 10px;
    }
    p {
      font-size: 15px;
      color: #999;
      line-height: 18px;
    }
  }

  .pic {
    width: 88px;
    height: 88px;
    border-radius: 6px;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>