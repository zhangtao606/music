<template>
	<div class="music-box" :class="musicShow?'music-box-active':''">
		<div class="music-title">{{song.name}}</div>
   		<div class="music-paly">
   			<audio id="audio">
			  <source :src="song.src" type="audio/ogg">
			  <source :src="song.src" type="audio/mpeg">
			  <source :src="song.src" type="audio/mp3">
			  您的浏览器不支持 audio 元素。
			</audio>
   		</div>
   		<div class="play-btn-pre" @click="preBtn">
   			<i class="el-icon-arrow-up"></i>
   		</div>
   		<div class="play-btn" @click="play" :class="musicPlay?'music-play-active':''">
   			<i class="el-icon-service"></i>
   		</div>
   		<div class="play-btn-next" @click="nextBtn">
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
	    	// 当前播放列表的下标
	    	index:0,
	      	musicList:[
	      	{
	      		name:"爱情转移",
	      		src:"http://dl.stream.qqmusic.qq.com/C400003kCfyN2zp9AW.m4a?vkey=822935FCBC674ECFEE37F0331063A1A1CE1553BC008F1186291F8D5BD0C9F026159CE505C2B86842B1A9FF7B29F5F6A006751DACA129E296&guid=78583330&uin=0&fromtag=66"
	      	},
	      	{
	      		name:"Pacific Rim Uprising",
	      		src:"http://dl.stream.qqmusic.qq.com/C400003Pegq61qghYH.m4a?vkey=D3BDF769F8308AEF6A96AFC4F38BBC996C0F6EFF24A74BCDA5C9B2DBA8C8A6841BED2270216154AD0FB760131DD329CA91B2754EA818E302&guid=78583330&uin=0&fromtag=66"
	      	}
	      ],
	      song:{
	      	name:"爱情转移",
	      	src:"http://dl.stream.qqmusic.qq.com/C400003kCfyN2zp9AW.m4a?vkey=822935FCBC674ECFEE37F0331063A1A1CE1553BC008F1186291F8D5BD0C9F026159CE505C2B86842B1A9FF7B29F5F6A006751DACA129E296&guid=78583330&uin=0&fromtag=66"
	      }
	    }
	  },
	  watch:{
	  	musicPlay:function(){
	  		console.log(this.musicPlay)
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
	  		}
	  		this.musicPlay=!this.musicPlay;

	  	},
	  	nextBtn:function(){
	  		// 如果已经到最后一首了
	  		if (this.index+1==this.musicList.length) {
	  			this.index=0;
	  		}else{
	  			this.index++;
	  		}
	  		// this.musicPlay=!this.musicPlay;
	  		// 关闭上一首音乐播放
	  		// document.getElementById('audio').pause();
	  		// 替换音乐单子
	  		this.song=this.musicList[this.index];
	  		// 打开音乐播放器
	  		// document.getElementById('audio').play();
	  	},
	  	preBtn:function(){
	  		// 如果已经到了第一首

	  	}
 	  }
	}
</script>

<style rel="stylesheet">
    .music-box{width:40px;background:rgba(0,0,0,.6);z-index:99;color:white;border-radius:10px;transition:transform .2s linear;transform:translate(0,0);position:relative;top:35%;left:99%;}
    .music-box .play-btn-pre i,.music-box .play-btn-next i,.play-btn i{font-size:30px}
    .music-box .play-btn-pre,.music-box .play-btn-next,.play-btn{margin:10px 5px;}
    .music-btn{width:40px;height:40px;font-size:30px;position:absolute;bottom:0;left:-30px;animation:move 1s linear infinite;}
    .music-box-active{transform:translate(-36px,0)}
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