<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: number
    height?: number
    rails?: boolean
    ticks?: boolean
  }>(),
  { width: 30, height: 32, rails: false, ticks: false }
)
</script>

<template>
  <svg :width="width" :height="height" viewBox="0 0 42 44" fill="none" aria-hidden="true">
    <line x1="21" y1="3" x2="21" y2="41" stroke="#5A6A78" stroke-width="1" />
    <template v-if="rails">
      <line x1="8" y1="12" x2="8" y2="32" stroke="#2C3D49" stroke-width="1.6" />
      <line x1="34" y1="12" x2="34" y2="32" stroke="#2C3D49" stroke-width="1.6" />
    </template>
    <ellipse cx="21" cy="32" rx="13" ry="4.2" stroke="#2C3D49" stroke-width="1.6" />
    <ellipse cx="21" cy="22" rx="13" ry="4.2" stroke="#2C3D49" stroke-width="1.6" />
    <ellipse cx="21" cy="12" rx="13" ry="4.2" fill="rgba(59,130,246,.13)" stroke="#3B82F6" stroke-width="1.7" />
    <circle cx="21" cy="12" r="1.5" fill="#3B82F6" />
    <template v-if="ticks">
      <line x1="37" y1="12" x2="40.5" y2="12" stroke="#5AA6C9" stroke-width="1" />
      <line x1="37" y1="32" x2="40.5" y2="32" stroke="#5AA6C9" stroke-width="1" />
      <line x1="39" y1="12" x2="39" y2="32" stroke="#5AA6C9" stroke-width="1" />
    </template>
  </svg>
</template>
