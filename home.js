(function ($) {
  //滑动时头部变化
  $(function () {
    $('body').on('touchmove',function () {
      //当收搜状态时禁止touchmove事件
      if ($('.touchweb_components-searchList').css('display') === 'block') {
        $('.touchweb-com_header').find('a.header_logo,a.header_area').css({
          width: 0,
        })
      } else {
        $('.touchweb-com_header').find('a.header_logo').css({
          width:'12.8vw',
        })
        $('.touchweb-com_header').find('a.header_area').css({
          width:'6.4vw',
        })
      }
      const s1 = $('html').scrollTop()
      if (s1 > 0) {
        $('.touchweb-com_header').addClass('fixed').find('a.header_logo,a.header_area').css({
          width: 0,
        })
        $('.touchweb-com_header').find('.right .iconfont').css({color:'#ff3c3c'})
      } else if (s1 === 0) {
        $('.touchweb-com_header').removeClass('fixed').find('a.header_logo').addClass('header_logo_show')
        $('.touchweb-com_header').find('a.header_area').addClass('header_area_show')
        $('.touchweb-com_header').find('.right .iconfont').css({color:'#fff'})
      }
    })
    //头部input点击时的一些变化
    $('#searchForm input').on('touchend', function () {
      $('.search_fixed_mask').css('display','block')
      $('.touchweb-com_header').addClass('search_show').find('.i_back').css({
        display: 'block'
      })
      $('a.header_logo, a.header_area').css({
        width:0
      })
      if ($('.touchweb_components-searchList ul').length-1) {
        $('.clear_history').css({
          display: 'block'
        })
      }
    })
    //搜索后点击返回
    $('.i_back').on('tap', function () {
      $('.search_fixed_mask').css('display','none')
      $('.touchweb-com_header').removeClass('search_show').find('.i_back').css({
        display: ''
      })
      $('#searchForm input').val("")
      //搜索后点击返回进行滚动条高度判断根据判断条件返回不同的状态
      const s2 = $('html').scrollTop()
      if (s2 > 0) {
        $('.touchweb-com_header').addClass('fixed').find('a.header_logo,a.header_area').css({
          width: 0,
        })
        $('.touchweb-com_header').find('.right .iconfont').css({color:'#ff3c3c'})
      } else if (s2 === 0) {
        $('.touchweb-com_header').removeClass('fixed').find('a.header_logo').css('width','').addClass('header_logo_show')
        $('.touchweb-com_header').find('a.header_area').css('width','').addClass('header_area_show')
        $('.touchweb-com_header').find('.right .iconfont').css({color:'#fff'})
      }
    })
    //点击蒙版进行判断返回进行滚动条高度判断根据判断条件返回不同的状态
    $('.search_fixed_mask').on('tap', function () {
      $(this).css('display','none')
      $('.search_fixed_mask').css('display','none')
      $('.touchweb-com_header').removeClass('search_show').find('.i_back').css({
        display: ''
      })
      $('#searchForm input').val("")
      const s3 = $('html').scrollTop()
      console.log(s3)
      console.log(121212)
      if (s3 > 0) {
        $('.touchweb-com_header').addClass('fixed').find('a.header_logo,a.header_area').css({
          width: 0,
        })
        $('.touchweb-com_header').find('.right .iconfont').css({color:'#ff3c3c'})
      } else if (s3 === 0) {
        $('.touchweb-com_header').removeClass('fixed').find('a.header_logo').css({width: ''}).addClass('header_logo_show')
        $('.touchweb-com_header').find('a.header_area').css({width: ''}).addClass('header_area_show')
        $('.touchweb-com_header').find('.right .iconfont').css({color:'#fff'})
      }
    })
    //点击搜索将内容添加到对应的历史记录中去
    $('.btn_search').on('tap', function () {
      if ($('#searchForm input').val()) {
        const txt = $('#searchForm input').val()
        $('.touchweb_components-searchList ul').appendTo('<li class="frw"><a class="link_text" href="javascript:;"><span class="icon"><i class="iconfont icon-history"></i></span><span class="text">'+ txt +'</span><span class="i_arror"><i class="iconfont icon-next"></i></span></a></li>')
        $('#searchForm input').val("")
        if ($('.touchweb_components-searchList ul').length) {
          $('.clear_history').css({
            display: 'block'
          })
        }
      } else {
        $('#searchForm input').val("")
      } 
    })
    $('.tags .item').on('tap', function () {
      const txt1 = $(this).text()
      $('.touchweb_components-searchList ul').append('<li class="frw"><a class="link_text" href="javascript:;"><span class="icon"><i class="iconfont icon-history"></i></span><span class="text">'+ txt1 +'</span><span class="i_arror"><i class="iconfont icon-next"></i></span></a></li>')
      console.log(($('.touchweb_components-searchList ul').length-1))
      if ($('.touchweb_components-searchList ul').length) {
        $('.clear_history').css({
          display: 'block'
        })
      }
    })
    //点击清空历史记录
    $('.clear_history').on('tap', function () {
      $('.touchweb_components-searchList ul').empty()
      $('.clear_history').css({
        display: 'none'
      })
    })
  })
// 头部事件完成
//轮播事件
  $(function () {
    new Swiper('.swiper1', {
      loop: true, //循环模式
      autoplay: {
        disableOnInteraction: false
        //当设置为false时，用户操作之后（swipes,arrow以及pagination 点击）
        //autoplay不会被禁掉，用户操作之后每次都会重新启动autoplay
      },
      //如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
    //小轮播事件
    let num = 0;let timer = null;
    let $li  = $('.slide-box').children('.text-item').eq(0);
    $('.slide-box').append($li.clone());
    let len = $('.slide-box').children('.text-item').length;
    function move () {
      num++;
      if (num === len ) {
        num =0;
        $('.slide-box').removeClass('scroll');
        $('.slide-box').css('margin-top', 0);
      } else {
        $('.slide-box').addClass('scroll');
      }
      $('.slide-box').css({
        'margin-top': '34' * -num
      })
      clearTimeout(timer);
      timer = setTimeout(move, 3000);
    }
    timer = setTimeout (move, 3000)
  })
  //swiper1
  $(function () {
    new Swiper('.swiper2', {
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      slidesPerView: 'auto',
    })
    //swiper2-5
    new Swiper('.sense-module-con1', {
      freeMode: true,
      slidesPerView: 'auto',
      freeModeMomentum: true,
      scrollbar: {
        el: '.swiper-scrollbar2',
      },
    })
    new Swiper('.sense-module-con2', {
      freeMode: true,
      slidesPerView: 'auto',
      freeModeMomentum: true,
      scrollbar: {
        el: '.swiper-scrollbar3',
      },
    })
    new Swiper('.sense-module-con3', {
      freeMode: true,
      slidesPerView: 'auto',
      freeModeMomentum: true,
      scrollbar: {
        el: '.swiper-scrollbar4',
      },
    })
    new Swiper('.sense-module-con4', {
      freeMode: true,
      slidesPerView: 'auto',
      freeModeMomentum: true,
      scrollbar: {
        el: '.swiper-scrollbar5',
      },
    })
    
    //触摸出现滚动条swiper1
    $('.rush-box,.sense-module-con').on('touchstart',function () {
      $('.scroll_show').addClass('cjdp')
    })
    $('.rush-box,.sense-module-con').on('touchend',function () {
      setTimeout(function() {
        $('.scroll_show').removeClass('cjdp')
      },2000)
    })
    //触摸出现滚动条swiper2...
    $('.sense-module-con').on('touchstart',function () {
      $(this).find('.swiper-scrollbar2').addClass('swiper-scroll2Show')
    })
    $('.sense-module-con').on('touchend',function () {
      setTimeout(() => {
        $(this).find('.swiper-scrollbar2').removeClass('swiper-scroll2Show')
      },1500)
    })
    //触摸出现滚动条swiper3...
    $('.sense-module-con').on('touchstart',function () {
      $(this).find('.qnm').addClass('swiper-scroll2Show')
    })
    $('.sense-module-con').on('touchend',function () {
      setTimeout(() => {
        $(this).find('.qnm').removeClass('swiper-scroll2Show')
      },1500)
    })
    //触摸出现滚动条swiper4...
    $('.sense-module-con').on('touchstart',function () {
      $(this).find('.qnmdb').addClass('swiper-scroll2Show')
    })
    $('.sense-module-con').on('touchend',function () {
      setTimeout(() => {
        $(this).find('.qnmdb').removeClass('swiper-scroll2Show')
      },1500)
    })
    //触摸出现滚动条swiper5...
    $('.sense-module-con').on('touchstart',function () {
      $(this).find('.qnmdby').addClass('swiper-scroll2Show')
    })
    $('.sense-module-con').on('touchend',function () {
      setTimeout(() => {
        $(this).find('.qnmdby').removeClass('swiper-scroll2Show')
      },1500)
    })
    //获取倒计时时间
    $(function () {
     function forMateDate (endDate) {
      let startDate = new Date();
      let diffTime = endDate - startDate;
      diffTime = parseInt(diffTime/1000); //得到总的秒数
      let s = diffTime%60 ; //得到转换分钟和小时后余下的秒数
      let m = parseInt(diffTime/60)%60; //得到转换小时后剩下的分钟数
      let h = parseInt(diffTime/3600) //得到小时
      $('.hour').text(h >= 10? h : '0' + h)
      $('.min').text(m >= 10? m : '0' + m)
      $('.sec').text(s >= 10? s : '0' + s)
     }
     setInterval(function () {
       forMateDate (new Date('2018/12/19'))
     }, 1000)
    })
  })
}) (Zepto)