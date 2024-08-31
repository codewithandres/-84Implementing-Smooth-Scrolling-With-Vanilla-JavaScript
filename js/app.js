let current = 0;
let target = 0;
let ease = 0.1;

let windowWidth, containerHeight, imagenHeight, skewDif;

const container = document.querySelector('.container');
const images = [...document.querySelectorAll('.img-wrap')];

images.map((imag, index) => {
    imag.style.backgroundImage = `url(../assets/${index + 1}.jpg)`;
    console.log(
        (imag.style.backgroundImage = `url(../assets/${index + 1}.jpg)`)
    );
});
