 function validInfo(){
  var a = []
  for(var i=0;i<document.forms[0].elements.length;i++){
 a[i] = document.forms[0].elements[i].value
 if(a[i]==""){alert('Please fill in all the informations')
 return false
 }
  }
  alert('Processing')
 google.script.run.withSuccessHandler(Sent).ForgotPW(a[0],a[1],a[2])
  }
  function Sent(a){
  eval(a)
  
  }
