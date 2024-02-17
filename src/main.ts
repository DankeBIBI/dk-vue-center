import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "strap-trousers/style/index.css";
import { Route } from "./route";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";
import dkForm from "./components/dk-form";
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.component("dk-form", dkForm);
app.use(Route);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app");
