let basket = [];
let textBasketEmpty = document.getElementById('basket');
let sumArea = document.getElementById('basketPaySum');
let deliveryPrice = 3.99;

function emptyBasket() {
    if (basket == '') {
        let delivery = document.getElementById('deliveryCost');
        textBasketEmpty.innerHTML = templateEmptyBasket();
        delivery.innerHTML = '';
        sumArea.innerHTML = '';
        deliveryCreateDelet();
    }

}

function creatBasketUnit() {
    for (let i = 0; i < basket.length; i++) {
        let prices = basket[i].price * basket[i].amount;
        let priceUnit = prices.toFixed(2);
        let priceBasket = priceUnit.toString();
        let price = priceBasket.replace(".", ",");
        textBasketEmpty.innerHTML += templateBasketUnit(i, price);
    }
}

function addBasket(i, index,) {
    let addBasketOrder = order[index].orderSelect[i];
    textBasketEmpty.innerHTML = '';

    if (basket == '') {
        basket.push(addBasketOrder);
    } else if (basket.includes(addBasketOrder)) {
        if (true) {
            let addBasketUnit = addBasketOrder;
            addBasketUnit.amount++;
        }
    } else {
        basket.push(addBasketOrder);
    }
    creatBasketUnit();
    deliveryLoad();
    switchDeliveryMenu();
    SumPrice();
}

function deletBasket(i) {
    basket.splice(i, 1);
    textBasketEmpty.innerHTML = '';
    creatBasketUnit();
    emptyBasket();
    SumPrice();
}

function addBasketBTN(i) {
    let addUnit = basket[i];
    addUnit.amount++;
    textBasketEmpty.innerHTML = '';
    creatBasketUnit();
    SumPrice();
}

function minBasketBTN(i) {
    let minUnit = basket[i];
    if (minUnit.amount <= 1) {
        basket.splice(i, 1);
        textBasketEmpty.innerHTML = '';
        creatBasketUnit();
        emptyBasket();
        SumPrice();
    } else {
        minUnit.amount--;
        textBasketEmpty.innerHTML = '';
        creatBasketUnit();
        SumPrice();
    }
}

function deliveryLoad() {
    let delivery = document.getElementById('deliveryCost');
    delivery.innerHTML = '';
    delivery.innerHTML = templateDeliveryCost();
}

function switchDeliveryMenu() {
    let btn1 = document.getElementById('delivery');
    if (btn1.checked == true) {
        document.getElementById('deliveryMain').classList.remove('deliveryInput');
        document.getElementById('deliveryMain').classList.add('deliveryInputSwitch');
        document.getElementById('collectionMain').classList.remove('collectionInputSwitch');
        document.getElementById('collectionMain').classList.add('collectionInput');
        deliveryCreate();
        SumPrice();
    } else {
        document.getElementById('deliveryMain').classList.add('deliveryInput');
        document.getElementById('deliveryMain').classList.remove('deliveryInputSwitch');
        document.getElementById('collectionMain').classList.add('collectionInputSwitch');
        document.getElementById('collectionMain').classList.remove('collectionInput');
        deliveryCreateDelet();
        SumPrice();
    }
}

function deliveryCreate() {
    let deliveryData = document.getElementById('basketDelivery');
    let deliveryCost = deliveryPrice.toString();
    let delivery = deliveryCost.replace(".", ",");
    deliveryData.innerHTML = '';
    deliveryData.innerHTML = templateBasketPay(delivery);
}

function deliveryCreateDelet() {
    let deliveryData = document.getElementById('basketDelivery');
    deliveryData.innerHTML = '';

}

function SumPrice() {
    let summery = document.getElementById('basketPay');
    let sum = 0;
    summery.innerHTML = '';
    for (let i = 0; i < basket.length; i++) {
        sum += basket[i].price * basket[i].amount;
    }
    sumReplace(sum, summery,);
    basketPrice(sum);
}

function sumReplace(sum, summery, summeryNewPrice) {
    let sumFixed = sum.toFixed(2);
    let summerys = sumFixed.toString();
    let summeryNew = summerys.replace(".", ",");
    if (basket == '') {
        summery.innerHTML = '';        
    } else {
        summery.innerHTML = templateBasketSummery(summeryNew, summeryNewPrice);
    }
}

function basketPrice(sum) {
    let btn1 = document.getElementById('delivery');
    let btn2 = document.getElementById('collection');
    sumArea.innerHTML = '';
    let sumAreaPrice = 0;
    if (btn1 == null) {
        sumArea.innerHTML = '';
    } else if (btn1.checked == true) {
        sumAreaPrice = sum + deliveryPrice;
    } else if (btn2.checked == true) {
        sumAreaPrice = sum + 0;
    }   
    testReplace(sumAreaPrice, sumArea,);
}

function testReplace(sumAreaPrice, sumArea,) {
    let summFixed = sumAreaPrice.toFixed(2);
    let summerys = summFixed.toString();
    let summeryNewPrice = summerys.replace(".", ",");
    if (basket == '') {
        sumArea.innerHTML = '';        
    } else {
        sumArea.innerHTML = templateBasketSum(summeryNewPrice);
    }    
}