let h1 = document.getElementById("listTitle")
let currentDivData = JSON.parse(localStorage.getItem("currentDiv"))

if (currentDivData && currentDivData.title) {
  h1.textContent = currentDivData.title
}

//Coloca o ícone nos buttons
function btnImg(button) {
  let img = document.createElement("img")

  if (button.classList.contains("editarBtn")) {
    img.src = "../assets/pencil.png"
  } else if (button.classList.contains("adicionarBtn")) {
    img.src = "../assets/adicionar (2).png"
  } else if (button.classList.contains("removerBtn")) {
    img.src = "../assets/cancelar.png"
  }

  img.style.width = "20px"
  img.style.height = "20px"
  button.appendChild(img)
}

//Habilita a edição do texto da linha
function habilitarEdicao(event) {
  const line = event.target.closest(".line")
  const inputTexto = line.querySelector(".text")
  const editarBtn = line.querySelector(".editarBtn")

  inputTexto.disabled = false
  editarBtn.style.transform = "scale(0.60)"
  setTimeout(function () {
    editarBtn.style.transform = "scale(1)"
    inputTexto.focus()
    inputTexto.select()
  }, 100)
}

//Desabilita a edição
document.querySelector(".listaContainer").addEventListener(
  "blur",
  function (event) {
    if (event.target.classList.contains("text")) {
      event.target.disabled = true
    }
  },
  true
)

//adiciona uma linha nova
function adicionarLinha() {
  const novaLinha = document.createElement("div")
  novaLinha.classList.add("line")

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.classList.add("checkbox")
  checkbox.addEventListener("change", function () {
    const line = this.closest(".line").querySelector(".text")
    if (this.checked) {
      line.style.textDecoration = "line-through"
      line.style.color = "#c2b79bab"
    } else {
      line.style.textDecoration = "none"
      line.style.color = "black"
    }
  })

  const inputTexto = document.createElement("input")
  inputTexto.type = "text"
  inputTexto.classList.add("text")
  inputTexto.disabled = true

  const editarBtn = document.createElement("button")
  editarBtn.classList.add("editarBtn")
  editarBtn.addEventListener("click", habilitarEdicao)
  btnImg(editarBtn)

  const removerBtn = document.createElement("button")
  removerBtn.classList.add("removerBtn")
  removerBtn.style.display = "none"
  removerBtn.addEventListener("click", function () {
    removerBtn.style.transform = "scale(0.80)"
    setTimeout(function () {
      removerBtn.style.transform = "scale(1)"
      novaLinha.remove()
    }, 100)
  })
  btnImg(removerBtn)

  const adicionarBtn = document.createElement("button")
  adicionarBtn.classList.add("adicionarBtn")
  adicionarBtn.addEventListener("click", function () {
    adicionarBtn.style.transform = "scale(0.80)"
    setTimeout(function () {
      adicionarLinha()
      adicionarBtn.style.transform = "scale(1)"
    }, 100)
  })
  btnImg(adicionarBtn)

  novaLinha.appendChild(checkbox)
  novaLinha.appendChild(inputTexto)
  novaLinha.appendChild(editarBtn)
  novaLinha.appendChild(adicionarBtn)
  novaLinha.appendChild(removerBtn)

  // Mostrar o botão 'remover' ao passar o mouse
  novaLinha.addEventListener("mouseover", function () {
    if (novaLinha !== document.querySelector(".listaContainer .line")) {
      removerBtn.style.display = "inline-block"
    }
  })

  novaLinha.addEventListener("mouseout", function () {
    removerBtn.style.display = "none"
  })

  document.querySelector(".listaContainer").appendChild(novaLinha)
}

// Inicia ícones e eventos na primeira linha
document.querySelectorAll(".line").forEach((line) => {
  line.querySelectorAll("button").forEach((button) => btnImg(button))
  line.querySelector(".editarBtn").addEventListener("click", habilitarEdicao)
  line.querySelector(".adicionarBtn").addEventListener("click", adicionarLinha)
})

adicionarLinha()
document.querySelector(".editarBtn").addEventListener("click", habilitarEdicao)
document.querySelector(".adicionarBtn").addEventListener("click", function () {
  const adicionar = document.querySelector(".adicionarBtn")
  adicionar.style.transform = "scale(0.80)"
  setTimeout(function () {
    adicionarLinha
    adicionar.style.transform = "scale(1)"
  }, 100)
})

//tenho que armazenar as mudanças feitas na página