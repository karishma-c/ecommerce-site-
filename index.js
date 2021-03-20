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

const body = document.getElementsByTagName("body")[0];
const container = document.getElementsByClassName("container")[0];
const modalContent = document.getElementsByClassName("modal")[0];
const navBar = document.getElementsByClassName("navBar")[0];
const num = document.querySelector(".circle");
const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");
const cart = document.getElementById("cart");

let initialValue = 0;
let productList = [];

addToCartBtn.forEach(buyBtn => {
    buyBtn.addEventListener('click', (e) => {
        buyBtn.innerHTML = "Go to Cart";
        buyBtn.removeAttribute("class", "add-to-cart-btn")
        buyBtn.setAttribute("id", "go-to-cart");
        let productType = e.path[1].getAttribute("data-itemType");
        let selectedProduct = products[productType];
        let value = num.textContent;
        if((value == 0) || (value <= 4)) {
            initialValue++;
            num.textContent = initialValue;
            console.log(initialValue);
            let productName = selectedProduct.productname  +  '\t is added to the cart';
            showPopup(productName);
        }
        else if(value == 5) {
            num.textContent = value + '+';
            initialValue++;
            console.log(initialValue);
            let productName = selectedProduct.productname  +  '\t is added to the cart';
            showPopup(productName);
        }
        else {
            initialValue++;
            console.log(initialValue);
            let productName = selectedProduct.productname  +  '\t is added to the cart';
            showPopup(productName);
        } 
        productList.push(selectedProduct);
    });  
});

cart.addEventListener("click", () => {
    if(productList.length == 0) {
        let empty = 'Sorry! Your cart is empty';
        showPopup(empty);
    }
    else if(productList.length >= 1) {
        showCartItems(productList);
    }
})

function showCartItems(productList) {
    let modal = `<div class="modal modal-close" id="myModal">
    <div class="modal-content">
    <span class="close">&times;</span>
    
    </div>
    </div>`; 
    navBar.insertAdjacentHTML( 'beforeend', modal );
    let myModal = document.querySelector(".modal");
    closeBtn(myModal,2000);
    
    productList.forEach(element => {
        let newItem = `<div class="cart-product-card">
        <div class="product-image">
            <img src="${element.productimage}" alt="img">
        </div>
        <div class="product-details">
           <h2 class="product-name">${element.productname}</h2>
            
           <h4 class="product-price">${element.productprice}  * ${initialValue}</h4>
           <h1 class="total-price">Total Price: ${element.productprice  * initialValue}</h1>
           <div class="remove">
            <i class="fas fa-trash-alt remove-button">Remove</i>
           </div> 
        </div>
        </div>`;

        let modal = document.getElementById("myModal");
        modal.insertAdjacentHTML('beforeend', newItem);
        console.log(element);
        
        let removeBtn = document.getElementsByClassName("remove-button")[0];
        removeBtn.addEventListener("click", (e) => {
            productList.remove(e);
        })
    })
    
    /* let input = document.getElementById("input");
    var increaseCount = document.getElementById("increment")[0];
    let increment = increaseCount;
    var decreaseCount = document.getElementById("decrement")[0];
    let decrement = decreaseCount;
    let inputValue = input.getAttribute("value") 
    input.setAttribute("value", "inputValue")
    console.log(inputValue);
    increment.addEventListener("click", () => {
        inputValue = inputValue + 1;
        console.log(inputValue);
    }) 
    decrement.addEventListener("click", () => {
        inputValue = inputValue - 1;
        console.log(inputValue);
    })    */
}

function showPopup(popupText) {
    let text = popupText;
    let message = `<div class="message-container">
    <h4 class="alert-message">${text}</h4>
    </div>`;
    body.insertAdjacentHTML('beforeend', message);
    let popupMsg = document.querySelector(".message-container");
    hidePopup(popupMsg, 2000);
}

function closeBtn(closeElement) {
    let spanBtn = document.querySelector(".close");
    spanBtn.addEventListener('click', () => {
        hidePopup(closeElement,0);
    })
}

function hidePopup(element, time){
    setTimeout(() => {
        element.remove();
    }, time);
}

