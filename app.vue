<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
<style scoped>
.layout-leave-active, .layout-enter-active {
  transition: all 3s;
  transform-style: preserve-3d;

  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.layout-leave-active {
  @apply absolute inset-0;
}

.layout-leave-to {
  transform: translateX(-100%);
}
.layout-enter-from {
  transform: translateX(100%);
}
</style>
