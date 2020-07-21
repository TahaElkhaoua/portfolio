!function(e,n){e.sendMessage=async function(){var e=n.querySelector("#sent"),a=n.querySelector(".contact__container"),t=document.querySelector("#name").value,o=document.querySelector("#email").value,c=document.querySelector("#message").value;a.classList.add("contact__container--folded"),e.value="sending...",e.disabled="true";var l=new URLSearchParams;l.append("name",t),l.append("email",o),l.append("message",c);var r=await(await fetch("/sendMail",{method:"POST",body:l})).text();e.value=r},e.scrollToElement=function(e){n.querySelector(e).scrollIntoView()},e.openUrl=function(e){window.open(e)}}(window,document);
// (function(win, doc){

//     win.sendMessage = async function(){
//         //Style
//         var submitBtn = doc.querySelector('#sent');
//         var content = doc.querySelector('.contact__container');

//         var name = document.querySelector('#name').value;
//         var email = document.querySelector('#email').value;
//         var message = document.querySelector('#message').value;

//         content.classList.add("contact__container--folded");

//         submitBtn.value = "sending...";
//         submitBtn.disabled = "true";
//         //Functionality

//         var data = new URLSearchParams();

//         data.append('name', name);
//         data.append('email', email);
//         data.append('message', message);

//       var res = await (await fetch('/sendMail', {
//         method: 'POST',
//         body: data
//       })).text(); 
//         submitBtn.value = res;
//     }
//     win.scrollToElement = function(element){
//         var ele = doc.querySelector(element);
//         ele.scrollIntoView();
//     }
//     win.openUrl = function(customUrl){
//         window.open(customUrl);
//     }
// })(window, document);

