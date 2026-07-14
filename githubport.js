{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 //index.js\
\
const hamburger = document.getElementById('hamburger'); \
const menu = document.querySelector('.menu'); \
\
hamburger.addEventListener('click', function () \{ \
    const hamIcon = this.querySelector('.hamburger-icon'); \
    const crossIcon = this.querySelector('.cross-icon'); \
    if (hamIcon.style.display === "none") \{ \
        hamIcon.style.display = "inline-block"\
        menu.style.display = "none"\
        crossIcon.style.display = "none"\
    \} \
    else \{ \
        crossIcon.style.display = "inline-block"\
        hamIcon.style.display = "none"\
        menu.style.display = "block"\
    \} \
\});}