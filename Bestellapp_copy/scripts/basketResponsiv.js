let clickcount = 0;
element = document.querySelector('.basketStyle');
elementB = document.querySelector('.basketContent');

function basketon() {
    document.getElementById('basketButton').textContent = "Warenkorb Schließen";
    document.getElementById('mainContentOn').classList.add('d_none');
    document.getElementById('footer').classList.add('footerBasket');
    document.getElementById('basketButton').classList.add('basketBtnB');
    if (window.matchMedia('(max-width:900px)').matches) {
        element.style.display = 'block';
        elementB.style.display = 'block';
    }
};


function basketoff() {
    document.getElementById('basketButton').textContent = "Warenkorb";
    document.getElementById('mainContentOn').classList.remove('d_none');
    document.getElementById('footer').classList.remove('footerBasket');
    document.getElementById('basketButton').classList.remove('basketBtnB');
    if (window.matchMedia('(max-width:900px)').matches) {
        element.style.display = '';
        elementB.style.display = '';
    }
};

document.getElementById("basketButton").addEventListener("click", function () {
    clickcount++;
    if (clickcount === 1) {
        basketon();
    } else if (clickcount === 2) {
        basketoff();
        clickcount = 0;
    }
});

function paydone() {
    document.getElementById('mainContentOn').classList.add('d_none');
    document.getElementById('basketStyleOff').classList.add('d_none');
    document.getElementById('overlayPay').classList.remove('d_none');
    document.getElementById('basketoff').classList.add('d_none');
    document.getElementById('basketoff').classList.remove('basketBtnMain');
    if (window.matchMedia('(max-width:900px)').matches) {
        element.style.display = '';
        elementB.style.display = '';
    }
}

function payDoneOff() {
    document.getElementById('mainContentOn').classList.remove('d_none');
    document.getElementById('basketStyleOff').classList.remove('d_none');
    document.getElementById('overlayPay').classList.add('d_none');
    document.getElementById('basketButton').classList.remove('d_none');
    document.getElementById('basketoff').classList.add('basketBtnMain');
    document.getElementById('basketButton').classList.remove('basketBtnB');
    document.getElementById('footer').classList.remove('footerBasket');
    basket = [];
    emptyBasket();
    SumPrice();
}


