<script setup>
import applicationService from "~~/services/applicationService";

const email = ref("");

applicationService.getEmail().then((res) => {
  email.value = res.data.content;
});
</script>

<template>
  <section id="contact">
    <h1 class="title">Contact Me</h1>
    <div class="wrapper">
      <div class="formContainer">
        <img src="@/assets/img/email.png" alt="" />
        <form
          action="https://formsubmit.co/b64ec0804abbaa9e029c3fce27d8103d"
          method="POST"
        >
          <input name="Name" type="text" placeholder="Full Name" />
          <input name="Email" type="email" placeholder="Email" required />
          <textarea name="Message" placeholder="Your message..." required />
          <button class="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/variants";

#contact {
  padding-top: 30px;
  height: 95vh;

  .wrapper {
    height: 75vh;
    @include flex();

    .formContainer {
      @include flex(space-evenly);
      width: 900px;
      height: 500px;
      border-radius: 15px;
      background-color: $darkestGreen;
      opacity: 0.8;

      img {
        width: 200px;
      }

      form {
        @include flex(center, center, column);
        gap: 20px;

        input,
        textarea {
          transition: all 0.1s ease;
          border-radius: 12px;
          font-size: 15px;
          width: 400px;
          padding: 12px 20px;
          background: transparent;
          border: 2px solid $darkGreen;
          color: $lightGreen;
        }

        input::placeholder,
        textarea::placeholder {
          color: $darkGreen;
        }

        input:focus,
        textarea:focus {
          outline: none;
          @include elementShadow();
        }

        textarea {
          resize: vertical;
          min-height: 170px;
          max-height: 250px;
        }
      }
    }
  }
}

@media screen and (max-width: 770px) {
  .formContainer {
    flex-direction: column !important;
    height: 530px !important;
    img {
      width: 100px !important;
    }

    form {
      input,
      textarea {
        width: 320px !important;
      }
    }
  }
}
</style>
