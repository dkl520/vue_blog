<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
           <Card >
        <p slot="title">
         <Icon type="log-in"></Icon>
           欢迎登陆
        </p>
        <div class=" form-con"> 
       <Form ref="loginform" :model="form" :rules="rules" >
        <FormItem  prop="username">
            <Input type="text" v-model="form.username" placeholder="请输入用户名">
                <span slot="prepend">
                   <Icon :size="16" type="person"></Icon>
                </span>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="请输入密码">
                 <span slot="prepend">
                  <Icon  :size="16" type="locked"></Icon>
                </span>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" shape="circle" long   @click="handleSubmit">登陆</Button>
        </FormItem>
    </Form>
               <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
    </Card>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      form: {
        username: "dkl520",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs["loginform"].validate(valid => {
        if (valid) {
          Cookies.set("user", this.username);
          Cookies.set("password", this.password);
          if (this.form.userName === "iview_admin") {
              Cookies.set("access",0);
          } else {
              Cookies.set("access",1);
          }
          this.$router.push({name:"/homeIndex"})
        }
      });
    }
  }
};
</script>
<style   lang="less">
@import "./login.less";
</style>


