let ball = document.querySelector(".ball");
let field = document.querySelector(".field");
let body = document.body;
let coords = field.getBoundingClientRect();
console.log(coords);
field.addEventListener("click", function (event) {
  ball.clientY = event.clientY;
  ball.clientX = event.clientX;
  ball.classList.toggle("active");
  let top = ball.clientY - ball.clientHeight / 2;
  let left = ball.clientX - ball.clientWidth / 2;
  if (event.clientX + coords.left + ball.clientWidth / 2 > field.clientWidth) {
    left = field.clientWidth - ball.clientWidth;
  }
  if (event.clientY + coords.top + ball.clientHeight / 2 > field.clientHeight) {
    top = field.clientHeight - ball.clientHeight;
  }
  if (left < 0) {
    left = 0;
  }
  if (top < 0) {
    top = 0;
  }
  ball.style.left = left + "px";
  ball.style.top = top + "px";
});
///////////////////////////

// ball.addEventListener("whereBall", function (event) {
//   console.log(event.clientX, event.clientY);
// });
// let whereBall = new MouseEvent("dblclick", {
//   clientX: body.clientX,
//   clientY: body.clientY,
// });
// ball.dispatchEvent(whereBall);

// let whereBall = new Event("whereBall", { clientX: 100, clientY: 100 });

document.addEventListener("whereBall", function (event) {
  console.log(event.detail.clientX);
});
ball.addEventListener("dblclick", function (event) {
  let clientX = event.clientX;
  let clientY = event.clientY;
  let whereBall = new MouseEvent("whereBall", {
    detail: {
      clientX,
      clientY,
    },
  });
  ball.dispatchEvent(whereBall);
  console.log(clientX, clientY);
});
