;
(function ($) {
  /**
   * 控制点击旋转事件
   */
  var local = true;

  function rotate() {
    $(".tab").on('click', function () {
      if (local) {
        local = false;
        var hahha = $(this).hasClass('move');
        if (hahha) {
          $(this).removeClass('move');
          $(this).addClass('move1');
          var dom = $(".tab3")[0];
          dom.addEventListener('animationend', function () {
            console.log("动画结束")
            $('.login-3').css({
              'opacity': '0',
            });
            $('.login-6').css({
              'opacity': '1',
            });
            $(this).removeClass('tab3');
            $(this).addClass('tab2');
            $('.p1').css('zIndex', 1);
            $('.p2').css('zIndex', 0);
            $('.wrapper').css({
              backgroundColor: "#e86e3c"
            });
            $('.tab').css({
              backgroundColor: "#3a8595"
            });
            $('.loginEmail-btn').css({
              backgroundColor: "#f0a180",
              color: "#ffffff"
            })
            $('.Confirm .loginEmail-btn').css({
              backgroundColor: "#e86e3c",
              color: "#e86e3c"
            })
            local = true;
          })

          dom.addEventListener('animationstart', function () {
            console.log("动画开始")

            $('.login-3').css({
              'opacity': '0',
            })
            $('.login-6').css({
              'opacity': '1',
            })
            $('.login-6').css('left', '310px')
            
            $('.login-img img').attr('src', './images/login-logo1.png');
            $('.login-in img').attr('src', './images/login.png');
            $('.p2').css('opacity', 1)
          })

          dom.addEventListener('animationiteration', function () {
            console.log("动画重复播放")
          })
        } else {

          $(this).removeClass('move1');
          $(this).addClass('move');
          var dom = $(".tab2")[0];
          dom.addEventListener('animationend', function () {
            console.log("动画结束")
            $(this).removeClass('tab2');
            $(this).addClass('tab3');
            $('.login-6').css({
              'opacity': '0',
            })
            $('.login-3').css({
              'opacity': '1',
            });
            $('.p1').css('zIndex', 0);
            $('.p2').css('zIndex', 1);
            $('.wrapper').css({
              backgroundColor: "#3a8595"
            });
            $('.tab').css({
              backgroundColor: "#e86e3c"
            });
            $('.loginEmail-btn').css({
              backgroundColor: "#7fb0ba",
              color: "#ffffff"
            })
            local = true;
          })

          dom.addEventListener('animationstart', function () {
            console.log("动画开始")
            $('.login-6').css('left', '120px')
            

            $('.login-img img').attr('src', './images/login-logo2.png');
            $('.login-in img').attr('src', './images/sign.png');
            $('.p2').css('opacity', 1)
          })

          dom.addEventListener('animationiteration', function () {
            console.log("动画重复播放")
          })
        }
      }

    })
  }




  rotate()
}(jQuery))