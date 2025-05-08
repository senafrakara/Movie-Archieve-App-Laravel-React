<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="increment">Click me</button>
    <p>You've clicked {{ count }} times.</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const title = ref('Hello Vue 3 with Composition API!');
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    return {
      title,
      count,
      increment
    };
  }
};
</script>

<style scoped>
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #369870;
}
</style>