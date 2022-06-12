let wrapper = document.querySelector(".wrapper");
let selected;
wrapper.addEventListener("click", function (event) {
  let target = event.target;
  active(target);
});
function active(target) {
  if (selected) {
    selected.classList.remove("active");
  }
  selected = target;
  selected.classList.add("active");
}
