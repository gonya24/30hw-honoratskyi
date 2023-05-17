function setAttribute(elementWithAtt, mainElement) {
    for (let j = 0; j < elementWithAtt.length; j++) {
        const att = elementWithAtt[j]
        for (let w in att) {
            mainElement.setAttribute(`${w}`, `${(att[w])}`)
        }
    }
}
function createElement(parent, arr) {
    for (let i = 0; i < arr.length; i++) {
        const el = document.createElement(`${arr[i].element}`)
        el.classList.add('input-style')
        if (arr[i].subText === true) {
            el.innerHTML = `${arr[i].innerText}`
        }
        const elAtt = arr[i].attributes;
        if(elAtt){
        setAttribute(elAtt, el)
        } 
        if (arr[i].child === true) {
            const childItem = arr[i].childItem
            createElement(el, childItem)
        }
        if (arr[i].allowTitle === true) {
            const div = document.createElement('div')
            const label = document.createElement('label')
            label.setAttribute('for', `${arr[i].labelFor}`)
            label.innerHTML = `${arr[i].label}`
            div.append(label);
            div.append(el);
            parent.append(div)

        } else {
            parent.append(el)
        }


    }

}

function btnOrder(product) {
    const divError = document.createElement('div');
    divError.classList.add('div-error')
    document.getElementById('btnOrder').addEventListener('click', function () {
        const forms = document.forms.orderForm
        const listProduct = [{ 'Назва продукту': `${product.name} ${product.model}`, }, { 'Вартість': product.price }, { 'Кількість': forms.count.value }, { 'Сума': (+product.price) * (+forms.count.value) }]
        const listDelivery = [{ 'ПІБ': `${forms.lastName.value} ${forms.firstName.value} ${forms.surname.value} ` }, { 'Місто': forms.city[forms.city.value].label }, { 'Відділення нової пошти': forms.post[forms.post.value].label }, { 'Тип оплати': `${forms.payment.value}` }, { 'Коментарій до замовлення': forms.comment.value }]

        error(listDelivery, divError, listProduct, product);



    })
}
function error(listDelivery, div, listProduct, product) {
    const arrError = [];
    const forms = document.forms.orderForm;
    const span = document.createElement('span');

    for (let i = 0; i < control.length; i++) {
        if (control[i].required === true && forms[i].value == '') {
            arrError.push(` ${control[i].label}`);
        }
    }
    if (forms.payment.value === '') {
        arrError.push(' Тип оплати')
    }
    span.innerHTML = `${arrError}`;
    if (arrError.length !== 0) {
        div.innerHTML = `Ви не заповнили : `;
        div.append(span)
        forms.prepend(div);

    } else {
        const tableOr = tableCreate(listDelivery, listProduct, 'containerTable')
        document.forms.orderForm.style.display = "none"
        document.forms.orderForm.insertAdjacentElement('afterend', tableOr)

        btnFinish(product, listDelivery, listProduct)
    }
}
function form(parentElement, product) {
    const formMain = document.createElement('form')
    formMain.setAttribute('name', 'orderForm')
    formMain.classList.add('order-form')
    createElement(formMain, control);
    parentElement.append(formMain)
    btnOrder(product)
}

