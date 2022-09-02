<template>
  <section id="about">
    <h1 class="title">About me</h1>

    <div class="bigContianer">
      <div class="container">
        <div class="left">
          <h1>Hi there!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
            illo necessitatibus voluptatibus quam doloremque, culpa deleniti
            incidunt fuga distinctio architecto placeat? Saepe, qui vel earum
            eum necessitatibus illo officiis quia laudantium. Commodi
            dignissimos necessitatibus eum error, veniam perspiciatis sequi
            dolore iure eaque laudantium. Nam error expedita ut ullam atque
            repellendus consequatur quod, eligendi excepturi ducimus voluptates
            quibusdam facilis corrupti accusamus modi veniam natus, unde eaque
            sequi aspernatur nobis id blanditiis ipsa nihil? Iste necessitatibus
            repellat nihil ad minima! Ut sequi ab aperiam error numquam vitae
            minus odit, doloribus totam sit consequatur adipisci cum voluptatum,
            optio id eaque sunt? Vitae, dolores.
          </p>
        </div>
        <div class="right">
          <img src="../assets/img/laptop.jpg" alt="" />
        </div>
      </div>
      <h1>hello world</h1>
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
      margin-top: 40px;
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
          border-radius: 20px;
        }
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
