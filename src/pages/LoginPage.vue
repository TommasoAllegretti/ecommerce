<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import TextInput from '@/components/TextInput.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import GoogleSignInButton from '@/components/GoogleSignInButton.vue'

function onLoginButtonClick() {
  console.log('Login with username and password')
}
</script>

<template>
  <form action="login">
    <base-card class="h-full space-y-12 p-12">
      <h1 class="text-2xl">Login</h1>
      <form action=""></form>
      <text-input type="text" name="username" id="username" placeholder="Username"></text-input>
      <text-input type="password" name="password" id="password" placeholder="Password"></text-input
      ><primary-button class="w-48" @click.prevent="onLoginButtonClick">Login</primary-button>
      <google-sign-in-button class="w-48"></google-sign-in-button
    ></base-card>
  </form>
</template>
