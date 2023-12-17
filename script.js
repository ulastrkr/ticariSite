
let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');


nextBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior ='smooth';
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior ='smooth';
    scrollContainer.scrollLeft -= 900;
});
// galeri 2
let scrollContainer2 = document.querySelector('.gallery2');
let backBtn2 = document.getElementById('backBtn2');
let nextBtn2 = document.getElementById('nextBtn2');

nextBtn2.addEventListener('click',()=>{
    scrollContainer2.style.scrollBehavior ='smooth';
    scrollContainer2.scrollLeft += 900;
});
backBtn2.addEventListener('click',()=>{
    scrollContainer2.style.scrollBehavior ='smooth';
    scrollContainer2.scrollLeft -= 900;
});
// galeri 3
let scrollContainer3 = document.querySelector('.gallery3');
let backBtn3 = document.getElementById('backBtn3');
let nextBtn3 = document.getElementById('nextBtn3');

nextBtn3.addEventListener('click',()=>{
    scrollContainer3.style.scrollBehavior ='smooth';
    scrollContainer3.scrollLeft += 900;
});
backBtn3.addEventListener('click',()=>{
    scrollContainer3.style.scrollBehavior ='smooth';
    scrollContainer3.scrollLeft -= 900;
});

