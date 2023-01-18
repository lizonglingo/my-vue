<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20" style='height: 100%' class="header-nav-row">
          <el-col :span="6" class="need-border header-nav-col-field">
            <div class="grid-content ep-bg-purple">这是Logo</div>
          </el-col>
          <el-col :span="6" :offset="12" class="need-border header-nav-col-field">
            <div class="grid-content ep-bg-purple-light need-border">
              这是头部导航选项等
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <SidebarMenu />
        </el-aside>
        <el-container>
          <el-main>
            <RouterView/>
          </el-main>
          <el-footer height="30">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from '@/components/SidebarMenu.vue'
</script>

<style scoped>


.header-nav-row {
  align-content: center;
}


.need-border {
  border: 2px solid coral;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
