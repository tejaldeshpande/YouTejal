<template>

    <div id="app" class=" min-h-screen">
        <div class="p-6 md:p-10 max-w-screen-xl m-auto h-full w-full">
            <searchBar @termChange="onTermChange"></searchBar>
            <div class="md:flex">
                <videoDetail :currentVideoSelected="currentVideo"></videoDetail>
                <videoList :videos="videos" @onVideoChange="videoChangedParent"></videoList>
            </div>
        </div>
    </div>

</template>



<script>
import axios from 'axios';
import searchBar from './components/searchBar';
import videoList from './components/videoList';
import videoDetail from './components/videoDetail'
const API_KEY = 'AIzaSyDuR_XsA7I_dfzdWJxG6z_KRGFtrOZEd08';

export default {
    name: 'App',
    components: {
        searchBar,
        videoList,
        videoDetail
    },
    data: function() {
        return{
            videos: [],
            currentVideo: undefined
        }
    },
    mounted(){
        this.onTermChange('puppy')
    },
    methods:{
        onTermChange(searchTerm){
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params:{
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => {
                this.videos = response.data.items;
                this.currentVideo = this.videos[0];
                console.log(this.videos);
                this.$store.commit('setVideoPlaying', this.videos[0].etag);
            });
        },
        onTermChanged(){
            axios.get('vetageodata.json', {              
            }).then(response => {          
                this.videos = response.data;
                this.currentVideo = this.videos[0];
                console.log(response);
                this.$store.commit('setVideoPlaying', this.videos[0].etag);
            });
        },
        videoChangedParent(videoSelected){
            this.currentVideo = videoSelected;
        },
    },

};

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
#app{
    background: #fcfcfc;
}
</style>