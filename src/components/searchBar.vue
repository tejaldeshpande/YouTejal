<template>

    <div class="searchBar">
        <div class="flex items-center  justify-start mb-2">
            <img class="w-10 mr-2" src="../assets/youtube.svg" alt="youtube logo">
            <h1 class="font-bold text-md md:text-lg">YouTejal</h1> 
        </div>
       <div>
            <!-- <label>Search</label> -->
            <input @input="onInput" v-model="textInput" placeholder="Search" class=" w-full border-gray-500 border mt-4 mb-8 p-1"/>
       </div>
    </div>

</template>

<script>
export default {
    name: 'searchBar',
    data() {
        return{
            textInput:""
        }
    },
    methods:{
        onInput(){
            this.$emit('termChange', this.textInput);
        }
    }
}

</script>

<style>

</style>