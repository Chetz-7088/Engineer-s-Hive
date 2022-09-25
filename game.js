var arr=[0,1,2,3];
var r= Math.floor(Math.random()*256);
var g= Math.floor(Math.random()*256);
var b= Math.floor(Math.random()*256);
document.getElementById("colorName").innerHTML="("+r+","+g+","+b+")";
var index=Math.floor((Math.random())*3);
document.getElementById(index).style.backgroundColor="rgb("+r+","+g+","+b+")";

arr.splice(index,1);

var r1=Math.floor((Math.random())*256);
var g1=Math.floor((Math.random())*256);
var b1=Math.floor((Math.random())*256);
document.getElementById(arr[0]).style.backgroundColor="rgb("+r1+","+g1+","+b1+")";


var r2=Math.floor((Math.random())*256);
var g2=Math.floor((Math.random())*256);
var b2=Math.floor((Math.random())*256);
document.getElementById(arr[1]).style.backgroundColor="rgb("+r2+","+g2+","+b2+")";


var r3=Math.floor((Math.random())*256);
var g3=Math.floor((Math.random())*256);
var b3=Math.floor((Math.random())*256);
document.getElementById(arr[2]).style.backgroundColor="rgb("+r3+","+g3+","+b3+")";

function guess(){
    if(document.activeElement.id==index){
        document.getElementById("colorName").innerHTML="CORRECT !!";
        document.getElementById("colorName").style.color="darkgreen";
        document.getElementById('alert-right').play();
    }
    else{
        document.getElementById("colorName").innerHTML="WRONG!!";
        document.getElementById("colorName").style.color="red";
        // document.getElementById('alert-wrong').play();
    }
    document.getElementsByClassName("btnn")[0].removeAttribute("onclick");
document.getElementsByClassName("btnn")[1].removeAttribute("onclick");
document.getElementsByClassName("btnn")[2].removeAttribute("onclick");
document.getElementsByClassName("btnn")[3].removeAttribute("onclick");

}

function replay(){
    window.location.reload();

}
// console.log(arr[0]);

