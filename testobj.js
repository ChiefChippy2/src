google.script.run.withSuccessHandler(Insert).withFailureHandler(Fail).Decide(navigator.language,"BETA Dev",true)
    function Insert(modified){
    document.write(modified)
    }
    function New(prm){
    window.open("https://script.google.com/macros/s/AKfycbz9WhIH-3bGrF_ry3t_LOt_eb3v8dmMAVyZAIkVcDuQJge48kU/exec?ValidToken="+prm.ValidToken,"_top")
    }
    function Fail(error){
    google.script.run.withSuccessHandler(Insert).Decide(navigator.language,"BETA Dev",false)
    }
