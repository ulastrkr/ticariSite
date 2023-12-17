const wrapper2 = document.querySelector('.wrapper-sepet')
const basket =document.querySelector('.urunSepet')

let sepet=[]


const Urunler = [
    {
        urunad: 'corap',
        urunfiyat: 174,
        urunMarka: 'BGK',
        urunResim: '/urunResımlerı/wwcok1.webp',
        urunAcıklama:'Unisex Renkli 5 Çift Kolej Corap Seti'

    },
    {
        urunad: 'parfüm',
        urunfiyat: 274,
        urunMarka: 'BARGELLO',
        urunResim: '/urunResımlerı/wwcok2.webp',
        urunAcıklama:'Kadın 20 ml Parfüm Edp Oriental'

    },
    {
        urunad: 'mont',
        urunfiyat: 874,
        urunMarka: 'BWK',
        urunResim: '/urunResımlerı/wwcok3.webp',
        urunAcıklama:'Antrasit Oversize Geniş Kesim Uzun Yünlü Kaşe Kaban'

    },
    {
        urunad: 'üst',
        urunfiyat: 474,
        urunMarka: 'BAYTAŞ YILDIZ',
        urunResim: '/urunResımlerı/wwcok4.webp',
        urunAcıklama:'Baytaş Ekonomik Ipaskı Ribana'

    },
    {
        urunad: 'parf',
        urunfiyat:674,
        urunMarka: 'GELLO',
        urunResim: '/urunResımlerı/wwcok5.webp',
        urunAcıklama:'228 Kadın 50 ml Parfüm Edp Orıental 1397'

    },
    {
        urunad: 'ww',
        urunfiyat: 974,
        urunMarka: 'LOCS',
        urunResim: '/urunResımlerı/wwcok6.webp',
        urunAcıklama:'Unisex Renkli 5 Çift Kolej Çorap Seti'

    },
    {
        urunad: 'esofman',
        urunfiyat: 554,
        urunMarka: 'nıke',
        urunResim: '/urunResımlerı/wwcok7.webp',
        urunAcıklama:'Nıke Erkek Eşofman Altı'

    },
    {
        urunad: 'elbise',
        urunfiyat: 470,
        urunMarka: ' YILDIZ',
        urunResim: '/urunResımlerı/wwcok8.webp',
        urunAcıklama:'Yıldız Bayan Elbise'

    },
    {
        urunad : 'bot',
        urunfiyat : 744 ,
        urunMarka : 'DERİMONT ',
        urunResim : '/urunResımlerı/wwcok9.webp',
        urunAcıklama : 'Bayan Deri Bot'

    },
    {
        urunad : 'CANTA',
        urunfiyat : 83 ,
        urunMarka : 'TONNY BLACK ',
        urunResim : '/urunResımlerı/wwcok22.webp',
        urunAcıklama : 'Orijinal Time Serisi 3 Bölmeli Fermuarlı  Kol & Omuz Çantası'

    },
    {
        urunad : 'SIRT ',
        urunfiyat : 149 ,
        urunMarka : ' ZARA ',
        urunResim : '/urunResımlerı/wwcok23.webp',
        urunAcıklama : 'Orijinal Unisex Yeni Sezon Su Geçirmez Spor'

    },
    {
        urunad : 'PARFUM',
        urunfiyat : 744 ,
        urunMarka : 'LC  ', 
        urunResim : '/urunResımlerı/wwcok24.webp',
        urunAcıklama : 'Orijinal Erkek Özel Seri Uzun Süre Kalıcı Etkili'

    },
]


    
Urunler.forEach(element => {
    let ısım = element.urunad
    let marca = element.urunMarka
    let fıyat = element.urunfiyat
    let resım = element.urunResim
    let acıklama = element.urunAcıklama

    const card = document.createElement('div')
    card.classList.add('card-urunSepet')

    card.innerHTML = 
    `
    <i class="fa-solid fa-heart"></i>
     <span class="urun-urunSepet">
     <div class="resim-sınır" ><img src=" .${resım} " ></div>
     <div class="urun-acıklama" id="urunAcıklama">
     <p class="urun-adı" id="urunAdı"><p class="yoyo">${marca}</p> <small> ${acıklama}</small></p>
     </div>
     <div class="parapara">
     <p class="urun-fiyat" id="urunFiyat">${fıyat} </p><p class="urun-fiyat" id="urunFiyat">TL</p>
     </div>
     
     </span>
        <div class="sepet-fav">
            <button class="btn-sepet" id="btn-spt">Sepete ekle</button>
        </div>
    
    `
    wrapper2.append(card)
    
  

}); 
const btns = document.querySelectorAll('.btn-sepet')

btns.forEach((button)=>{
    button.addEventListener('click',function(){
        
    basket.innerHTML = ''
        let card = this.parentElement.parentElement


    
        let resim = card.querySelector('img').src
        let marca = card.querySelector('.yoyo').textContent
        let fiyat = card.querySelector('.urun-fiyat').textContent

        let sepeteEkle = {
            price : fiyat,
            isim  : marca,
            img   : resim,
            adet  : 1
        }
        if(sepet.length == 0){
            sepet.push(sepeteEkle)
        }else{
            let stok = sepet.filter(urun=>{
                if(urun.isim == sepeteEkle.isim){
                    return urun.adet ++
                }
            })
            if(stok.length == 0){
                sepet.push(sepeteEkle)
            }
        }
sepet.forEach(urun=>{
    console.log(sepet)
    const div = document.createElement('div')
    div.classList.add('urunGorunum')
    div.innerHTML=
    `
    <img src="${urun.img} " alt="">
            <div class="marca-bilgi">
                <h3>${urun.isim}</h3>
            </div>
            
            <p>${urun.price*urun.adet} TL</p>
            <p>${urun.adet} </p>
            <i class="silDel fa-solid fa-trash-can"></i>

    
    `
    basket.append(div)

    
    
})


    
    })
});

basket.addEventListener('click', function (silme) {
    if (silme.target.classList.contains('silDel')) {
        
        let tiklanan = Array.from(silme.target.parentElement.parentElement.children).indexOf(silme.target.parentElement);
     
        if (sepet[tiklanan].adet > 1) {           
            sepet[tiklanan].adet--;
        } else {           
            sepet.splice(tiklanan, 1);
        }

        
        guncelSepet();
    }
});

function guncelSepet() {
    basket.innerHTML = '';

    sepet.forEach(urun => {
        const div = document.createElement('div');
        div.classList.add('urunGorunum')
        div.innerHTML=
        `
        <img src="${urun.img} " alt="">
                <div class="marca-bilgi">
                    <h3>${urun.isim}</h3>
                </div>
                
                <p>${urun.price*urun.adet} TL</p>
                <p>${urun.adet} </p>
                <i class="silDel fa-solid fa-trash-can"></i>
    
        
        `;
        basket.append(div);
    });

    
}
















