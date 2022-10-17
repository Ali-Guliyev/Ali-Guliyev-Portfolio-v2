<script setup>
import applicationService from "~~/services/applicationService";

const projects = ref([]);

applicationService.getProjects().then((res) => {
  projects.value = res.data;
});
</script>

<template>
  <section id="work">
    <h1 class="title">My projects</h1>

    <div class="projects">
      <div class="project" v-for="project in projects" :key="project.id">
        <div class="top-part">
          <h1>{{ project.name }}</h1>

          <a :href="project.code" target="_blank">
            <svg
              class="github"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </div>

        <div
          class="imageContainer"
          :style="{ backgroundImage: `url(${project.photoURL})` }"
        >
          <!-- <img class="projectWebsite" :src="project.photoURL" alt="" /> -->
          <a :href="project.website" target="_blank">
            <span>View the site</span>
            <svg
              class="viewLink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M288 32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L306.7 128 169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L352 173.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mixins";
@import "../assets/scss/variants";

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 17px;
  max-width: 1400px;
  margin: 0 auto;

  .project {
    background-color: #0c2d0c;
    border-radius: 13px;
    overflow: hidden;
    transition: all 0.1s ease;

    .top-part {
      @include flex(space-between, center);
      padding: 10px 20px;

      h1 {
        font-size: 15px;
      }

      svg.github {
        width: 20px;
        fill: white;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .imageContainer {
      width: 100%;
      height: 220px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: all 0.2s ease;
      @include flex();

      &:hover {
        box-shadow: inset 1000px 1000px 1000px rgba(0, 0, 0, 0.75);

        a {
          opacity: 1;
          pointer-events: all;
        }
      }

      a {
        opacity: 0;
        pointer-events: none;
        text-decoration: none;
        transition: all 0.2s ease;
        gap: 12px;
        border: 1px solid $green;
        border-radius: 10px;
        padding: 10px 20px;
        @include flex();

        &:hover {
          background-color: $green;

          span {
            color: white;
          }

          .viewLink {
            fill: white;
          }
        }

        span {
          color: $green;
          font-size: 15px;
          font-weight: bold;
        }

        .viewLink {
          fill: $green;
          width: 15px;
        }
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .projects {
    max-width: 1200px;

    .project {
      height: 250px;

      .imageContainer {
        a {
          margin-top: -20px;
        }
      }
    }
  }
}

@media screen and (max-width: 1047px) {
  .projects {
    grid-template-columns: auto auto;
    gap: 20px;
  }
}

@media screen and (max-width: 700px) {
  .projects {
    grid-template-columns: auto;
    gap: 15px;
  }
}
</style>
