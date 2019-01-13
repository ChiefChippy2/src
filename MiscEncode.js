window.onerror=function(a,b,c,d,e){oops(e)}
  function formatDate(a) {
    var d = new Date()
    var month = '' + (d.getMonth() + 1)
    var day = '' + (d.getDate()+1+a)
    
    var year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
  load()
  function load(){
  setTimeout(function(){
  var lin = document.createElement('link')
  lin.rel="stylesheet"
  lin.href="https://fonts.googleapis.com/css?family=Noto+Sans"
  document.body.appendChild(lin)
 // var a = new Date()
  
var dat=  document.getElementsByTagName('input')[3]
dat.min = formatDate(0)
dat.value=formatDate(0)
  },500)}
  function repB(){
  var bug =prompt('First of all, this is still in development, so bugs can be often.\n That being said, please explain briefly your issue / the bug.','Dear Dev Team, ')
  google.script.run.withSuccessHandler(cont).repBB(bug)
  
  }
