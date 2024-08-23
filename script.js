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
function addList(tituloDaTaskList){
  if (tituloDaTaskList !== "") {
    const newList = document.createElement("div")
    newList.style.width = "100%"
    newList.style.height = "80px"
    newList.style.backgroundColor = "#505e80"
    newList.style.borderRadius = "10px"
    newList.style.marginBottom = "8px"
    newList.style.marginTop = "4px"
    newList.style.display = "flex"

    let title = document.createElement("div")
    title.style.width = "100%"
    title.style.borderRadius = "5px"
    title.style.display = "flex"
    title.textContent = tituloDaTaskList
    title.style.padding = "10px"
    title.style.fontSize = "20px"
    title.style.fontFamily = "Rubik"
    title.style.alignItems = "center"
    title.style.overflow = "hidden"  
    title.style.whiteSpace = 'nowrap'
    //encontrar um jeito de fazer com que o título suma quando sair do espaço determinado .ok
    //colocar '...' no final desse título

    let del = document.createElement("button")
    del.style.margin = "25px 10px"
    del.style.width = "35px"
    del.style.height = "35px"
    del.style.borderRadius = "50%"
    del.style.border = "solid 0px"
    del.style.backgroundColor = "#606d8000"

    let img = document.createElement("img")
    img.src = "./assets/cross.png"
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
        }, 400)
      }, 200)
    })

    document.getElementById("container").appendChild(newList)
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
