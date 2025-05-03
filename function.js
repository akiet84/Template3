 document.getElementById("upupup").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const menutoggle = document.getElementById("menu-toggle")
    const mobileNav = document.getElementById("mobile-nav");
    const barsIcon = document.getElementById("bars-icon")
    const closeIcon = document.getElementById("close-icon")
    menutoggle.addEventListener("click", function (){
         console.log("hi");
        mobileNav.classList.toggle("active");

        if(mobileNav.classList.contains("active")){
            // da bam vao bar Icon => an bar icon va hien close icon
            barsIcon.style.display = "none";
            closeIcon.style.display = "block"
        }
        else{
            barsIcon.style.display = "block";
            closeIcon.style.display = "none";
        }

    })
})