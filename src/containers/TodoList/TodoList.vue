<template>
  <div>
    <h1><Header /></h1>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "TodoList",
  components: {
    Header,
  },
};
</script>
