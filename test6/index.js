function additem1() {
    var ul = document.getElementById("todo2list");
    var li = document.createElement("li");
    li.setAttribute('id','li1');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox'              
    checkbox.setAttribute('id','check1');
    checkbox.className = "todo2checkbox1"
    var lab1 = document.createElement('label');
    lab1.setAttribute('id','lab1');
    lab1.className = "todo2label1"
    var text1 = document.getElementById("text1");
    var text2 = text1.value;
    var text3 = document.createTextNode(text2);
    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(lab1);
    lab1.appendChild(text3);

    var ul = document.getElementById("todo2list");
    var li = document.createElement("li");
    li.setAttribute('id','li1');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox'              
    checkbox.setAttribute('id','check1');
    checkbox.className = "todo2checkbox1"
    var lab1 = document.createElement('label');
    lab1.setAttribute('id','lab1');
    lab1.className = "todo2label1"
    var text1 = document.getElementById("text2");
    var text2 = text1.value;
    var text3 = document.createTextNode(text2);
    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(lab1);
    lab1.appendChild(text3);
}

function deleteitem1() {
    var li = document.getElementById("todo2list");
    while (li.hasChildNodes()) {
        li.removeChild(li.firstChild);
    }
}