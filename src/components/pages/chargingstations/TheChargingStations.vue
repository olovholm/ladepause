<template>
  <base-card>
    <h2>Ladestasjoner</h2>
    <h3> {{ getCounter }}</h3>
    <button @click="increment">Increment</button>
  </base-card>
</template>

<script>
import BaseCard from "../../UI/BaseCard";
export default {
  components: {BaseCard},
  computed: {
    getCounter() {
      return this.$store.getters.finalCounter
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}

</script>