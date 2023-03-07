<template>
    <van-nav-bar
            title="标题"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
    >
        <!--        插槽-->
        <template #right>
            <van-icon name="search" size="18"/>
        </template>
    </van-nav-bar>
<!--    <slot name="content">-->
<!--        <div>这里是一个内容</div>-->
<!--    </slot>-->
    <div id="content">
        <template v-if="active  === 'index'" >
            <index/>
        </template>

        <template v-if="active === 'team'">
            <teams/>
        </template>
    </div>
    <!--    底部Tabbar标签栏-->
    <!--    通过name关键字 指定key-->
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
        <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
        <van-tabbar-item icon="friends-o" name="user">个人</van-tabbar-item>
        <van-tabbar-item icon="setting-o" name="ap">接口</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
    import { ref } from 'vue';
    import { showToast } from 'vant';
    import index from "../pages/index.vue";
    import Teams from "../pages/teams.vue";

    const onClickLeft = () => alert('左');
    const onClickRight = () => alert('右');

    //底部标签栏的  active onchange

    //设置index为默认高亮 active = index
    //vant3的toast 到vant4 由 toast 变成showToast  当前vant版本 ：  "vant": "^4.0.11",  from package.json
    const active = ref("index");
    const onChange = (index) => showToast(`标签 ${index}`);
</script>

<style scoped>

</style>