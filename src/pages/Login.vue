<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h5>Login</h5>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="email" v-model="formData.email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="formData.password">
          </div>
          <button type="submit" class="btn btn-primary" :disabled="isInvalidLogin">Login</button>
  
        </form>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { isEmpty } from '../utils/general-functions';
import { useRouter } from 'vue-router';
import { LoginService } from '../services/login.service';
  const router = useRouter();
  const formData = reactive({
    password: '',
    email: ''
  });

  const handleSubmit = async () => {
    try {
      const login = await LoginService.doLogin(formData.email, formData.password);

      if (login.success) {
        router.push('/');
      }
    } catch (error) {
      alert('user invalid');
    }
  }

  const isInvalidLogin = computed(() => {
    return isEmpty(formData.email) || isEmpty(formData.password);
  })

</script>
