import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import * as types from '../actionTypes'

@Module({ name: 'Universal', namespaced: true, stateFactory: true })
export default class Universal extends VuexModule {
  // 左侧边栏是否收起
  isCollapse = false

  get isSiderCollapse() {
    return this.isCollapse
  }

  @Mutation
  [types.TOOGGLE_SIDER_COLLAPSE]() {
    this.isCollapse = !this.isCollapse
  }
}
