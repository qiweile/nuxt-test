<template>
  <div class="member-box" :class="className">
    <!-- <span class="name">{{ packageInfo?.serverName || '' }}</span> -->
  </div>
</template>

<script setup lang="ts">
// import { useUserStore } from '@/store/modules/user'
import { storeToRefs } from 'pinia'
import { toRefs, computed } from 'vue'
const props = withDefaults(defineProps<{
  size?:string
}>(), {
  size: 'small'
})

const { size } = toRefs(props)
// const userStore = useUserStore()
// const { packageInfo } = storeToRefs(userStore)

const className = computed(() => {
  return {
    [`${size.value}`]: true
  }
})
</script>

<style scoped>
.member-box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  flex-shrink: 0;
}
.member-box::after {
  background: #3352d9;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.member-box::before {
  content: "";
  background: url("~/assets/images/member-sign.png") no-repeat;
  background-size: cover;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
}
.member-box .name {
  z-index: 2;
  font-weight: bold;
  padding: 0 6px;
  color: #fff;
}
.member-box.big .logo {
  width: 51px;
  height: 16px;
}
.member-box.small {
  height: 14px;
  padding-left: 16px;
}
.member-box.small::after {
  width: calc(100% - 10px);
  margin: 1px 0;
  height: calc(100% - 2px);
  left: 10px;
}
.member-box.small::before {
  width: 16px;
  height: 15px;
}
.member-box.small .name {
  font-size: 10px;
}

/*# sourceMappingURL=index.css.map */

</style>
