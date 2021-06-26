<template>
    <div>
        <router-view></router-view>
        <ServiceBar></ServiceBar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from './../components/NavFooter.vue';
import ServiceBar from './../components/ServiceBar.vue';
    export default {
        name: 'order',
        components:{
            NavFooter,
            ServiceBar
        },
        data(){
            return{
                tip:'',
                title:''
            }
        },
        mounted(){
            
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>

</style>