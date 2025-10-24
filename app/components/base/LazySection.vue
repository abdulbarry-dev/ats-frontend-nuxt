<template>
  <section ref="sectionRef">
    <component v-if="show" :is="LazyComponent" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
const show = ref(false);

// Accepts a component to lazy load
const props = defineProps({
  component: {
    type: Object,
    required: true,
  },
});

const LazyComponent = defineAsyncComponent(() =>
  Promise.resolve(props.component),
);

onMounted(() => {
  if (!sectionRef.value) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        show.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.1 },
  );
  observer.observe(sectionRef.value);
});
</script>
