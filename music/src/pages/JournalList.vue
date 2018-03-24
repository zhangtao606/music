<template>
    <div>
    	<div v-wechat-title="$route.meta.title"></div>
    	<div>sssssssssss</div>
    </div>
</template>

<script type="ecmascript-6">
    export default {
	  name: 'JournalList',
	  data () {
	    return {
	      
	    }
	  },
	  created:function(){
	  	console.log(1)
	  	console.log(this.$route.query.id)
	  },
	  mounted:function(){
	  	console.log(2)
		console.log(this.$route.query.id)
	  },
	  methods: {

 	  }
	}
</script>

<style rel="stylesheet">
    
</style>