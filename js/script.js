const myBurger = document.querySelector('.burger')
const myMenu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu-item')

myBurger.addEventListener('click', () =>{
    myBurger.classList.toggle('show-menu')
    document.body.classList.toggle('o-hidden')
})

myBurger.addEventListener('click', () =>{
    myMenu.classList.toggle('show')
    document.body.classList.toggle('o-hidden')
})

menuItems.forEach( oneLink=> {
    oneLink.addEventListener('click', () => {
        myMenu.classList.remove('show-menu')
        myMenu.classList.remove('show')
        document.body.classList.toggle('o-hidden')
    })
})
const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    // Get the label (which is the nextElementSibling)
    const label = e.target.nextElementSibling;
    // Get value of the input
    const value = +e.target.value;
    // Get the width value of the input
    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    // Get the width value of the label
    const label_width = getComputedStyle(label).getPropertyValue('width');
    // Remove 'px' and conver to number
    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length -2);
    // Get min and max values
    const max = +e.target.max;
    const min = +e.target.min;
    // Calculate the left value
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;
    label.innerHTML = value;
});

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: true,
        nav: true,
        loop: true,
    });
});
$(".owl-carousel").owlCarousel({
    responsive: {
        0:{
            items: 1,
        },
        767:{
            items: 2,
        },
        992:{
            items: 3,
        }
    }
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
      loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        loop: true,
    },
});


AOS.init();
