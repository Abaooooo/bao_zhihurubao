<template>
  <header class="header_box">
    <div class="title">
      <div class="time">
        <span>19</span>
        <span>02yue</span>
      </div>
      <h1>zhihuribao</h1>
    </div>
    <div class="pic">
      <img src="" alt="" />
    </div>
  </header>
</template>

<script>
export default {};
</script >

<style lang="less">
.header_box {
  width: 100%;
  height: 60px;
  padding: 8px;
  background: #fff;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .time {
      padding-right: 10px;
      border-right: 1px solid #ccc;

      span {
        display: block;
        font-size: 13px;
        text-align: center;

        &:nth-child(1) {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }

    h1 {
      font-size: 20px;
      padding-left: 10px;
    }
  }

  .pic {
    width: 45px;
    height: 45px;
    background: url("../assets/images/timg.jpg") no-repeat;
    background-size: 100% 100%;
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