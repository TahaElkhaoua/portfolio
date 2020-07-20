(function(win, doc){

    win.sendMessage = async function(){
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

        var data = new URLSearchParams();

        data.append('name', name);
        data.append('email', email);
        data.append('message', message);

      var res = await (await fetch('/sendMail', {
        method: 'POST',
        body: data
      })).text(); 
        submitBtn.value = res;
    }
    win.scrollToElement = function(element){
        var ele = doc.querySelector(element);
        ele.scrollIntoView();
    }
    win.openUrl = function(customUrl){
        window.open(customUrl);
    }
})(window, document);

