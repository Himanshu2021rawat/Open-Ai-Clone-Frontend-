// gsapfor animation



let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:"true",
        start:"top 0%",
        end:"top -10%",
        scrub:1
    }
})

tl.to('.page1 .nav , .inner_menudiv_item1',{
    backgroundColor:"#000000",
})

tl.to('.socials',{
    y:500,
    backgroundColor:"#fff",
    borderRadius:"6px"
})




// menu for responsive ness
function menu(){
//show menu on media query
let menudiv = document.querySelector('.menudiv');
let menu = document.querySelector('.menu');
let h2 = menu.querySelector('h2');

h2.addEventListener('click', function() {
    if (menudiv.style.display === "none") {
        h2.innerHTML = "Close";
        menudiv.style.display = "block";
    } else {
        h2.innerHTML = "Menu";
        menudiv.style.display = "none";
    }
});
}
menu();

// control video function

function controlVideo(){
//controling video controls 
let videobtn = document.querySelector('.videobtn');
let video = document.querySelector('video');
let pausebtn = document.querySelector('.pausebtn');
let playbtn = document.querySelector('.playbtn');
let text = document.querySelector('.text');

video.autoplay = false;

videobtn.addEventListener('mousemove',function(){

    video.play();
    gsap.to(".videobtn .playbtn i",{
        display:"none"
    })
    gsap.to(".videobtn .pausebtn i",{
        display:"block",
        
    })
    text.innerHTML = "Pause video";
    
  
    

});

videobtn.addEventListener('mouseleave',function(){

    video.pause();
    text.innerHTML = "Play video";
    gsap.to(".videobtn .pausebtn i",{
        display:"none"
    })
    gsap.to(".videobtn .playbtn i",{
        display:"block",
        
    })
  


});



}
controlVideo();


// dropdown list
function dropdown(){

    let h2 = document.querySelectorAll('.left_list h2');
    let div = document.querySelectorAll('.left_list div');
    
    h2.forEach((h2Element, index) => {
        h2Element.addEventListener('click', function() {
            div.forEach((divElement) => {
                divElement.style.display = 'none';
            });
    
            if (div[index].style.display === 'block') {
                div[index].style.display = 'none';
            } else {
                div[index].style.display = 'block';
            }
        });
    });
    

}
dropdown();


//floating cursor

function cursorFloating(){

    let cursor = document.querySelector('.cursor');
    let main = document.querySelector('.main')
    
    main.addEventListener("mousemove",function(dets){
        gsap.to('.cursor',{
            display:"block",
            left:dets.clientX ,
            top: dets.clientY
        })
    })
}

cursorFloating();

