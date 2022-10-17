<template>
  <div class="burger-menu">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/variants";

.burger-menu {
  z-index: 98;
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: $darkerGreen;
  border-radius: 50%;
  transition: all 0.15s ease;
  @include flex(center, center, column);

  &:hover {
    background: rgba(9, 63, 9, 0.6);
  }

  div {
    transition: all 0.25s ease;
    margin: 3px;
    width: 23px;
    height: 2.3px;
    background-color: $green;
  }
}

.burger-menu.active {
  .line-1 {
    transform: translate(1px, 8px) rotate(45deg);
    width: 25px;
  }

  .line-2 {
    opacity: 0;
  }

  .line-3 {
    transform: translate(1px, -8px) rotate(-45deg);
    width: 25px;
  }
}
</style>
