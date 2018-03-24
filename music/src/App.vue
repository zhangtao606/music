<template>
  <div id="app">
  	<!-- <Music></Music> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 @import "/assets/css/iconfont.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  padding:0;
  margin:0;
  border:0;
  overflow:hidden;
}
html,body{margin:0;border:0;padding:0;width:100%;height:100%;overflow:hidden;}
</style>
