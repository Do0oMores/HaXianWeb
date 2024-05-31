<template>
	<div>
		<el-form class="change-package">
			<h1 class="title">办理退网</h1>
			<el-form-item label="">
				<el-input type="text" v-model="username" placeholder="用户名" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="width:100%;" @click="fetchData()">
					确认办理退网
				</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import axios from 'axios';
import { ElMessage } from "element-plus";
export default {
	data: function () {
		return {
			isSelected: true,
			username: "",
		}
	},
	methods: {
		fetchData() {
			// 用户名中不能有空格
			this.username = this.username.split(/[\t\r\f\n\s]*/g).join('');
			if (this.username != "") {
				axios.get('/api/cancel?username=' + this.username).then(response => {
					console.log(response.data);
					if (response.data.code == 0) {
						ElMessage.success(response.data.msg);
					} else {
						ElMessage.error(response.data.msg);
					}
				}).catch(error => {
					console.log(error);
				});
			} else {
				ElMessage.error("用户名不能为空");
			}
		}
	}
}
</script>

<style scoped>
.change-package {
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