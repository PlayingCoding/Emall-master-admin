<template>
  <el-container>
    <el-aside style="width: 'auto'">
      <SiderMenu />
    </el-aside>
    <el-container>
      <el-header height="46px" class="header">
        <GlobalHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SiderMenu from '../components/SiderMenu/index'
import GlobalHeader from '../components/GlobalHeader/index'

@Component({
  components: {
    SiderMenu,
    GlobalHeader
  }
})
export default class BasicLayout extends Vue {}
</script>
<style lang="less" scoped>
.header {
  padding: 0;
}
</style>
