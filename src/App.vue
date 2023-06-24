<template>
  <div>
    5555555555555555555555

    <Router-view></Router-view>
  </div>
</template>
<script setup lang="ts">
// import svgIcon from '@/components/SvgIcon/index.vue';

console.log(import.meta.env)

import request from '@/utils/request'
import { onMounted } from 'vue'

onMounted(() => {
  request({
    url: '/user/login', //请求地址
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  })
})
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $base-color;
  }
}
</style>
