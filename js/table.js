function tableCreate(listDelivery, listProduct, idForContainer) {
    const container = document.createElement('div')
    container.setAttribute('id', idForContainer)
    container.classList.add('container-table')
    const tableProduct = document.createElement('table')
    const titleProduct = document.createElement('h2')
    titleProduct.innerHTML = 'Інформація про товар';
    titleProduct.style.textAlign = 'center'
    const titleDelivery = document.createElement('h2')
    titleDelivery.innerHTML = 'Інформація про доставку';
    titleDelivery.style.textAlign = 'center'
    const tableDelivery = document.createElement('table')
    for (let i = 0; i < listProduct.length; i++) {
        const tr = document.createElement('tr');
        for (let j in listProduct[i]) {
            const tdTitle = document.createElement('td')
            const tdData = document.createElement('td')
            tdTitle.innerHTML = `${j}`;
            tdData.innerHTML = `${(listProduct[i])[j]}`
            tr.appendChild(tdTitle);
            tr.appendChild(tdData);
        }
        tableProduct.appendChild(tr);

    }


    for (let i = 0; i < listDelivery.length; i++) {
        const tr = document.createElement('tr');
        for (let j in listDelivery[i]) {
            if ((listDelivery[i])[j] == '') {
                continue;
            }
            const tdTitle = document.createElement('td')
            const tdData = document.createElement('td')
            tdTitle.innerHTML = `${j}`;
            tdData.innerHTML = `${(listDelivery[i])[j]}`
            tr.appendChild(tdTitle);
            tr.appendChild(tdData);
        }
        tableDelivery.appendChild(tr);

    }

    container.appendChild(titleProduct)
    container.appendChild(tableProduct)
    container.appendChild(titleDelivery);
    container.appendChild(tableDelivery)



    return container

}
function btnFinish(product, listDelivery, listProduct) {
    const container = document.getElementById('containerTable')
    const btnFinish = document.createElement('button')
    btnFinish.textContent = 'Confirm!'
    btnFinish.setAttribute('id', 'btnFinish');
    btnFinish.classList.add('btn-order');


    btnFinish.addEventListener('click', function () {
        const date = new Date();
        dataCart.push({ item: product, date: date.toLocaleString("ua", options), infoProductOrder: listProduct, infoDeliveryOrder: listDelivery })
        console.log(dataCart)
        localStorage.setItem('keyProduct', JSON.stringify(dataCart))
        cartInfo()
        const containerProduct = document.querySelector('.product').innerHTML = '';
        const containerDetail = document.querySelector('.details').innerHTML = '';
        const form = document.forms.orderForm
        const containerTable = document.getElementById('containerTable')
        form.remove()
        containerTable.remove()


    })
    container.appendChild(btnFinish)
}