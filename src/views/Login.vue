<template>
  <div class="loginWrapper">
    <div class="loginCard">
      <el-card class="box-card">
        <el-form :model="loginForm" status-icon ref="loginForm">
          <el-form-item prop="userName">
            <el-input type="text" v-model="loginForm.userName" autocomplete="off">
              <i slot="prefix" class="el-icon-user-solid el-input__icon" />
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" autocomplete="off">
              <i slot="prefix" class="el-icon-lock el-input__icon" />
              <i slot="suffix" class="el-icon-eye el-input__icon" />
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="loginBtns">
              <el-button type="primary">登 录</el-button>
              <el-button type="primary" plain>获取体验账号</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  private loginForm = {
    userName: '',
    password: ''
  }
}
</script>
<style lang="less" scoped>
.loginWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .loginCard {
    width: 320px;
    .loginBtns {
      display: flex;
      /deep/ .el-button {
        flex: 1;
      }
    }
  }
}
</style>
