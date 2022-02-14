<template>
  <table>
    <slot name="header" />
    <slot name="body" />
  </table>
</template>

<script>
export default {
  name: "lastTable",
};
</script>

<style>
table {
  display: flex;
  flex-direction: column;
}
</style>
