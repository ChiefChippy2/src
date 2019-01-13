 function apiInfo(){google.script.run.withSuccessHandler(ev).apiInf()}
    function ev(inf){var c = window.open();c.document.open();c.document.write(inf);c.document.close()}
    function submit1(t,th){
   // alert(t.getElementsByTagName('input')[0].value)
    th.disabled=true
    google.script.run.withFailureHandler(oops).withSuccessHandler(cont).y(
    t.getElementsByTagName('textarea')[0].value,
    t.getElementsByTagName('input')[0].value,t.getElementsByTagName('input')[1].value,
    t.getElementsByTagName('input')[2].value,t.getElementsByTagName('input')[3].value,
    t.getElementsByTagName('input')[4].value,t.getElementsByTagName('input')[5].value)
    
    }
    function submit2(t,th){
    th.disabled=true
     google.script.run.withFailureHandler(oops).withSuccessHandler(cont).fet(t.getElementsByTagName('input')[6].value)
    
    }
    function cont(e){
    alert(e)
    document.getElementsByTagName('button')[0].disabled=false
    document.getElementsByTagName('button')[1].disabled=false
    }
    function oops(e){
    alert('Uh Oh! There is an error!\nJust like lots of people, we did an oopsie. Or maybe you did an oopsie.\nHere : check what you entered again, did you made an oopsie?\nNo? Try again later!')
    console.log('Hey nerds, here is the error')
    console.log(e)
    }
    window.onerror=function(a,b,c,d,e){alert(a)}
