const inputfield = document.querySelector('.inputfield');
const qrcode_img = document.querySelector('.qrcode_img');
const btn = document.querySelector('.btn');
const downloadBtn = document.querySelector('.btn-download')


btn.addEventListener("click", () => {
    qrcode_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputfield.value}`
})

document.querySelector('.Download').addEventListener('click', function () {
    const menuDownload = document.querySelector('.menu__download');
    const menuLinks = document.querySelector('.menu__links');

    menuDownload.style.display = 'block';
    menuLinks.style.display = 'none'; 
    menuDownload.style.fontweight = '600'; 
});

document.querySelector('.Links').addEventListener('click', function () {
    const menuDownload = document.querySelector('.menu__download');
    const menuLinks = document.querySelector('menu__links');
    console.log(menuLinks);
    

    menuDownload.style.display = 'none';
    menuLinks.style.display = 'block';
});

//  .addEventListener('click', () => {
//     const qrSrc = qrcode_img.src;
  
//     if (qrSrc.includes('api.qrserver.com')) {
//       const link = document.createElement('a');
//       link.href = qrSrc;
//       link.download = 'qr-code.png'; 
//       link.click();
//     } else {
//       alert('Please generate a QR Code first!');
//     }
// });
