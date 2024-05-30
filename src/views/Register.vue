<template>
	<div class="container">
	  <div class="register-wrapper">
		<div class="header">注册您的新账号</div>
		<div class="form-wrapper">
		  <form @submit.prevent="fetchData">
			<input type="text" v-model="username" placeholder="用户名" class="input-item">
			<input type="text" v-model="registerPhoneNumber" placeholder="账号" class="input-item">
			<input type="password" v-model="password_1" placeholder="密码" class="input-item">
			<input type="password" v-model="password_2" placeholder="密码" class="input-item">
			<input type="text" v-model="phone" placeholder="电话号码" class="input-item">
			<button class="btn" type="submit">注册</button>
		  </form>
		</div>
		<div class="msg">
		  <a href="UserLogin.jsp">点此返回登录</a>
		</div>
	  </div>
	</div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { ElMessage } from 'element-plus';
  
  export default {
	name: 'Register',
	setup() {
	  const username = ref('');
	  const password_1 = ref('');
	  const password_2 = ref('');
	  const registerPhoneNumber = ref('');
	  const phone = ref('');
	  const router = useRouter();
  
	  const gotoLogin = () => {
		router.push('/login');
	  };
  
	  const fetchData = () => {
		// 去除所有空格
		username.value = username.value.replace(/[\t\r\f\n\s]*/g, '');
		password_1.value = password_1.value.replace(/[\t\r\f\n\s]*/g, '');
		password_2.value = password_2.value.replace(/[\t\r\f\n\s]*/g, '');
  
		// 判断是否为空
		if (username.value && password_1.value && password_2.value) {
		  if (password_1.value === password_2.value) {
			axios
			  .get(`/api/register?username=${username.value}&password=${password_1.value}`)
			  .then((response) => {
				console.log(response.data);
				if (response.data.code === 0) {
				  ElMessage.success(response.data.msg);
				  setTimeout(() => {
					router.push('/login');
				  }, 1000);
				} else {
				  ElMessage.error(response.data.msg);
				}
			  })
			  .catch((error) => {
				console.log(error);
			  });
		  } else {
			ElMessage.error('两次输入的密码不一致，请确认后重新输入');
		  }
		} else {
		  ElMessage.error('用户名与密码都不能为空');
		}
	  };
  
	  return {
		username,
		password_1,
		password_2,
		registerPhoneNumber,
		phone,
		gotoLogin,
		fetchData,
	  };
	},
  };
  </script>
  
  <style scoped>
  * {
	margin: 0;
	padding: 0;
  }
  
  html {
	height: 100%;
  }
  
  body {
	height: 100%;
  }
  
  .container {
	background: url("../pic/register.png");
	background-size: cover;
	width: 100%;
	height: 100%;
  }
  
  .register-wrapper {
	background-color: rgba(255, 255, 255, 0.4);
	box-shadow: 0 5px 15px rgba(20, 20, 20, 0.8);
	width: 358px;
	height: 588px;
	border-radius: 15px;
	padding: 0 50px;
	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	backdrop-filter: blur(3px);
  }
  
  .header {
	font-size: 38px;
	font-weight: bold;
	text-align: center;
	line-height: 200px;
  }
  
  .input-item {
	display: block;
	width: 100%;
	margin-bottom: 20px;
	border: 0;
	padding: 10px;
	border-bottom: 1px solid rgb(128, 125, 125);
	font-size: 15px;
	outline: none;
  }
  
  .input-item::placeholder {
	text-transform: uppercase;
  }
  
  .btn {
	text-align: center;
	padding: 10px;
	width: 105%;
	margin-top: 40px;
	background-image: linear-gradient(to right, #a6c1ee, rgb(57, 99, 145));
	color: #fff;
  }
  
  .btn:hover {
	background-image: linear-gradient(to left, #a6c1ee, rgb(57, 99, 145));
  }
  
  .msg {
	text-align: center;
	line-height: 88px;
  }
  
  a {
	text-decoration-line: none;
	color: #3c5892;
  }
  </style>
  