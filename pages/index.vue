<template>
  <div class="main-page">
    <h2 class="main-page__title">
      This website is a kit for solving different math tasks.
    </h2>
    <p class="main-page__hint">	&larr; Use navigation to choose your problem to solve</p>
  </div>
</template>
<style lang="scss" scoped>
.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

.main-page__title {
  font-size: 36px;
  margin-bottom: 15px;
}

.main-page__hint {
  font-size: 22px;
}
</style>