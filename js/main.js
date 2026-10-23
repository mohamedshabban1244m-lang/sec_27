


document.querySelectorAll("button").forEach(function(item){
    item.onclick=function(event){
        document.querySelector("#demo").style.color=item.dataset.color;
        document.querySelector("#demo").style.textAlign = item.dataset.location;
    }
})




document.querySelector("#myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let works = document.querySelector("#works");
    let result = document.querySelector("#result");

    if (works.value.trim() === "") {
        alert("Enter data");
        return;
    }

    let myTr = document.createElement("tr");
    let myTd = document.createElement("td");
    let myTd2 = document.createElement("td");
    let btn = document.createElement("button");

    myTd.innerHTML = works.value.trim();

    btn.innerHTML = "Delete";
    btn.type = "button";
    btn.className = "btn-solid theme-accent";

    btn.onclick = function () {
        myTr.remove();
    };

    myTd2.append(btn);
    myTr.append(myTd, myTd2);
    result.append(myTr);

    works.value = "";

});