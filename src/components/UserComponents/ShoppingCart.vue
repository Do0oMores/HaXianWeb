<template>
    <el-main>
        <div class="shoppingcart">
            <div class="aproduct" v-for="product in products" :key="product.productName">
                <!-- <img :src="product.productName" /> -->
                <p>{{ product.productName }}</p>
                <p class="price">单价：${{ product.unitPrice }}</p>
                <p class="total-price">总价：${{ product.totalPrice }}</p>
                <div class="quantity-control">
                    <el-button @click="decreaseQuantity(product)" size="mini">-</el-button>
                    <span>{{ product.quantity }}</span>
                    <el-button @click="increaseQuantity(product)" size="mini">+</el-button>
                </div>
            </div>
        </div>
        <div class="total-cart-price">
            <p>购物车总价：${{ totalCartPrice }}</p>
        </div>
    </el-main>
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus';

export default {
    data() {
        return {
            products: [],
            totalCartPrice: 0,
            userId: null,
        };
    },
    created() {
        this.userId = this.getUserId();
        if (this.userId) {
            this.fetchData();
        } else {
            ElMessage.error('请先登录');
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('/api/show-shopping', {
                    params: {
                        userID: this.userId
                    }
                });
                if (response.data.code === 200) {
                    this.products = response.data.Data.items;
                    this.totalCartPrice=response.data.Data.totalCartPrice;
                    console.log(response.data.Data);
                } else {
                    ElMessage.error(response.data.msg);
                }
            } catch (error) {
                ElMessage.error('获取数据失败，请稍后再试');
            }
        },
        getUserId() {
            return sessionStorage.getItem('userID') || null;
        }
    }
}
</script>

<style>
.shoppingcart {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.aproduct {
    display: flex;
    align-items: center;
    background-color: #12a8c9;
    border: 1px solid #2d502d;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.aproduct p {
    margin: 10px 0;
}

.aproduct p:first-of-type {
    font-weight: bold;
    /* 商品名称加粗 */
}

.aproduct:hover {
    transform: translateY(-5px);
    /* 鼠标悬停时上移 */
}

.aproduct .price,
.aproduct .total-price {
    font-size: 1.2em;
    font-weight: bold;
    color: #e74c3c;
    margin: auto;
    /* 价格的颜色 */
}

.quantity-control {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.total-cart-price {
    margin-top: 20px;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
}
</style>