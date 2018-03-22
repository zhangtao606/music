import Mymusic from './Music.vue'
// 这里是重点
const Music = {
    install: function(Vue){
        Vue.component('Music',Mymusic)
    }
}

// 导出组件
export default Music