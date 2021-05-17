;(function(){
    
     //Показ меню 
     const menuIcon = document.querySelector('.menu-icon');
     const menuBody = document.querySelector('.mobile-menu');
     const modalPage = document.querySelector('.mobile-menu-modal')
     
     if(menuIcon) {
         menuIcon.addEventListener("click", function(e) {
             menuIcon.classList.toggle('active');
             document.body.classList.toggle('_lock');
             menuBody.classList.toggle('active');
             modalPage.classList.toggle('active');
         });
     }
     function closeMenu () {
         menuIcon.classList.remove('active');
         document.body.classList.remove('_lock');
         menuBody.classList.remove('active');
         modalPage.classList.remove('active');
     }
 
     modalPage.addEventListener("click", function() {
         closeMenu();
     })
 
 
    // Плавный скролл до меню

    const menuLinks = document.querySelectorAll('.link[data-goto]')
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLinks => {
            menuLinks.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
                
                if(menuIcon.classList.contains('active')) {
                    closeMenu();
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }

   

})();


;(function(){
    var accpage = document.querySelector('.accordeon-page-wrap')
  
    if (accpage) {
      var accBtn = document.getElementsByClassName('accordeon-btn')
      var i;
  
      for (i = 0; i < accBtn.length; i++) {
        accBtn[i].addEventListener('click', function() {
            this.classList.toggle('active')
            var accInfo = this.nextElementSibling;
  
            if (accInfo.style.maxHeight) {
                accInfo.style.maxHeight = null;
            } else {
                accInfo.style.maxHeight = accInfo.scrollHeight + 'px';
            }
        });
      }
    } else {
      return;
    }
  })();


  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-nextarrow',
      prevEl: '.slider-prevarrow',
    },
    breakpoints: {
        // when window width is >= 320px
        240: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 10
          },
        // when window width is >= 640px
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        }
    }
  });