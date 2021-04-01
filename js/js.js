$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $("#navBar").addClass("noTransparrent");
        } else {
            $("#navBar").removeClass("noTransparrent");
        }
    });

    $(document).ready(function () {
        $("a.scroll").on('click', function (event) {

            var hash = this.hash;

            $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800, function () { });

        });
    });

    $('#timer1').countTo(250);
    $('#timer2').countTo(100);
    $('#timer3').countTo(10000);
    $('#timer4').countTo(30);

    $(function () {
        $("#commentForm").validate();
    });

    ('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800)

});