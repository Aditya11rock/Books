function addnode(){

    var val1=document.getElementById("entertodo")
    var val2=val1.value
    if(val2.trim()=="")
    {
        var band=document.createTextNode("entered value is not a task")
        var hone=document.createElement("h3")
        hone.appendChild(band)
        hone.setAttribute("id","informer")
        hone.style.color="yellow"
        var patr=document.getElementById("secondconcontainer")
        patr.insertBefore(hone,patr.childNodes[0])
        window.setTimeout(rem,1500)

        
    }
    else{

        var mad=document.createTextNode(val2)
        var ullis=document.getElementById("ullu")
       let li=document.createElement("li")
       let inpu=document.createElement("input")
       inpu.type="checkbox"
       inpu.setAttribute("id","check")
       let lab=document.createElement("label")
       lab.appendChild(mad)
       li.appendChild(inpu)
       li.appendChild(lab)
       ullis.insertBefore(li,ullis.childNodes[0])
        val1.value=""

    }

}

function deletetask(){

var ullis=document.querySelectorAll("li");
ullis.forEach((todo)=>{

    var tak=todo.firstChild
    console.log(tak)
    if(tak.checked)
    {
        todo.remove()
    }

})



}

function rem(){

    //console.log("it is being called")
//var bit=document.getElementById("informer")
//bit.remove()
$("#informer").hide()


}

function reset(){

    var ullis=document.querySelectorAll("li");
    ullis.forEach((todo)=>{
    
        todo.remove()
    
    }) 


}

document.querySelector("#entertodo").addEventListener("input",(event)=>{

console.log(event.target.value)

})
