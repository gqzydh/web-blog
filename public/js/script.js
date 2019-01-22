/*
* 顶部导航
* 下拉隐藏
* 上拉出现
* */

$(function(){	
    var cubuk_seviye = $(document).scrollTop();
    var header_yuksekligi = $('.header-nav').outerHeight();

    $(window).scroll(function() {

        var kaydirma_cubugu = $(document).scrollTop();

        if (kaydirma_cubugu > header_yuksekligi){$('.header-nav').addClass('a-fadeoutT');} 
        else {$('.header-nav').removeClass('a-fadeoutT');}

        if (kaydirma_cubugu > cubuk_seviye){$('.header-nav').removeClass('a-fadeinT');} 
        else {$('.header-nav').addClass('a-fadeinT');}				

        cubuk_seviye = $(document).scrollTop();	
     });
});

/*
*  时间
* */
$(function(){
  var clock = $('#clock'),
    ampm = clock.find('.ampm'),
    digit_to_name = 'zero one two three four five six seven eight nine'.split(' '),
    weekday_names = '周一 周二 周三 周四 周五 周六 周日'.split(' '),
    digits = {};

    // Positions for the hours, minutes, and seconds
    var positions = [
        'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
    ];

  // Generate the digits with the needed markup,
  // and add them to the clock

  var digit_holder = clock.find('.digits');

  $.each(positions, function(){

    if(this == ':'){
      digit_holder.append('<div class="dots">');
    }
    else{

      var pos = $('<div>');

      for(var i=1; i<8; i++){
        pos.append('<span class="d' + i + '">');
    }

      // Set the digits as key:value pairs in the digits object
      digits[this] = pos;

      // Add the digit elements to the page
      digit_holder.append(pos);
    }

  });

  // Add the weekday names

 
    weekday_holder = clock.find('.weekdays');

  $.each(weekday_names, function(){
    weekday_holder.append('<span>' + this + '</span>');
  });

    var weekdays = clock.find('.weekdays span');
   
  // 每秒钟运行一个计时器并更新时钟
  (function update_time(){

    // Use moment.js to output the current time as a string
    // hh is for the hours in 12-hour format,
    // mm - minutes, ss-seconds (all with leading zeroes),
    // d is for day of week and A is for AM/PM

    var now = moment().format("hhmmssdA");

    digits.h1.attr('class', digit_to_name[now[0]]);
    digits.h2.attr('class', digit_to_name[now[1]]);
    digits.m1.attr('class', digit_to_name[now[2]]);
    digits.m2.attr('class', digit_to_name[now[3]]);
    digits.s1.attr('class', digit_to_name[now[4]]);
    digits.s2.attr('class', digit_to_name[now[5]]);

    // The library returns Sunday as the first day of the week.
    // Stupid, I know. Lets shift all the days one position down, 
    // and make Sunday last

    var dow = now[6];
    // var am_pm = now[7]+now[8]
    // console.log("===", ampm);
    // if(am_pm == "PM"){
    //  ampm.text("上午");
    // }else{
    //  ampm.text("下午");
    // }  

    //console.log("===", dow);
    dow--;
    
    // Sunday!
    if(dow < 0){
      // Make it last
      dow = 6;
    }

    // Mark the active day of the week
    weekdays.removeClass('active').eq(dow).addClass('active');

    // Set the am/pm text:
    //ampm.text(now[7]+now[8]);

//console.log("===", now[7]+now[8]);
    // Is there an alarm set?
    setTimeout(update_time, 1000);

  })();

    var datamda = moment().format('MM/DD A');
        ampm.text(datamda);

    var meridiems = moment().format('A');
        if(meridiems == "晚上"){
            clock.toggleClass('light dark');
        }





  // Switch the theme
  // $('#switch-theme').click(function(){
  //   clock.toggleClass('light dark');
  // });

});