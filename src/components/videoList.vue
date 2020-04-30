<template>

<div id="videoList">
    <ul>
        <videoListItem @videoChange="onVideoChange" v-for="video in videos" :video="video" :key="video.etag"></videoListItem>
    </ul>
</div>

</template>

<script>
import videoListItem from './videoListItem';

export default {
    name: 'videoList',
    components: {
        videoListItem
    },
    props: ['videos'],
    methods:{
        onVideoChange(videoSelected){
            this.$emit('onVideoChange', videoSelected);
        }
    }

}

</script>

<style>
#videoList{
    margin-top:30px;
}

</style>