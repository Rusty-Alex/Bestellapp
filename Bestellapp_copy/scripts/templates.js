function templateMain(i) {
    return ` 
    <div>
    <img class="mealPic" src="${order[i].img}" alt="Bild von Haupt"> 
    <h2 id="h2${i}">${order[i].name}</h2></div>   
    <div  id="contentOrder${i}"></div>`
};

function templateMeal(i, orderIndex, index) {
    return `
    <div class="meal"><div  class="mealAlign">
    <span><b>${orderIndex[i].name}</b></span>
    <span>${orderIndex[i].ingredients}</span>
    <span><b>${orderIndex[i].price}</b> €</span></div>
    <span onclick="addBasket(${i},${index} )" class="spanAdd">+</span> </div>`
};

function templateEmptyBasket() {
    return `<div class="emptyBasket"><span>Wählen sie bitte ein Menü aus und geben Sie ihre Bestellung bei uns auf. 
    Vielen Dank, wir freuen uns auf Ihre bestellung! </span> </div>`
};

function templateBasketUnit(i, price) {
    return `<div class="basketOrder">
                        <span><b>${basket[i].name}</b></span>
                        <div class="basketCalc">
                            <div class="basketAddMin"><span><img onclick="minBasketBTN(${i})" src="./assets/img/icons8-minus-24.png"
                                        alt="bild von ein minus"></span><span>${basket[i].amount}</span>
                                        <span><img onclick="addBasketBTN(${i})"
                                        src="./assets/img/icons8-plus-24.png" alt="bild von ein Plus"></span></div>
                            <span>${price} €</span>
                            <img onclick="deletBasket(${i})" src="./assets/img/icons8-recycle.png" 
                            alt="Bild von einen Papierkorb">
                        </div>
                    </div>`

};

function templateDeliveryCost() {
    return `  <form id="form" class="orderMenü">
                        <div id="deliveryMain" class="deliveryInputSwitch"><label class="label" onclick="switchDeliveryMenu()"
                                for="delivery">Lieferung</label>
                            <input onclick="switchDeliveryMenu()" type="radio" name="order" id="delivery" checked>
                        </div>
                        <div id="collectionMain" class="collectionInput"><label class="label" onclick="switchDeliveryMenu()"
                                for="collection">Abholung</label>
                            <input onclick="switchDeliveryMenu()" type="radio" name="order" id="collection" >
                        </div>
                    </form>`

}

function templateBasketPay(delivery) {
    return `<div class="basketSpan"><span>Lieferkosten:</span> <span class="span1">${delivery}€</span></div>`

}

function templateBasketSummery(summeryNew) {
    return `
    <div class="basketSpan"><span>Zwischensumme:</span> <span class="span2">${summeryNew}€</span></div>`
}

function templateBasketSum(summeryNewPrice) {
    return `
    <div class="basketSpan"><span><b>Gesamtkosten</b>:</span> <span class="span3">${summeryNewPrice}€</span></div>
    <div id="basketBtnPay" class="bnPayBasket"><button onclick="paydone()" class="btnPay" class="">Bezahlen (${summeryNewPrice}€)</button></div>`
}




