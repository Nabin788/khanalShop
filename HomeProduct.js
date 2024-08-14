import { productQuantityToggle } from "./productQuantity.js";
import { addTocart } from "./addTo-cart.js";

const template = document.querySelector(".product-template");
const displayTemplate = document.querySelector(".productContainer");

export const homeProductList = (product) => {
    if (!product) {
        console.log("Product not found");
        return;
    }

    product.forEach(item => {
        const { name, description, memory, memory1, image, id, stock, price, price1 } = item;
        const templateClone = document.importNode(template.content, true);
        templateClone.querySelector("#card").setAttribute("id", `card${id}`);
        templateClone.querySelector(".product-name").innerText = name;

        if (memory && memory1) {
            templateClone.querySelector(".memory-info").innerText = `${memory} :`;
            templateClone.querySelector(".memory-info1").innerText = `${memory1} :`;
        } else {
            templateClone.querySelector(".memory-info").innerText = `${memory} :`;
            templateClone.querySelector(".choose2").style.display = "none";
            templateClone.querySelector(".choose-memory").style.display = "none";
        }

        templateClone.querySelector(".product-available").innerText = `Total Stock: ${stock}`;
        templateClone.querySelector(".img").src = image;
        templateClone.querySelector(".description").innerText = description;

        let quantityToggle = templateClone.querySelector(".quantity");

        quantityToggle.addEventListener("click", (event) => {
            productQuantityToggle(event, id, stock);
        });

        templateClone.querySelector(".addButton").addEventListener("click", (event) => {
            addTocart(event, id, stock, price, price1, memory, memory1, name, image);
        });

        displayTemplate.append(templateClone);
    });
}
