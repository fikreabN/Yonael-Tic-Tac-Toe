const xbtn = document.getElementById('x');
const obtn = document.getElementById('o');
const all = document.querySelectorAll('#c');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');
const h = document.getElementById('h');
const i = document.getElementById('i');
const choose = document.getElementById('choose');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const fill1 = document.getElementById("fill1");
const fill2 = document.getElementById("fill2");
const turn1 = document.getElementById('turn1');
const turn2 = document.getElementById('turn2');
const win1 = document.getElementById('wl1');
const win2 = document.getElementById('wl2');
const win = document.getElementById('win');
const re = document.getElementById('re');

const playersData = {
    player1: {
        xo: '',
        turn: true,
        pc: [
            ['','',''],
            ['','',''],
            ['','','']
        ]
    },
    player2: {
        xo: '',
        turn: false,
        pc: [
            ['','',''],
            ['','',''],
            ['','','']
        ]
    },
    pcAll: [
        ['','',''],
        ['','',''],
        ['','','']
    ],
    end: false
};
const rmvWin = () => {
    win.classList.remove("win1");
    win.classList.remove("win2");
    win.classList.remove("win3");
    win.classList.remove("win4");
    win.classList.remove("win5");
    win.classList.remove("win6");
    win.classList.remove("win7");
    win.classList.remove("win8");
}
const restart = () => {
    playersData.player1.xo = "";
    playersData.player1.pc = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    playersData.player1.turn = true;
    playersData.player2.xo = "";
    playersData.player2.pc = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    playersData.player2.turn = true;
    playersData.pcAll = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    a.innerText = "";
    b.innerText = "";
    c.innerText = "";
    d.innerText = "";
    e.innerText = "";
    f.innerText = "";
    g.innerText = "";
    h.innerText = "";
    i.innerText = "";
    choose.classList.remove('none');
    player1.classList.add("none");
    player2.classList.add("none");
    fill1.innerText = "";
    fill2.innerText = "";
    rmvWin();
    win1.innerHTML = "";
    win2.innerHTML = "";
    turn1.innerHTML = "Your Turn!";
    playersData.player1.turn = true;
    playersData.player2.turn = false;
    playersData.end = false;
}

