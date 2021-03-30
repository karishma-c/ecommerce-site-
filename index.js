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
    let modal = `<div class="sidebar" id="mySidebar">
    <div class="sidebar-content">
    <span class="close">&times;</span>
    
    </div>
    </div>`; 
    navBar.insertAdjacentHTML( 'beforeend', modal );
    let sideBar = document.querySelector(".sidebar");
    sideBar.style.width = "400px";
    closeBtn(sideBar,2000);
    
    productList.forEach(element => {
        let newItem = `<div class="product-card">
        <div class="product-image">
            <img src="${element.productimage}" alt="img">
        </div>
        <div class="product-details">
           <h3 class="product-name">${element.productname}</h2>
            
           <h4 class="product-price">${element.productprice}  * ${initialValue}</h4>
           <h3 class="total-price">Total Price: ${element.productprice  * initialValue}</h1>
           <h5 class="remove-button"><i class="fas fa-trash-alt"></i>Remove</h5>
        </div>
        </div>`;

        let sideNav = document.getElementById("mySidebar");
        sideNav.insertAdjacentHTML('beforeend', newItem);
        console.log(element);
    })
    
    let remove = document.querySelectorAll(".remove-button");
    remove.forEach(removeBtn => {
        removeBtn.addEventListener("click", (event) => {
            var removedItem = event.currentTarget.parentNode.parentNode;
            showModal(removedItem);
        })
    })
}

function showModal(removedItem) {
    let confirmation = `<div class="confirmation-modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h3 class="confirmation">Do you want to remove this item?</h3>
        <div class="button-container">
            <button class="remove">Remove</button>
            <button class="cancel">Cancel</button>
        </div>
    </div>
    </div>`;
    body.insertAdjacentHTML("beforeend", confirmation);
    let sideNav = document.getElementById("mySidebar");
    let confirm = document.querySelectorAll(".confirmation-modal");
    let remove = document.querySelectorAll(".remove");
    let cancel = document.querySelectorAll(".cancel");
    closeBtn(confirm, 0);

    remove.forEach(removeItem => {
        removeItem.addEventListener("click", () => {
            console.log("clicked");
            hidePopup(removedItem,0);
            
        })
        closeBtn(confirm,0);
    })
    cancel.forEach(cancelItem => {
        cancelItem.addEventListener("click", () => {
            closeBtn(confirm,0);
        })
    })
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

