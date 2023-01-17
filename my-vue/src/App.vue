<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              这是Logo
            </div>
          </el-col>
          <el-col :span="6" :offset="12">
            <div class="grid-content ep-bg-purple-light">
              这是头部导航选项等
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <SidebarMenu/>
        </el-aside>
        <el-container>
          <el-main>
<!--            <router-link to="/">Home</router-link> |-->
<!--            <router-link to="/about">About</router-link>-->
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts" >
import SidebarMenu from '@/components/SidebarMenu.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
