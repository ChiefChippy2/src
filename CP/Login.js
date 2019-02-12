 function start() {
      gapi.load('auth2', function() {
       auth2 = gapi.auth2.init({
          client_id: '802661748562-8gq0ul01focnidm2trk1i2n7qnnqf1ml.apps.googleusercontent.com',
          hosted_domain: 'ejm.org'
          // Scopes to request in addition to 'profile' and 'email'
          //scope: 'additional_scope'
        });
      });
    }
    alert("hi")
//   alert(au"h2)
 var lang = navigator.language
    function signInCallback(authResult) {
 console.log(authResult)
document.getElementById('signin').style="display:none";  
google.script.run.withSuccessHandler(dv).validInfo(authResult.Zi.id_token,lang)
  
}
function dv(e){
document.write(e)
}
 document.body.getElementById('signin').addEventListener('click',function(){auth2.signIn().then(SignInCallback)},true)
    window.onerror=function(a,b,c,d,e){alert(a)}
//    alert(document.cookie)
//    if(document.cookie.search('autoLog=true')!=-1){
setTimeout(function(){    auth2.signIn().then(signInCallback)},500)
//    }
function ServConnec(e){
//eval(e)
google.script.run.withSuccessHandler(ServConnec).withFailureHandler(ServConnec).run(Serv)

}
ServConnec("")
document.getElementsByClassName("contact")[0].addEventListener("click",function(e){
document.getElementById("contactF").style="display:yes;"
e.preventDefault()
})
document.getElementById("CB").addEventListener("click",function(e){google.script.run.withSuccessHandler(success).withFailureHandler(success).sM(document.getElementsByTagName('textarea')[0].innerText)})
function success(dir){if(dir==undefined){dir="Error. Something went wrong. Try again later, or login first."}alert(dir)}
