$(".btn").click(function(){
    var statName = $(this).text().toLowerCase();
    var prevStatName = $(".btn-active").text().toLowerCase();

    $(".box__stat--current-" + statName).removeClass("display-none");
    $(".box__stat--previous-" + statName).removeClass("display-none")
    
    $(".btn-active").removeClass("btn-active");
    $(".box__stat--current-" + prevStatName).addClass("display-none");
    $(".box__stat--previous-" + prevStatName).addClass("display-none")
    
    $(this).addClass("btn-active");
})