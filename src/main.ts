import {createApp} from 'vue'
import App from './App.vue'
// @ts-ignore :无法被执行的代码的错误打包时没有错误但是，显示有错误；
import  {Button , NavBar , Icon, Tabbar, TabbarItem} from 'vant';


//获取此App的对象
const app = createApp(App);
app.use(NavBar);
app.use(Button);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app')
