import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Element from 'element-ui'
import './assets/css/base.css'
import './assets/css/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css';
import VNSUI from 'vns-ui' // 引入组件库
import 'vns-ui/packages/theme-default/lib/index.css' // 引入样式库

Vue.use(VNSUI)

Vue.use(Element)
Element.Dialog.props.closeOnClickModal.default = false;

import store from './store/index.js'
import Debounce from './assets/js/utils.js'
Vue.component('Debounce',Debounce);

//自定义全局方法库
import PublicFun from './assets/js/exit_fun.js'
Vue.use(PublicFun)

//自定义过滤器
import filters from './assets/js/filters.js'
//过滤器统一处理加载
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]);
})
//国际化
// import { i18n } from './i18n/index'

//指令统一处理加载
import directives from './assets/js/directives.js'
Object.keys(directives).forEach(key => {
	Vue.directive(key, {
		bind: directives[key].bind,
		inserted: directives[key].inserted,
		update: directives[key].update,
		componentUpdated: directives[key].componentUpdated,
		unbind: directives[key].unbind,
	});
})

router.afterEach(transition => {
	LoadingBar.finish();
    console.log('查看tab名',sessionStorage.getItem('currentTabName'))
    if (window.location.hash === '#/login') {
        document.title = '积极安全防御分析工具'
        //防止退出登录重进时，标题闪一下
        sessionStorage.setItem('currentTabName', '积极安全防御分析工具')
    }
    else if (window.location.hash === '#/home/work_platform') {
        document.title = '工作台'
        sessionStorage.setItem('currentTabName', '积极安全防御分析工具')
    }
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	store,
	//i18n,
  render: h => h(App)
}).$mount('#app')

