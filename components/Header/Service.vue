<template>
  <p class="font-medium text-btn" @click="handleLink">
    <img src="~/assets/images/header/enterprise2x.png" alt="">
    企服市场
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'
import { ElMessage } from 'element-plus'
// const userData = inject('userData')
const current = ref('')
const router = useRouter()

const userStore = useUserStore()

const userData = computed(() => userStore.userData )
// function handleLink() {
//     if (!userData.value.userMobile) {
//         ElMessage.error('请完善手机号码！')
//         setTimeout(() => {
//             location.href = import.meta.env.VITE_ENT_HOST + '/userCenter/accountInfo'
//         }, 1000);
//         return
//     }
// //   router.push({ name: 'entService' })
//     location.href = import.meta.env.VITE_ENT_HOST + '/entService/market'
// }
</script>

<style scoped>
.service-container {
  display: flex;
  height: 464px;
}
.service-container .category-container {
  width: 393px;
  height: 464px;
  background: linear-gradient(180deg, #F1F3F6 0%, rgba(241, 243, 246, 0.99) 56%, rgba(241, 243, 246, 0.82) 100%);
  display: flex;
  flex-direction: row-reverse;
}
.service-container .category-container .category-list {
  width: 200px;
}
.service-container .category-container .category-list > div {
  height: 54px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}
.service-container .category-container .category-list > div.current {
  background-color: #fff;
  color: #0052D9;
  justify-content: space-between;
}
.service-container .children {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 32px;
  overflow-y: auto;
}
.service-container .children .child-item {
  width: 240px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 20px;
  margin-right: 20px;
  background: #fff;
  padding: 16px;
  border: 1px solid #DCDCDC;
}
.service-container .children .child-item:nth-child(3n) {
  margin-right: 0;
}
.service-container .children .child-item .label {
  font-size: 15px;
  margin-bottom: 10px;
}
.service-container .children .child-item .desc {
  color: #666;
}
.service-container .children .child-item .price {
  font-size: 14px;
  text-align: left;
  color: #FD582A;
}

/*# sourceMappingURL=index.css.map */

</style>
<style>
.service-poppover {
  padding: 0px !important;
}
</style>
