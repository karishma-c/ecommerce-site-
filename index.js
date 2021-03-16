var products = {
    frock : {
        productimage: "./asset/images/dress1.jpg",
        productname: "Party Wear Gown - Red",
        productprice: "800"
    },
    choli : {
        productimage: "./asset/images/dress2.jpg",
        productname: "Lehenga choli - Pink",
        productprice: "1200"
    },
    saree : {
        productimage: "./asset/images/dress3.jpg",
        productname: "Netted Saree - Grey",
        productprice: "1000"
    }
};

const container = document.getElementsByClassName("container")[0];
const modalContent = document.getElementsByClassName("modal")[0];
const navBar = document.getElementsByClassName("navBar")[0];
const num = document.querySelector(".circle");
const clickBtn = document.querySelectorAll(".btn");
let initialValue = 0;
let productList = [];

clickBtn.forEach(buyBtn => {
    buyBtn.addEventListener('click', (e) => {
        let productType = e.path[1].getAttribute("data-itemType");
        let selectedProduct = products[productType];
        let value = num.textContent;
        if((value == 0) || (value <= 4)) {
            initialValue++;
            num.textContent = initialValue;
            console.log(initialValue);
            showModal(selectedProduct);
        }
        else if(value == 5) {
            num.textContent = value + '+';
            initialValue++;
            console.log(initialValue);
            showModal(selectedProduct);
        }
        else {
            initialValue++;
            console.log(initialValue);
            showModal(selectedProduct);
        } 
    });  
});

function showModal(selectedProduct){

    let modal = `<div class="modal" id="myModal>
    <div class="modal-content>
    <div class="product-card">
        <div class="product-image">
            <img src="${selectedProduct.productimage}" alt="img">
        </div>
        <div class="product-details">
            <h2 class="product-name">${selectedProduct.productname}</h2>
            <h4 class="product-price"> ${selectedProduct.productprice}  * ${initialValue}</h4>
            <h1 class="total-price">Total Price : ${selectedProduct.productprice  * initialValue}</h1>
        </div>
    </div>
    </div>
    </div>`;  
    console.log(typeof modal);   
    navBar.insertAdjacentHTML( 'beforeend', modal );  
    hideModal(3000);
    productList.push(selectedProduct);
    console.log(productList);
} 

cart.addEventListener("click", () => {
    showCartItems(productList);
})

function showCartItems(productList) {
    let modal = `<div class="modal" id="myModal">
        <div class="modal-content">
        <span class="close">&times;</span>
        
        </div>
        </div>`; 
    navBar.insertAdjacentHTML( 'beforeend', modal );
    let spanBtn = document.querySelector(".close");
    console.log(spanBtn);
    spanBtn.addEventListener('click', () => {
        hideModal(0);
    })
    productList.forEach(element => {

        let newItem = `<div class="product-image">
            <img src="${element.productimage}" alt="img">
        </div>
        <div class="product-details">
            <h2 class="product-name">${element.productname}</h2>
            <h4 class="product-price"> ${element.productprice}  * ${initialValue}</h4>
            <h1 class="total-price">Total Price : ${element.productprice  * initialValue}</h1>
        </div>`
        let modal = document.getElementById("myModal");
        modal.insertAdjacentHTML('beforeend', newItem);
        console.log(element);
       
    })
    
}



function hideModal(time){

    let modal = document.querySelector('.modal');
    setTimeout(() => {
    navBar.removeChild(modal);
    }, time);
     
}

