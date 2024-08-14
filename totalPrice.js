export const totalAmount = (localstorageData) => {

    let total = document.querySelector(".product-final-price");
    let value = 0;

    let totalPrice = localstorageData.reduce((acc, curr) => {
        let prices = parseInt(curr.price) || 0;
        let price1 = parseInt(curr.price1) || 0;
        return acc + prices + price1;
    }, value);
    total.innerText = `Rs.${totalPrice}`;
}
