import { getItem } from "./localStorage.js";
import { updateCart } from "./updateCart.js";
import { removeProduct } from "./cartFunction.js";
import { totalAmount } from "./totalPrice.js";
import { showToast } from "./showToast.js";
import { clearProduct } from "./clearProduct.js";

let localstorageData = getItem();
let productTemplate = document.querySelector(".product-section");
let productContainer = document.querySelector("#product-container");

const parsePrice = (priceText) => Number(priceText.replace(/Rs\.\s?/g, '').replace(/,/g, ''));

const showCart = async () => {

    try {
        localstorageData.forEach((currEl, index) => {
            let cloneTemplate = document.importNode(productTemplate.content, true);
            let removeBtn = cloneTemplate.querySelector(".rmbtn");

            updateCart(localstorageData);

            let { id, name, image, price, price1, memory, memory1, quantity } = currEl;

            let cartId = cloneTemplate.querySelector(".product-container")
            cartId.setAttribute("id", `cart${index}`);

            if (memory) {
                cloneTemplate.querySelector(".product-name").innerText = name;
                cloneTemplate.querySelector(".img1").src = image;
                let addPrice = cloneTemplate.querySelector(".price");
                addPrice.innerText = `Rs.${price}`
                cloneTemplate.querySelector(".price1").style.display = "none"
            } else if (memory1) {
                cloneTemplate.querySelector(".product-name").innerText = name;
                cloneTemplate.querySelector(".img1").src = image;
                let addPrice1 = cloneTemplate.querySelector(".price1")
                addPrice1.innerText = `Rs.${price1}`
                cloneTemplate.querySelector(".price").style.display = "none"
            }

            let setId = cloneTemplate.querySelector(".product-container");

            removeBtn.addEventListener("click", async () => {
                setId.remove();
                removeProduct(index, localstorageData, cloneTemplate);
                totalAmount(localstorageData);
                showToast("delete", name);
                updateCart(localstorageData);
            });
            totalAmount(localstorageData);
            clearProduct(cloneTemplate);

            productContainer.append(cloneTemplate);
        });
    } catch (error) {
        console.error("something went wrong", error);
    }
}
showCart();

