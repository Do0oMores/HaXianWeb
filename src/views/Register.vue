<template>
    <div class="login-warp">
		<el-form class="login-container">
			<h1 class="title">用户注册</h1>
			<el-form-item label="">
				<el-input type="text" v-model="username" placeholder="登录账号" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="">
				<el-input type="password" v-model="password_1" placeholder="登录密码" autocomplete="off"></el-input>
			</el-form-item>
            <el-form-item label="">
				<el-input type="password" v-model="password_2" placeholder="确认密码" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="width:100%;" @click="fetchData()">
					注册
				</el-button>
			</el-form-item>
			<el-row style="text-align: center;margin-top:-10px">
				<el-link type="primary" @click="gotoLogin()">返回登录</el-link>
			</el-row>
		</el-form>
	</div>
</template>

<script lang="ts">
 	import axios from 'axios'
	import { ElMessage } from 'element-plus'
  	// import qs from 'qs'
	export default {
		name: 'Login',
		data() {
            return {
                username: '',
                password_1: '',
				password_2: ''
            }
        },
		//页面跳转
		methods:{
			gotoLogin(){
				this.$router.push('/login');
			},
			fetchData() {
				// 去除所有空格
				this.username = this.username.split(/[\t\r\f\n\s]*/g).join('');
				this.password_1 = this.password_1.split(/[\t\r\f\n\s]*/g).join('');
				this.password_2 = this.password_2.split(/[\t\r\f\n\s]*/g).join('');

				// 判断是否为空
				if (this.password_1 != "" && this.password_2 != "" && this.username != "") {
					if (this.password_1 == this.password_2) {
						axios.get('/api/register?username=' + this.username + '&password=' + this.password_1).then(response => {
							console.log(response.data);
							if (response.data.code == 0) {
								ElMessage.success(response.data.msg);
								setTimeout(() => {
									this.$router.push('/login');
								}, 1000);
							} else {
								ElMessage.error(response.data.msg)
							}
						}).catch(error => {
							console.log(error);
						});
					} else {
						ElMessage.error("两次输入的密码不一致，请确认后重新输入");
					}
				} else {
					ElMessage.error("用户名与密码都不能为空");
				}
			}
		}
	}
</script>

<style scoped>
	.login-container {
		border-radius: 10px;
		margin: 0px auto;
		width: 350px;
		padding: 30px 35px 15px 35px;
		background: #fff;
		border: 1px solid #eaeaea;
		text-align: left;
		box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
	}

	.title {
		margin: 0px auto 40px auto;
		text-align: center;
		color: #505458;
	}
</style>