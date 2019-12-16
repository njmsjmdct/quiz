$(function(){
    
    
    function randomcolor(){
                var boxcolor = ['#f2508b', '#0ec4d9', '#f29949'];
               return boxcolor[Math.floor(Math.random()*3)];
            };
    
    
    function randompos(){
        return Math.floor(Math.random()*-500)+"px";
    }
    function randompos2(){
        return Math.floor(Math.random()*500)+"px";
    }
    
    
    function addbox(){
        $('.box').css('display', 'block');
        $('.box1').css('background-color', randomcolor());
        $('.box2').css('background-color', randomcolor());
        $('.box3').css('background-color', randomcolor());
        $('.box4').css('background-color', randomcolor());
        $('.box5').css('background-color', randomcolor());
        $('.box6').css('background-color', randomcolor());
        $('.box7').css('background-color', randomcolor());
        $('.box8').css('background-color', randomcolor());
        $('.box9').css('background-color', randomcolor());
        $('.box10').css('background-color', randomcolor());
        $('.box11').css('background-color', randomcolor());
        $('.box12').css('background-color', randomcolor());
        $('.box13').css('background-color', randomcolor());
        $('.box14').css('background-color', randomcolor());
        $('.box15').css('background-color', randomcolor());
        $('.box16').css('background-color', randomcolor());
        $('.box17').css('background-color', randomcolor());
        $('.box18').css('background-color', randomcolor());
        $('.box19').css('background-color', randomcolor());
        $('.box20').css('background-color', randomcolor());
        $('.box21').css('background-color', randomcolor());
        $('.box22').css('background-color', randomcolor());
        $('.box23').css('background-color', randomcolor());
        $('.box24').css('background-color', randomcolor());
        $('.box25').css('background-color', randomcolor());
        $('.box26').css('background-color', randomcolor());
        $('.box27').css('background-color', randomcolor());
        $('.box28').css('background-color', randomcolor());
        $('.box29').css('background-color', randomcolor());
        $('.box30').css('background-color', randomcolor());
        
        $('.box1').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box1').fadeOut(300);
        });
        $('.box2').animate({left: randompos2(), top: randompos()}, 500, function(){
            $('.box2').fadeOut(300);
        });
        $('.box3').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box3').fadeOut(300);
        });
        $('.box4').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box4').fadeOut(300);
        });
        $('.box5').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box5').fadeOut(300);
        });
        $('.box6').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box6').fadeOut(300);
        });
        $('.box7').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box7').fadeOut(300);
        });
        $('.box8').animate({left: randompos2(), top: randompos2()}, 500, function(){
            $('.box8').fadeOut(300);
        });
        $('.box9').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box9').fadeOut(300);
        });
        $('.box10').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box10').fadeOut(300);
        });
        $('.box11').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box11').fadeOut(300);
        });
        $('.box12').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box12').fadeOut(300);
        });
        $('.box13').animate({left: randompos2(), top: randompos2()}, 500, function(){
            $('.box13').fadeOut(300);
        });
        $('.box14').animate({left: randompos2(), top: randompos()}, 500, function(){
            $('.box14').fadeOut(300);
        });
        $('.box15').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box15').fadeOut(300);
        });
        $('.box16').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box16').fadeOut(300);
        });
        $('.box17').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box17').fadeOut(300);
        });
        $('.box18').animate({left: randompos2(), top: randompos2()}, 500, function(){
            $('.box18').fadeOut(300);
        });
        $('.box19').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box19').fadeOut(300);
        });
        $('.box20').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box20').fadeOut(300);
        });
        $('.box21').animate({left: randompos2(), top: randompos2()}, 500, function(){
            $('.box21').fadeOut(300);
        });
        $('.box22').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box22').fadeOut(300);
        });
        $('.box23').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box23').fadeOut(300);
        });
        $('.box24').animate({left: randompos2(), top: randompos()}, 500, function(){
            $('.box24').fadeOut(300);
        });
        $('.box25').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box25').fadeOut(300);
        });
        $('.box26').animate({left: randompos2(), top: randompos2()}, 500, function(){
            $('.box26').fadeOut(300);
        });
        $('.box27').animate({left: randompos(), top: randompos()}, 500, function(){
            $('.box27').fadeOut(300);
        });
        $('.box28').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box28').fadeOut(300);
        });
        $('.box29').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box29').fadeOut(300);
        });
        $('.box30').animate({left: randompos(), top: randompos2()}, 500, function(){
            $('.box30').fadeOut(300);
        });
    }
    
    
    
