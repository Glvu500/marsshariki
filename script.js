{\rtf1\ansi\ansicpg1251\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;\f1\fnil\fcharset0 .AppleSystemUIFontMonospaced-Medium;}
{\colortbl;\red255\green255\blue255;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cspthree\c100000\c100000\c100000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww21100\viewh19240\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural\partightenfactor0

\f0\fs26 \cf2 const canvas = document.getElementById("canvas");\
const ctx = canvas.getContext("2d");\
\
canvas.width = window.innerWidth;\
canvas.height = window.innerHeight;\
\
let balls = [];\
\
for (let i = 0; i < 50; i++) \{\
  balls.push(\{\
    x: Math.random() * canvas.width,\
    y: Math.random() * canvas.height,\
    r: Math.random() * 10 + 5,\
    dx: (Math.random() - 0.5) * 4,\
    dy: (Math.random() - 0.5) * 4,\
    color:
\f1  hsl($\{Math.random() * 360\}, 100%, 50%)\

\f0   \});\
\}\
\
function draw() \{\
  ctx.clearRect(0, 0, canvas.width, canvas.height);\
  balls.forEach(b => \{\
    ctx.beginPath();\
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);\
    ctx.fillStyle = b.color;\
    ctx.fill();\
\
    b.x += b.dx;\
    b.y += b.dy;\
\
    if (b.x + b.r > canvas.width || b.x - b.r < 0) b.dx *= -1;\
    if (b.y + b.r > canvas.height || b.y - b.r < 0) b.dy *= -1;\
  \});\
\}\
\
setInterval(draw, 20);}