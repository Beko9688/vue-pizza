<template>
  <app-layout>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'slide'" mode="out-in">
        <component :is="Component" :key="route.fullPath"/>
      </transition>
    </router-view>
  </app-layout>
</template>

<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.slide-enter-from {
  transform: translateX(16px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-16px);
  opacity: 0;
}
</style>
