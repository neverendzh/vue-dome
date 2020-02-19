<template>
  <div id="login">
    <el-row :gutter="20">
      <el-col :span="8" :offset="7"
        ><div class="grid-content bg-purple">
          <el-form
            id="form"
            :rules="rules"
            ref="loginAcc"
            :model="loginAcc"
            label-width="80px"
          >
            <h2 class="tit">XXXXXXXXXXXXX后台管理</h2>
            <el-form-item prop="account" label="账号">
              <el-input v-model="loginAcc.account"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input v-model="loginAcc.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-row :gutter="20">
                <el-col :span="12"
                  ><div class="grid-content bg-purple">
                    <el-button
                      class="lobtn"
                      type="primary"
                      @click="submitForm('loginAcc')"
                      >登陆</el-button
                    >
                  </div></el-col
                >
                <el-col :span="12"
                  ><div class="grid-content bg-purple">
                    <el-button class="lobtn" @click="resetForm('loginAcc')"
                      >重置</el-button
                    >
                  </div></el-col
                >
              </el-row>
            </el-form-item>
          </el-form>
        </div></el-col
      >
    </el-row>
  </div>
</template>
<
<script>
import { valdate } from "../../utils/valdate.js";
import { login } from "../../api/login/login.js";
export default {
  name: "login",
  data() {
    return {
      // 登陆数据对象
      loginAcc: { account: "admin", password: "123" },
      // 检验规则
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 提交登陆
    submitForm(loginAcc) {
      this.$refs[loginAcc].validate(valid => {
        if (valid) {
          if (valdate(this.loginAcc.account)) {
            login({ pas: this.loginAcc })
              .then(response => {
                if (response.data.code == "200") {
                  console.log("登陆成功");
                  this.$router.push({
                    name: "console"
                  });
                } else {
                  this.$message({
                    showClose: true,
                    message: response.data.msg,
                    type: "error"
                  });
                }
              })
              .catch(error => {});
          } else {
            this.$message({
              showClose: true,
              message: "账号不能包含特殊字符",
              type: "error"
            });
            return false;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置清空
    resetForm(loginAcc) {
      this.$refs[loginAcc].resetFields();
    }
  },
  props: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
#login {
  background-color: #e7e7e7;
  height: 100vh;
}
#form {
  margin-top: 24vh;
}
.lobtn {
  display: block;
  width: 100%;
}
.tit {
  text-align: center;
  margin-left: 80px;
}
</style>
