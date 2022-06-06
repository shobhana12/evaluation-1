// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfunction)
function myfunction(){
    event.preventDefault()
    var name=document.querySelector("#name").value
    var emp=document.querySelector("#employeeID").value
     var depatment=document.querySelector("#department").value
     var expyear=document.querySelector("#exp").value 
     var email=document.querySelector("#email").value
     var mobile=document.querySelector("#mbl").value
    console.log(name,emp,depatment,expyear,email,mobile)
   var tr= document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerText=name
    var td2=document.createElement("td")
    td2.innerText=emp
    var td3=document.createElement("td")
    td3.innerText=depatment
    var td4=document.createElement("td")
    td4.innerText=expyear
    var td5=document.createElement("td")
    td5.innerText=email
    var td6=document.createElement("td")
    td6.innerText=mobile
    var expyear1=Number(expyear)
    var td7=document.createElement("td")

     
      if(expyear1>5){
          td7.innerText="Senior"
      }
      else if(expyear1>=2&&expyear1<=5){
          td7.innerText="Junior"
      }
      else if(expyear1<=1){
          td7.innerText="Fresher"
      }
    var td8=document.createElement("button")
    td8.innerText="Delete"
    td8.style.backgroundColor="teal"
    td8.style.border='red'
    td8.addEventListener("click",deleteraw)
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr)
} 
function deleteraw(){
    console.log(event.target.parentNode.remove())
}