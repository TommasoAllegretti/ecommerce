<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import TextInput from '@/components/TextInput.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'

function onLoginButtonClick() {
  console.log('Login with username and password')
}
</script>

<template>
  <form action="login">
    <!-- Mobile -->
    <div class="h-full space-y-12 flex flex-col md:hidden items-center justify-center">
      <h1 class="text-2xl">Login</h1>
      <form action=""></form>
      <text-input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        class="w-full"
      ></text-input>
      <text-input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        class="w-full"
      ></text-input
      ><primary-button class="w-full" @click.prevent="onLoginButtonClick">Login</primary-button>
    </div>

    <!-- Desktop -->
    <base-card class="h-full space-y-12 p-12 hidden md:flex">
      <h1 class="text-2xl">Login</h1>
      <form action=""></form>
      <text-input type="text" name="username" id="username" placeholder="Username"></text-input>
      <text-input type="password" name="password" id="password" placeholder="Password"></text-input
      ><primary-button @click.prevent="onLoginButtonClick">Login</primary-button></base-card
    >
  </form>
</template>
