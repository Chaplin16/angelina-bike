//carousel de photos
function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(e) {
        element.innerHTML += 
        `<div class="card-img"><img style="width:100%; height:16.5rem; border:transparent; object-fit:cover; padding-left:3px; padding-right:3px;" src="${e.link}" alt="${e.alt}"></div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        arrows: false,
        dots:true,
        speed:1300,
        adaptiveHeight: true,
        autoplaySpeed:1200,
        autoplay: true,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4,
                }
           },
            {
                breakpoint: 1300,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
           },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
             }
         ]
    });
  }
  
  carousel(".carousel", velo)