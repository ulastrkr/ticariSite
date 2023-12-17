// hesap
let girisYap = document.querySelector('.girisYap');
let uyeOl = document.querySelector('.uyeOl');
let uyeOls = document.querySelector('.uye-ols');
let labelKapsayıcı = document.querySelector('.label-kapsayıcı');
let limit = document.querySelector('.limit');
let hiza = document.querySelector('.hizaa');
let uyeOLLL = document.querySelector('#uyeOLLL');


function kayıtOL(){


uyeOLLL.onclick = ()=>{


let mail = document.querySelector('#emailKayıt').value;
let sıfre = document.querySelector('#uyeKayıt').value;


let user = {
    email: mail,
    password: sıfre,
};


localStorage.setItem('user',JSON.stringify(user));

}
}
kayıtOL()
let local = JSON.parse(localStorage.getItem("user"))




let gırısyapp = document.getElementById('gırısyapp');

gırısyapp.onclick = ()=>{
    let postaa = document.getElementById('postaa').value;
    let sıfreew = document.getElementById('sıfreew').value;
    
    if(postaa == local.email && sıfreew == local.password){
        gırısyapp.style.backgroundColor = 'green'    
    }else{
        gırısyapp.style.backgroundColor = 'red'
    }

    
    
}


uyeOl.addEventListener('click',()=>{
    girisYap.style.backgroundColor = "rgb(240, 240, 240)";
    uyeOl.style.backgroundColor = "white";
    uyeOl.style.color = "orange";
    girisYap.style.color = "black";
    uyeOls.style.display = "block";
    labelKapsayıcı.style.display = "none";
    limit.style.height = "880px"
    hiza.style.border = "white";
    uyeOls.style.display = "flex";
    uyeOls.style.justifyContent = "center";
    uyeOls.style.alignİtems = "start";
    uyeOl.style.border = "1px solid rgb(231, 231, 231)"
    uyeOl.style.borderBottom = "none"

    
})

girisYap.addEventListener('click',()=>{
    girisYap.style.backgroundColor = "white";
    uyeOl.style.backgroundColor = "rgb(240, 240, 240)";
    uyeOl.style.color = "black";
    uyeOls.style.display = "none";
    girisYap.style.color = "orange";
    labelKapsayıcı.style.display = "block";
    limit.style.height = "580px"
    hiza.style.border = "1px solid rgb(240, 240, 240)";
    hiza.style.borderTop = "none";
})