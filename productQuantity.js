export const productQuantityToggle = (event, id, stock) => {
    let target = event.target;
    let currentId = document.querySelector(`#card${id}`);
    let productQuantity = currentId.querySelector(".quantity-number");
    let count = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (target.classList.contains("increment") && currentId) {
        if (count < stock) {
            count = count + 1;
        }
    } else if (target.classList.contains("decrement")) {
        if (count > 1) {
            count = count - 1;
        }
    }
    
    productQuantity.innerText = count;
    productQuantity.setAttribute("data-quantity", count.toString());
    return count;
}
