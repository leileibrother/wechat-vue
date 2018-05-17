<template>
    <div>
        <p style="margin: 20px 0;text-align: center;">我是子组件，父组件穿传过来的值是{{message}}</p>
        <p style="margin: 20px 0;text-align: center;">
            <button @click="send">点击向父组件传值</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "exampleChild.vue",
        props:['message'],
        data(){
            return {

            }
        },
        mounted(){
        },
        methods: {
            send:function () {
                this.$emit('getChildValue','你好父组件！')
            }
        }
    }
</script>

<style scoped>

</style>