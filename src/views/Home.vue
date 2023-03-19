<template>
    <heads />
    <Sidebar />
    <div class="content-box">
        <div class="content">
            <router-view v-slot="{ Component, route }">
                <transition name="fade" mode="out-in">
                    <div :key="route.path">
                        <component :is="Component"></component>
                    </div>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script setup>
import heads from '../components/Header';
import Sidebar from '../components/Sidebar';
</script>

<style lang="scss" scoped>
.content-box {
    position: absolute;
    left: 200px;
    right: 0;
    top: 88px;
    bottom: 0;
    background: #f5f5f5;
}

.content {
    width: auto;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
}
</style>
