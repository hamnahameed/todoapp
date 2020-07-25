
// date

var date=new Date()
var str=date.toString()
var day=str.slice(0,15)
var m=document.getElementById("main");
m.innerText=day
console.log(day)





// add function
function add_item(){
    var todo=document.getElementById("todo");
    var list=document.getElementById("list")
    var li=document.createElement('li');
    var liValue=document.createTextNode(todo.value)
    li.appendChild(liValue)
    list.appendChild(li)
todo.value=" "
console.log(li)


// edit button
var editBtn=document.createElement("button")  
var editBtnImg=document.createElement("img")  
editBtnImg.setAttribute("src",'edit.png')
editBtnImg.setAttribute("width",'15px')
var edit=document.createTextNode("Edit")
editBtn.appendChild(editBtnImg)
editBtn.appendChild(edit)

li.appendChild(editBtn)
editBtn.setAttribute("class" ,"edit")
editBtn.setAttribute("onclick", "editItem(this)")



// delete button
var delBtnImg=document.createElement("img")
var delBtn=document.createElement("button") 
delBtnImg.setAttribute("src",'delete.png')
delBtnImg.setAttribute("width",'13px')
var del=document.createTextNode('Delete')
delBtn.appendChild(delBtnImg)
delBtn.appendChild(del)

delBtn.setAttribute("class","del")
delBtn.setAttribute("onclick", "deleteItem(this)")
li.appendChild(delBtn)


   
}

// delete function
function deleteItem(h){
    h.parentNode.remove( )
}

// del all function
function delAll(){
    list.innerHTML=""
}
 

// edit function
function editItem(a){
    var val=a.parentNode.firstChild.nodeValue
    var editText=prompt("Enter the Text",val)
    a.parentNode.firstChild.nodeValue=editText
}