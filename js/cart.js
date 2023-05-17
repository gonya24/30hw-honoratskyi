function cartInfo (){
    const link = document.querySelector('.cart');
    const arrOrder = localStorage.getItem('keyProduct')
    if(arrOrder!== null) {
        dataCart = JSON.parse(arrOrder)
    } 
    link.innerHTML = `My Order (${dataCart.length})`
    
}
function cartBtn (){
    const orderBtn = document.querySelector('.cart')
    
    isActive = false;
    orderBtn.addEventListener('click', function(){
        const containerShop = document.querySelector('.container');
        if (isActive) {
        isActive = false
        containerShop.style.display = 'flex'
        const tableOrder = document.getElementById('tableOrder')
        tableOrder.remove()
        } else {
        tableOrderCart()
        isActive = true;
        containerShop.style.display = 'none'
        }


        
    })
}
function tableOrderCart(){
    const container = document.getElementById('containerList')
    const table = document.createElement('table');
    table.innerHTML ='';
    table.setAttribute('id','tableOrder')
    if (dataCart.length == 0) {
        const tr = document.createElement('tr');
        const tdInfo =document.createElement('td')
        tdInfo.innerHTML = `Empty!`;
        tr.appendChild(tdInfo);
        table.appendChild(tr)
    } else{
    const tr = document.createElement('tr');
    
    const tdItem =document.createElement('td')
    tdItem.innerHTML = `Title`;
    const tdPrice =document.createElement('td')
    tdPrice.innerHTML = `Price ($)`;
    const tdDate =document.createElement('td')
    tdDate.innerHTML = `Date`;
    tr.appendChild(tdItem)
    tr.appendChild(tdPrice)
    tr.appendChild(tdDate)

    

    table.appendChild(tr)
    
    for (let i = 0; i < dataCart.length; i++) {
        const tr = document.createElement('tr');
        tr.classList.add('trOrder')
        const tdItem =document.createElement('td')
        tdItem.classList.add('tdItem')
        const link = document.createElement('a')
        link.setAttribute('href','')
        tdItem.append(link)
        const butInfo = document.createElement('button')
        tdItem.append(butInfo)
        link.textContent = ` ${dataCart[i].item.name} ${dataCart[i].item.model}`;
        
        butInfo.innerHTML = 'INFO'
        butInfo.onmouseover = function(){
            const container = document.getElementById('containerInfoCurOrder')

            if(container) {
                container.innerHTML = '';
            }
            table.insertAdjacentElement('afterend',tableCreate(dataCart[i].infoDeliveryOrder,dataCart[i].infoProductOrder,'containerInfoCurOrder'))
            
            
            
        }
        butInfo.onmouseout =function(){
            const container = document.getElementById('containerInfoCurOrder')
            if(container) {
                container.remove();
            }
            // table.insertAdjacentElement('afterend',tableCreate(dataCart[i].infoDeliveryOrder,dataCart[i].infoProductOrder,'containerInfoCurOrder'))
            
        }
        const tdPrice =document.createElement('td')
        tdPrice.innerHTML = `${dataCart[i].item.price}`;
        const tdDate =document.createElement('td')
        tdDate.innerHTML = `${dataCart[i].date}`;
        const tdCancel = document.createElement('td')
        const butCancel = document.createElement('button')
        butCancel.addEventListener('click', function(){
            let newArr = dataCart.filter((value,itterator) => value!== dataCart[i])
            localStorage.setItem('keyProduct', JSON.stringify(newArr))
            cartInfo()
            table.remove()
            tableOrderCart()
            
            console.log(newArr)
            
        })
        tdCancel.append(butCancel)
        butCancel.style.color = "red"
        butCancel.innerHTML = "x"
        tr.appendChild(tdItem)
        tr.appendChild(tdPrice)
        tr.appendChild(tdDate)
        tr.appendChild(butCancel)

        table.appendChild(tr)
    }
    }
    container.append(table)
}
cartBtn()
cartInfo ()