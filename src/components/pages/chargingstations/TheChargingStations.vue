<template>
  <base-button @click="getCurrentGeolocation">Hent nærmeste stasjoner</base-button>
  <base-card v-for="stasjon in stasjoner" :key="stasjon.internationalId">
    <p><b>{{ stasjon.name }}</b></p>
    <p>Gate: {{ stasjon.street }} {{stasjon.houseNumber}}</p>
    <p> {{stasjon.distanse}}</p>
  </base-card>

</template>

<script>
import BaseCard from "../../UI/BaseCard";
import BaseButton from "../../UI/BaseButton";
export default {
  created() {
    this.$store.dispatch("hentStasjoner")
  },
  components: {BaseButton, BaseCard},
  computed: {
    stasjoner() {
      return this.$store.getters.stasjoner
    }
  },
  data() {
    return {
      location: null
    }
  },
  methods: {
    getCurrentGeolocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(it => {
            this.location = it
          this.$store.dispatch("hentNærmesteStasjoner",{lat: this.location.coords.latitude, lon: this.location.coords.longitude})
        });
      }
    }

  }
}

</script>