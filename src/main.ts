import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "strap-trousers/style/index.css";
import { Route } from "./route";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(Route);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app");
