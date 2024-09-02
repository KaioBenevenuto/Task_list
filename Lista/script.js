let h1 = document.getElementById('listTitle')
let pageTitle = localStorage.getItem("pageTitle")
h1.textContent = pageTitle

document.getElementById("checkbox1").addEventListener("change", function () {
  const label = document.querySelector(".label-text")

  if (this.checked) {
    label.style.textDecoration = "line-through"
    label.style.color = "rgba(138, 138, 138, 0.522)"
  } else {
    label.style.textDecoration = "none"
    label.style.color = "black"
  }
})