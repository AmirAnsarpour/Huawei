$(document).ready(function () {
    // #cookies-box
    // #cookies-box span
    setTimeout(function () {
        $("#cookies-box").removeClass("zero-height")
    }, 2000);
    $($("#cookies-box span")).click(function () {
        $("#cookies-box").addClass("zero-height");
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

});