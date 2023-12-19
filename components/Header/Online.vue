<template>
    <el-popover v-if="isReady" placement="bottom" :width="316" trigger="hover" popper-class="user-poppover" ref="3">
        <div class="user-poppover-container">
            <div class="top">
                <p class="font-bold">在线用户：
                    {{ userList.filter(item => {
                        return item.onlineStatus
                    }).length }}
                </p>
                <p v-if="checkAuth('ACCOUNT_MANAGE_TEAM_MANAGER_PER')" style="cursor: pointer;" @click="toUrl">组织管理</p>
            </div>
            <div class="list">
                <div v-for="(user) in userList.filter(item => {
                    return item.onlineStatus
                })" :key="user.staffId" class="item">
                    <div class="item-top font-medium">
                        <p>{{ user.staffName }}</p>
                        <p>上线：{{ dayjs(user.loginTime).format('MM/DD HH:mm') }}</p>
                    </div>
                    <div class="item-bottom">
                        <p>产品部/产品总监</p>
                        <p>电话：{{ user.userMobile }}</p>
                    </div>
                </div>
            </div>
        </div>
        <template #reference>
            <p class="font-medium text-btn">
                <img src="~/assets/images/header/team2x.png" alt="">
                团队管理 <span style="color: #0052D9;margin-left: 5px;">
                    {{ userList.filter(item => {
                        return item.onlineStatus
                    }).length }}/{{ userList.length }}
                </span>
            </p>
        </template>

    </el-popover>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
// import useOnlineUser from '~/hooks/useOnlineUser'
// import useCheckAuth from '~/api/useCheckAuth'
import dayjs from 'dayjs'
// const { userList } = useOnlineUser()

const router = useRouter()
// const { checkAuth } = useCheckAuth()
const isReady = ref(false)
onMounted(() => {
    isReady.value = true
})
const toUrl = () => {
    location.href = import.meta.env.VITE_ENT_HOST + '/userCenter/myTeam'
}
</script>

<style scoped>
.user-poppover-container .top {
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-bottom: 1px solid #E8ECF3;
}

.user-poppover-container .top p:first-child {
    font-size: 16px;
    font-weight: 600;
    color: #2b303d;
    line-height: 22px
}

.user-poppover-container .top p:last-child {
    color: #0052d9;
    font-size: 14px
}

.user-poppover-container .list {
    padding: 0 24px;
}

.user-poppover-container .list .item {
    line-height: 24px;
    margin: 16px 0;
}

.user-poppover-container .list .item .item-top {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #2B303D;
}

.user-poppover-container .list .item .item-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: rgba(43, 48, 61, 0.6);
}

/*# sourceMappingURL=index.css.map */
</style>
<style>
.user-poppover {
    padding: 0px !important;
}
</style>
