// $(document).ready(function() {
//     $("#cart").click(function() {
//         alert("After Loading Clicked");
//     });
// });

// $("#cart").click(function() {
//     alert("Clicked");
// });

$(document).ready(function() {
    var count = 0;
    var priceTotal = 0.00;

    $(".add-to-cart-1").on("click", function() {
        count++;
        // alert("times: "+count)
        $("#cartCount").text(count);
        var price1 = 1000.00;
        priceTotal += price1;
        $("#cartTotal").text(priceTotal);
    });
    $(".add-to-cart-2").on("click", function() {
        count++;
        // alert("times: "+count)
        var price2 = 600.00;
        priceTotal += price2;
        $("#cartCount").text(count);
        $("#cartTotal").text(priceTotal);
    });
    $(".add-to-cart-3").on("click", function() {
        count++;
        // alert("times: "+count)
        var price3 = 1200.00;
        priceTotal += price3;
        $("#cartCount").text(count);
        $("#cartTotal").text(priceTotal);
    });
    $(".add-to-cart-4").on("click", function() {
        count++;
        // alert("times: "+count)
        var price4 = 400.00;
        priceTotal += price4;
        $("#cartCount").text(count);
        $("#cartTotal").text(priceTotal);
    });



    // Hover 

    $(".col-1").hover(function() {
        $(".add-to-cart-1").toggle();
    });
    $(".col-2").hover(function() {
        $(".add-to-cart-2").toggle();
    });
    $(".col-3").hover(function() {
        $(".add-to-cart-3").toggle();
    });
    $(".col-4").hover(function() {
        $(".add-to-cart-4").toggle();
    });

    
});