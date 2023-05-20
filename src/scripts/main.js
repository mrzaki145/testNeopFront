import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

// --------------------- hero

const introTL = gsap.timeline();
const { words } = SplitType.create(".hero__title", { types: "words" });

introTL.fromTo(
  words,
  {
    y: -100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 1,
    ease: "power4.out",
  }
);

// --------------------- carousel

const carouselTL = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacer: false,
    trigger: ".features",
    start: "top top",
    end: "+=250%",
    scrub: 0.15,
  },
});
carouselTL.fromTo("#carousel", { rotateY: -20 }, { rotateY: -250 });

// --------------------- marquee

const marqueeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".clients",
    start: "top bottom",
    scrub: 2.5,
  },
});

marqueeTL.to(".marquee", { duration: 5, xPercent: 80 });

// --------------------- shape

const shape = document.querySelector("#shape");
const shapeWrapper = shape.parentElement;

const shapeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-us",
    scrub: 2,
    start: "top 25%",
    end: "bottom bottom",

    onLeave() {
      const { top, height } = offset(shapeWrapper);
      gsap.set(shapeWrapper, {
        position: "absolute",
        top: `${top}px`,
        bottom: "auto",
        height: `${height}px`,
      });
    },
    onEnterBack() {
      gsap.set(shapeWrapper, {
        position: "fixed",
        top: 0,
        bottom: "0",
        height: "auto",
      });
    },
  },
});

introTL.from(
  shape,
  {
    scale: 1.5,
    opacity: 0,
  },
  "<5%"
);

shapeTL.to(shape, {
  xPercent: 60,
});

shapeTL.from(
  ".about-us__text",
  {
    x: 200,
    opacity: 0,
  },
  "<"
);

gsap.from(".contact-us__shape", {
  xPercent: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".contact-us header",
    start: "top 20%",
  },
});

function offset(el) {
  let rect = el.getBoundingClientRect();
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop,
    height: rect.height,
  };
}
