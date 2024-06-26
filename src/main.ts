import { createApp } from "vue";
import "./style.css";
import "@/assets/style/font.css";
import App from "./App.vue";
import "strap-trousers/style/index.css";
import { Route } from "./route";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(Route);
app.use(pinia);
app.use(ElementPlus,{locale:zhCn});
app.mount("#app");
