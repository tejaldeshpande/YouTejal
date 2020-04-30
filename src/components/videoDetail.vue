<template>

    <div id="videoDetail" class="w-full mr-4" v-if="currentVideoSelected">
        <!-- <img class="w-64" :src="currentVideoSelected.img"/>
        <div>{{currentVideoSelected.name}}</div> -->
        <div class="mb-2 font-bold" v-html="currentVideoSelected.snippet.title"></div>
        <div class='embed-container'>
            <iframe :src="'https://www.youtube.com/embed/' + currentVideoSelected.id.videoId +'?playsinline=1'" frameborder='0' allowfullscreen></iframe>
            </div>
        <div class="my-4 " v-html="currentVideoSelected.snippet.description"></div>
    </div>       

</template>

<script>
export default {
    name:'videoDetail',
    data(){
        return{

        }
    },
    props:['currentVideoSelected']
    
}
</script>

<style scoped>
.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

</style>