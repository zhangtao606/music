<template>
    <div>
    	<div v-wechat-title="$route.meta.title"></div>
    	<div class="my-content"></div>
    	<Foot></Foot>
    </div>  
</template>

<script type="ecmascript-6">
import Foot from '../components/Footer'
    export default {
	  name: '',
	  data () {
	    return {
	      
	    }
	  },
	  components: { Foot },
	  methods: {

 	  }
	}
</script>

<style rel="stylesheet">
    .my-content{width:100%;position:absolute;top:0;left:0;bottom:40px;}
</style>