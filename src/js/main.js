/**
 * Created by xs on 2017/2/18.
 */
window.onload = function () {

    var timer = null;
    var pre = document.getElementsByClassName("prve-d")[0]
    var next = document.getElementsByClassName("next-d")[0]
    var odiv = document.getElementsByClassName("list-display")[0];
    var oul = odiv.getElementsByTagName("ul")[0];
    var ali = oul.getElementsByTagName("li");
    var playlogo = document.getElementsByClassName("playLogo");

    function addEvent(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)
        }
        else if (element.attachEvent) {
            element.attachEvent("on" + type, handler)
        }
        else {
            element['on' + type]
        }
    }

    /*给播放icon添加mouseover out 改变透明度*/
    function getImg() {

        var arr = [];
        var j = 0;
        for (var i = 0; i < playlogo.length; i++) {
            arr.push(playlogo[i].getElementsByTagName("img")[0])
        }
        function f() {
            return arr
        }

        return f();
    }

    function changOpacity() {
        var a = getImg()

        for (var i = 0; i < a.length; i++) {
            a[i].onmouseover = function () {
                this.style.opacity = 1;
            }
            a[i].onmouseout = function () {
                this.style.opacity = 0.6
            }

        }
    }


    changOpacity()

    playlogo.onmouseover = function () {
        this.style.opacity = 1
    }
    oul.innerHTML = oul.innerHTML + oul.innerHTML;
    oul.style.width = ali[0].offsetWidth * ali.length + "px";
    /*控制新碟滚动*/
    pre.onclick = function () {
        var timer = setInterval(function () {
            oul.style.left = oul.offsetLeft - 10 + "px"
            if (oul.offsetLeft == -oul.offsetWidth * 3 / 4) {
                clearInterval(timer)
                oul.style.left = -oul.offsetWidth / 4 + "px";
            }
            if (oul.offsetLeft == -oul.offsetWidth / 2) {
                clearInterval(timer)
                oul.style.left = -oul.offsetWidth / 2 + "px";
            }
        }, 10)

    }

    next.onclick = function () {
        var timer = setInterval(function () {
            oul.style.left = oul.offsetLeft + 10 + "px"
            if (oul.offsetLeft == -oul.offsetWidth * 1 / 4) {
                clearInterval(timer)
                oul.style.left = -oul.offsetWidth * 1 / 4 + "px";

            }
            if (oul.offsetLeft == 0) {
                clearInterval(timer)
                oul.style.left = -oul.offsetWidth / 2 + "px";
            }
        }, 10)

    }
    /*控制排行榜里面ol 的背景显示*/

    function changeLiColor() {
        var music_li = document.getElementsByClassName("rank-item")[0].getElementsByTagName("li");

        for (var i = 0; i < music_li.length; i++) {
            if (i % 2 == 0) {
                music_li[i].style.backgroundColor = "rgb(232,232,232)"
            }

            else  {
                music_li[i].style.backgroundColor = "rgb(244,244,244)"
            }
        }
    }

    changeLiColor()
}

