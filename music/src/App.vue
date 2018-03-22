<template>
  <div id="app">
  	<Music></Music>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  position:relative;
  top:0;
  left:0;
  height:100%;
  padding:0;
  margin:0;
  border:0;
  overflow:hidden;
}
html,body{margin:0;border:0;padding:0;height:100%;overflow:hidden;}
</style>
