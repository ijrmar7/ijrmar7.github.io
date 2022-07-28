function toggleDisplay(id) {
    const ele = document.getElementById(id);
    if(ele.style.display === "none") {
        ele.style.display = "block";
    } else {
        ele.style.display = "none";
    }
}

function navlink(element) {
    const navlinks = document.getElementsByClassName("navlinks");
    for(let i = 0; i < navlinks.length; i++) {
        if(navlinks[i].classList.contains('active')) {
            navlinks[i].classList.remove('active');
        }
    }
    element.classList.add('active');
}