export const removeProduct = (itemIndex, localstorageData, cloneTemplate) => {
    localstorageData.splice(itemIndex, 1);
    localStorage.setItem("product", JSON.stringify(localstorageData));
}