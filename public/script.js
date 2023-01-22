$(document).ready(function () {
    // Your code here
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
        if (width >= 85) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            $("#myBar").html('ÚLTIMAS VAGAS <b>' + width + '%');
        }
    }

    var countDownDate = new Date().getTime() + 15 * 60 * 1000;
    var x = setInterval(function () {

        var now = new Date().getTime();
        var distance = countDownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);



        hours < 10 ? hours = '0' + hours : hours;
        minutes < 10 ? minutes = '0' + minutes : minutes;
        seconds < 10 ? seconds = '0' + seconds : seconds;



        $("#hora").html(hours);
        $("#minuto").html(minutes);
        $("#segundos").html(seconds);

        /* animate timer slide down */

        if (distance < 0) {
            clearInterval(x);
            $("#hora").html("00");
            $("#minuto").html("00");
            $("#segundos").html("00");
        }
    }, 1000);
})
function showListContent(el) {
    var $this = $(el);

    /* check if el has border radius and set only top radius as 20px */
    if ($this.parent().find('.list-content').css('border-radius') == '20px 20px 0px 0px') {
        $this.parent().find('.list-content').css('border-radius', '20px 20px 0px 0px');
    } else {
        $this.parent().find('.list-content').css('border-radius', '20px');
    }

    $this.parent().find('.list-content').slideToggle();

    if ($this.parent().find('i').css('transform') == 'none') {
        $this.parent().find('i').css('transform', 'rotate(180deg)');
    } else {
        $this.parent().find('i').css('transform', 'none');
    }
    $this.find('.list-icon').toggleClass('fa-minus');
}