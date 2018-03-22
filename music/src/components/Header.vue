<template>
    <el-header>
    	<div class="head-logo">
    		<img src="../assets/img/logo.png">
    	</div>
    	<div class="head-title">我的小屋</div>
    	<div class="head-set"></div>
    </el-header>
</template>

<script type="ecmascript-6">
    export default {
	  name: 'Header',
	  data () {
	    return {
	      
	    }
	  }
	}
</script>

<style rel="stylesheet">
  .el-header{
  	width:100%;
    height:40px !important;
    position:absolute;
    top:0;
    left:0;
    display:flex;justify-content:space-between;align-items:center;padding:0;
    box-shadow:0 -4px 10px 10px #f2f2f2;
  }
  .el-header .head-logo,.el-header .head-set{width:100px}
  img{width:100px;height:20px}

</style>