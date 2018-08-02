(function () {

    $(document).foundation();

    $("#hamburger").on("click", function () {
        $(this).toggleClass("active");
        //$('body').toggleClass('curtain-menu-open');
        let first = 'curtain-menu-open';
        let second = 'opening';
        const box = document.querySelector('body');
        if(box.classList.contains(first)) {
          // switch them
          [first, second] = [second, first];
        }

        box.classList.toggle(first);
        setTimeout(() => {
          box.classList.toggle(second);
        }, 300);
    });

    


    // $(function() {
    //   $(window).scroll(function() {
    //     var winTop = $(window).scrollTop();
    //     if (winTop >= 30) {
    //       $("header").addClass("position-fixed-top  addshadow");
    //     } else{
    //       $("header").removeClass("position-fixed-top addshadow");
    //     }
    //   });
    // });

})();
