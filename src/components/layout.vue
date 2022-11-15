<template>
  <div id="header">
    <van-row justify="end">
      <van-col span="12">
        <van-tabs v-model:active="active">
          <van-tab title="标签 1"></van-tab>
          <van-tab title="标签 2"></van-tab>
          <van-tab title="标签 3"></van-tab>
          <van-tab title="标签 4"></van-tab>
        </van-tabs>
      </van-col>
    </van-row>
  </div>
  <div id="content">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
  <div id="footer">
    <van-row justify="center">吉ICP备11005377号-3 </van-row>
  </div>
</template>
<script setup>
import { ref } from "vue";
const active = ref(0);
</script>
