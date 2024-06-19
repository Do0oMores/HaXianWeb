<template>
    <el-main>
        <div class="shoppingcart">
            <div class="aproduct" v-for="product in products" :key="product.productName">
                <!-- <img :src="product.productName" /> -->
                <p>{{ product.productName }}</p>
                <p class="price">单价：${{ product.unitPrice }}</p>
                <p class="total-price">总价：${{ product.totalPrice }}</p>
            </div>
        </div>
    </el-main>
</template>
<script>
import { ElMessage } from 'element-plus';

export default {
    data() {
        return {
            products: []
        };
    },
    methods:{

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
</style>