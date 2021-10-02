const canvas = document.getElementById('chart')
const context = canvas.getContext('2d')

canvas.width = 700
canvas.height = 700

function fillDot(x, y, color) {
  context.fillStyle = color
  context.fillRect(canvas.width/2 + x, canvas.height/2 - y, 1, 1)
}

function renderFrame() {
  for (let i = 0; i < canvas.height; i++) {
    context.fillStyle = 'rgb( 0, 0, 0)'
    context.fillRect(0, i, 1, 1)
  }

  for (let i = 0; i < canvas.height; i++) {
    context.fillStyle = 'rgb( 0, 0, 0)'
    context.fillRect(canvas.width-1, i, 1, 1)
  }

  for (let i = 0; i < canvas.width; i++) {
    context.fillStyle = 'rgb( 0, 0, 0)'
    context.fillRect(i, 0, 1, 1)
  }

  for (let i = 0; i < canvas.width; i++) {
    context.fillStyle = 'rgb( 0, 0, 0)'
    context.fillRect(i, canvas.height-1, 1, 1)
  }
}

function renderCross() {
  for (let i = 0; i < canvas.width; i++) {
    if (i & 1) continue
    context.fillStyle = '#797979'
    context.fillRect(i, canvas.height/2, 1, 1)
  }
  for (let i = 0; i < canvas.width; i++) {
    if (i & 1) continue
    context.fillStyle = '#797979'
    context.fillRect(canvas.width/2, i, 1, 1)
  }
}

renderCross()

for (let i = 0; i < canvas.width; i++) {
  let x = i-canvas.width/2
  let y = x*x*x + x*x + x
  fillDot(x, y, '#797979')
}

