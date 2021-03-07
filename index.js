var products = [
    {
        productimage: "./asset/images/dress1.jpg",
        productname: "Party Wear Gown - Red",
        productprice: "800"
    },
    {
        productimage: "./asset/images/dress2.jpg",
        productname: "Lehenga choli - Pink",
        productprice: "1200"
    },
    {
        productimage: "./asset/images/dress3.jpg",
        productname: "Netted Saree - Grey",
        productprice: "1000"
    }
];
console.log(products);

const container = document.getElementsByClassName("container")[0];
const modalContent = document.getElementsByClassName("modal-content")[0];
const navBar = document.getElementsByClassName("navBar")[0];
const num = document.querySelector(".circle");
const clickBtn = document.querySelectorAll(".btn");
var a = document.getElementsByClassName("product-card")
let initialValue = 0;

    clickBtn.forEach(buyBtn => {
        buyBtn.addEventListener('click', () => {
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
            
            products.forEach(product => {
                const Card = `<div class="product-card">
                    <div class="product-image">
                        <img src="${product.productimage}" alt="img">
                    </div>
                    <div class="product-details">
                        <h2 class="product-name">${product.productname}</h2>
                        <h4 class="product-price"> ${product.productprice}  * ${initialValue}</h4>
                       <h1 class="total-price">Total Price : ${product.productprice  * initialValue}</h1>
                    </div>
                </div>`;     
                const position = "beforeend";
                modalContent.insertAdjacentHTML(position, Card);
            })
        })
        
        var modal = document.getElementById("myModal");
        setTimeout(function() { 
            modal.remove();
        }, 3000);
    })    
      

