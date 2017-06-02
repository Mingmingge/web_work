/*tab选项卡切换*/
 window.onload = function(){
            $(".fuli").mouseenter(
                    function(){
                        $(this).addClass("cur").children(".menu").show().parent().siblings(".fuli").children(".menu").hide();
                    }
                );
            $(".fuli").mouseleave(
                    function(){
                        $(this).removeClass("cur").children(".menu").hide();
                    }
                );
           $(".qie a").mouseenter(
                    function(){
                        $(this).addClass("cur").siblings("a").removeClass("cur").parent(".qie").siblings('.bd').eq($(this).index()).show().siblings('.bd').hide();
                    }
                );
          
            wufeng(20);
      
    }