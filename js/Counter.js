    //  //add all slides elements in array
    //  let slidesArr = $('.slide');
    //  //console.log(slidesArr);
    //  //console.log(slidesArr.length);
     
    //  //check before scroll for .slide that has active class
    //  //and show it to the user
    //  $.each(slidesArr, function(index, item) {
    //      if( $(item).hasClass('active')){
    //          $('.slide-num').html(
    //            '<span>Slider _________ no.' +
    //              (index + 1) +
    //              '/' +
    //              slidesArr.length +
    //              ' slide:' +
    //              item.id +
    //              '</span>'
    //          );
    //      }
    //  });

    // //scroll event
    //  $(window).scroll(function(){
    //      let scrolling = $(this);
    //      $.each(slidesArr, function(index, item) {
    //          let currentIndex = index + 1;
             
    //          //find each slide using offsetTop value
    //          //if the scrolling value is greater than the current slide offsetTop value select it as active
    //          if(scrolling.scrollTop() >= item.offsetTop){
    //              //remove active class from all siblings
    //              $(item).siblings().removeClass('active');
    //              //add active class to the current slide
    //              $(item).addClass('active');
    //          }

    //          if($(item).hasClass('active')){
    //              $('.slide-num').html("<span>Slider _________ no."+currentIndex+"/"+slidesArr.length+" slide:"+item.id+"</span>");
    //          }
    //      });

    //  });