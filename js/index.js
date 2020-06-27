const displayDropDown = (e) => {
    console.log(e.name);
}

const dropdowns = document.querySelectorAll('.dropdownbtn');
const dropdownElements = document.querySelectorAll('.dropdown-content');

dropdowns[0].addEventListener("mouseover",displayDropDown());



