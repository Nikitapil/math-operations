<template>
  <div class="app-nav">
    <NuxtLink class="app-header" to="/">Entertaining Math</NuxtLink>
    <nav class="app-nav__links">
      <NuxtLink class="app-nav__link" active-class="link-active" to="/quadraticequations">
        Quadratic Equations
      </NuxtLink>
      <NuxtLink class="app-nav__link" active-class="link-active" to="/rectangles">
        Rectangles
      </NuxtLink>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.app-nav {
  padding-top: 20px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: linear-gradient(
      180deg,
      rgba(182, 246, 250, 0.2) 0%,
      rgba(83, 41, 250, 0.2) 100%
  );
  backdrop-filter: blur(30px);
  overflow: auto;
}

.app-nav__links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.app-header {
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  padding: 0 20px;
  text-decoration: none;
  color: #222222;
}

.app-nav__link {
  font-size: 18px;
  text-decoration: none;
  color: #222222;
  padding: 8px 20px;
  transition: 0.4s;
  &:hover {
    background: linear-gradient(
            180deg,
            rgba(140, 135, 135, 0.2) 0%,
            rgba(75, 73, 73, 0.2) 100%
    );
  }
}

.link-active {
  background: linear-gradient(
          180deg,
          rgba(140, 135, 135, 0.2) 0%,
          rgba(75, 73, 73, 0.2) 100%
  );
}

</style>