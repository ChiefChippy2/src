
 
function show(){document.getElementById('lrt').style ="display:yes;"}

 function help(){
 if(confirm('We are redirecting you to our help page')){
  window.open('https://sites.google.com/a/ejm.org/qqq/3-1/help','_top')}
 }
  function Fetch(r){
  if (document.getElementById('EarlyAccess').checked ==true ){var EA= true}else{var EA=false}
    if (document.getElementById('1').checked ==true ){var dl = true}else{var dl=false}
    if (document.getElementById('PreventRedirect').checked ==true ){var PR = true}else{var PR=false}
    var SB = document.getElementById('SB').checked
    var CR= document.getElementById('CR').innerHTML
   var URL= document.getElementById('urle').value
   if(r){
   var URL = "https://bing.com/search?q="+escape(URL)
   }
  alert('Initializing... (Click close to continue)')
  var ip = JSON.parse(sessionStorage.getItem('IP')).ip
  google.script.run.withSuccessHandler(Cont).withFailureHandler(err).fetchstuff(URL,dl,PR,EA,CR,SB,ip,"Direct")
 }
 
 
   function Cont(returnedjson){
   
   var time = new Date()
   time.setTime(time.getTime()+3600000)
   var content = String("LoggedIn=YES;expires="+time.toUTCString())
   if(returnedjson.error){alert(returnedjson.reason)}else{
  var einfo=returnedjson.einfo 
if ( einfo[1]!= null){document.getElementById('2').innerHTML='<a href="'+einfo[1]+'" download>Click To Download</a>'
}else{var ten = document.getElementById('10')
ten.innerHTML = ('')
var e = einfo[0]
/*var parser = new DOMParser();
var xmlDoc = parser.parseFromString(e,"text/xml");
alert(xmlDoc)*/
document.getElementById('pUrl').innerHTML='<a href="'+einfo[2]+'" >Use permanent URL</a>'
document.cookie = content
sessionStorage.setItem('Timeout',time.toUTCString())
 var x = window.open("text/html","replace")
    x.document.open()
    x.document.write(e)
    x.document.close()
    /*alert("We are currently debugging, sorry for any inconvenience!")*/

   
}}}
 
 
 
function whitelistRequest(){
if(confirm('We want you to know that this opens access to EVERYONE using this WiFi. We suggest this for only private network and not public WiFi'))
{
var whiteIP = JSON.parse(sessionStorage.getItem('IP')).ip
alert('We are going to whitelist '+whiteIP)
google.script.run.withSuccessHandler(reload).withFailureHandler(err).WL(whiteIP)
 
 
}
}
function blacklistRequest(){
var blackIP = JSON.parse(sessionStorage.getItem('IP')).ip
alert('We are going to blacklist '+blackIP)
google.script.run.withSuccessHandler(reload).withFailureHandler(err).BL(blackIP)
 
 
}
function reload(){
 
window.open('https://sites.google.com/a/ejm.org/qqq/3-1','_top')
 
}
function err(error){
alert(error.message)
 
}
 
google.script.run.withSuccessHandler(keepUpdating).GetStat()
 
function keepUpdating(nerdy){
var ip = JSON.parse(sessionStorage.getItem('IP')).ip
 
if(nerdy.search(ip)!=-1){
Keep({"result":true,"ip":ip})
}}
 
 function paste() {
  var pasteText = document.querySelector("#urle");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
function get(){

google.script.run.withSuccessHandler(goooo).GetCache()
}
function goooo(ee){
window.open('https://script.google.com/macros/s/AKfycbx7uIuggiPYgUA82qoy3nmTCTWRgd0fGR2B9ksXvIGjFJ8FtHQK/exec?token='+ee,'_top')

}
