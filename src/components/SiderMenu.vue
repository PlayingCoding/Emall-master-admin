<template>
  <el-menu>
    <div v-for="menuData in menuDatas" :key="menuData.path">
      <el-menu-item v-if="!Array.isArray(menuData.children) || !menuData.children.length" index="1">
        <i v-if="menuData.icon" :class="`el-icon-s-${menuData.icon}`" />
        <span>{{menuData.title}}</span>
      </el-menu-item>
      <el-submenu v-else :index="menuData.path">
        <template slot="title">
          <i v-if="menuData.icon" :class="`el-icon-s-${menuData.icon}`" />
          <span>{{menuData.title}}</span>
        </template>
        <el-menu-item
          v-for="subData in menuData.children"
          :key="subData.path"
          :index="subData.path"
        >{{subData.title}}</el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import getMenuDatas, { IMenuData } from '../config/menuConfig'

console.log(getMenuDatas())

@Component
export default class SiderMenu extends Vue {
  private menuDatas = getMenuDatas()
}
</script>
