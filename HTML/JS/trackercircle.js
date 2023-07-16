
//locating the mouse
(function () {
    document.addEventListener("mousemove", function (event) {
      reactTo(event);
    });
    document.addEventListener("keydown", function (event) {
      reactTo(event);
    });
    document.addEventListener("keyup", function (event) {
      reactTo(event);
    });
  })();


  function reactTo(event) {
    const info = document.getElementById("info");

    if (event.type === "mousemove") {
      info.innerHTML = "Mouse pointer is at X:" + event.x + "Y:" + event.y;
      let x=event.x,y=event.y
      moveCircle(event, x, y)
      //then put it bahind a ocuptnt background, then its done.
    }
    else if (event.type === "keydown")
    {
        info.innerHTML += "<hr>" + event.type
        info.innerHTML += ":" + String.fromCharCode(event.keyCode) + "<hr>"

        removeCircle(event)
    }
  }

function moveCircle (event, x, y) {
    document.getElementById("circle")

    circle.setAttribute("style", "top:" + (y-200) + "px;" + "\n" + "left:" + (x-200) + "px;");
}

function removeCircle (event) {
    if (String.fromCharCode(event.keyCode) === "Q")
    {
    circle.setAttribute("style", "size: 0;")
    }
}