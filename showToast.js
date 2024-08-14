export const showToast = (operation, name) => {
    let toast = document.createElement("div");
    toast.classList.add("notification");

    if (operation === "add") {
        toast.innerText = `${name} product has been added sucessfully.`
        console.log(`${name} product has been added.`);
    }
    toast.innerText = `${name} product has been deleted sucessfully.`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500)
}