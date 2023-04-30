// node_modules/vue3-html2pdf/src/index.js
import component from "C:/Users/lang_/Desktop/onesmail.github.io/node_modules/vue3-html2pdf/src/vue3-html2pdf.vue";
function install(Vue) {
  if (install.installed)
    return;
  install.installed = true;
  Vue.component("Vue3Html2pdf", component);
}
var plugin = {
  install
};
var GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
component.install = install;
var src_default = component;
export {
  src_default as default
};
//# sourceMappingURL=vue3-html2pdf.js.map
