// Access the canvas element by its ID
const canvas = document.getElementById('myCanvas');
// Get the 2D drawing context
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Example: Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

// Example: Draw a circle
ctx.beginPath();
ctx.arc(150, 200, 50, 0, Math.PI * 2, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();