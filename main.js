import Vue from 'vue';
import App from './App';
import './api/index';
import uView from 'uview-ui';
import './common/font/iconfont.css';

Vue.use(uView);

//本地测试数据
import Mock from './common/mock.js';
Vue.prototype.$mock = Mock;

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
	Mock,
    ...App
})
app.$mount()
