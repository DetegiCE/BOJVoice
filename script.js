var tm = setInterval(function() {
    var elm = document.getElementsByTagName("td");
    var elt = elm[3].innerText;
    if(!(elt == "채점 준비 중" || elt == "기다리는 중" || elt.substring(0,4) == "채점 중")) {
        if(elm[3].innerText == "틀렸습니다") {
            var audio = new Audio(chrome.extension.getURL("wrong1.mp3"));
            audio.play();
        }
        else if(elm[3].innerText == "맞았습니다!!") {
            var audio = new Audio(chrome.extension.getURL("right.mp3"));
            audio.play();
        }
        else {
            alert(elm[3].innerText);
        }
        clearInterval(tm);
    }
}, 200);