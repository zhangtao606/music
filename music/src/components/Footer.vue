<template>
    <el-row class="footer-bg">
  		<el-col class="footer-box" :span="8"><router-link to="/"><div class="grid-content"><i class="iconfont icon-shouye"></i></div></router-link></el-col>
  		<el-col  class="footer-box" :span="8"><router-link to="/list"><div class="grid-content"><i class="iconfont icon-icon-"></i></div></router-link></el-col>
  		<el-col  class="footer-box" :span="8"><router-link to="/my"><div class="grid-content"><i class="iconfont icon-gerenzhongxin"></i></div></router-link></el-col>
  	</el-row>
</template>

<script type="ecmascript-6">
    export default {
	  name: 'Footer',
	  data () {
	    return {
	      
	    }
	  }
	}
</script>

<style rel="stylesheet">
 @import "../assets/css/iconfont.css";

  .footer-bg{
    width:100%;
    height:40px;
    position:absolute;
    bottom:0;
    left:0;
    box-shadow:0 0 10px 10px #f2f2f2;
    overflow:hidden;
  }
  .footer-box{
  	height:40px;
  	line-height:40px;
  }
  a{text-decoration:none;color:#2c3e50;}
  .router-link-exact-active{color:red;}
</style>