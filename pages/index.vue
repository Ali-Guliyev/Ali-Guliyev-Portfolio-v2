<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  // * GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // General
  document.querySelectorAll(".title").forEach((el) => {
    gsap.from(el, {
      duration: 1,
      opacity: 0,
      x: "-30px",
      scrollTrigger: {
        trigger: el,
        start: "top 45%",
      },
    });
  });

  // document.querySelectorAll(".project").forEach((el) => {
  //   gsap.from(el, {
  //     duration: 1,
  //     x: "-30px",
  //     opacity: 0,
  //     // scrollTrigger: projects,
  //     // stagger: 0.5,
  //   });
  // });

  // Header
  let headerTl = gsap.timeline({
    defaults: { duration: 1, opacity: 0, y: "40px" },
  });

  headerTl.from("#home .left", {}).from("#home .right", {}, "-=0.5");

  // Work
});
</script>

<template>
  <div>
    <AnimationBackground />
    <Burger />
    <Nav />
    <Header />
    <About />
    <Work />
    <Contact />
    <Footer />
  </div>
</template>
