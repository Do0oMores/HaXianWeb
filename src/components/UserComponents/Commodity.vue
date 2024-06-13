<template>
  <el-main>
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.alt" />
        <p>{{ product.name }}</p>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, image: 'https://img.picui.cn/free/2024/06/12/6668f6551c813.jpg', alt: 'Product 1', name: '海南荔枝' },
      ]
    }
  }
}
</script>

<style>
.el-main {
  padding: auto
}

.products {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.product {
  width: 200px;
  margin: 25px;
  padding: 10px;
  background-color: #333;
  color: #fff;
  text-align: center;
  position: relative;
}

.product img {
  width: 100%;
  height: auto;
  display: block;
  margin: 10px 0;
}

.product p {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
}

.product:hover p {
  transform: translateY(0);
}
</style>