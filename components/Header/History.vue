<template>
  <el-popover placement="bottom" :width="128" trigger="hover" popper-class="history-poppover">
    <div class="history-list">
      <div class="item" @click="handleLink('documentCenterCollect')">
        <bt-icon name="icon-wodeshoucang" />我的收藏
      </div>
      <div class="item" @click="handleLink('documentCenterReportDownload')">
        <bt-icon name="icon-wodebaogao" />我的报告
      </div>
      <div class="item">
        <bt-icon name="icon-caozuolishi" />操作历史
      </div>
      <div class="divider" />
      <div class="item">
        <bt-icon name="icon-zhuanlirenwu" />专利任务
      </div>
      <div class="btn">
        <el-button type="primary" size="small">开始下载</el-button>
      </div>
    </div>
    <template #reference>
      <span class="icon-container"><bt-icon name="icon-shizhong" /></span>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function handleLink(routeName:string) {
  router.push({ name: routeName })
}
</script>

  <style scoped>
 .history-list .item {
  padding: 0 20px;
  box-sizing: border-box;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.history-list .item:hover {
  background: rgba(0, 82, 217, 0.1);
}
.history-list .item svg {
  margin-right: 6px;
  width: 16px;
  height: 16px;
}
.history-list .time {
  line-height: 20px;
  text-align: center;
}
.history-list .btn {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 15px;
}
.history-list .divider {
  margin: 5px 15px;
  border: 1px solid #E8ECF3;
}

/*# sourceMappingURL=index.css.map */

  </style>
  <style>
  .history-poppover{
      padding:0px!important;
      min-width: 118px!important;
  }
  </style>

