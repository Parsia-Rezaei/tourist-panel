$('#owl-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:500,
    navText: ["<i class='bx bxs-chevron-right'></i>" , "<i class='bx bxs-chevron-left'></i>"],
    rtl:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1300:{
            items:4
        }
    }
})
// type of tickets

$('#owl-carousel__links').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    // smartSpeed:500,
    navText: ["<i class='bx bxs-right-arrow'></i>" , "<i class='bx bxs-left-arrow'></i>"],
    rtl:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1300:{
            items:5
        }
    }
})