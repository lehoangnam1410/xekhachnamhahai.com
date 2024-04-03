                        
        $('#js-banner--slide').owlCarousel({
            loop:true,
            // margin:10,
            // nav:true,
            lazyLoad: true,
            autoplayTimeout: 3000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplay: true,
            autoplayHoverPause: true,
            items: 1,
        });

        $('#js-paymentIntro--slide').owlCarousel({
            loop:false,
            margin:30,
            // nav:true,
             autoplayTimeout: 10000,
            autoplay: true,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        });
        

        $('[data-action=sort]').click(function() {
            let params = getURLParameters(window.location.href)
            let paramsString= "";
            let type = $(this).attr('data-filter');
            let val = $(this).attr('data-value');
            params[type] = val;

            $.each(params, function(key,value){
                paramsString += `&${key}=${value}`;
            })
            window.location.href = '/dat-ve?' + paramsString;
        })

        $('.js--toggle__active-item').click(function(){
            $('.js--toggle__active-item').removeClass('active')
            $(this).toggleClass('active')
        })

        $('[data-action=back]').click(function(){
            window.history.back();
        })