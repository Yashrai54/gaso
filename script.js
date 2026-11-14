var tl = gsap.timeline()
console.log("GSAP WORKING");


console.log(gsap.version);
console.log(ScrollTrigger);
console.log(document.querySelector(".page2 .box2"));
console.log(document.body.scrollHeight);

console.log("SCRIPT LOADED");

tl.to(".header-container", {
    color: "crimson",
    duration: 2,
    opacity: 1,
    y: 30
})


tl.from(".list li", {
    color: "white",
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.3,
    ease: "power3.out"
})



gsap.registerPlugin(ScrollTrigger);
console.log("SCROLLTRIGGER WORKING");



gsap.to("body",{
    background:"linear-gradient(45deg, yellow,white)",
    duration:2,
    repeat:Infinity
})

gsap.to("button",{
    backgroundColor:"black",
    duration:2,
    delay:1
})

gsap.to("main h1 ",{
    color:"Crimson",
    duration:2,
    delay:1,
    ease:"power3.out"
})

const sound = new Howl({
  src: [ 'assets/audio.mp3'], // Provide fallback formats
  volume: 0.8,
  loop: false
});

console.log("BEFORE SWIPER");
console.log("Swiper:", typeof Swiper);
console.log("Container:", document.querySelector(".mySwiper"));
console.log("Wrapper:", document.querySelector(".swiper-wrapper"));
console.log("Slides:", document.querySelectorAll(".swiper-slide").length);
const swiperContainer = document.querySelector(".mySwiper");

console.log(swiperContainer instanceof HTMLElement); // should be true

    const swiper = new Swiper(swiperContainer, {
        slidesPerView: 1,
        loop: false,
        speed: 1000,
    });

    console.log("SWIPER INITIALIZED");

console.log("SWIPER INITIALIZED");
document.querySelector(".founder-btn").addEventListener("click",()=>{
    sound.play()
    swiper.slideNext()
})
document.querySelector(".owner-btn").addEventListener("click",()=>{
    swiper.slideNext()
})
document.querySelector(".vegeta").addEventListener("click",()=>{
    swiper.slideNext()
})

document.querySelector(".li1").addEventListener("click",()=>{
    swiper.slideTo(1)
})
document.querySelector(".li2").addEventListener("click",()=>{
    swiper.slideTo(2)
})
document.querySelector(".li3 ").addEventListener("click",()=>{
    swiper.slideTo(3)
})
document.querySelector(".li4 ").addEventListener("click",()=>{
    swiper.slideTo(3)
})

gsap.to(".people-grid div",{
    duration:2,
    backgroundColor:"crimson",
    stagger:1,

})

