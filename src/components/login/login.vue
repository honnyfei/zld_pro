<template>
    <div>
        <h1>登录</h1>
        <button @click="tap()">确定</button>
    </div>
</template>

<script>
export default {
    name: "login",
    methods: {
        tap(){
            this.$router.push('/main')
        }   
    }
}
</script>

<style scoped>
 
</style>

