let clothesList = [
    {
        name : "Degrey Simili Tote Matcha - SITOM",
        price: '350000',
        priceSale: '390.000',
        soluong: 5,
        stock: 0,
        imgURL:"https://product.hstatic.net/1000281824/product/a30d9c5bafd4466ebbee79dfa1a147b2_00a32e891ec343dcbd6af094a82d16ac_large.jpeg",
    },
    {
        name : "Degrey Simili Tote Black - SITOB",
        price: '350000',
        priceSale: '390.000',
        soluong: 5,
        stock: 0,
        imgURL:"https://product.hstatic.net/1000281824/product/5c172938f5df484f932c8ee6cee6c582_afa2b84c11524e2a916a22dd8fc1bc75_large.jpeg",
    },
    {
        name : "Degrey ",
        price: '350000',
        priceSale: '390.000',
        soluong: 5,
        stock: 0,
        imgURL:"https://product.hstatic.net/1000281824/product/a30d9c5bafd4466ebbee79dfa1a147b2_00a32e891ec343dcbd6af094a82d16ac_large.jpeg",
    },
    {
        name : "Degrey Simili ",
        price: '350000',
        priceSale: '390.000',
        soluong: 5,
        stock: 0,
        imgURL:"https://product.hstatic.net/1000281824/product/5c172938f5df484f932c8ee6cee6c582_afa2b84c11524e2a916a22dd8fc1bc75_large.jpeg",
    },
    {
        name : "Degrey Simili Tote ",
        price: '350000',
        priceSale: '390.000',
        soluong: 5,
        stock: 0,
        imgURL:"https://product.hstatic.net/1000281824/product/a30d9c5bafd4466ebbee79dfa1a147b2_00a32e891ec343dcbd6af094a82d16ac_large.jpeg",
    },
    // {
    //     name : "Degrey Simili Tote Black - SITOB",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/5c172938f5df484f932c8ee6cee6c582_afa2b84c11524e2a916a22dd8fc1bc75_large.jpeg",
    // },
    // {
    //     name : "Degrey Simili Tote Matcha - SITOM",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/a30d9c5bafd4466ebbee79dfa1a147b2_00a32e891ec343dcbd6af094a82d16ac_large.jpeg",
    // },
    // {
    //     name : "Degrey Simili Tote Black - SITOB",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/5c172938f5df484f932c8ee6cee6c582_afa2b84c11524e2a916a22dd8fc1bc75_large.jpeg",
    // },
    // {
    //     name : "Degrey Simili Tote Matcha - SITOM",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/a30d9c5bafd4466ebbee79dfa1a147b2_00a32e891ec343dcbd6af094a82d16ac_large.jpeg",
    // },
    // {
    //     name : "Degrey Simili Tote Black - SITOB",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/5c172938f5df484f932c8ee6cee6c582_afa2b84c11524e2a916a22dd8fc1bc75_large.jpeg",
    // },
    // {
    //     name : "Degrey Simili Tote Matcha - SITOM",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/a30d9c5bafd4466ebbee79dfa1a147b2_00a32e891ec343dcbd6af094a82d16ac_large.jpeg",
    // },
    // {
    //     name : "Degrey Simili Tote Black - SITOB",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/5c172938f5df484f932c8ee6cee6c582_afa2b84c11524e2a916a22dd8fc1bc75_large.jpeg",
    // },
    // {
    //     name : "Degrey Simili Tote Matcha - SITOM",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/a30d9c5bafd4466ebbee79dfa1a147b2_00a32e891ec343dcbd6af094a82d16ac_large.jpeg",
    // },
    // {
    //     name : "Degrey Simili Tote Black - SITOB",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/5c172938f5df484f932c8ee6cee6c582_afa2b84c11524e2a916a22dd8fc1bc75_large.jpeg",
    // },
    // {
    //     name : "Degrey Simili Tote Black - SITOB",
    //     price: '350000',
    //     priceSale: '390.000',
    //     imgURL:"https://product.hstatic.net/1000281824/product/5c172938f5df484f932c8ee6cee6c582_afa2b84c11524e2a916a22dd8fc1bc75_large.jpeg",
    // },
];

console.log(clothesList);

let products = document.getElementsByClassName("row1");
console.log(products);



