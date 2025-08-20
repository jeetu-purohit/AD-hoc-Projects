Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{images:["https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg","https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_640.jpg","https://cdn.pixabay.com/photo/2023/08/13/00/43/blue-8186653_640.jpg"]})
gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub: 1
    },
    y:"-300%",
    ease:Power1
})


let sections=document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
    style: 5,
    // config:{
    //     onMouse:{value:1}
    // },
    slideStyle: (setScroll) => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger:section,
                start:"top top",
                scrub:1,
                onUpdate: function(prog){
                //    console.log(prog);
                    setScroll(prog.progress+index);
                },
            });
        });
        
    },
  });

