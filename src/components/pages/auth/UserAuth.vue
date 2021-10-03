<template>
  <div>
    <base-dialog @close="dismissError" v-if="errorMessage != null" title="An error occured">
      <p> {{ errorMessage}}</p>
    </base-dialog>
    <base-dialog v-if="isLoading" title="Authenticating...">
      <p>Authenticating...</p>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" class="form-control" v-model.trim="email">
        </div>
        <div class="form-group">
          <label for="email">Password</label>
          <input type="password" id="password" class="form-control" v-model.trim="password">
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password (password has to be at least 6 characters
          long)</p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseButton from "../../UI/BaseButton";
import BaseCard from "../../UI/BaseCard";
import BaseDialog from "../../UI/BaseDialog";

export default {
  name: "Authorization.vue",
  components: {BaseDialog, BaseCard, BaseButton},
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      errorMessage: null
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login'
      } else {
        return 'Signup'
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead'
      } else {
        return 'Login instead'
      }
    }
  },
  methods: {
    async submitForm() {
      if (
          this.email === '' ||
          !this.email.includes('@') ||
          this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          })
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password
          })
        }
      } catch (err) {
        this.errorMessage = err.message || 'Failed to authenticate, try later. Check your login data'
      }


      this.isLoading = false

    },

    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
    dismissError() {
      this.errorMessage = null;
    }
  }
}
</script>

<style scoped>
form {
  border-radius: 12px;
  padding: 1rem;
}

</style>