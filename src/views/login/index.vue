<template>
    <div>5555555555555555555555
      <el-button type="primary" size="default" :icon="Plus"  circle>AAA</el-button>
      <el-button type="primary" size="default" :icon="Edit"  circle>AAA</el-button>
    <el-button type="success" size="small" :icon="Check" circle >BBB</el-button>
    <el-button type="success" size="small" :icon="Message" circle >BBB</el-button>
    <el-button type="info" :icon="Message" circle >CCC</el-button>

    <!-- <HelloWorld msg="Vite + Vue" /> -->
      <!-- <svg >
        <use xlink:href="#icon-phone" fill="red"></use>
      </svg> -->
      <svg-icon name="phone" color="red" ></svg-icon>
      <h1>SCSS</h1>
    </div>
  </template>
  <script setup lang="ts">
  import {Plus} from '@element-plus/icons-vue';
  import {Edit} from '@element-plus/icons-vue';
  import {Check} from '@element-plus/icons-vue';
  import {Message} from '@element-plus/icons-vue';
  
  // import svgIcon from '@/components/SvgIcon/index.vue';
  
  console.log(import.meta.env)
  
  import request from '@/utils/request';
  import {onMounted} from 'vue';
  
  onMounted(()=>{
    request({
      url:'/user/login', //请求地址
      method: 'post', 
      data: {
          username:'admin',
          password:'111111'
      }
  })
  })
  </script>