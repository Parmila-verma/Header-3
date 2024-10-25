const icons = document.querySelector(".icons");
const list = document.querySelector(".list");

icons.addEventListener("click", () => {
    list.classList.toggle("show");
    if (list.classList.contains("show")) {
        icons.innerHTML = `
            <ion-icon name="close-outline"  class="icons"></ion-icon>
        `;
    } else {
        icons.innerHTML = `
         <ion-icon name="menu-outline"  class="icons"></ion-icon>
        `;
    }
});  