$(document).ready(function () {
    document.documentElement.scrollTop = 0;
    // #cookies-box
    // #cookies-box span
    // setTimeout(function () {
    //     $("#cookies-box").removeClass("zero-height")
    // }, 2000);
    // $($("#cookies-box span")).click(function () {
    //     $("#cookies-box").addClass("zero-height");
    // });

    // setTimeout(function () {
    //     $("#follow-me").removeClass("zero-height")
    // }, 180000);
    // $($("#follow-me")).click(function () {
    //     $("#follow-me").addClass("zero-height");
    // });

    // First button "#one-black-navbar"
    // First button icon  "#one-black-navbar i:last-child"
    $($("#one-black-navbar")).click(function () {
        $("#one-black-navbar").toggleClass("black-navbar-active");
        $("#two-black-navbar").removeClass("black-navbar-active");

        $("#two-black-navbar i:last-child").removeClass("bi-chevron-up");
        $("#two-black-navbar i:last-child").addClass("bi-chevron-down");

        $("#Worldwide").addClass("zero-height");
        if ($("#one-black-navbar i:last-child").hasClass("bi-chevron-down")) {
            $("#one-black-navbar i:last-child").addClass("bi-chevron-up");
            $("#one-black-navbar i:last-child").removeClass("bi-chevron-down");
            $("#corporate-list").removeClass("zero-height");
        }
        else {
            $("#one-black-navbar i:last-child").addClass("bi-chevron-down");
            $("#one-black-navbar i:last-child").removeClass("bi-chevron-up");
            $("#corporate-list").addClass("zero-height");
        }
        ////////////////////////////////////////////////////////////////////
    });

    // Secend button "#two-black-navbar"
    // Secend button icon  "#two-black-navbar i:last-child"
    $($("#two-black-navbar")).click(function () {
        $("#two-black-navbar").toggleClass("black-navbar-active");
        $("#one-black-navbar").removeClass("black-navbar-active");

        $("#one-black-navbar i:last-child").removeClass("bi-chevron-up");
        $("#one-black-navbar i:last-child").addClass("bi-chevron-down");

        $("#corporate-list").addClass("zero-height");

        if ($("#two-black-navbar i:last-child").hasClass("bi-chevron-down")) {
            $("#two-black-navbar i:last-child").addClass("bi-chevron-up");
            $("#two-black-navbar i:last-child").removeClass("bi-chevron-down");
            $("#Worldwide").removeClass("zero-height");
        }
        else {
            $("#two-black-navbar i:last-child").addClass("bi-chevron-down");
            $("#two-black-navbar i:last-child").removeClass("bi-chevron-up");
            $("#Worldwide").addClass("zero-height");
        }
    });
    // #three-black-navbar
    ////////////////////////////////////////////////////////////////////////
    // services
    $($("#services-icon")).click(function () {
        $("#services").removeClass("zero-height")
        $("#services-mb").removeClass("zero-height")
    })
    $($(".icon-services")).click(function () {
        $("#services").addClass("zero-height")
        $("#services-mb").addClass("zero-height")
    })
    // go top site 
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 400) {
            $("#go-up-site").removeClass("zero-height")
        }
        else {
            $("#go-up-site").addClass("zero-height")
        }
    })
    $($("#go-up-site")).click(function () {
        document.documentElement.scrollTop = 0;
    })
    ////////// navbar
    // img
    $($("#logo")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
    })
    // one
    $($("#one-navbar")).mouseenter(function () {
        $("#one-navbar-box").removeClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
        $("#navbar-search-box").addClass("zero-height");
    })
    $($("#one-navbar-box")).mouseleave(function () {
        $("#one-navbar-box").addClass("zero-height");
    })
    // two
    $($("#two-navbar")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").removeClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
        $("#navbar-search-box").addClass("zero-height");
    })
    $($("#two-navbar-box")).mouseleave(function () {
        $("#two-navbar-box").addClass("zero-height");
    })
    // three
    $($("#three-navbar")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").removeClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
        $("#navbar-search-box").addClass("zero-height");
    })
    $($("#three-navbar-box")).mouseleave(function () {
        $("#three-navbar-box").addClass("zero-height");
    })
    // four
    $($("#four-navbar")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").removeClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
        $("#navbar-search-box").addClass("zero-height");
    })
    $($("#four-navbar-box")).mouseleave(function () {
        $("#four-navbar-box").addClass("zero-height");
    })
    // five
    $($("#five-navbar")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").removeClass("zero-height");
        $("#navbar-search-box").addClass("zero-height");
    })
    $($("#five-navbar-box")).mouseleave(function () {
        $("#five-navbar-box").addClass("zero-height");
    })
    // shop
    $($("#shop-shop")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
        $("#navbar-search-box").addClass("zero-height");

        ($("#shop li:first-child")).mouseenter(function () {
            $("#shop li p i:last-child").addClass("bi-chevron-up");
            $("#shop li p i:last-child").removeClass("bi-chevron-down");
        })
        $($("#shop li:first-child")).mouseleave(function () {
            $("#shop li p i:last-child").removeClass("bi-chevron-up");
            $("#shop li p i:last-child").addClass("bi-chevron-down");
        })
    })
    //search box
    $($("#search-top-icon")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
        $("#navbar-search-box").removeClass("zero-height");
    })
    $($("#navbar-search-box")).mouseleave(function () {
        $("#navbar-search-box").addClass("zero-height");
    })

    //navbar search box
    $($("#navbar-search")).mouseenter(function () {
        $("#hide-search-top").removeClass("zero-height");
    })
    $($("#navbar-search")).mouseleave(function () {
        $("#hide-search-top").addClass("zero-height");
    })
    // black navbar to close navbar
    $("#black-navbar").mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
        $("#navbar-search-box").addClass("zero-height");
    })

    //footer search box
    $($("#bar")).mouseenter(function () {
        $("#hide-search").removeClass("zero-height");
    })
    $($("#bar")).mouseleave(function () {
        $("#hide-search").addClass("zero-height");
    })
    //footer mobile
    // one 
    $($(".footer-mb-class")[0]).click(function () {
        $($(".answer")[0]).toggleClass("zero-height");
        $($(".answer")[1]).addClass("zero-height");
        $($(".answer")[2]).addClass("zero-height");
        $($(".answer")[3]).addClass("zero-height");
        $($(".answer")[4]).addClass("zero-height");

        if ($("#one-quest i").hasClass("bi-chevron-down")) {
            $("#one-quest i").addClass("bi-chevron-up");
            $("#one-quest i").removeClass("bi-chevron-down");

            $("#two-quest i").removeClass("bi-chevron-up");
            $("#two-quest i").addClass("bi-chevron-down");
            $("#three-quest i").removeClass("bi-chevron-up");
            $("#three-quest i").addClass("bi-chevron-down");
            $("#four-quest i").removeClass("bi-chevron-up");
            $("#four-quest i").addClass("bi-chevron-down");
            $("#five-quest i").removeClass("bi-chevron-up");
            $("#five-quest i").addClass("bi-chevron-down");
        }
        else {
            $("#one-quest i").addClass("bi-chevron-down");
            $("#one-quest i").removeClass("bi-chevron-up");
        }
    })
    // two 
    $($(".footer-mb-class")[1]).click(function () {
        $($(".answer")[0]).addClass("zero-height");
        $($(".answer")[1]).toggleClass("zero-height");
        $($(".answer")[2]).addClass("zero-height");
        $($(".answer")[3]).addClass("zero-height");
        $($(".answer")[4]).addClass("zero-height");

        if ($("#two-quest i").hasClass("bi-chevron-down")) {
            $("#two-quest i").addClass("bi-chevron-up");
            $("#two-quest i").removeClass("bi-chevron-down");

            $("#one-quest i").removeClass("bi-chevron-up");
            $("#one-quest i").addClass("bi-chevron-down");
            $("#three-quest i").removeClass("bi-chevron-up");
            $("#three-quest i").addClass("bi-chevron-down");
            $("#four-quest i").removeClass("bi-chevron-up");
            $("#four-quest i").addClass("bi-chevron-down");
            $("#five-quest i").removeClass("bi-chevron-up");
            $("#five-quest i").addClass("bi-chevron-down");
        }
        else {
            $("#two-quest i").addClass("bi-chevron-down");
            $("#two-quest i").removeClass("bi-chevron-up");
        }
    })
    // three
    $($(".footer-mb-class")[2]).click(function () {
        $($(".answer")[0]).addClass("zero-height");
        $($(".answer")[1]).addClass("zero-height");
        $($(".answer")[2]).toggleClass("zero-height");
        $($(".answer")[3]).addClass("zero-height");
        $($(".answer")[4]).addClass("zero-height");

        if ($("#three-quest i").hasClass("bi-chevron-down")) {
            $("#three-quest i").addClass("bi-chevron-up");
            $("#three-quest i").removeClass("bi-chevron-down");

            $("#one-quest i").removeClass("bi-chevron-up");
            $("#one-quest i").addClass("bi-chevron-down");
            $("#two-quest i").removeClass("bi-chevron-up");
            $("#two-quest i").addClass("bi-chevron-down");
            $("#four-quest i").removeClass("bi-chevron-up");
            $("#four-quest i").addClass("bi-chevron-down");
            $("#five-quest i").removeClass("bi-chevron-up");
            $("#five-quest i").addClass("bi-chevron-down");
        }
        else {
            $("#three-quest i").addClass("bi-chevron-down");
            $("#three-quest i").removeClass("bi-chevron-up");
        }
    })
    // four 
    $($(".footer-mb-class")[3]).click(function () {
        $($(".answer")[0]).addClass("zero-height");
        $($(".answer")[1]).addClass("zero-height");
        $($(".answer")[2]).addClass("zero-height");
        $($(".answer")[3]).toggleClass("zero-height");
        $($(".answer")[4]).addClass("zero-height");

        if ($("#four-quest i").hasClass("bi-chevron-down")) {
            $("#four-quest i").addClass("bi-chevron-up");
            $("#four-quest i").removeClass("bi-chevron-down");

            $("#one-quest i").removeClass("bi-chevron-up");
            $("#one-quest i").addClass("bi-chevron-down");
            $("#two-quest i").removeClass("bi-chevron-up");
            $("#two-quest i").addClass("bi-chevron-down");
            $("#three-quest i").removeClass("bi-chevron-up");
            $("#three-quest i").addClass("bi-chevron-down");
            $("#five-quest i").removeClass("bi-chevron-up");
            $("#five-quest i").addClass("bi-chevron-down");
        }
        else {
            $("#four-quest i").addClass("bi-chevron-down");
            $("#four-quest i").removeClass("bi-chevron-up");
        }
    })
    // five     
    $($(".footer-mb-class")[4]).click(function () {
        $($(".answer")[0]).addClass("zero-height");
        $($(".answer")[1]).addClass("zero-height");
        $($(".answer")[2]).addClass("zero-height");
        $($(".answer")[3]).addClass("zero-height");
        $($(".answer")[4]).toggleClass("zero-height");

        if ($("#five-quest i").hasClass("bi-chevron-down")) {
            $("#five-quest i").addClass("bi-chevron-up");
            $("#five-quest i").removeClass("bi-chevron-down");

            $("#one-quest i").removeClass("bi-chevron-up");
            $("#one-quest i").addClass("bi-chevron-down");
            $("#two-quest i").removeClass("bi-chevron-up");
            $("#two-quest i").addClass("bi-chevron-down");
            $("#three-quest i").removeClass("bi-chevron-up");
            $("#three-quest i").addClass("bi-chevron-down");
            $("#four-quest i").removeClass("bi-chevron-up");
            $("#four-quest i").addClass("bi-chevron-down");
        }
        else {
            $("#five-quest i").addClass("bi-chevron-down");
            $("#five-quest i").removeClass("bi-chevron-up");
        }
    })
});