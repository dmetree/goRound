function showSpan(){

  $('.header__title-head').animate({
    'opacity':'hide'
  });

  $('.header__title-head').animate({
    'opacity':'show'
  },1000);

  $('.header__title-span').animate({
    'opacity':'hide'
  });

  $('.header__title-span').animate({
    'opacity':'show'
  },2000);

  $('.header__info-paragraph').animate({
    'opacity':1
  },3000);

  $('.header__horLine').animate({
    'opacity':1
  },2000);

  $('.header__list-elem_5').animate({
    'opacity':1
  },4000);

  $('.header__vertLine').animate({
    'opacity':1
  },4000);

  $('.header__list-elem_13').animate({
    'opacity':1
  },5000);

}
setTimeout(showSpan, 1000);



$("#header__content-image").rotate({bind:{
  click: function(){
    $(this).rotate({
      duration: 6000,
      angle: 0,
      center: ["50%", "100%"],
      animateTo:-360
    })
    }
  }
});

$("#header__sticker").rotate({bind:{
  click: function(){
    $(this).rotate({
      angle: 250,
      center: ["100%", "-100%"],
      animateTo:-360
      })
    }
  }
});
