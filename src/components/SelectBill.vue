<template>
    <div v-if="isSelected">
        <el-form class="select-div">
			<h1 class="title">查询指定用户本月账单</h1>
			<el-form-item label="">
				<el-input type="text" v-model="username" placeholder="预查询用户名" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="width:100%;" @click="fetchData()">
					查询
				</el-button>
			</el-form-item>
		</el-form>
    </div>
    <div v-if="!isSelected">
        <el-button type="primary" style="width:100%;" @click="back()">
            当前查询的用户是 [{{ username }}] 点击返回重新查询其他用户
        </el-button>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="BillID" label="BillID" width="180" />
            <el-table-column prop="BillDate" label="BillDate" width="180" />
            <el-table-column prop="Amount" label="Amount" />
            <el-table-column prop="BillType" label="BillType" />
        </el-table>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { ElMessage } from "element-plus";
export default {
    data: function() {
        return {
            isSelected: true,
            username: "",
            tableData:[]
        }
    },
    methods: {
        fetchData() {
            // 用户名中不能有空格
            this.username = this.username.split(/[\t\r\f\n\s]*/g).join('');
            // 判断用户名是否为空
            if (this.username != "") {
                axios.get('/api/current?username=' + this.username).then(response => {
					console.log(response.data);
					if (response.data.code == 0) {
						ElMessage.success(response.data.msg);
                        this.tableData = response.data.Data;
						setTimeout(() => {
							this.isSelected = false;
						}, 1000);
					} else {
						ElMessage.error(response.data.msg)
					}
				}).catch(error => {
					console.log(error);
				});
            } else {
                ElMessage.error("用户名不能为空");
            }
        },
        back() {
            this.isSelected = true
        }
    }
}
</script>

<style scoped>
    .select-div {
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