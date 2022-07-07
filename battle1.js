//function lấy id của nút đã click T_T
//function lấy id của nút click để đánh dấu cho kích hoạt checking và đổi dom

//function check trúng bằng cách so sánh innerhtml với giá trị, ở đây user ko gõ input được nên ko sợ trùng lại ô đã click
//chỉ check và đếm khi (innerhtml!=="Chìm" ||innerhtml!=="Hụt"

//function random vị trí, đảm bảo khác nhau!

//function bắn tới khi trúng thì thôi! Trong này sẽ đổi số bị trúng thành "Chìm" và không click lại được nữa
//function đổi nút đã click thành trúng và hút

//function thông báo kết quả trên html file

function ran(){ let a=Math.floor(Math.random()*16+1);return a}  //function này để chạy đi chạy lại trong while

var loca3=Math.floor(Math.random()*16+1);var loca1=loca3;var loca2=loca3 //để while chạy

while(loca1==loca3){loca1=ran()}                         //random 3 rồi, 1,2 sẽ while random lại
while(loca2==loca3||loca1==loca2){loca2=ran()}

console.log(loca1);console.log(loca2);console.log(loca3); //ghi chú lại infor của location

var l=0;var k=0; var m=" trúng 0 phát";          //l để đếm số lần bắn,k đếm số lần trúng, ghi lại string số lần trúng từ k

function getid(a){    
   let x,y,z;x=document.getElementById(a);y=x.innerText; 
   z=check(y);hit(z);disp(x,z);countnum()                     //z là trúng/hụt,y là số trong ô click,countnum to write kết quả
   }    //đây cũng là function đổi innertext thành miss

function check(y){  //function đổi location thành số khác sau khi bắn trúng+alert trúng/hụt
   if(y==loca1||y==loca2||y==loca3) 
         {
             if(y==loca3) loca3=100;
             if(y==loca1) loca1=100;
             if(y==loca2) loca2=100;
               return("Trúng") 
         }  else return("hụt")
}

function disp(x,z){
   document.getElementById("infor").innerText=("\n"+"Ô "+ x.innerText + " là "+z)+ document.getElementById("infor").innerText
 }

function hit(z)
      {if (z=="Trúng") 
         {  k=k+1;
            m=" trúng "+k+" phát"
         }
      }

function countnum(){
   l=l+1;
   document.getElementById("kq").innerText="Đã bắn "+l+" lần "+m
   
   
}


