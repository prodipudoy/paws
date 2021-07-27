$(document).ready(function(){
            // == owl carousel
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin: 5,
                nav:false,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    400:{
                        items: 2
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            });


            
});