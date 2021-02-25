window.onscroll = function() { 
    scrollFunction() 
}; 
  
function scrollFunction() { 
    sw = document.body.clientWidth
    if (document.body.scrollTop > 0 || 
        document.documentElement.scrollTop > 0) 
    { 
        document.getElementById("header") 
                    .style.padding = "25px 10px"; 
        if (sw > 500) {
            document.getElementById("site-title") 
                        .style.fontSize = "2vw";
            document.getElementById("sub-title")
                        .style.fontSize = "1vw"
        }
        else {
            document.getElementById("site-title") 
                        .style.fontSize = "6vw";
            document.getElementById("sub-title")
                        .style.fontSize = "3vw"
        }
        var all = document.getElementsByClassName('header-items');
        for (var i = 0; i < all.length; i++) {
            all[i].style.fontSize = '14px';
        }
        document.getElementById("self-photo") 
                    .style.height = "100px";
        document.getElementById("main")
                    .style.marginTop = "180px"
        document.getElementById("header-left")
                    .style.left = "0"
        document.getElementById("header-left")
                    .style.transform = "translate(0%, -50%)"
        document.getElementById("header")
                    .style.height = "180px"
    }  
    else { 
        document.getElementById("header") 
                    .style.padding = "90px 10px"; 
                      
        var all = document.getElementsByClassName('header-items');
        for (var i = 0; i < all.length; i++) {
            all[i].style.fontSize = '20px';
        }
        document.getElementById("self-photo") 
                    .style.height = "200px";
        document.getElementById("main")
                    .style.marginTop = "390px"
        if (sw > 500) {
            document.getElementById("site-title") 
                        .style.fontSize = "4vw";
            document.getElementById("sub-title")
                        .style.fontSize = "2vw"
        }
        else {
            document.getElementById("site-title") 
                        .style.fontSize = "8vw";
            document.getElementById("sub-title")
                        .style.fontSize = "4vw"
        }
        // document.getElementById("header-left")
        //             .style.flexDirection = "column"
        document.getElementById("header-left")
                    .style.left = "50%"  
        document.getElementById("header-left")
                    .style.transform = "translate(-50%, -50%)"
        document.getElementById("header")
                    .style.height = "380px"
                    
    } 
}


    // check values during input
    // if values are good, enable the submit button

document.getElementById("submit").addEventListener("click", function() {sendtheticket()}, false)

function sendtheticket() {
    // first, replace the submit button with the loader
    // gather name
    // gather email
    // gather message
    // send issue to server
    // server will respond with status
    // replace the loader with submit
    // if sent, show success message
    // if not send, show error message
    // clear values




}