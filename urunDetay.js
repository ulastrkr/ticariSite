let secim1 = document.querySelector('.secim1')
let secim2 = document.querySelector('.secim2')
let secim3 = document.querySelector('.secim3')
let secim4 = document.querySelector('.secim4')
let secim5 = document.querySelector('.secim5')
let secim11 = document.querySelector('.secim11')
let secim22 = document.querySelector('.secim22')
let secim33 = document.querySelector('.secim33')
let secim44 = document.querySelector('.secim44')
let secim55 = document.querySelector('.secim55')
let lldd = document.querySelector('.lldd')
let xss = document.querySelector('.xss')
let onde1 = document.querySelector('#onde1')
let onde2 = document.querySelector('#onde2')
let onde3 = document.querySelector('#onde3')
let onde4 = document.querySelector('#onde4')
let onde5 = document.querySelector('#onde5')


secim22.addEventListener('click',()=>{
    onde1.style.display = "none";
    onde3.style.display = "none";
    onde4.style.display = "none";
    onde5.style.display = "none";
    secim2.style.display = "block";
})
secim33.addEventListener('click',()=>{
    onde1.style.display = "none";
    onde2.style.display = "none";
    onde4.style.display = "none";
    onde5.style.display = "none";
    secim3.style.display = "block";
})
secim44.addEventListener('click',()=>{
    onde1.style.display = "none";
    onde3.style.display = "none";
    onde2.style.display = "none";
    onde5.style.display = "none";
    secim4.style.display = "block";
})
secim55.addEventListener('click',()=>{
    onde1.style.display = "none";
    onde3.style.display = "none";
    onde4.style.display = "none";
    onde2.style.display = "none";
    secim5.style.display = "block";
})
secim11.addEventListener('click',()=>{
    onde2.style.display = "none";
    onde3.style.display = "none";
    onde4.style.display = "none";
    onde5.style.display = "none";
    secim1.style.display = "block";
})