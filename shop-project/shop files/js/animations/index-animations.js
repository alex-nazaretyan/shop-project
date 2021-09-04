function navBarAnimation() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

    tl.fromTo('.nav-bar-ul > li', { opacity: 0,x:-500},
     {
    opacity: 1,
    x:0,
    duration: 2,
    ease:"back",
})
}
navBarAnimation();

function onScrollAnimation() {
    AOS.init(
        {
            delay:100,
        }
    );
}
onScrollAnimation();