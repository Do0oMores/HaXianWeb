<template>
  <div class="container">
    <ul class="index-ul">
      <li>
        <h2 class="TopTitle" @click="Renovate">HaXian</h2>
      </li>
      <li class="TopTitleK">
        欢迎，<span>{{ Username }}</span>
      </li>
      <li class="TopTitleK">购物车</li>
      <li>
        <div class="Support" @click="showSupport">支持</div>
      </li>
    </ul>
    </div>

    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.alt" />
          <p>{{ product.name }}</p>
      </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      Username: '用户',
      products: [
        { id: 1,  image: 'https://img.picui.cn/free/2024/06/12/6668f6551c813.jpg', alt: 'Product 1', name: '海南荔枝' },
      ]
    }
  },
  methods: {
    Renovate() {
      // Implement the Renovate functionality
    },
    showSupport() {
      // Implement the showSupport functionality
    }
  }
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-image: url("../pic/UserIndexBackgroundImage/index2.jpg");
  background-size: cover;
}

.container {
  width: 100%;
  background-color: #1a1919;
  padding: 10px 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.index-ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.TopTitle {
  margin: 0;
  font-size: 1.5em;
  color: aqua;
  cursor: pointer;
}

.TopTitleK {
  margin-left: 20px;
  font-size: 1.2em;
}

.Support {
  margin-left: 20px;
  cursor: pointer;
}

.Support:hover {
  color: #00f7ff;
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
  width: 200px;
  height: auto;
  margin: 10px;
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
