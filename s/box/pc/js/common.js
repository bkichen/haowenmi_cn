function calcH(className){
    var arr = [];
    var serverInfo = document.querySelectorAll(className);
    for(var i = 0; i < serverInfo.length; i ++){
        serverInfo[i].style.height = "auto";
        arr.push(serverInfo[i].clientHeight);
    }
    var max = Math.max.apply(null, arr);
    for(var i = 0; i < serverInfo.length; i ++){
        serverInfo[i].style.height = max+"px";
    }
}

function openChat(){
    doyoo.util.openChat('g=10078088');
    return false;
}
function openChatDy(){
    doyoo.util.openChat('g=10079545');
    return false;
}
