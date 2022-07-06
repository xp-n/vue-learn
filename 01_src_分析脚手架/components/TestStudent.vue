<template>
    <div class="demo">
        <h2>名字：{{name}}</h2>
        <h2>地址：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:'TestStudent',
        data() {
            return {
                name:'张三',
                age:17
            }
        },
    }
</script>
