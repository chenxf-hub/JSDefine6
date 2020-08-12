"use strict";

function Point(x, y) {
    this.x = x;
    this.y = y;
};

Point.prototype.r = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

var point = new Point(1, 1);
debug(point.r());
debug("e\u0301");
debug( typeof /javascript/gi);
debug(Number.isNaN("xxx"));
debug(window.isNaN("xxx"));

var date = new Date();
debug(formatDate(date));

function formatDate(date) {
    if(!(date instanceof Date)){
        return '';
    }
    var dateStr = '';
    dateStr = lpadding(date.getFullYear(), '0', 4)
        + '-' + lpadding(date.getMonth() + 1, '0', 2)
        + '-' + lpadding(date.getDate(), '0',2)
        + " " + lpadding(date.getHours(), '0', 2)
        + ':' + lpadding(date.getMinutes(), '0', 2)
        + ':' + lpadding(date.getSeconds(), '0', 2);
    return dateStr;
}

function lpadding(str, paddingChar, length){
    if(!(str instanceof String)){
        str = str + '';
    }
    if(str.length >= length){
        return str;
    }

    for(var i = 0; i < length - str.length; i++){
        str = paddingChar + str;
    }
    return str;
}

/**
 * 调试显示数据
 * @param msg -调试信息
 */
function debug(msg) {
    var log = document.getElementById("debuglog");
    if (!log) {
        log = document.createElement("div");
        log.id = 'debuglog';
        log.innerHTML = '<h1>Debug Log</h1>';
        document.body.appendChild(log);
    }

    var pre = document.createElement("pre");
    var text = document.createTextNode(msg);
    pre.appendChild(text);
    log.appendChild(pre);
}

/**
 * 隐藏元素
 * @param e -元素
 * @param reflow -是否占用空间
 */
function hide(e, reflow) {
    if (!reflow) {
        e.style.display = 'none';
    } else {
        e.style.visibility = 'hidden';
    }
}

/**
 * 高亮元素
 * @param e -元素
 */
function highlight(e) {
    if (!e.className) {
        e.className = 'hilite';
    } else {
        e.className += 'hilite';
    }
}