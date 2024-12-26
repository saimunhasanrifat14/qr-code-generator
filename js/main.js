const inputfield = document.querySelector('.inputfield');
const qrcode_img = document.querySelector('.qrcode_img');
const btn = document.querySelector('.btn');
const downloadBtn = document.querySelector('.btn-download')
const menu = document.querySelector(".menu");

// create qr code
btn.addEventListener("click", () => {
    qrcode_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputfield.value}`
})


// Download part
document.querySelector('.Download').addEventListener('click', function () {
    const menuDownload = document.querySelector('.menu__download');
    const menuLinks = document.querySelector('.menu__links');
    const Download = document.querySelector('.Download');
    const Links = document.querySelector('.Links');
    const menu_after = document.querySelector(".menu_after");

    menuDownload.style.display = 'block';
    menuLinks.style.display = 'none';
    Download.style.fontWeight = '700';
    Download.style.color = 'Black';
    Links.style.color = '#5b5b5b';
    Links.style.fontWeight = '500';
    menu_after.style.left = "305px"
    menu_after.style.width = "95px"

});

// links part
document.querySelector('.Links').addEventListener('click', function () {
    const menuDownload = document.querySelector('.menu__download');
    const menuLinks = document.querySelector('.menu__links');
    const Download = document.querySelector('.Download');
    const Links = document.querySelector('.Links');
    const menu_after = document.querySelector(".menu_after");

    menuDownload.style.display = 'none';
    menuLinks.style.display = 'block';
    Links.style.color = 'black';
    Links.style.fontWeight = '700';
    Download.style.fontWeight = '500';
    Download.style.color = '#5b5b5b';
    menu_after.style.left = "-2px"
    menu_after.style.width = "55px"
});
