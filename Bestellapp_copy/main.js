let orderHead = document.getElementById('content');
let index = -1;

function loadInit() {
    orderMainLoad();
    emptyBasket();     
};

function orderMainLoad() {

    orderHead.innerHTML = '';

    for (let i = 0; i < order.length; i++) {
        let orderIndex = order[i].orderSelect;
        index++;
        orderHead.innerHTML += templateMain(i, index);
        orderSecendLoad(i, orderIndex, index);
    }

};

function orderSecendLoad(i, orderIndex, index) {
    let orderContent = document.getElementById('contentOrder' + i);
    for (let i = 0; i < orderIndex.length; i++) {
        orderContent.innerHTML += templateMeal(i, orderIndex, index).replace(".", ",");
    }
};

function navOn() {
    document.getElementById('navContent').classList.remove('d_none');
};

function navClose() {
    let img = document.getElementById('img');
    img.addEventListener('click', (event) => {
        event.stopPropagation()
    })
    let menu = document.getElementById('navContent');
    menu.addEventListener('click', (event) => {
        event.stopPropagation()
    })
    document.getElementById('navContent').classList.add('d_none');
};


