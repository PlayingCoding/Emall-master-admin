<template>
  <el-container>
    <el-aside width="200px">
      <SiderMenu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SiderMenu from '../components/SiderMenu.vue'

@Component({
  components: {
    SiderMenu
  }
})
export default class BasicLayout extends Vue {}
</script>
