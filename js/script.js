window.onscroll = function() { 
    scrollFunction() 
}; 
  
function scrollFunction() { 
    sw = document.body.clientWidth
    if (document.body.scrollTop > 0 || 
        document.documentElement.scrollTop > 0) 
    { 
        document.getElementById("header") 
                    .style.padding = "0px 10px"; 
        document.getElementById("site-title") 
                    .style.textAlign = "left";
        if (sw > 500) {
            document.getElementById("site-title") 
                        .style.fontSize = "20px";
            document.getElementById("sub-title")
                        .style.fontSize = "16px"
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
                    .style.marginTop = "130px"
        document.getElementById("header-left")
                    .style.left = "0"
        document.getElementById("header-left")
                    .style.transform = "translate(0%, -50%)"
        document.getElementById("header")
                    .style.height = "130px"
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
        document.getElementById("site-title") 
                    .style.textAlign = "center";
        if (sw > 500) {
            document.getElementById("site-title") 
                        .style.fontSize = "34px";
            document.getElementById("sub-title")
                        .style.fontSize = "26px"
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

document.getElementById("formname").addEventListener('input', function() { checkvalues() });
document.getElementById("formemail").addEventListener('input', function() { checkvalues() });
document.getElementById("formmsg").addEventListener('input', function() { checkvalues() });

function checkvalues() {
    subname = document.getElementById("formname").textContent
    subemail = document.getElementById("formemail").textContent
    subdesc = document.getElementById("formmsg").textContent
    validemail = validateEmail(subemail);
    if (subname != "" && subemail != "" && subdesc != "" && validemail==true) {
      document.getElementById("submit").disabled = false;
    }
    else {
        document.getElementById("submit").disabled = true;
    }
  }

function validateEmail(subemail) {
    expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    if (expression.test(subemail)) {
        return true
    }
    return false
}
    // check values during input
    // if values are good, enable the submit button

document.getElementById("submit").addEventListener("click", function() {sendtheticket()}, false)

async function sendtheticket() {
    name = document.getElementById('formname').textContent
  email = document.getElementById('formemail').textContent
  description = document.getElementById('formmsg').textContent
  issue = {
    'name': name,
    'email': email,
    'description': description
  }

  let postinfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(issue)
  }
  emailendpoint = 'https://us-central1-query-readefine.cloudfunctions.net/app/sendMail'
  let sentTicket = await fetch(emailendpoint, postinfo)
  .then(function(response) {
    return response.text();
  }).then(function(data) {
    return data
  })
  document.getElementById('formname').textContent = ""
  document.getElementById('formemail').textContent = ""
  document.getElementById('formmsg').textContent = ""
}