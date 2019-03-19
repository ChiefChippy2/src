//Uhhh
var ss={
"get" :function(key) {localStorage.getItem(key)}, 




"set" :function(key,val) {localStorage.setItem(key,val)} 
} 
alert('wait') 
ss.set('test','543')
alert(ss.get('test'))
