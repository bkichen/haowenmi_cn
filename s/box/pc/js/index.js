var indexFlag = 0, moveFlag = true;


function changeIcon (event) {
    var nodeName = event.target.nodeName;
    var index = 0;
    if(nodeName === "UL"){
        return false
    }
    if(!moveFlag){
      return false
    }
    moveFlag = false;
    var LIs = document.querySelectorAll(".recommendList li");
    var blockBoxs = document.querySelectorAll(".thesisList>div");
    var blockBox = document.querySelector(".thesisList");
    LIs.forEach(function(LI){
        LI.classList.remove("clicked")
    });
    if(nodeName == "LI"){
        index = [].indexOf.call(event.target.parentNode.children, event.target);
        event.target.classList.add("clicked")
    }else if(nodeName == "DIV"){
        index = [].indexOf.call(event.target.parentNode.parentNode.children, event.target.parentNode);
        event.target.parentNode.classList.add("clicked")
    }
    var thesisList = document.querySelectorAll(".thesisList>div");
    thesisList[indexFlag].style.opacity = 0;
    setTimeout(function () {
        thesisList[indexFlag].style.display = "none";
        thesisList[index].style.display = "block";
        setTimeout(function(){
            thesisList[index].style.opacity = 1;
        },20);
        indexFlag = index;
        moveFlag = true;
    },500);
    console.log(thesisList[index])
}
var flag = true;
function up(name,index){
    document.querySelector("."+name+index);
    document.querySelector("."+name+index).style.transform="scale(1.05,1.05)";
}
function down(name,index){
    document.querySelector("."+name+index);
    document.querySelector("."+name+index).style.transform="scale(1.00,1.00)";
}
window.onload = function () {
    document.querySelectorAll(".flowCard").forEach(function(block){
        block.addEventListener("mouseenter",function(e){
            var rotate = e.target.firstElementChild;
            if(!rotate.style.transition){
                rotate.style.transition= "0.7s all cubic-bezier(.21,.68,.63,.92)";
                rotate.style.transform = "rotateY(360deg)";
                setTimeout(function(){
                    rotate.style.transition= "";
                    rotate.style.transform = "";
                },700)
            }
        })
    });

}
