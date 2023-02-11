//reactive navbar code

let toggleNavStatus = false;


let toggleNav = function(){
    let getSidebar = document.querySelector('.nav-sidebar');
    let getSidebarUl = document.querySelector('.nav-sidebar ul');
    let getSidebarA = document.querySelectorAll('.nav-sidebar a');

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebar.style.visibility = "visible";


        let arrayLength = getSidebarA.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarA[i].style.opacity = '1';
        }

        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "1px";
        getSidebar.style.visibility = "hidden";

        let arrayLength = getSidebarA.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarA[i].style.opacity = '0';
        }

        toggleNavStatus = false;
    }
}

