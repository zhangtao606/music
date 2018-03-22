<template>
	<div class="music-box" :class="musicShow?'music-box-active':''">
		<div class="music-title">{{song.name}}</div>
   		<div class="music-paly">
   			<audio id="audio" :src="song.src">
			</audio>
   		</div>
   		<div class="play-btn-pre">
   			<i class="el-icon-arrow-up"></i>
   		</div>
   		<div class="play-btn" @click="play" :class="musicPlay?'music-play-active':''">
   			<i class="el-icon-service"></i>
   		</div>
   		<div class="play-btn-next">
   			<i class="el-icon-arrow-down"></i>
   		</div>
   		<div class="music-btn" @click="showMusic" v-if="!musicShow">
   			<i class="el-icon-d-arrow-left"></i>
   		</div>
	</div>
    
</template>

<script type="ecmascript-6">
	export default {
	  name: 'Music',
	  data () {
	    return {
	    	musicShow:false,
	    	musicPlay:false,
	      	musicList:[
	      	{
	      		name:"爱情转移",
	      		src:"http://dl.stream.qqmusic.qq.com/C400003kCfyN2zp9AW.m4a?vkey=822935FCBC674ECFEE37F0331063A1A1CE1553BC008F1186291F8D5BD0C9F026159CE505C2B86842B1A9FF7B29F5F6A006751DACA129E296&guid=78583330&uin=0&fromtag=66"
	      	}
	      ],
	      song:{
	      	name:"爱情转移",
	      	src:"http://dl.stream.qqmusic.qq.com/C400003kCfyN2zp9AW.m4a?vkey=822935FCBC674ECFEE37F0331063A1A1CE1553BC008F1186291F8D5BD0C9F026159CE505C2B86842B1A9FF7B29F5F6A006751DACA129E296&guid=78583330&uin=0&fromtag=66"
	      }
	    }
	  },
	  methods: {
	  	showMusic:function(){
	  		// 弹开播放器
	  		var _this=this;
	  		this.musicShow=true;
	  		setTimeout(function(){
	  			_this.musicShow=false
	  		},10000)
	  	},
	  	play:function(){
	  		if (this.musicPlay) {
				document.getElementById('audio').pause();
	  		}else{
	  			document.getElementById('audio').play();
		  		document.getElementById('audio').onended=function(){
		  			this.musicPlay=!this.musicPlay;
		  		};
	  		}
	  		this.musicPlay=!this.musicPlay;

	  	}
 	  }
	}
</script>

<style rel="stylesheet">
    .music-box{width:40px;background:rgba(0,0,0,.6);z-index:99;color:white;position:absolute;right:-36px;top:30%;border-radius:10px;transition:right .2s linear;}
    .music-box .play-btn-pre i,.music-box .play-btn-next i,.play-btn i{font-size:30px}
    .music-box .play-btn-pre,.music-box .play-btn-next,.play-btn{margin:10px 5px;}
    .music-btn{width:40px;height:40px;font-size:40px;position:absolute;bottom:0;left:-30px;animation:move 1s linear infinite;}
    .music-box-active{right:0;}
    .music-play-active{animation:move1 1s linear infinite;}
    @keyframes move{
	    0%   {left:-30px;}
	    25%  {left:-35px;}
	    50%  {left:-30px;}
	    75%  {left:-25px;}
	    100% {left:-30px;}
	}
	@keyframes move1{
	    0%   {transform:rotateZ(0);}
	    100% {transform: rotateZ(360deg);}
	}
</style>