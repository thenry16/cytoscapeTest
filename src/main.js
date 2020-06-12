import Vue from "vue";
import App from "./App";
import VueCytoscape from "vue-cytoscape";

Vue.use(VueCytoscape);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
