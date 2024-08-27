export const showToast = (operation, name) => {
    let toast = document.createElement("div");
    toast.classList.add("notification");

    if (operation === "add") {
        toast.innerText = `${name} added sucessfully.`
        // console.log(`${name} product has been added.`);
    } else
    toast.innerText = `${name} deleted sucessfully.`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500)
}
