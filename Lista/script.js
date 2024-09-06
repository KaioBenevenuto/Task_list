let h1 = document.getElementById('listTitle')
let currentDivData = JSON.parse(localStorage.getItem("currentDiv"))


if (currentDivData && currentDivData.title) {
  h1.textContent = currentDivData.title
}

document.querySelector("#checkbox").addEventListener("change", function () {
  const line = document.getElementById("line")

  if (this.checked) {
    line.style.textDecoration = "line-through"
    line.style.color = "rgba(138, 138, 138, 0.522)"
  } else {
    line.style.textDecoration = "none"
    line.style.color = "black"
  }
})

function habilitarEdicao(line) {
  const inputTexto = line.getElementById("text")
  const editarBtn = line.querySelector("#editarBtn")

  editarBtn.style.transform = "scale(0.80)"
  setTimeout(function () {
    editarBtn.style.transform = "scale(1)"
    inputTexto.disabled = false
    inputTexto.focus()
    inputTexto.select()
  }, 100)
}

//imagens dos botões
function btnImg(boolean){
  const editarBtn = document.getElementById("editarBtn");
  let imgEdit = document.createElement("img");
  imgEdit.src = "../assets/pencil.png";
  imgEdit.style.width = "20px";
  imgEdit.style.height = "20px";
  editarBtn.appendChild(imgEdit);

  const adicionarBtn = document.getElementById("adicionarBtn")
  let imgAdd = document.createElement("img")
  imgAdd.src = "../assets/square.png"
  imgAdd.style.width = "20px"
  imgAdd.style.height = "20px"
  adicionarBtn.appendChild(imgAdd)
  
  let newLine = boolean
  if(newLine){
    const removerBtn = document.getElementById("removerBtn")
    let imgDelete = document.createElement("img")
    imgDelete.src = "../assets/delete.png"
    imgDelete.style.width = "20px"
    imgDelete.style.height = "20px"
    removerBtn.appendChild(imgDelete)
  }
}

document.getElementById("text").addEventListener("blur", function () {
  text.disabled = true
})

function adicionarLinha() {
  const novaLinha = document.createElement('div');
  novaLinha.classList.add('line');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');

  const inputTexto = document.createElement('input');
  inputTexto.type = 'text';
  inputTexto.classList.add('text');
  inputTexto.disabled = true;

  const editarBtn = document.createElement('button');
  editarBtn.classList.add('editarBtn');
  editarBtn.addEventListener('click', function () {
    habilitarEdicao(novaLinha);
  });

  const removerBtn = document.createElement('button');
  //removerBtn.textContent = 'Remover';
  removerBtn.classList.add('removerBtn');
  removerBtn.style.display = 'none';
  removerBtn.addEventListener('click', function () {
    novaLinha.remove();
  });

  const adicionarBtn = document.createElement('button');
  //adicionarBtn.textContent = 'Adicionar';
  adicionarBtn.classList.add('adicionarBtn');
  adicionarBtn.addEventListener('click', adicionarLinha);

  novaLinha.appendChild(checkbox);
  novaLinha.appendChild(inputTexto);
  novaLinha.appendChild(editarBtn);
  novaLinha.appendChild(removerBtn);
  novaLinha.appendChild(adicionarBtn);

  // Somente mostrar o botão remover ao passar o mouse
  novaLinha.addEventListener('mouseover', function () {
    if (novaLinha !== document.querySelector('.listaContainer .line:last-child')) {
      removerBtn.style.display = 'inline-block';
    }
  });

  novaLinha.addEventListener("mouseout", function () {
    removerBtn.style.display = "none"
  })

  btnImg(true)
  document.getElementById("listaContainer").appendChild(novaLinha)
}

document.querySelector('#adicionarBtn').addEventListener('click', adicionarLinha);

document.querySelector("#editarBtn").addEventListener("click", function () {
  habilitarEdicao(document.querySelector(".line"))
})

btnImg(false)