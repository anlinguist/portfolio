window.onscroll = function() { 
    scrollFunction() 
}; 
  
function scrollFunction() { 
    if (document.body.scrollTop > 0 || 
        document.documentElement.scrollTop > 0) 
    { 
        document.getElementById("header") 
                    .style.padding = "25px 10px"; 
          
        document.getElementById("site-title") 
                    .style.fontSize = "40px";
        var all = document.getElementsByClassName('header-items');
        for (var i = 0; i < all.length; i++) {
            all[i].style.fontSize = '14px';
        }
        document.getElementById("self-photo") 
                    .style.height = "100px";
        document.getElementById("main")
                    .style.marginTop = "180px"
        document.getElementById("sub-title")
                    .style.fontSize = "18px"
        // document.getElementById("header-left")
        //             .style.flexDirection = "row"
        document.getElementById("header-left")
                    .style.marginLeft = "0"
    }  
    else { 
        document.getElementById("header") 
                    .style.padding = "90px 10px"; 
                      
        document.getElementById("site-title") 
                    .style.fontSize = "50px";
        var all = document.getElementsByClassName('header-items');
        for (var i = 0; i < all.length; i++) {
            all[i].style.fontSize = '20px';
        }
        document.getElementById("self-photo") 
                    .style.height = "200px";
        document.getElementById("main")
                    .style.marginTop = "390px"
        document.getElementById("sub-title")
                    .style.fontSize = "24px"
        // document.getElementById("header-left")
        //             .style.flexDirection = "column"
        document.getElementById("header-left")
                    .style.marginLeft = "calc(50vw - 315px)"
                    
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