document.querySelector('.mini_img_1').onmouseenter = function (e) {
    document.querySelector('.full_img').src = 'images/PhotoFull.png';
}

document.querySelector('.mini_img_2').onmouseenter = function (e) {
    document.querySelector('.full_img').src = 'images/Photo2.png';
}

document.querySelector('.mini_img_3').onmouseenter = function (e) {
    document.querySelector('.full_img').src = 'images/Photo3.png';
}

document.querySelector('.decrease__btn').onclick = function (e) {
    var el = document.querySelector('.product__count__text');
    if (parseInt(el.textContent) > 1) {
        el.textContent = parseInt(el.textContent) - 1;
    }
}

document.querySelector('.increase__btn').onclick = function (e) {
    var el = document.querySelector('.product__count__text');
    el.textContent = parseInt(el.textContent) + 1;
}

document.querySelector('.blue__btn').onclick = function (e) {
    var el = document.querySelector('.product__count__text')
    var count = parseInt(el.textContent);

    if(count == 1) {
        toastr.success('В корзину добавлен '+ el.textContent + ' товар');
    }
    if((count > 1) && (count < 5)) {
        toastr.success('В корзину добавлено '+ el.textContent+ ' товара');
    } if(count > 4) {
        toastr.success('В корзину добавлено '+ el.textContent + ' товаров');
    }
}