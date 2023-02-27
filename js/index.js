$(document).ready(function () {
    document.documentElement.scrollTop = 0;
    // #cookies-box
    // #cookies-box span
    setTimeout(function () {
        $("#cookies-box").removeClass("zero-height")
    }, 2000);
    $($("#cookies-box span")).click(function () {
        $("#cookies-box").addClass("zero-height");
    });

    setTimeout(function () {
        $("#follow-me").removeClass("zero-height")
    }, 180000);
    $($("#follow-me")).click(function () {
        $("#follow-me").addClass("zero-height");
    });

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
    })
    $($("#services #in-services .icon")).click(function () {
        $("#services").addClass("zero-height")
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
    })
    $($("#one-navbar-box")).mouseleave(function () {
        $("#one-navbar-box").addClass("zero-height");
    })
    // $($("#one-navbar")).mouseleave(function () {
    //     $("#one-navbar-box").addClass("zero-height");
    // })

    // two
    $($("#two-navbar")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").removeClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
    })
    $($("#two-navbar-box")).mouseleave(function () {
        $("#two-navbar-box").addClass("zero-height");
    })
    // $($("#two-navbar")).mouseleave(function () {
    //     $("#two-navbar-box").addClass("zero-height");
    // })

    // three
    $($("#three-navbar")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").removeClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
    })
    $($("#three-navbar-box")).mouseleave(function () {
        $("#three-navbar-box").addClass("zero-height");
    })
    // $($("#three-navbar")).mouseleave(function () {
    //     $("#three-navbar-box").addClass("zero-height");
    // })

    // four
    $($("#four-navbar")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").removeClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
    })
    $($("#four-navbar-box")).mouseleave(function () {
        $("#four-navbar-box").addClass("zero-height");
    })
    // $($("#four-navbar")).mouseleave(function () {
    //     $("#four-navbar-box").addClass("zero-height");
    // })

    // five
    $($("#five-navbar")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").removeClass("zero-height");
    })
    $($("#five-navbar-box")).mouseleave(function () {
        $("#five-navbar-box").addClass("zero-height");
    })
    // $($("#five-navbar")).mouseleave(function () {
    //     $("#five-navbar-box").addClass("zero-height");
    // })
    // shop
    $($("#shop")).mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");

        ($("#shop li:first-child")).mouseenter(function () {
            $("#shop li p i:last-child").addClass("bi-chevron-up");
            $("#shop li p i:last-child").removeClass("bi-chevron-down");
        })
        $($("#shop li:first-child")).mouseleave(function () {
            $("#shop li p i:last-child").removeClass("bi-chevron-up");
            $("#shop li p i:last-child").addClass("bi-chevron-down");
        })
    })

    // black navbar to close navbar
    $("#black-navbar").mouseenter(function () {
        $("#one-navbar-box").addClass("zero-height");
        $("#two-navbar-box").addClass("zero-height");
        $("#three-navbar-box").addClass("zero-height");
        $("#four-navbar-box").addClass("zero-height");
        $("#five-navbar-box").addClass("zero-height");
    })
    //footer search box
    $($("#bar")).mouseenter(function () {
        $("#hide-search").removeClass("zero-height");
    })
    $($("#bar")).mouseleave(function () {
        $("#hide-search").addClass("zero-height");
    })
});