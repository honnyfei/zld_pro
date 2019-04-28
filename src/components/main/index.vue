<template>
    <div class="out">
        <section>
            <router-view></router-view>
        </section>
        <footer>
            <router-link to="/proinfo" tag="span">工程信息</router-link>
            <router-link to="/workbench" tag="span">工作台</router-link>
            <router-link to="/mine" tag="span">我的</router-link>
        </footer>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style lang="scss" scoped="" type="text/css">
    .router-link-active{
        color: #fff;
    }
    .out{
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    section{
        flex: 1;
    }
    footer{
        height: 45px;
        border-top: 1px solid #ccc;
        text-align: center;
        line-height: 50px;
            span{
                float: left;
                width: 33.3%;
            }
    }
</style>
