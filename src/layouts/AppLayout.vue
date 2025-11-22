<template>
  <component :is="layout">
    <slot/>
  </component>
</template>

<script setup>
import {shallowRef, watch} from "vue";
import {useRoute} from "vue-router";
import AppLayoutDefault from "@/layouts/DefaultLayout.vue";

const route = useRoute();
const layout = shallowRef(AppLayoutDefault);

watch(
    () => route.meta,
    async (meta) => {
      try {
        if (!meta.layout) {
          layout.value = AppLayoutDefault;
          return;
        }

        const component = await import(`./${meta.layout}.vue`);
        layout.value = component?.default || AppLayoutDefault;
      } catch (e) {
        layout.value = AppLayoutDefault;
      }
    }
);
</script>

