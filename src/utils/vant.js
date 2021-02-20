import Vue from "vue";
import { Swipe, SwipeItem, List } from "vant";
[Swipe, SwipeItem, List].forEach((item) => {
  Vue.use(item);
});
