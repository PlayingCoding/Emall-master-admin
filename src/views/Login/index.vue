<template>
  <div class="login-wrapper">
    <div class="login-card">
      <el-card class="box-card">
        <el-form :model="loginForm" status-icon ref="loginForm">
          <el-form-item prop="userName">
            <el-input type="text" v-model="loginForm.userName" autocomplete="off" placeholder="请输入账号">
              <i slot="prefix" class="el-icon-user-solid el-input__icon" />
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="请输入密码">
              <i slot="prefix" class="el-icon-lock el-input__icon" />
              <i
                slot="suffix"
                class="iconfont password-eye"
                :class="`icon-eye-${isEyeOff ? 'off' : 'on'}`"
                @click="togglePassword"
              />
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="login-btns">
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
import { ILoginForm } from './types'

@Component
export default class Login extends Vue {
  private loginForm: ILoginForm = {
    userName: '',
    password: ''
  }

  private isEyeOff = true

  private togglePassword() {
    this.isEyeOff = !this.isEyeOff
  }
}
</script>
<style lang="less" scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .login-card {
    width: 320px;
    .login-btns {
      display: flex;
      /deep/ .el-button {
        flex: 1;
      }
    }
    .password-eye {
      cursor: pointer;
      &.icon-eye-on {
        color: #409eff;
      }
    }
  }
}
</style>
