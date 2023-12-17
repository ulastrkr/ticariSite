const wrapper = document.querySelector('.wrapper')

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
        urunMarka: 'BGK',
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
        urunMarka: 'BARGELLO',
        urunResim: '/urunResımlerı/wwcok5.webp',
        urunAcıklama:'228 Kadın 50 ml Parfüm Edp Orıental 1397'

    },
    {
        urunad: 'ww',
        urunfiyat: 974,
        urunMarka: 'BGK',
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
        urunMarka : 'TONNY BLACK ',
        urunResim : '/urunResımlerı/wwcok23.webp',
        urunAcıklama : 'Orijinal Unisex Yeni Sezon Su Geçirmez Spor'

    },
    {
        urunad : 'PARFUM',
        urunfiyat : 744 ,
        urunMarka : 'TONNY BLACK ',
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
        card.classList.add('card-urun')

        card.innerHTML = 
        `
        <i class="fa-solid fa-heart"></i>
         <span class="urun-urun">
         <img src=" .${resım} " >
         <div class="urun-acıklama" id="urunAcıklama">
         <p class="urun-adı" id="urunAdı">${marca} <small> ${acıklama}</small></p>
         </div>
         <p class="urun-fiyat" id="urunFiyat">${fıyat} TL</p>
         </span>
            <div class="sepet-fav">
                <button class="btn-sepet" id="btn-spt">Sepete ekle</button>
            </div>
        
        `
        wrapper.append(card)
    });

   