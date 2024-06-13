<template>
  <div>
    <el-container style="height: 100vh;">
      <el-aside style="display: flex; flex-direction: column; height: 100vh; width: 200px;">
        <el-menu default-active="1" @select="handleSelect" style="flex: 1;" text-color="#fff"
          active-text-color="#ffd04b" background-color="#545c64">
          <h2 style="color: rgb(200, 235, 255); text-align: center; margin-bottom: 15px; margin-top: 10px;">
            HaXian</h2>
          <el-menu-item index="1">
            <el-icon>
              <Document />
            </el-icon>
            <span>选购</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>
              <Location />
            </el-icon>
            <span>生鲜商品管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <Setting />
            </el-icon>
            <span>订单管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><icon-menu /></el-icon>
            <span>更换套餐</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon>
              <Document />
            </el-icon>
            <span>办理退网</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon>
              <Setting />
            </el-icon>
            <span>用户充值</span>
          </el-menu-item>
          <el-menu-item index="7">
            <el-icon><icon-menu /></el-icon>
            <span>预约订单</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import global from '@/stores/global';
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    ArrowDown
} from '@element-plus/icons-vue'

export default {
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
    ArrowDown
  },
  data() {
    return {
      Username: global.username,
    }
  },
  methods: {
    handleSelect(key,keyPath) {
      // console.log(key, keyPath)
      if (key == "1") {
        this.$router.push('/user/commodity')
      } else if (key == "2") {
        this.$router.push('/admin/selectresidue')
      } else if (key == "3") {
        this.$router.push('/admin/printconsumptionorders')
      } else if (key == "4") {
        this.$router.push('/admin/changepackage')
      } else if (key == "5") {
        this.$router.push('/admin/leavenet')
      }
      else if (key == "6") {
        this.$router.push('/admin/userrecharge')
      } else if (key == "7") {
        this.$router.push('/admin/reservation')
      }
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
