let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let task = document.createElement("li");
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  task.innerText = inp.value;
  task.appendChild(delBtn);
  ul.appendChild(task);
  inp.value = "";
});

ul.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    let lisItem = e.target.parentElement;
    lisItem.remove();
  }
});
