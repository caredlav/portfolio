window.addEventListener("load",()=>{
    let menu=document.querySelector(".burger-menu-container .fas");
    menu.addEventListener("click",()=>{ 
        document.getElementById("menu").classList.add("menu-click");
        document.getElementById("menu").style.display="unset";
    });

    let close=document.querySelector("#menu .fa-solid");
    close.addEventListener("click",()=>{
        document.getElementById("menu").classList.remove("menu-click");
        document.getElementById("menu").style.display="none";
    })
});