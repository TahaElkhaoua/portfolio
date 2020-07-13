(function(win, doc){

    win.sendMessage = function(){
        //Style
        var submitBtn = doc.querySelector('#sent');
        var content = doc.querySelector('.contact__container');

        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var message = document.querySelector('#message').value;

        content.classList.add("contact__container--folded");

        submitBtn.value = "sending...";
        submitBtn.disabled = "true";
        //Functionality

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            this.responseText;
            submitBtn.value = "Message Sent";
          }else{
            submitBtn.value = "Message not sent try again!!";
          }
        };
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.open("POST", "{SEND MESSAGE URL}", true);
        xhttp.send("name="+name+"&email="+email+"&message="+message);

    }
    win.scrollToElement = function(element){
        var ele = doc.querySelector(element);
        ele.scrollIntoView();
    }
    win.openUrl = function(customUrl){
        window.open(customUrl);
    }
})(window, document);

