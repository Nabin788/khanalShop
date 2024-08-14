export const clearProduct = (cloneTemplate) => {
    let clearProduct = document.querySelector(".clearBtn");
    let productContainer = cloneTemplate.querySelector(".product-container");
    let total = document.querySelector(".product-final-price");
    let cart = document.querySelector(".icon");

    clearProduct.addEventListener("click", () => {
        clearProduct.style.backgroundColor = "blue"
        localStorage.clear();
        productContainer.remove();
        total.innerText = "Rs.0";
        cart.innerHTML = `<i class="fa-solid fa-cart-shopping">0</i>`;
        clearProduct.remove();
    })
}