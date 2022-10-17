<script setup lang="ts">
import applicationService from "~~/services/applicationService";

const socialLinks = ref([]);

applicationService.getSocial().then((res) => {
  socialLinks.value = res.data;
});

const copyrightDate = ref(2022);
</script>

<template>
  <footer>
    <p>© {{ copyrightDate }} Ali Guliyev</p>
    <ul>
      <a
        :href="link.href"
        target="new"
        v-for="link in socialLinks"
        :key="link.id"
      >
        <img :src="link.image" :class="link.name" :alt="link.name" />
      </a>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/variants";

footer {
  @include flex(space-between);
  background-color: $darkerGreen;
  padding: 7px 30px;
  opacity: 0.9;

  p {
    color: $lightGreen;
  }

  ul {
    @include flex();
    gap: 10px;
    list-style: none;

    img {
      width: 30px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.2);
      }
    }

    img.Instagram {
      transform: rotate(-90deg);
    }
  }
}

@media screen and (max-width: 700px) {
  footer {
    padding-left: 10px;
    padding-right: 10px;

    p {
      font-size: 13px;
    }

    img {
      width: 24px !important;
    }
  }
}
</style>