//    console.log(addbox());
            
    
    $('.quiz-btn').click(function(){
        
        var answer = $('#answer').val();
        var img = $('.quiz-box');
        
        
        if( answer == "start" && img.hasClass('q1') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-1.jpg)');
            
            $('#answer').val("");
            
            
            img.removeClass('q1');
            img.addClass('q2');
        }
        
        
        if (answer == "ol" && img.hasClass('q2') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-2.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q2');
            img.addClass('q3');
            
            
        }
        
        if (answer == "h1" && img.hasClass('q3') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-3.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q3');
            img.addClass('q4');
            
        }
        
        if (answer == "br" && img.hasClass('q4') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-4.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q4');
            img.addClass('q5');
            
        }
        
        if (answer == "alt" && img.hasClass('q5') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-5.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q5');
            img.addClass('q6');
            
        }
        
        if (answer == "2" && img.hasClass('q6') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-6.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q6');
            img.addClass('q7');
            
        }
        
        if (answer == "예" && img.hasClass('q7') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-7.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q7');
            img.addClass('q8');
            
        }
        
        if (answer == "<!---->" && img.hasClass('q8') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-8.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q8');
            img.addClass('q9');
            
        }
        
        if (answer == "<!DOCTYPE html>" && img.hasClass('q9') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-9.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q9');
            img.addClass('q10');
            
        }
        
        if (answer == "loop" && img.hasClass('q10') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-10.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q10');
            img.addClass('q11');
            
        }
        
        
        if (answer == "_blank" && img.hasClass('q11') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-11.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q11');
            img.addClass('q12');
            
        }
        
        if (answer == "4" && img.hasClass('q12') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-12.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q12');
            img.addClass('q13');
            
        }
        
        if (answer == "2" && img.hasClass('q13') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-13.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q13');
            img.addClass('q14');
            
        }
        
        if (answer == "font-weight" && img.hasClass('q14') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-14.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q14');
            img.addClass('q15');
            
        }
        
        if (answer == "transition" && img.hasClass('q15') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-15.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q15');
            img.addClass('q16');
            
        }
        
        if (answer == "transform:rotate(-15deg);" && img.hasClass('q16') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-16.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q16');
            img.addClass('q17');
            
        }
        
        if (answer == "9px" && img.hasClass('q17') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-17.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q17');
            img.addClass('q18');
            
        }
        
        if (answer == "20px" && img.hasClass('q18') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-18.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q18');
            img.addClass('q19');
            
        }
        
        if (answer == "7.5px" && img.hasClass('q19') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-19.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q19');
            img.addClass('q20');
            
        }
        
        if (answer == "inline-block" && img.hasClass('q20') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-20.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q20');
            img.addClass('q21');
            
        }
        
        if (answer == "text-indent" && img.hasClass('q21') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-21.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q21');
            img.addClass('q22');
            
        }
        
        if (answer == "transform-origin:100% 100%;" && img.hasClass('q22') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-22.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q22');
            img.addClass('q23');
            
        }
        
        if (answer == "transition-delay" && img.hasClass('q23') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-23.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q23');
            img.addClass('q24');
            
        }
        
        if (answer == "background-repeat" && img.hasClass('q24') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-24.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q24');
            img.addClass('q25');
            
        }
        
        if (answer == "padding:15px 10px 12px 20px;" && img.hasClass('q25') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-25.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q25');
            img.addClass('q26');
            
        }
        
        
        if (answer == "*" && img.hasClass('q26') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-26.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q26');
            img.addClass('q27');
            
        }
        
        if (answer == "border-color:transparent transparent #000 transparent;" && img.hasClass('q27') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-27.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q27');
            img.addClass('q28');
            
        }
        
        if (answer == "아니오" && img.hasClass('q28') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-28.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q28');
            img.addClass('q29');
            
        }
        
        if (answer == "red" && img.hasClass('q29') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-29.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q29');
            img.addClass('q30');
            
        }
        
        if (answer == "2" && img.hasClass('q30') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-30.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q30');
            img.addClass('q31');
            
        }
        
        if (answer == "," && img.hasClass('q31') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-31.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q31');
            img.addClass('q32');
            
        }
        
        if (answer == "JavaScript" && img.hasClass('q32') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-32.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q32');
            img.addClass('q33');
            
        }
        
        if (answer == "예" && img.hasClass('q33') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-33.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q33');
            img.addClass('q34');
            
        }
        
        if (answer == "$" && img.hasClass('q34') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-34.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q34');
            img.addClass('q35');
            
        }
        
        if (answer == "2" && img.hasClass('q35') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-35.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q35');
            img.addClass('q36');
            
        }
        
        if (answer == "3" && img.hasClass('q36') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-36.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q36');
            img.addClass('q37');
            
        }
        
        if (answer == "show()" && img.hasClass('q37') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-37.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q37');
            img.addClass('q38');
            
        }
        
        if (answer == "toggleClass()" && img.hasClass('q38') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-38.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q38');
            img.addClass('q39');
            
        }
        
        if (answer == "hasClass()" && img.hasClass('q39') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-39.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q39');
            img.addClass('q40');
            
        }
        
        if (answer == "$(document).ready()" && img.hasClass('q40') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-40.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q40');
            img.addClass('q41');
            
        }
        
        if (answer == "children()" && img.hasClass('q41') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-41.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q41');
            img.addClass('q42');
            
        }
        
        if (answer == "1" && img.hasClass('q42') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-42.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q42');
            img.addClass('q43');
            
        }
        
        if (answer == "index()" && img.hasClass('q43') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-43.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q43');
            img.addClass('q44');
            
        }
        
        if (answer == "stop()" && img.hasClass('q44') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-44.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q44');
            img.addClass('q45');
            
        }
        
        if (answer == "mediaquery" && img.hasClass('q45') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-45.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q45');
            img.addClass('q46');
            
        }
        
        if (answer == "alert()" && img.hasClass('q46') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-46.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q46');
            img.addClass('q47');
            
        }
        
        if (answer == "cursor" && img.hasClass('q47') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-47.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q47');
            img.addClass('q48');
            
        }
        
        if (answer == "왼쪽-10px" && img.hasClass('q48') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-48.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q48');
            img.addClass('q49');
            
        }
        
        if (answer == ":last-child" && img.hasClass('q49') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-49.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q49');
            img.addClass('q50');
            
        }
        
        if (answer == ":nth-child(even)" && img.hasClass('q50') ){
            
            alert('정답입니다.');
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-50.jpg)');
            
            $('#answer').val("");
            
            img.removeClass('q50');
            img.addClass('q51');
            
        }
        
        if (answer == "placeholder" && img.hasClass('q51') ){
            
            addbox();
            
            $('.quiz-box').css('background-image', 'url(./images/quiz-51.jpg)');
            
            $('#answer').val("축하합니다!");
            
            img.removeClass('q51');
            img.addClass('q52');
            
            
        }
        
    });
    
    
    
    
    
});
