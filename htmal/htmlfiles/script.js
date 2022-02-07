
//$(document).ready(mando)

var sam=59;
var ndo=sam +78;
var mid=ndo+ sam -150

if(mid<ndo)
{
    //alert("all good")
}
else{
    //alert("bad")
}

var lst=["adi","fla","gun"]

var lst=[]


for(var a=0;a<3;a++)
{
    lst.push(a)
    document.writeln(lst)
}


for(var a=0;a<2;a++)
{
    lst.push("aditya")
    console.log(lst)
}

var t=1
console.log(typeof(t))
while(t<=7){

t=t+1;
document.writeln(t)

}

var c=1
console.log(typeof(t))
while(c<=5){

c=c+1;
document.writeln(t)

}

function addwala(a,b)
{   
    var c=a+b
    document.write("<h3>"+c+"</h3")
}

//addwala(2,4)
function donecli(){

var username=document.getElementById("usern").value
var password=document.getElementById("passw").value
document.getElementById("passw").value=""
document.getElementById("usern").value=""

var lst2=["Freinds","Love","Care","Attraction","Enemy","Jealous","Hate","Affection","Soulmate"]

var k=Math.ceil(Math.random()*lst2.length)

document.getElementById("result").innerHTML=lst2[k] 



}

function mad(){

    var name=document.getElementById("urlw").value
    document.getElementById("urlw").value=""
    window.open(name,"_top")

}

function doneb(){

    var rd1=document.getElementById("rd1")
    var rd2=document.getElementById("rd2")
    var rd3=document.getElementById("rd3")
    if(rd1.checked==true)
    {   rd1.checked=false
        document.getElementById("result").innerHTML=rd1.value
    }
    else if(rd2.checked==true)
    {
        rd2.checked=false
        document.getElementById("result").innerHTML=rd2.value
    }
    else if(rd3.checked==true)
    {
        rd3.checked=false
        document.getElementById("result").innerHTML=rd3.value
    }
    else
    {
        document.getElementById("result").innerHTML="none"
    }

}

function don(){

var check1=document.getElementById("check1")
var check2=document.getElementById("check2")
var check3=document.getElementById("check3")
var check4=document.getElementById("check4")
var lst=[]
if(check1.checked==true)
{
    lst.push(check1.value)
    check1.checked=false
}
if(check2.checked==true)
{
    lst.push(check2.value)
    check2.checked=false
}
if(check3.checked==true)
{
    lst.push(check3.value)
    check3.checked=false
}
if(check4.checked==true)
{
    lst.push(check4.value)
    check4.checked=false
}
for(var t=0;t<lst.length;t++)
{
    console.log(lst[t])
}

document.getElementById("headline").style.textShadow="2px 2px 3px red"

}

function tim(){

  document.getElementById("imgh").src="back.jpg"
  document.getElementById("imgh").width="500".height="400"
  document.getElementById("imgh").style.borderRadius="50%"
  document.getElementById("imgh").style.overflow="visible"
  

  

}

function dum(){

    document.getElementById("imgh").src="mywings.jpg"
    document.getElementById("imgh").width="300".height="300"
    document.getElementById("imgh").style.borderRadius="0px"

}

function domt(){

    window.open("https://www.google.com/","_blank")

}

function mader()
{
    var name1=document.getElementById("checker1").value
    var name2=document.getElementById("checker2").value

    
    if(name1.trim()=="" || name2.trim().length<6)
    {
                if(name1.trim()=="")
            {
                document.getElementById("checker1").style.border="solid 2px red"
                document.getElementById("usernamek").style.visibility="visible"

                
            }
            else{
                document.getElementById("checker1").style.border="solid 1px black"
                document.getElementById("usernamek").style.visibility="hidden"

            }
            if(name2.trim()=="")
            {
                document.getElementById("checker2").style.border="solid 2px red"
                document.getElementById("passwordk").style.visibility="visible"

                

            }
            else if(name2.trim().length<6)
            {
                document.getElementById("checker2").style.border="solid 2px red"
                document.getElementById("passwordk").style.visibility="visible"

            }
            else{

                document.getElementById("checker2").style.border="solid 1px black"
                document.getElementById("passwordk").style.visibility="hidden"

            }

        return false

    }

    else{

        document.getElementById("checker1").value=""

        true
    }


}

/*for(var a=1;a<5;a++)
{

document.write("<h1> Aditya</h1>")

}*/

function bod()
{

var email=document.getElementById("email").value;
var dob=document.getElementById("dateofbirth").value;
console.log(dob)

var regx2=/^([200][0-3])-([0-1][0-9])-([0-2][0-9])$/;

if(regx2.test(dob))
{
    document.getElementById("dob").innerHTML="Valid...."
    document.getElementById("dob").style.color="green"
    document.getElementById("dob").style.visibility="visible"

}
else
{
    document.getElementById("dob").innerHTML="InValid!!!"
    document.getElementById("dob").style.color="red"
    document.getElementById("dob").style.visibility="visible"
}

var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z]+).([a-zA-Z]{2,8}).([a-z]{2,8})?$/;
if(regx.test(email))
{
    document.getElementById("foremail").innerHTML="Valid...."
    document.getElementById("foremail").style.color="green"
    document.getElementById("foremail").style.visibility="visible"
}
else{
    document.getElementById("foremail").innerHTML="InValid!!!"
    document.getElementById("foremail").style.color="red"
    document.getElementById("foremail").style.visibility="visible"


}

}

var id=0;
var timl=0

function met(){

    document.getElementById("timo").innerHTML="current time "+timl
    timl++;
    timl=Math.ceil(Math.random()*(timl+10));

}

function mot(){

   id=window.setInterval(met,1000);


}
function stope(){

    window.clearInterval(id)
}

function metow(){

    document.getElementById("wel").innerHTML="changed done successful"

}

var opacity=0;
var idl=0
function docky()
{
    var mad=document.getElementById("muddy");
    opacity=Number(window.getComputedStyle(mad).getPropertyValue("opacity"))
    if(opacity>0)
    {
        opacity=opacity - 0.1
        document.getElementById("muddy").style.opacity=opacity;
    }
    else{

        window.clearInterval(idl)

    }

}

function fadein(){

    idl=window.setInterval(docky,200)

}

function show(){

    var mad=document.getElementById("muddy");
    opacity=Number(window.getComputedStyle(mad).getPropertyValue("opacity"))
    if(opacity<1)
    {
        opacity=opacity+0.1
        document.getElementById("muddy").style.opacity=opacity
    }
    else{
        window.clearInterval(idl)
    }

}

function fadeout(){

   idl=window.setInterval(show,200);

}

var width=200;
var difference=2;
var vald=0
function grow(){

    if(width<300)
    {
        width=width +difference
        document.getElementById("muddy").width=width
    }
    else{
        window.clearInterval(vald)
        vald=window.setInterval(degrow,100)
    }

}

function growth(){

    window.clearInterval(vald)
    vald=window.setInterval(grow,5);

}

var valde=0;

function reduce(){

    if(width>200){

        width=width -difference
        document.getElementById("muddy").width=width
        
    }
    else{

        window.clearInterval(vald)
        vald=window.setInterval(growth,100)
    }

}

function degrow(){

    window.clearInterval(vald)
    vald=window.setInterval(reduce,5)    

}

function mader(){

var sel=document.getElementById("selt")

console.log(sel.options[sel.selectedIndex].value)

}

function mando()
{
    window.clearInterval(vald)
    vald=window.setInterval(grow,5);


}


$("#madola").datepicker()