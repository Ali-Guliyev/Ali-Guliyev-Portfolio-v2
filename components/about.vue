<script setup>
import portfolioService from "../services/portfolioService";

const about = ref("");
const skills = ref([]);

portfolioService.getAbout().then((res) => {
  about.value = res.data;
});

portfolioService.getSkills().then((res) => {
  skills.value = res.data;
});

const revealPercentages = () => {
  document.querySelectorAll(".ko-progress-circle").forEach((el, i) => {
    el.setAttribute("data-progress", skills.value[i].percentage);
  });
};

onMounted(() => {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 600) {
      setTimeout(revealPercentages, 0);
    }
  });
});
</script>

<template>
  <section id="about">
    <h1 class="title">About me</h1>

    <div class="bigContianer">
      <div class="container">
        <div class="left">
          <h1>Hi there!</h1>
          <p>{{ about.text }}</p>
        </div>
        <div class="right">
          <img src="../assets/img/aboutme.jpg" alt="" />
        </div>
      </div>

      <div class="skillContainer">
        <a
          :href="skill.href"
          target="new"
          class="skill"
          v-for="skill in skills"
          :key="skill.id"
        >
          <div class="ko-progress-circle" data-progress="0">
            <div class="ko-circle">
              <div class="full ko-progress-circle__slice">
                <div class="ko-progress-circle__fill"></div>
              </div>
              <div class="ko-progress-circle__slice">
                <div class="ko-progress-circle__fill"></div>
                <div
                  class="ko-progress-circle__fill ko-progress-circle__bar"
                ></div>
              </div>
            </div>
            <div class="ko-progress-circle__overlay"></div>
          </div>
          <h3 class="language">{{ skill.name }}</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/variants";

#about {
  .bigContianer {
    @include flex(center, center, column);

    .container {
      @include flex(space-between);
      max-width: 1200px;
      width: 100%;
      gap: 20px;

      .left {
        h1 {
          font-size: 30px;
          text-align: center;
          margin-bottom: 10px;
        }

        p {
          max-width: 700px;
          min-width: 350px;
          line-height: 25px;
        }
      }

      .right {
        max-width: 400px;

        img {
          width: 100%;
          width: 400px;
          max-width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0px 5px 10px #00ff00;
        }
      }
    }
  }
}

// Skills

$circle-size: 120px;
$circle-background: #084008;
$circle-color: #0fa00f;
$inset-size: 105px;
$inset-color: #051f05;
$transition-length: 4s;

.skillContainer {
  @include flex(center, space-between);
  flex-wrap: wrap;
  gap: 35px;
  max-width: 1200px;
  margin-top: 20px;

  .skill {
    text-align: center;
    color: $circle-color;
    text-decoration: none;

    .ko-progress-circle {
      position: relative;
      margin: 20px auto;
      width: $circle-size;
      height: $circle-size;
      transition: all 0.1s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 20px #0fa00f;
      }

      background-color: $circle-background;
      border-radius: 50%;
      .ko-progress-circle__slice,
      .ko-progress-circle__fill {
        width: $circle-size;
        height: $circle-size;
        position: absolute;
        -webkit-backface-visibility: hidden;
        transition: transform $transition-length;
        border-radius: 50%;
      }
      .ko-progress-circle__slice {
        clip: rect(0px, $circle-size, $circle-size, $circle-size/2);
        .ko-progress-circle__fill {
          clip: rect(0px, $circle-size/2, $circle-size, 0px);
          background-color: $circle-color;
        }
      }
      .ko-progress-circle__overlay {
        width: $inset-size;
        height: $inset-size;
        position: absolute;
        margin-left: ($circle-size - $inset-size)/2;
        margin-top: ($circle-size - $inset-size)/2;

        background-color: $inset-color;
        border-radius: 50%;
      }

      $i: 0;
      $increment: 180deg / 100;
      @while $i <= 100 {
        &[data-progress="#{$i}"] {
          .ko-progress-circle__slice.full,
          .ko-progress-circle__fill {
            transform: rotate($increment * $i);
          }
          $i: $i + 1;
        }
      }

      &::after {
        content: attr(data-progress) "%";
        transition: all 0.3s ease;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25px;
        font-family: "Courier New";
      }
    }
  }
}

@media screen and (max-width: 920px) {
  #about {
    .container {
      flex-direction: column !important;
    }
  }
}
</style>
