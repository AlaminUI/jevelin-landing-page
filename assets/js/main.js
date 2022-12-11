if (screen.width > 991){
    document.querySelector('.sub-menu').classList.remove('dropdown-menu');
    }
    

document.querySelector('.dropdown_toggle').addEventListener('click', function(){
    document.querySelector('.sub-menu').classList.toggle('open-dropdown');
})

document.querySelector('.navbar-toggler').addEventListener('click', function(){
    document.querySelector('.toggle-line1').classList.toggle('mainus-rotated');
    document.querySelector('.toggle-line2').classList.toggle('d-none');
    document.querySelector('.toggle-line3').classList.toggle('plus-rotated');
})

 
 

    document.addEventListener('scroll', function(){
        var scrolltop = $(this).scrollTop();
        
        if(scrolltop > 100){
           document.querySelector('header').classList.add('header-sticky');
        }else{
           document.querySelector('header').classList.remove('header-sticky');

        }
    });

    // $(document).ready(function(){
    //     $(window).load(function(){
    //       $('.pre-loader').remove();
    //     });
    //     $(this).load(function(){
    //         $('.pre-loader').remove();
    //     });
    //     $(document).load(function(){
    //         $('.pre-loader').remove();
    //     });
    //   })