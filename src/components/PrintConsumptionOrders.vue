<template>
    <div>
        <el-form class="select-div">
            <h1 class="title">打印消费详单(所有用户的消费记录)</h1>
			<el-form-item>
				<el-button type="primary" style="width:100%;" @click="fetchData()">
					查询/更新
				</el-button>
			</el-form-item>
		</el-form>
    </div>
    <div>
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
            tableData:[]
        }
    },
    methods: {
        fetchData() {
            axios.get('/api/details').then(response => {
				console.log(response.data);
				if (response.data.code == 0) {
					this.tableData = response.data.Data;
                    console.log(this.tableData);
				} else {
					ElMessage.error(response.data.msg)
				}
			}).catch()
        }
    }
}
</script>

<style scoped>
    .select-div {
        border-radius: 10px;
		margin: 0px auto;
		width: 370px;
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