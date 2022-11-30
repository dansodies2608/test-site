var t = [];
let zags = document.querySelectorAll('.textOut');
let a = 'деньги по любви'
zags.forEach(function (tZag) {
t.push(tZag.innerHTML)
console.log(t)
})
$(window).scroll(function () {
function come(elem) {
    var docViewTop = $(window).scrollTop(),
        docViewBottom = docViewTop + $(window).height(),
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


zags.forEach(function(l1, index) {

    
if (come(l1)) {
    if (l1.classList.contains("left")){
    return true
    } else {
        l1.classList.add("left")
        a = t[index]
        typeText()      
    }
    
} else {
    l1.classList.remove("left")
}
})
})



function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.querySelector('.left')
    function typeLine() {
 
        let interval = setTimeout(function() {
            out += a[line][count];
            htmlOut.innerHTML = out + ' |';
            count++;

        if (count >= a[line].length) {
            count = 0;
            line++;
            if (line == a.length) {
                clearTimeout(interval);
                htmlOut.innerHTML = out;
                return true;
            }
        }
        typeLine();
        }, 20)
    }
    typeLine();
}
$(document).ready(function () {
    typeText();
});

