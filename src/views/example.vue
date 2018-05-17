<template>
    <div>
        <h3>这是父组件</h3>
        <p style="margin: 20px 0;text-align: center;">
            <span>子组件传过来的值是 “{{childValue}}”</span>
        </p>
        <example-child v-bind:message="parentMsg" @getChildValue="getValue"></example-child>
    </div>
</template>

<script>
    import exampleChild from './examplechild.vue';
    export default {
        name: "example.vue",
        components: {
            exampleChild
        },
        data(){
            return {
                parentMsg:'hello',
                childValue:''
            }
        },
        mounted(){
        },
        methods: {
            getValue:function (val) {
                this.childValue = val;
            }
        }
    }
</script>

<style scoped>

</style>
