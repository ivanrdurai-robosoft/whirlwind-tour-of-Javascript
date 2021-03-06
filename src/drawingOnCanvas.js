let cx = document.querySelector("canvas").getContext("2d");

  function trapezoid(x, y) {
    cx.beginPath();
    cx.moveTo(x, y);
    cx.lineTo(x + 50, y);
    cx.lineTo(x + 70, y + 50);
    cx.lineTo(x - 20, y + 50);
    cx.closePath();
    cx.stroke();
  }
  trapezoid(30, 30);

  function diamond(x, y) {
    cx.translate(x + 30, y + 30);
    cx.rotate(Math.PI / 4);
    cx.fillStyle = "red";
    cx.fillRect(-30, -30, 60, 60);
    cx.resetTransform();
  }
  diamond(140, 30);

  function zigzag(x, y) {
    cx.beginPath();
    cx.moveTo(x, y);
    for (let i = 0; i < 8; i++) {
      cx.lineTo(x + 80, y + i * 8 + 4);
      cx.lineTo(x, y + i * 8 + 8);
    }
    cx.stroke();
  }
  zigzag(240, 20);

  function spiral(x, y) {
    let radius = 50, xCenter = x + radius, yCenter = y + radius;
    cx.beginPath();
    cx.moveTo(xCenter, yCenter);
    for (let i = 0; i < 300; i++) {
      let angle = i * Math.PI / 30;
      let dist = radius * i / 300;
      cx.lineTo(xCenter + Math.cos(angle) * dist,
                yCenter + Math.sin(angle) * dist);
    }
    cx.stroke();
  }
  spiral(340, 20);

  function star(x, y) {
    let radius = 50, xCenter = x + radius, yCenter = y + radius;
    cx.beginPath();
    cx.moveTo(xCenter + radius, yCenter);
    for (let i = 1; i <= 8; i++) {
      let angle = i * Math.PI / 4;
      cx.quadraticCurveTo(xCenter, yCenter,
                          xCenter + Math.cos(angle) * radius,
                          yCenter + Math.sin(angle) * radius);
    }
    cx.fillStyle = "gold";
    cx.fill();
  }
  star(440, 20);



  //second exercise
  let cx = document.querySelector("canvas").getContext("2d");
  let total = results.reduce(function(sum, choice) {
    return sum + choice.count;
  }, 0);

  let currentAngle = -0.5 * Math.PI;
  let centerX = 300, centerY = 150;

  results.forEach(function(result) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    cx.arc(centerX, centerY, 100,
           currentAngle, currentAngle + sliceAngle);

    let middleAngle = currentAngle + 0.5 * sliceAngle;
    let textX = Math.cos(middleAngle) * 120 + centerX;
    let textY = Math.sin(middleAngle) * 120 + centerY;
    cx.textBaseLine = "middle";
    if (Math.cos(middleAngle) > 0) {
      cx.textAlign = "left";
    } else {
      cx.textAlign = "right";
    }
    cx.font = "15px sans-serif";
    cx.fillStyle = "black";
    cx.fillText(result.name, textX, textY);

    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
  });



  //third exercise
  let x = 100, y = 300;
  let radius = 10;
  let speedX = 100, speedY = 60;

  function updateAnimation(step) {
    cx.clearRect(0, 0, 400, 400);
    cx.strokeStyle = "blue";
    cx.lineWidth = 4;
    cx.strokeRect(25, 25, 350, 350);
    
    x += step * speedX;
    y += step * speedY;
    if (x < 25 + radius || x > 375 - radius) speedX = -speedX;
    if (y < 25 + radius || y > 375 - radius) speedY = -speedY;
    cx.fillStyle = "red";
    cx.beginPath();
    cx.arc(x, y, radius, 0, 7);
    cx.fill();
  }