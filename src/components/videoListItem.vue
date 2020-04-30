<template>
    <div class="videoListItem">
    
        <li>
    
            <div :class="{ 'active' : $store.state.videoPlayingID == video.etag}" @click="clickedVideo(video)">
            <div class="p-2 border flex items-center cursor-pointer md:max-w-xs lg:max-w-sm" :title="video.snippet.title">
                <img class="w-1/4 md:w-1/3 thumbnail" :src="video.snippet.thumbnails.default.url" />
                <span class="text-sm m-3 w-2/3 title font-semibold overflow-hidden md:text-xs lg:text-sm" v-html="video.snippet.title" ></span>
                <!-- <img class="w-20" :src="video.img" />
                <span class="text-sm m-3">{{ video.name | truncate(30, '...') }}</span> -->
            </div>
            </div>
        </li>

    </div>  
</template>

<script>
export default {
    name: 'videoListItem',
    props: ['video'],
    methods:{
        clickedVideo(video){
            this.$emit('videoChange', video);
            this.$store.commit('setVideoPlaying', video.etag);   
            if(window.innerWidth <= 768) {
                var videoPlayer = document.getElementById("videoDetail");
                videoPlayer.scrollIntoView();    
            }
                 
        }
    },
    computed: {
        truncate: function () {
            var text = this.video.snippet.title;
            // if (text.length > 30) {
            //     return text.substring(0, 30) + '...';
            // } else {
                return text;
            //}
        },
    }
}
</script>

<style scoped>

.videoListItem{
    
}
.active{
    opacity: 0.7;
    background: #9e9e9e;
}
.title{
  text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
   -webkit-box-orient: vertical;
}

.thumbnail{
}

</style>