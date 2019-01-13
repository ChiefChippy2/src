//  document.getElementById('search').innerHTML=="<div>hi</div>"
// window.addEventListener("click",click(event))
// function click(event){alert(1)}
var timesRefreshed = 0;
/*var timeOrigin = performance.timing
 alert(JSON.stringify(timeOrigin.toJSON()))*/
//detect iframe loading/refreshing
$("search").load(function(){

    //if second refresh, change frame src - ie dont count first load
    if($("search").attr("src")!="https://script.google.com/macros/s/AKfycbytr-IE8Btdj0grpuJJhE8NCZVIu5nrvcYsVsS8e2U/exec"){
      document.getElementById('urle').value = $("search").attr("src")
      $("search").attr("src","https://script.google.com/macros/s/AKfycbytr-IE8Btdj0grpuJJhE8NCZVIu5nrvcYsVsS8e2U/exec");
    }

    //add to times resreshed counter
    timesRefreshed++; 

});
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{alert('Location Denied')}
 
//function show(){document.getElementById('lrt').style ="display:yes;"}
function showPosition(position) {google.script.run.ModifyPosition(position.coords.latitude,position.coords.longitude)}

    $.getJSON('https://api.ipify.org?format=json',function(data){sessionStorage.setItem('IP',JSON.stringify(data, null, 2))})
    $.getJSON('https://json.geoiplookup.io/'+sessionStorage.getItem('IP'),function (data){
    var info = JSON.stringify(data)
    google.script.run.withSuccessHandler(updateStat).RegisterInfo(JSON.stringify(data),"ALL IPs")})
    
  function updateStat(egeg){
  eval(egeg)
}
/*function keepUpdating(nerdy){
var ip = JSON.parse(sessionStorage.getItem('IP')).ip
 
if(nerdy.search(ip)!=-1){
sessionStorage.setItem('Timeout',10485)
var tim = new Date()
tim.setTime(tim.getTime()+1000*60*60*2)
document.cookie= "LoggedIn=YES,expires="+tim.toString()}
 
 
 
}*/
function Redir(){
google.script.run.withSuccessHandler(Wrot).ForgotPWTemp()
}
function Wrot(e){
//alert('Plz Wait... we are currently working on this')
document.body.innerHTML = e

}
 
  function Login(){
  var pass = document.getElementById('UN').value
  var pw = document.getElementById('p/w').value
  var info = {"sessionStorage":sessionStorage.getItem('Timeout'),"cookies":document.cookies}
 // alert(JSON.stringify(info))
  google.script.run.withSuccessHandler(Keep).check([pass,pw,info],false)
  }
  function Keep(returned){
  
  if ( returned.result==true){ 
  alert('Welcome to Fetch And Browse')
  var time = new Date()
   time.setTime(time.getTime()+3600000)
  sessionStorage.setItem('Timeout',time.getTime())
  google.script.run.withSuccessHandler(KeepOn).Recheck(navigator.language,returned)
  
  }
  else {alert('Incorrect Password')}
  
  } function KeepOn(h){
  sessionStorage.setItem('UN',h[1])
  document.body.innerHTML = h[0]
  
  }
