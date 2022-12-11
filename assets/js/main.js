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

 

// function hasScrolled() {
 
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - scrolltop) <= delta)	return;

//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (scrolltop > lastScrollTop && scrolltop > navbarHeight){
//       // On scroll down we add nav-up
     
//       $('header').removeClass('header-sticky').addClass('nav-up');
    
//     } else {
//       // On scroll up we add header-sticky
//       if(scrolltop + $(window).height() < $(document).height()) {
//         $('header').removeClass('nav-up').addClass('header-sticky');
//       }
//       if(scrolltop <200){
//         $('header').removeClass('header-sticky')
//       }
//     }

    document.addEventListener('scroll', function(){
        var scrolltop = $(this).scrollTop();
        
        if(scrolltop > 100){
           document.querySelector('header').classList.add('header-sticky');
        }else{
           document.querySelector('header').classList.remove('header-sticky');

        }
    });