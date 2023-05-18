import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

// --------------------- hero

const introTL = gsap.timeline();
const { words } = SplitType.create(".hero__title", { types: "words" });

introTL.from(".hero__shape", {
  scale: 0,
  opacity: 0,
});

introTL.fromTo(
  words,
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 1,
    ease: "power4.out",
  },
  "<50%"
);

// --------------------- carousel

const carouselTL = gsap.timeline({
  scrollTrigger: {
    pin: true,
    trigger: ".features",
    start: "top -5%",
    end: "+=250%",
    scrub: 0.25,
  },
});
carouselTL.fromTo("#carousel", { rotateY: -20 }, { rotateY: -250 });

// --------------------- about-us

const aboutUsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-us",
    start: "top 30%",
  },
});

aboutUsTL
  .from(".about-us__shape", {
    x: 200,
    opacity: 0,
  })
  .from(
    ".about-us__text",
    {
      x: -200,
      opacity: 0,
    },
    "<"
  );

// --------------------- marquee

const marqueeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".clients",
    start: "top bottom",
    scrub: 2,
  },
});

marqueeTL.to(".marquee", { duration: 5, xPercent: 80 });
