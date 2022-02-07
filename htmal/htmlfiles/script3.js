var mad=["maharashtra","delhi","chennai","kolkata","mumbai","punjab","bihar","new york","new jersey","west hamshire",
"london","california","washington dc","japan","australia","michigan","florida","pennsylvania","texas"]

$("#myaudi").autocomplete({source:mad},{autoFocus:true,
                                        delay:10,
                                        minLength:2
                                            })

$("#mod").slider({animate:"fast",
range:true,
step:2,
orientation:"vertical",
max:50,
min:10
})

$("#moti").click(function(){


var bad=$("#mod").slider("values")
document.getElementById("mat").innerHTML=bad
console.log(bad)
console.log($("#mod").slider("instance"))

})
