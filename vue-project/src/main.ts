import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { FaChartBar, FaMap, FaFileInvoice, FaHeart } from "oh-vue-icons/icons"

import 'vfonts/FiraCode.css'
import './assets/main.css'

addIcons(FaChartBar, FaMap, FaFileInvoice, FaHeart)

createApp(App)
    .use(plugin, defaultConfig({theme: 'genesis'}))
    .component("v-icon", OhVueIcon).mount('#app')
