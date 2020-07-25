import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Breadcrumb extends Vue {
  render() {
    return (
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to={{ path: '/' }}>首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    )
  }
}
