<template>
  <div class="logo">
    <h1 class="title">grêmio</h1>
    <button class="btn" />
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
.title {
  color: #2491e4;
  font-weight: 600;
  text-transform: lowercase;
  font-size: 1.2rem;
}
.btn {
  background: url("../../../assets/static/bell.png") center / contain
    transparent;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
}
</style>
