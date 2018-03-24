<template v-cloak>
    <div>
    	<div v-wechat-title="$route.meta.title"></div>
    	<div class="list-content">
    		<div class="list-box" v-for="items in lists">
    			<div class="list-title">
    				<div class="list-name"><i class="iconfont" :class="[items.font]"></i>{{items.title}}</div>
    				<div class="list-add"><i class="el-icon-zoom-in"></i>添加</div>
    			</div>
    			<div class="list-item">
    				<el-row :gutter="10">  				
					  <el-col :span="6" v-for="(item,index) in items.list" :key='index'>
					  	<router-link :to="{ path: '/journalList',query:{id:1}}"><div class="grid-content bg-purple-dark">{{item.title}}</div></router-link>
					  </el-col>
					</el-row>
    			</div>
    		</div>
    		<el-button class="list-btn" type="primary"><i class="el-icon-plus"></i>添加分类</el-button>
    	</div>
    	<Foot></Foot>
    </div>  
</template>

<script type="ecmascript-6">
import Foot from '../components/Footer'
    export default {
	  name: '',
	  data () {
	    return {
	      lists:[{
	      	title:"图片",
	      	src:'',
	      	font:'icon-tupian',
	      	list:[
	      		{title:"风景",src:''},
	      		{title:"人物",src:''},
	      		{title:"动物",src:''},
	      		{title:"电器",src:''}
	      	]
	      },{
	      	title:"音乐",
	      	src:'',
	      	font:'icon-yinle-yuanshijituantubiao',
	      	list:[
	      		{title:"悲伤",src:''},
	      		{title:"英文",src:''},
	      		{title:"中文",src:''},
	      		{title:"流行",src:''},
	      		{title:"古典",src:''}
	      	]
	      },{
	      	title:"日志",
	      	src:'',
	      	font:'icon-rizhi',
	      	list:[
	      		{title:"私密",src:''},
	      		{title:"工作",src:''},
	      		{title:"朋友",src:''},
	      		{title:"亲人",src:''},
	      		{title:"爱人",src:''}
	      	]
	      },{
	      	title:"技术",
	      	src:'',
	      	font:'icon-jishu',
	      	list:[
	      		{title:"php",src:''},
	      		{title:"C++",src:''},
	      		{title:"app",src:''},
	      		{title:"web",src:''},
	      		{title:"vue",src:''}
	      	]
	      }]
	    }
	  },
	  components: { Foot },
	  methods: {

 	  }
	}
</script>

<style rel="stylesheet">
    .list-content{width:100%;position:absolute;top:0;left:0;bottom:40px;overflow:scroll;}
    .list-box{width:auto;padding:10px;background-color:#f2f2f2;border-radius:10px;margin:10px}
    .list-title{width:auto;height:40px;border-radius:10px;color:white;display:flex;justify-content:space-between;align-items:center;}
    .list-title .list-name{font-size:16px;text-align:center;line-height:20px;color:#1a1a1a;}
    .list-title .list-add{font-size:12px;width:50px;height:20px;border-radius:5px;background:#e5e5e5;text-align:center;line-height:20px;color:#1a1a1a;}
    .list-item .grid-content{height:30px;line-height:30px;background-color:#bbdbab;border-radius:5px;}
    .list-item .el-col{margin:5px 0;}
    .list-btn{margin-bottom:10px}
</style>