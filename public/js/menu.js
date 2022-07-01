window.addEventListener("load", () => {
    const queryMob = window.matchMedia("(max-width:1023px)");
    let menu = document.querySelector(".burger-menu-container .fas");

    menu.addEventListener("click", () => {
        if (queryMob.matches) {
            document.getElementById("menu").classList.remove("menu-click-out");
            document.getElementById("menu").classList.add("menu-click");
            document.querySelector(".burger-menu-nav-bar").style.display = "block";
            document.querySelector(".fa-circle-xmark").style.display = "inline";
            document.getElementById("menu").style.display = "unset";
        } else {
            document.getElementById("menu").classList.remove("menu-click-out");
            document.getElementById("menu").classList.add("menu-click");
            document.querySelector(".burger-menu-nav-bar").style.display = "flex";
            document.querySelector(".fa-circle-xmark").style.display = "inline";
            document.getElementById("menu").style.display = "unset";
        }
    });

    let close = document.querySelector("#menu .fa-solid");
    close.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("menu-click");
        document.getElementById("menu").classList.add("menu-click-out");
    });
});