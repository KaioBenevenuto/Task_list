document.getElementById("newTaskList").addEventListener("click", function () {
  document.getElementById("janelaDeTitulo").style.display = "block"
  document.getElementById("title").focus()
})

document.getElementById("cancel").addEventListener("click", function () {
  document.getElementById("janelaDeTitulo").style.display = "none"
})

function returnTitle(){
  let titulo = document.getElementById("title")
  let tituloDaTaskList = titulo.value
  titulo.value = ""
  document.getElementById("janelaDeTitulo").style.display = "none"
  return tituloDaTaskList
}

function salvarDivs() {
   const divs = document.querySelectorAll(".dynamic-div")
   const divsData = []

   divs.forEach((div) => {
     divsData.push(div.querySelector(".title").textContent)
   })

   localStorage.setItem("divs", JSON.stringify(divsData))
}

function carregarDivs() {
  const divsData = JSON.parse(localStorage.getItem("divs"))

  if (divsData) {
    divsData.forEach((titulo) => {
      addList(titulo)
    })
  }
}

function addList(tituloDaTaskList){
  if (tituloDaTaskList !== "") {
    const newList = document.createElement("div")
    newList.classList.add("dynamic-div");
    newList.style.width = "90%"
    newList.style.height = "80px"
    newList.style.backgroundColor = "#292522"
    newList.style.borderRadius = "10px"
    newList.style.margin = "8px auto 4px"
    newList.style.display = "flex"

    let title = document.createElement("div")
    title.classList.add("title")
    title.style.width = "100vh"
    title.style.color = "#f0f0d8"
    title.style.borderRadius = "5px"
    title.style.display = "flex"
    title.textContent = tituloDaTaskList
    title.style.padding = "10px"
    title.style.fontSize = "20px"
    title.style.fontFamily = "Rubik"
    title.style.alignItems = "center"
    title.style.overflow = "hidden"
    title.style.whiteSpace = "nowrap"
    title.textOverflow = "ellipsis"

    let del = document.createElement("button")
    del.style.margin = "25px 10px"
    del.style.width = "35px"
    del.style.height = "35px"
    del.style.borderRadius = "50%"
    del.style.border = "solid 0px"
    del.style.backgroundColor = "#606d8000"

    let img = document.createElement("img")
    img.src = "../assets/cross.png"
    img.style.width = "30px"
    img.style.height = "30px"

    del.appendChild(img)
    newList.appendChild(title)
    newList.appendChild(del)

    del.addEventListener("click", function () {
      del.style.transform = "scale(0.80)"
      setTimeout(function () {
        del.style.transform = "scale(1)"
        newList.classList.add("fadeOut")
        setTimeout(function () {
          newList.remove()
          salvarDivs()
        }, 400)
      }, 200)
    })

    abrirLista(title)
    document.getElementById("container").appendChild(newList)
    salvarDivs()
  }
}

document.getElementById("confirm").addEventListener("click", function () {
  addList(returnTitle())
})

document.addEventListener("keydown", function (event) {
  if(event.key === 'Enter'){
  document.getElementById("confirm").click()
  }
})

function abrirLista(title){
  title.addEventListener('click', function(){
    window.location.href='../Lista/index.html';
  }
)}

window.addEventListener("load", carregarDivs)