"use strict";



function valtoztat(elem) {
    let tartalom = elem.innerHTML;
    let tomb = tartalom.split(' ');
    let szoveg = "<ul>";
    for (let i = 0; i < tomb.length; i++) {
        szoveg += `<li>`
        for (let j = 0; j < tomb[i].length; j++) {
            if (j == 0) {
                szoveg += `${tomb[i].charAt(0).toUpperCase()}`;
            } else {
                szoveg += `${tomb[i].charAt(j)}`;
            }
            
        }
        szoveg += `</li>`;
        
    }
    szoveg += "</ul>";
    elem.innerHTML = szoveg;
}