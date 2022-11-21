<template>
  <div id="article">
    <div class="banner">
      <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" >
      </van-swipe-item>
    </van-swipe>
    </div>

    <div class="recommend">
      <div class="recommend_header">最新文章</div>
      <div class="recommend_content">
        <span class="recommend-list">
          <img src="" alt="" style="width: 270px; height: 180px;border-radius: 8px;object-fit: fill;">
          <div class="article_content">
            <h2>入门服务注册中心——consul</h2>
            <p>随着微服务理论发展的成熟，越来越多互联网公司采用微服务架构来支持业务发展。各个微服务之间都需要通过注册中心来实现自动化的注册和发现。而consul就是众多流行的注册中心之一，本文带你详细了解consul的基础知识、安装部署、服务注册、kv注册使用等内容。</p>
            <div class="info"> <van-tag type="success">标签</van-tag></div>
          </div>
        </span>
        <span class="recommend-list">
          <van-skeleton title avatar :row="3" />
        </span>
        <span class="recommend-list">
          <van-skeleton title avatar :row="3" />
        </span>
        <span class="recommend-list">
          <van-skeleton title avatar :row="3" />
        </span>
        <span class="recommend-list">
          <van-skeleton title avatar :row="3" />
        </span>
      </div>
    </div>
  </div>
  <div id="aside">
    <div class="recommend">
      <div class="recommend_header">推荐阅读</div>
      <div class="recommend_content">
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
      </div>
    </div>
    <div class="recommend">
      <div class="recommend_header">阅读排名</div>
      <div class="recommend_content">
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
      </div>
    </div>
    <div class="recommend">
      <div class="recommend_header">关于我</div>
      <div class="recommend_content">
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
      </div>
    </div>
    <div class="recommend">
      <div class="recommend_header">网址统计</div>
      <div class="recommend_content">
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
        <span class="recommend-hover">
          
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
const images = [
	"https://unpkg.com/@vant/assets/apple-1.jpeg",
	"https://unpkg.com/@vant/assets/apple-2.jpeg",
];
//  var goBack = document.querySelector('.goBack');
//     var nav = document.querySelector('nav');
//     window.addEventListener('scroll', function() {
//         if (window.pageYOffset >= nav.offsetTop) {
//             goBack.style.display = 'block';
//         } else {
//             goBack.style.display = 'none';
//         }
//     });
//     goBack.addEventListener('click', function() {
//         window.scroll(0, 0);
//     })
</script>
<style lang="scss" scoped>
#article {
	width: 900px;
	margin-right: 20px;
	display: inline-block;
	.banner {
		background-color: rgb(198, 198, 198);
		border-radius: 8px;
		margin-bottom: 20px;
		img {
			height: 500px;
			width: 100%;
		}
	}
}

#aside {
	display: inline-block;
	width: 280px;
}

.recommend {
	border-radius: 8px;
	background-color: $white;
	.recommend_header {
		padding: calc(20px - 2px) 20px;
		box-sizing: border-box;
		color: #409eff;
		font-size: 25px;
		border-bottom: 1px solid #dcdfe6;
	}
	.recommend_content {
		display: flex;
		flex-wrap: wrap;
		transition: all 0.5s;
		margin-bottom: 20px;
		.recommend-hover {
			width: 113px;
			height: 134px;
			border-radius: 8px;
			background-color: $white;
		}
		.recommend-list {
			width: 100%;
			height: 224px;
			border-radius: 8px;
			background-color: $white;
			border-bottom: 1px solid #dcdfe6;
			display: flex;
			padding: 10px;
			padding-left: 20px;
			margin-bottom: 10px;
		}
	}
}
</style>