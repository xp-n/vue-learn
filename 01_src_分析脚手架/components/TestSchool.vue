<template>
    <div class="demo">
        <h2>名字：{{schoolName}}</h2>
        <h2>地址：{{address}}</h2>
        <button @click="showInfo">点我展示学校名字</button>
    </div>
</template>

<script>
    export default {
        name:'TestSchool',
        data() {
            return {
                schoolName:'atguigu',
                address:'beijing'
            }
        },
        methods: {
            showInfo() {
                alert(this.schoolName)
            }
        },

    }
</script>

<style>
    .demo {
        background-color: orange;
    }
</style>