function buildProductCard(clothes){
    let card = document.createElement("div");
    card.className = "product1";
    card.innerHTML=`
    <div class="order">
        <span>Đặt hàng trước</span>
    </div>
    <img src="${clothes.imgURL}" alt="">
    <div class="detail">
        <h3>
            <a href="">${clothes.name}</a>
        </h3>
        
        <div class="on-sale">
            <span class="price">${clothes.price}</span>
            <span class="price-sale">${clothes.priceSale}</span>
            <span>${clothes.soluong}</span>
        </div>
    </div>
    `;
    let btnBox = document.createElement("div");
    btnBox.className = "bot-card";
  
    let btnAdd = document.createElement("button");
    let boldText = document.createElement("b");
    boldText.innerText = "Thêm";

    btnAdd.appendChild(boldText);
    btnBox.appendChild(btnAdd);
    card.appendChild(btnBox);

    btnBox.addEventListener("click",()=>{
        if (clothes.soluong > 0){
            clothes.soluong--;
            addToCart(clothes);
            card.innerHTML=`
            <div class="order">
                <span>Đặt hàng trước</span>
            </div>
            <img src="${clothes.imgURL}" alt="">
            <div class="detail">
                <h3>
                    <a href="">${clothes.name}</a>
                </h3>
                
                <div class="on-sale">
                    <span class="price">${clothes.price}</span>
                    <span class="price-sale">${clothes.priceSale}</span>
                    <span>${clothes.soluong}</span>
                </div>
            </div>
            `;
            btnAdd.appendChild(boldText);
            btnBox.appendChild(btnAdd);
            card.appendChild(btnBox);
        }else{
            alert("Hết đồ roiii !!!");
        }
    });
    return card;
}

let cartList = [];
console.log(cartList);

function addToCart(clothes){
    let isExist = false;
    if (cartList.length == 0){
        cartList.push({
            ...clothes,
            stock:1,
            soluong: clothes.soluong,
        })
        console.log(cartList);
        return;
    }

    for (let i=0; i<cartList.length;i++){
        if (cartList[i].name == clothes.name){
            cartList[i].soluong = clothes.soluong;
            cartList[i].stock += 1;
            console.log(cartList);
            isExist = true;
            return;
        }
    }
    
    if (!isExist) {
        cartList.push({
          ...clothes,
          soluong: clothes.soluong,
          stock: 1,
        });
        console.log(cartList);
    }
    
}

for (let i=0;i<products.length;i++){
    for (let j=0;j<clothesList.length;j++){
        products[i].appendChild(buildProductCard(clothesList[j]));
    }
}

function showModal() {
    document.getElementById('dialog').showModal();
    for (let i=0;i<cartList.length;i++){
        total += cartList[i].price * cartList[i].stock;
        let productInCart = document.getElementsByClassName('content-input');
        productInCart[0].appendChild(buildItem(cartList[i]));
    }
    bill(total);
}
  function performClose() {
    document.getElementById('dialog').close();
    let productInCart = document.getElementsByClassName('content-input');
    productInCart[0].innerHTML=``;
    let billInput = document.getElementsByClassName('bill-input');
    billInput[0].innerHTML=`
    <div class="btn-confirm">
        <button>Đặt hàng</button>
    </div>`;
    total = 0;
}



function buildItem(cloth){
    let productBill = document.createElement('div');
    productBill.className = "product-bill",
    productBill.innerHTML = `<span>${cloth.name}</span>
    <span>Số lượng: ${cloth.stock}</span>
    `;
    
    let textGiaTien = document.createElement('span');
    textGiaTien.innerText = `Giá tiền: ${cloth.price}`; 
    let btnDelete = document.createElement('button');
    btnDelete.innerText = "xóa";
    let btnUpdate = document.createElement('button');
    btnUpdate.innerText = "thêm";

    productBill.appendChild(textGiaTien);
    productBill.appendChild(btnDelete);
    productBill.appendChild(btnUpdate);

    


    btnUpdate.addEventListener("click",()=>{
        if (cloth.stock<=cloth.soluong){
            cloth.stock++;
            updateCart(cloth);
           
            productBill.innerHTML=`<span>${cloth.name}</span>
            <span>Số lượng: ${cloth.stock}</span>
            `;

            productBill.appendChild(textGiaTien);
            productBill.appendChild(btnDelete);
            productBill.appendChild(btnUpdate);

            
        }else {
            alert("Quá số lượng rồi !!!");
            return;
        }
    });

    return productBill;
}

function updateCart(cloth){
    let total1 = cloth.price*cloth.stock;
    console.log(total);
}




let  total = 0;
function bill(total){
    let billInput = document.getElementsByClassName('bill-input');
    let textBill = document.createElement('div');
    textBill.className="text-bill";
    textBill.innerHTML=`<p>Tổng tiền: ${total} </p>`;
    billInput[0].appendChild(textBill);
}


