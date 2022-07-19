
let text = localStorage.getItem("duckList") || '[]';
let list = JSON.parse(text);

showItems();

function save(){
    const myJSON = JSON.stringify(list);
    localStorage.setItem("duckList", myJSON);
}

function addItems(){
    var myInput = document.getElementById("myInput").value;
    if( myInput == ""){
        document.getElementById("emptyInput").style.display="block";
        }
        else{
            list.push({name:myInput,completed:false});
            document.getElementById("emptyInput").style.display="none";

            save();
            showItems();
        }
    

    document.getElementById("myInput").value = "";
}

function deleteItem(index) {
    list.splice(index,1);
    save();
    showItems()
}

function toggle(index) {
    list[index].completed = list[index].completed ? false : true;
    save();
    showItems();   
}

function deleteAllItems(){
    save();
    document.getElementById("myUL").innerHTML = '';

}

function showItems(){
    var myList='';
    for (var i=0; i<list.length; i++){
        var deleteButton = "<button class='button deleteBtn' onClick=deleteItem("+i+")>✕</button>"
        var completedButton = "<button class='button completedBtn' onClick=toggle("+i+")>✓</button>"
        if (list[i].completed){
            myList+=
            `<li class='list completed'>  
                <div class='text'>
                 ${list[i].name}
                </div>
                <div class'buttons'>
                 ${completedButton} 
                 ${deleteButton}
                </div>
            </li>`
        } else {
            myList+=
            `<li class='list'> 
            <div class='text'>
            ${list[i].name}
           </div>
           <div class'buttons'>
            ${completedButton} 
            ${deleteButton}
           </div>
             </li>`
        }
    }

    document.getElementById("myUL").innerHTML=myList;
}