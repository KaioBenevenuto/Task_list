let h1 = document.getElementById('listTitle')
let currentDivData = JSON.parse(localStorage.getItem("currentDiv"))


if (currentDivData && currentDivData.title) {
  h1.textContent = currentDivData.title
}

document.getElementById("checkbox1").addEventListener("change", function () {
  const input = document.querySelector(".input-text")

  if (this.checked) {
    input.style.textDecoration = "line-through"
    input.style.color = "rgba(138, 138, 138, 0.522)"
  } else {
    input.style.textDecoration = "none"
    input.style.color = "black"
  }
})

document.getElementById('edit').addEventListener("click", function() {
const line = document.getElementById("line")
const edit = document.getElementById("edit")

edit.style.transform = "scale(0.80)"
setTimeout(function () {
  edit.style.transform = "scale(1)"
  line.disabled = false
  line.focus()
  line.select()
  console.log(line)
}, 100)
})

document.getElementById("line").addEventListener("blur", function () {
    line.disabled = true
})