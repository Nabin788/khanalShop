import { homeProductList } from "./HomeProduct.js";

async function loadProducts() {
    try {
        const response = await fetch("./mobile-productApi.json");

        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }

        const productList = await response.json();
        homeProductList(productList);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
loadProducts();

