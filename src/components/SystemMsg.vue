<template>
  <div class="sys-wrap">
    <div class="sys-msg">
      <div v-if="where">
        {{msg}} 加入聊天室
      </div>
      <div v-else>
        {{msg}} 离开聊天室
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "SystemMsg",
      props:['msg','where']
    }
</script>

<style scoped>
  .sys-wrap {
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sys-msg{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.05);
    border-radius: 10px;
    min-width: 40%;
    color: #999;
    font-size: 12px;
    padding: 6px;
    margin: 10px auto;
  }
</style>
