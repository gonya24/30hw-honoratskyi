
function showCategories() {
    const container = document.querySelector('.category');

    for (let i = 0; i < data.length; i++) {
        const el = document.createElement('div');
        el.classList.add('category-item')
        el.innerHTML = data[i].name;
        el.setAttribute('data-category', i);
        el.addEventListener('mouseover', showProductHandler);
        container.appendChild(el)
    }
}
function showProductHandler(event) {
    const container = document.querySelector('.product');
    container.innerHTML = '';
    const el = event.target;
    const categoryIndex = el.getAttribute('data-category');
    const categoryProducts = data[categoryIndex].products;
    for (let i = 0; i < categoryProducts.length; i++) {
        const el = document.createElement('div');
        el.classList.add('product-item')
        const product = categoryProducts[i];
        el.innerHTML = `${product.name} ${product.model}`;

        el.setAttribute('data-category', categoryIndex);
        el.setAttribute('data-product', i);
        el.addEventListener('click', showDetail);
        container.appendChild(el);
    }
}
function showDetail(event) {
    const mainContainer = document.getElementById('containerShop')
    const container = document.querySelector('.details')
    container.innerHTML = '';
    const el = event.target
    const categoryIndex = el.getAttribute('data-category');
    const productIndex = el.getAttribute('data-product');
    const product = data[categoryIndex].products[productIndex];
    const elemDetail = document.createElement('div');
    elemDetail.setAttribute('data-category', categoryIndex);
    elemDetail.setAttribute('data-product', productIndex);
    for (let j in product) {
        elemDetail.innerHTML += `${j}: ${product[j]}<br>`
    }
    elemDetail.classList.add('detail-info')
    const buttonBuy = document.createElement('button');
    buttonBuy.innerHTML = 'Купити'
    buttonBuy.addEventListener('click', function () {
        if (document.forms.orderForm) {
            document.forms.orderForm.remove()
        }
        form(mainContainer, product)

    })
    container.appendChild(elemDetail)
    container.appendChild(buttonBuy)


}
showCategories();