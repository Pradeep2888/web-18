// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfunction)

function myfunction(){
    event.preventDefault()
    var avtar=document.querySelector("#image").value

    var name=document.querySelector("#name").value
    
    var batch=document.querySelector("#batch").value
    
    var dsa=document.querySelector("#dsa").value
    
    var skillathon=document.querySelector("#cs").value
    
    var coding=document.querySelector("#coding").value
    
    var dsa=document.querySelector("#dsa").value
    
   
   
    var tr=document.createElement("tr")
     
   
    var td1=document.createElement("td")
   var picture=document.createElement("img")
   picture.setAttribute("src",avtar)
   td1.append(picture)
       
    var td2=document.createElement("td")
       td2.innerText=name

    var td3=document.createElement("td")
          td3.innerText=batch
    
    var td4=document.createElement("td")
    td4.innerText=dsa
    
    var td5=document.createElement("td")
    td5.innerText=skillathon
    
    var td6=document.createElement("td")
    td6.innerText=coding
    
    var td7=document.createElement("td")
     var sum=Number(dsa)+Number(skillathon)+Number(coding)
     var per=(sum/30)*100
     td7.innerText=per

    var td8=document.createElement("td")
    if(per>=50){
        td8.innerText="Pass"
        td8.style.backgroundColor="green";
    }
    else{
        td8.innerText="Fail"
        td8.style.backgroundColor="red";
    }
    
    var td9=document.createElement("td")
      td9.innerText="Delete"
      td9.style.backgroundColor="yellow"
      td9.addEventListener("click",clean)
      function clean(){
          event.target.parentNode.remove();
      }
    


    

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
    document.querySelector("tbody").append(tr)
}