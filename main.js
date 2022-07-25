let imgs=Array.from(document.querySelectorAll('.imgs'));
let previous=document.querySelector('.left-bouton');
let next=document.querySelector('.right-bouton');
let spans=Array.from(document.querySelectorAll('.bullets span'));
let btn=document.querySelector('footer button');

let currentSlide=1;

next.onclick=function(){
    if(currentSlide<imgs.length){
        imgs.forEach((img)=>{
            img.style.display='none'
        });

        spans.forEach((span)=>{
            span.classList.remove('selected');
        })

        imgs[currentSlide].style.display='block';
        spans[currentSlide].classList.add('selected');
        currentSlide++;
    };
};

previous.onclick=function(){
    if(currentSlide>1){
        currentSlide--;

        imgs.forEach((img)=>{
            img.style.display='none'
        });

        spans.forEach((span)=>{
            span.classList.remove('selected');
        });

        imgs[currentSlide-1].style.display='block';
        spans[currentSlide-1].classList.add('selected');
    };
};

spans.forEach((span)=>{
    span.onclick=function(){

        imgs.forEach((img)=>{
            img.style.display='none'
        });

        spans.forEach((span)=>{
            span.classList.remove('selected');
        });

        span.classList.add('selected')
        
        imgs[spans.indexOf(span)].style.display='block';

        currentSlide=spans.indexOf(span)+1

    };
});

btn.onclick=function(){
    window.scrollTo(0,0)
};