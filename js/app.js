const $ = document;

const titleInputElem = $.getElementById("title");
const authorInputElem = $.getElementById("author");
const yearInputElem = $.getElementById("year");
const AddBookSubmitInput = $.querySelector(".btn");
const formElem = $.querySelector("form");
const tbodyTableElem = $.getElementById("book-list")
let itemsArray = []

formElem.addEventListener("submit", function (event) {
  event.preventDefault();
});

window.addEventListener("load", function () {
  titleInputElem.focus();
});

function sumbitInputData() {
  if (titleInputElem.value.trim() == "" || authorInputElem.value.trim() == "" || yearInputElem.value.trim() == "") {
    alert("Please Fill All Fields.")
  }else{
    let titleInputElemValue = titleInputElem.value;
    let authorInputElemValue = authorInputElem.value;
    let yearInputElemValue = yearInputElem.value;
    
    titleInputElem.value = "";
    authorInputElem.value = "";
    yearInputElem.value = "";

    let objData = {
      title: titleInputElemValue,
      author: authorInputElemValue,
      year: yearInputElemValue
    }

    itemsArray.push(objData)
    
    localStorage.setItem("saveItems",JSON.stringify(itemsArray))
    
    const newTrElem = $.createElement("tr")

    const newThTitleElem = $.createElement("th")
    const newThAuthorElem = $.createElement("th")
    const newThYearElem = $.createElement("th")

    newTrElem.style.cssText = "background-color: #ecf0f1;"

    let allData = JSON.parse(localStorage.getItem("saveItems"))
    
    newThTitleElem.innerHTML = allData[allData.length - 1].title
    newThAuthorElem.innerHTML = allData[allData.length - 1].author
    newThYearElem.innerHTML = allData[allData.length - 1].year

    newTrElem.append(newThTitleElem,newThAuthorElem,newThYearElem)
    tbodyTableElem.append(newTrElem)

    titleInputElem.focus();
  }
}

AddBookSubmitInput.addEventListener("click", sumbitInputData);