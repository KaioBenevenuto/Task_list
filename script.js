document.getElementById("newTaskList").addEventListener("click", function () {
  document.getElementById("janelaDeTitulo").style.display = "block"
})

document.getElementById("cancel").addEventListener("click", function () {
  document.getElementById("janelaDeTitulo").style.display = "none"
})

document.getElementById("confirm").addEventListener("click", function () {
  let titulo = document.getElementById("title");
  let tituloDaTaskList = titulo.value;
  titulo.value = '';
  document.getElementById("janelaDeTitulo").style.display = "none";
  if(tituloDaTaskList !== ""){
    const newList = document.createElement("div")
    newList.style.width = "100%"
    newList.style.height = "80px"
    newList.style.backgroundColor = "#606d8060"
    newList.style.borderRadius = "5px"
    newList.style.marginBottom = "6px"
    newList.style.marginTop = "4px"
    newList.style.display = "flex"

    let title = document.createElement("div")
    title.style.width = "100%"
    title.style.height = "80px"
    title.style.borderRadius = "5px"
    title.style.display = "flex"
    title.textContent = tituloDaTaskList
    title.style.padding = "10px"
    title.style.fontSize = "22px"
    title.style.fontFamily = "Rubik"
    title.style.alignItems = "center"
    //Tenho que colocar um limite de caracteres ☝️

    let del = document.createElement("button")
    del.style.margin = "20px 20px 0 0"
    del.style.width = "35px"
    del.style.height = "35px"
    del.style.borderRadius = "50%"
    del.style.border = "solid 0px"
    del.style.backgroundColor = "#606d8000"
    //add função de deletar ☝️

    let img = document.createElement("img")
    img.src = "./assets/excluir (1).png"
    img.style.width = "40px"
    img.style.height = "40px"

    del.appendChild(img)
    newList.appendChild(title)
    newList.appendChild(del)

    del.addEventListener("mouseover", function () {
      img.src = "./assets/excluir.png"
    })
    del.addEventListener("mouseout", function () {
      img.src = "./assets/excluir (1).png"
    })
    //Não tá funcionando
    del.addEventListener("click", function () {
      button.style.transform = "scale(2.6)"
    })

    document.getElementById("container").appendChild(newList)
  }
})