const xClicked = () => {
    playersData.player1.xo = "X"
    playersData.player2.xo = "O"
    choose.classList.add("none") 
    player1.classList.remove("none")
    player2.classList.remove("none")
    fill1.innerText = "X"
    fill2.innerText = "O"
    turn1.innerText = "Your Turn!"
};
const oClicked = () => {
    playersData.player1.xo = "O"
    playersData.player2.xo = "X"
    choose.classList.add("none") 
    player1.classList.remove("none")
    player2.classList.remove("none")
    fill1.innerText = "O"
    fill2.innerText = "X" 
};
xbtn.addEventListener('click', xClicked)
obtn.addEventListener('click', oClicked)
const tapp = () => {
    for (const alll of all) {
        alll.addEventListener('click', () => {console.log("yay!!")})
    }
}
const shits1 = (ab) => {
    ab.innerText = playersData.player1.xo;
    playersData.player1.turn = false;
    playersData.player2.turn = true;
    turn1.innerText ="";
    turn2.innerText = "Your Turn!";
}
const shits2 = (ab) => {
    ab.innerText = playersData.player2.xo;
    playersData.player2.turn = false;
    playersData.player1.turn = true;
    turn2.innerText ="";
    turn1.innerText ="Your Turn!";
}
a.addEventListener('click', () => {
    if (playersData.player1.turn && a.innerText == "" && !playersData.end) {
        shits1(a);
        playersData.player1.pc[0][0] = playersData.player1.xo;
        playersData.pcAll[0][0] = playersData.player1.xo;
    } else if (playersData.player2.turn && a.innerText == "" && !playersData.end) {
        shits2(a)
        playersData.player2.pc[0][0] = playersData.player2.xo;
        playersData.pcAll[0][0] = playersData.player2.xo;
    }
    howWin();
})
b.addEventListener('click', () => {
    if (playersData.player1.turn && b.innerText == "" && !playersData.end) {
        shits1(b)
        playersData.player1.pc[0][1] = playersData.player1.xo;
        playersData.pcAll[0][1] = playersData.player1.xo;
    } else if (playersData.player2.turn && b.innerText == "" && !playersData.end) {
        shits2(b)
        playersData.player2.pc[0][1] = playersData.player2.xo;
        playersData.pcAll[0][1] = playersData.player2.xo;
    }
    howWin();
})
c.addEventListener('click', () => {
    if (playersData.player1.turn && c.innerText == "" && !playersData.end) {
        shits1(c);
        playersData.player1.pc[0][2] = playersData.player1.xo;
        playersData.pcAll[0][2] = playersData.player1.xo;
    } else if (playersData.player2.turn && c.innerText == "" && !playersData.end) {
        shits2(c);
        playersData.player2.pc[0][2] = playersData.player2.xo;
        playersData.pcAll[0][2] = playersData.player2.xo;
    }
    howWin();
})
d.addEventListener('click', () => {
    if (playersData.player1.turn && d.innerText == "" && !playersData.end) {
        shits1(d);
        playersData.player1.pc[1][0] = playersData.player1.xo;
        playersData.pcAll[1][0] = playersData.player1.xo;
    } else if (playersData.player2.turn && d.innerText == "" && !playersData.end) {
        shits2(d);
        playersData.player2.pc[1][0] = playersData.player2.xo;
        playersData.pcAll[1][0] = playersData.player2.xo;
    }
    howWin();
})
e.addEventListener('click', () => {
    if (playersData.player1.turn && e.innerText == "" && !playersData.end) {
        shits1(e);
        playersData.player1.pc[1][1] = playersData.player1.xo;
        playersData.pcAll[1][1] = playersData.player1.xo;
    } else if (playersData.player2.turn && e.innerText == "" && !playersData.end) {
        shits2(e);
        playersData.player2.pc[1][1] = playersData.player2.xo;
        playersData.pcAll[1][1] = playersData.player2.xo;
    }
    howWin();
})
f.addEventListener('click', () => {
    if (playersData.player1.turn && f.innerText == ""&& !playersData.end) {
        shits1(f);
        playersData.player1.pc[1][2] = playersData.player1.xo;
        playersData.pcAll[1][2] = playersData.player1.xo;
    } else if (playersData.player2.turn && f.innerText == "" && !playersData.end) {
        shits2(f);
        playersData.player2.pc[1][2] = playersData.player2.xo;
        playersData.pcAll[1][2] = playersData.player2.xo;
    }
    howWin();
})
g.addEventListener('click', () => {
    if (playersData.player1.turn && g.innerText == "" && !playersData.end) {
        shits1(g);
        playersData.player1.pc[2][0] = playersData.player1.xo;
        playersData.pcAll[2][0] = playersData.player1.xo;
    } else if (playersData.player2.turn && g.innerText == "" && !playersData.end) {
        shits2(g);
        playersData.player2.pc[2][0] = playersData.player2.xo;
        playersData.pcAll[2][0] = playersData.player2.xo;
    }
    howWin();
})
h.addEventListener('click', () => {
    if (playersData.player1.turn && h.innerText == "" && !playersData.end) {
        shits1(h);
        playersData.player1.pc[2][1] = playersData.player1.xo;
        playersData.pcAll[2][1] = playersData.player1.xo;
    } else if (playersData.player2.turn && h.innerText == "" && !playersData.end) {
        shits2(h);
        playersData.player2.pc[2][1] = playersData.player2.xo;
        playersData.pcAll[2][1] = playersData.player2.xo;
    }
    howWin();
})
i.addEventListener('click', () => {
    if (playersData.player1.turn && i.innerText == "" && !playersData.end) {
        shits1(i);
        playersData.player1.pc[2][2] = playersData.player1.xo;
        playersData.pcAll[2][2] = playersData.player1.xo;
    } else if (playersData.player2.turn && i.innerText == "" && !playersData.end) {
        shits2(i);
        playersData.player2.pc[2][2] = playersData.player2.xo;
        playersData.pcAll[2][2] = playersData.player2.xo;
    }
    howWin();
})
function shits3 () {
    playersData.end = false;
}
function win11 () {
    win.classList.add("win1")
}function win22 () {
    win.classList.add("win2")
}function win3 () {
    win.classList.add("win3")
}function win4 () {
    win.classList.add("win4")
}function win5 () {
    win.classList.add("win5")
}function win6 () {
    win.classList.add("win6")
}function win7 () {
    win.classList.add("win7")
}function win8 () {
    win.classList.add("win8")
}
const howWin = () => {
    if (playersData.player1.xo && playersData.player2.xo){
        if (playersData.pcAll[0][0] == playersData.player1.xo && playersData.pcAll[1][0] == playersData.player1.xo && playersData.pcAll[2][0] == playersData.player1.xo) {
            playersData.end = true;
            win1.innerHTML = "YOU WIN!! 🎉";
            win2.innerHTML ="YOU LOSE!! 💔";
            turn2.innerHTML = "";
            win11();
            console.log('yay');
        } else if (playersData.pcAll[0][1] == playersData.player1.xo && playersData.pcAll[1][1] == playersData.player1.xo && playersData.pcAll[2][1] == playersData.player1.xo) {
            playersData.end = true;
            win1.innerHTML = "YOU WIN!! 🎉";
            win2.innerHTML ="YOU LOSE!! 💔";
            turn2.innerHTML = "";
            win22()
        } else if (playersData.pcAll[0][2] == playersData.player1.xo && playersData.pcAll[1][2] == playersData.player1.xo && playersData.pcAll[2][2] == playersData.player1.xo) {
            playersData.end = true;
            win1.innerHTML = "YOU WIN!! 🎉";
            win2.innerHTML ="YOU LOSE!! 💔";
            turn2.innerHTML = "";
            win3()
        } else if (playersData.pcAll[0][0] == playersData.player1.xo && playersData.pcAll[0][1] == playersData.player1.xo && playersData.pcAll[0][2] == playersData.player1.xo) {
            playersData.end = true;
            win1.innerHTML = "YOU WIN!! 🎉";
            win2.innerHTML = "YOU LOSE!! 💔";
            turn2.innerHTML = "";
            win4()
        } else if (playersData.pcAll[1][0] == playersData.player1.xo && playersData.pcAll[1][1] == playersData.player1.xo && playersData.pcAll[1][2] == playersData.player1.xo) {
            playersData.end = true;
            win1.innerHTML = "YOU WIN!! 🎉";
            win2.innerHTML ="YOU LOSE!! 💔";
            turn2.innerHTML = "";
            win5()
        } else if (playersData.pcAll[2][0] == playersData.player1.xo && playersData.pcAll[2][1] == playersData.player1.xo && playersData.pcAll[2][2] == playersData.player1.xo) {
            playersData.end = true;
            win1.innerHTML = "YOU WIN!! 🎉";
            win2.innerHTML ="YOU LOSE!! 💔";
            turn2.innerHTML = "";
            win6()
        } else if (playersData.pcAll[0][0] == playersData.player1.xo && playersData.pcAll[1][1] == playersData.player1.xo && playersData.pcAll[2][2] == playersData.player1.xo) {
            playersData.end = true;
            win1.innerHTML = "YOU WIN!! 🎉";
            win2.innerHTML ="YOU LOSE!! 💔";
            turn2.innerHTML = "";
            win8()
        } else if (playersData.pcAll[0][2] == playersData.player1.xo && playersData.pcAll[1][1] == playersData.player1.xo && playersData.pcAll[2][0] == playersData.player1.xo) {
            playersData.end = true;// end one
            win1.innerHTML = "YOU WIN!! 🎉";
            win2.innerHTML ="YOU LOSE!! 💔";
            turn1.innerHTML = "";
            turn2.innerHTML = "";
            win7()
        } else if (playersData.pcAll[0][0] == playersData.player2.xo && playersData.pcAll[1][0] == playersData.player2.xo && playersData.pcAll[2][0] == playersData.player2.xo) {
            playersData.end = true;
            win2.innerHTML = "YOU WIN!! 🎉";
            win1.innerHTML ="YOU LOSE!! 💔";
            turn1.innerHTML = "";
            turn2.innerHTML = "";
            win11()
        } else if (playersData.pcAll[0][1] == playersData.player2.xo && playersData.pcAll[1][1] == playersData.player2.xo && playersData.pcAll[2][1] == playersData.player2.xo) {
            playersData.end = true;
            win2.innerHTML = "YOU WIN!! 🎉";
            win1.innerHTML ="YOU LOSE!! 💔";
            turn1.innerHTML = "";
            turn2.innerHTML = "";
            win22()
        } else if (playersData.pcAll[0][2] == playersData.player2.xo && playersData.pcAll[1][2] == playersData.player2.xo && playersData.pcAll[2][2] == playersData.player2.xo) {
            playersData.end = true;
            win2.innerHTML = "YOU WIN!! 🎉";
            win1.innerHTML ="YOU LOSE!! 💔";
            turn1.innerHTML = "";
            turn2.innerHTML = "";
            win3()
        } else if (playersData.pcAll[0][0] == playersData.player2.xo && playersData.pcAll[0][1] == playersData.player2.xo && playersData.pcAll[0][2] == playersData.player2.xo) {
            playersData.end = true;
            win2.innerHTML = "YOU WIN!! 🎉";
            win1.innerHTML ="YOU LOSE!! 💔";
            turn1.innerHTML = "";
            turn2.innerHTML = "";
            win4()
        } else if (playersData.pcAll[1][0] == playersData.player2.xo && playersData.pcAll[1][1] == playersData.player2.xo && playersData.pcAll[1][2] == playersData.player2.xo) {
            playersData.end = true;
            win2.innerHTML = "YOU WIN!! 🎉";
            win1.innerHTML ="YOU LOSE!! 💔";
            turn1.innerHTML = "";
            turn2.innerHTML = "";
            win5()
        } else if (playersData.pcAll[2][0] == playersData.player2.xo && playersData.pcAll[2][1] == playersData.player2.xo && playersData.pcAll[2][2] == playersData.player2.xo) {
            playersData.end = true;
            win2.innerHTML = "YOU WIN!! 🎉";
            win1.innerHTML ="YOU LOSE!! 💔";
            turn1.innerHTML = "";
            turn2.innerHTML = "";
            win6()
        } else if (playersData.pcAll[0][0] == playersData.player2.xo && playersData.pcAll[1][1] == playersData.player2.xo && playersData.pcAll[2][2] == playersData.player2.xo) {
            playersData.end = true;
            win2.innerHTML = "YOU WIN!! 🎉";
            win1.innerHTML ="YOU LOSE!! 💔";
            turn1.innerHTML = "";
            turn2.innerHTML = "";
            win8()

        } else if (playersData.pcAll[0][2] == playersData.player2.xo && playersData.pcAll[1][1] == playersData.player2.xo && playersData.pcAll[2][0] == playersData.player2.xo) {
            playersData.end = true;
            win2.innerHTML = "YOU WIN!! 🎉";
            win1.innerHTML ="YOU LOSE!! 💔";
            turn1.innerHTML = "";
            win7()
        } else if (playersData.pcAll[0][0] && playersData.pcAll[0][1] && playersData.pcAll[0][2] && playersData.pcAll[1][0] && playersData.pcAll[1][1] && playersData.pcAll[1][2] && playersData.pcAll[2][0] && playersData.pcAll[2][1] && playersData.pcAll[2][2]){
            win2.innerHTML = "DRAW!! 🤝";
            win1.innerHTML ="DRAW!! 🤝";
            turn1.innerHTML = "";
            turn2.innerHTML = "";
        }
    }
}
re.addEventListener("click", restart)