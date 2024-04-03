import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Removed because of Edge warning about script/js - imported in index.html
// import './style.css'

// import PrimeVue from 'primevue/config'
// import { OhVueIcon, addIcons } from "oh-vue-icons";
// import { BiCloudDrizzleFill, BiApple, FaFlag, RiZhihuFill, CoLinkedinIn, CoFacebookF } from "oh-vue-icons/icons";
// import { BiApple } from "oh-vue-icons/icons";

// addIcons(FaFlag, BiCloudDrizzleFill, RiZhihuFill, BiApple, CoLinkedinIn, CoFacebookF);

// Wasnt using
// import 'primevue/resources/themes/aura-light-green/theme.css'
// import Lara from '@/presets/lara';      //import preset

// createApp(App).use(router).mount('#app')
const app = createApp(App);
app.use(router);
// Was using
// app.use(PrimeVue); 
// app.component("v-icon", OhVueIcon);


// app.use(PrimeVue, {
//     unstyled: true,
        // pt: Lara                        //apply preset
// });
app.mount('#app');

