
$("#buta").click(mad)

function mad()
{
    $("#ron").fadeToggle(2000)
    //$("li:odd,h1:even").fadeToggle(2000)
    $(".madiana li:even,h1").fadeToggle(100)


}


$("#slidefunct").click(function(){

$("div").slideToggle(2000).slideToggle(2000).fadeOut(2000).fadeIn(2000).hide(1000).show(1000,alert("handa"))


})

//$(document).ready(function(){

//document.getElementById("muto").style.width="100px"
//document.getElementById("muto").style.height="100px"
//document.getElementById("muto").style.backgroundColor="orange"
//document.getElementById("muto").style.padding="10px"
//document.getElementById("muto").style.margin="100px"
//document.getElementById("muto").style.position="absolute"

//})

$("#buti").click(function(){

    $("#muto").animate({
        //bottom:100,
        left:200,
        height:200,
        opacity:0,
    

    },2000).animate({
        //top:100,
        left:"0px",
        height:100,
        opacity:1,
        backgroundColor:"purple"
    },2000,fuddu)


})

function fuddu(){

  //  $("#muto").animate({
        //bottom:100,
    //    left:200,
      //  height:200,
     //   opacity:0,
    

 //   },2000).animate({
        //top:100,
   //     left:"0px",
     //   height:100,
    //    opacity:1,
    //    backgroundColor:"purple"
   // },2000,fuddu)


$("h1").fadeToggle(1000).fadeToggle(1000,alert("happy"))

}

$("#gaurav").click(function(){

    //alert($("#gonu").text())
    $("#mango").text("I have changed things yeeee!")//text method by which Dom manipulation can be achieved
    $("#gonu").html("gaurav ek <b>smart</b> bachha hai")//html method to to DOM manipulation
    document.getElementById("gonu").style.color="red"
    //alert($("b").css("color"))
    document.querySelector("b").setAttribute("id","check")
    document.querySelector("#check").style.color="cyan"
    $("b").css("color","orange")//by this method we can get or set css of particular element
    //alert($("li").attr("id"))
    $("#gonu").append("<h1>Aditya has a awesome attitude</h1>").attr("id","falcon")
    //append a child at the bottom of container

    $("#falcon").after("<h1>Aditya has a awesome bad attitude</h1>")
    //appends a child but after the container ends

    $("#falcon").prepend("<h3>Magical Spell</h3>")
    //with this method you can insert a child before but within same container
    $("#falcon").before("<h3> Magical Spell that can harm your world</h3>")
    //by this method you can add a child but before the container


    $("#falcon").css("color","purple")
    $("h1").addClass("mandy falana")
    $("#mango").addClass("mandy falana")


})

$("#mint").click(function (){

    //alert("falana")
    $("#gonu").toggleClass("mandt")


})

$("#rem").click(function (){

    $("#gonu").removeClass("mandt").addClass("bundo")

})
















