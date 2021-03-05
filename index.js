var products = {
    productimage: "./asset/images/dress2.jpg",
    productname: "Party Wear Gown - Red",
    productprice: "800"
}

const container = document.getElementsByClassName("container")[0];
const navBar = document.getElementsByClassName("navBar")[0];
const buyBtn = document.getElementsByClassName("btn")[0];
const num = document.querySelector(".circle");
let initialValue = 0;

buyBtn.addEventListener("click", () => {

    let value = num.textContent;
    if((value == 0) || (value <= 4)) {
        initialValue++;
        num.textContent = initialValue;
        console.log(initialValue);
    }
    else if(value == 5) {
        num.textContent = value + '+';
        initialValue++;
        console.log(initialValue);
    }
    else {
        initialValue++;
        console.log(initialValue);
    }

    const modal = document.createElement("div");
    var attributes = ["class", "id"];
    var values = ["modal", "myModal"];
    for (var i = 0; i < attributes.length; i++) {
    modal.setAttribute(attributes[i], values[i])
    }

    const modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");

    const productCard = document.createElement("div");
    productCard.setAttribute("class", "product-card");

    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image");

    const Image = document.createElement("img");
    Image.src = `${products.productimage}`;
    Image.setAttribute("class", "product-img");

    const productDetails = document.createElement("div");
    productDetails.setAttribute("class", "product-details");

    const productName = document.createElement("h2");
    productName.setAttribute("class", "product-name");
    productName.textContent = 'Price : ' + `${products.productname}`;
    
    const productPrice = document.createElement("h4");
    productPrice.setAttribute("class", "product-price");
    // productPrice.textContent = `${products.productprice} * ${initialValue}`;
    productPrice.textContent = products.productprice + ' * ' + initialValue;

    let tprice = products.productprice  *  initialValue;
    console.log(tprice);
    const totalPrice = document.createElement("h1");
    totalPrice.setAttribute("class", "total-price");
    totalPrice.textContent = 'Total Price : ' +  `${tprice}`;

    productCard.appendChild(productImage);
    productCard.appendChild(productDetails);
    productImage.appendChild(Image);
    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(totalPrice);
    modalContent.appendChild(productCard);
    modal.appendChild(modalContent);
    navBar.appendChild(modal);

    setTimeout(function() { 
        navBar.removeChild(modal);
    }, 3000);
    
});