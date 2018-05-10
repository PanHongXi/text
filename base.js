//跨浏览器添加事件
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + type, function () {
            fn.call(obj);
        });
    }
}

//跨浏览器移除事件
function removeEvent(obj, type, fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, false);
    } else if (obj.detachEvent) {
        obj.detachEvent('on' + type, fn);
    }
}

//跨浏览器获取目标对象
function getTarget(evt) {
    if (evt.target) {//W3C
        return evt.target;
    } else if (window.event.srcElement) {//IE
        return window.event.srcElement;
    }
}

//跨浏览器阻止默认行为
function preDef(evt) {
    var e = evt || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

//跨浏览器字符编码,兼容模式
function getCharCode(evt) {
    var e = evt || window.event;
    if (typeof  e.charCode == 'number') {
        return e.charCode;
    } else {
        return e.keyCode;
    }
}

//设置cookie
function setCookie(name, value, expires, path, domain, secure) {
    var cookieName = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires instanceof Date) {
        cookieName += ';expires=' + expires;
    }
    if (path) {
        cookieName += ';path=' + path;
    }
    if (domain) {
        cookieName += ';domain=' + domain;
    }
    if (secure) {
        cookieName += ';secure';
    }
    document.cookie = cookieName;
}

//设置cookie过期时间
function setCookieDate(day) {
    var date = null;
    if (typeof day == 'number' && day > 0) {
        date = new Date();
        date.setDate(date.getDate() + day);
    } else {
        return new Error('你传递的天数不合法，数字必须大于0！');
    }
    return date;
}

//获取cookie
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + '=';
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;

    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(';', cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        return cookieValue;
    }
}
/*
//创建XHR
function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else if (typeof  ActiveXObject != 'undefined') {
        var version = [
            'MSXML2.XMLHttp.6.0',
            'MSXML2.XMLHttp.3.0',
            'MSXML2.XMLHttp'
        ];
        for (var i = 0; version.length; i++) {
            try {
                return new ActiveXObject(version[i]);
            } catch (e) {
                //跳过
            }
        }
    } else {
        throw new Error('您的系统或浏览器不支持XHR对象！');
    }
}

//键值对转换字符串
function params(data) {
    var arr = [];
    for (var i in data) {
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    }
    return arr.join('&');
}

//封装ajax
function setAjax(obj) {
    var xhr = createXHR();//创建XHR对象
    obj.url = obj.url + '?rand=' + Math.random();
    obj.data = params(obj.data);

    //判断是post还是get传值
    if (obj.method === 'get') {
        //三元运算处理路径是否有‘？’
        obj.url += obj.url.indexOf('?') == -1 ? '?' + obj.data : '&' + obj.data;
    }

    //判断是否是异步请求
    if (obj.async === true) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                callback();
            }
        };
    }

    xhr.open(obj.method, obj.url, obj.async);//准备发送请求,以get的方式请求，异步

    //判断是否是post
    if (obj.method === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(obj.data);
    } else {
        xhr.send(null);//发送请求，get不需要提交数据，则填null
    }

    //判断是否是同步请求
    if (obj.async === false) {
        callback();
    }

    //回调函数
    function callback() {
        if (xhr.status == 200) {
            obj.success(xhr.responseText);//回调传参
        } else {
            alert('获取数据错误！ 错误代号：' + xhr.status + '错误信息：' + xhr.responseText);
        }
    }
}

*/
