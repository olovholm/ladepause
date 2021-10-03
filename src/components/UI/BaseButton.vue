<template>
  <button :type="type" :class="mode" class="btn btn-primary">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'mode']
}
</script>

<style scoped>

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>