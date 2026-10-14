'use strict';

let card = document.querySelector('.card');
let sku = document.getElementById('sku');
let price = document.getElementById('price');
let oldPrice = document.getElementById('old-price');

let pack100 = document.querySelector('input[value="100"]');
let pack500 = document.querySelector('input[value="500"]');
let pack1000 = document.querySelector('input[value="1000"]');
let pack5000 = document.querySelector('input[value="5000"]');

let addBtn = document.getElementById('btn-add');
let counter = document.getElementById('counter');
let countText = document.getElementById('count');
let minusBtn = document.getElementById('btn-minus');
let plusBtn = document.getElementById('btn-plus');
let count = 0;

let modal = document.getElementById('modal');
let modalImg = document.getElementById('modal-img');
let modalClose = document.getElementById('modal-close');
let mainImg = document.querySelector('.main-img');

function changePack(size, art, newPrice, old) {
    sku.textContent = art;
    price.textContent = newPrice;
    oldPrice.textContent = old;
    card.setAttribute('data-pack', size);
}

pack100.onchange = function () {
    changePack('100', '01306', '326,40 ₽', '349,20 ₽');
};

pack500.onchange = function () {
    changePack('500', '01307', '1 432 ₽', '1 646 ₽');
};

pack1000.onchange = function () {
    changePack('1000', '01308', '2 064 ₽', '2 592 ₽');
};

pack5000.onchange = function () {
    changePack('5000', '01309', '6 320 ₽', '8 710 ₽');
};

addBtn.onclick = function () {
    count = 1;
    countText.textContent = count;
    addBtn.hidden = true;
    counter.hidden = false;
};

plusBtn.onclick = function () {
    count = count + 1;
    countText.textContent = count;
};

minusBtn.onclick = function () {
    count = count - 1;
    if (count < 1) {
        count = 0;
        addBtn.hidden = false;
        counter.hidden = true;
    }
    countText.textContent = count;
};

mainImg.onclick = function () {
    modalImg.src = mainImg.src;
    modal.hidden = false;
    document.body.classList.add('no-scroll');
    setTimeout(function () {
        modal.classList.add('open');
    }, 10);
};

modalClose.onclick = function () {
    modal.hidden = true;
    modal.classList.remove('open');
    document.body.classList.remove('no-scroll');
};