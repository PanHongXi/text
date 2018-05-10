/*

 //AJAX异步请求
addEvent(window, 'click', function () {
    //通过点击事件，不断是点击请求返回数据,但是IE浏览器会默认上一次的数据，处理加上：?rand=' + Math.random()
    var xhr = createXHR();//创建XHR对象

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert(xhr.statusText);//获取数据返回的状态
                alert(xhr.responseText);//获取数据返回的状态
            } else {
                alert('获取数据错误！ 错误代号：' + xhr.status + '错误信息：' + xhr.responseText);
            }
        }
    };

    xhr.open('get', 'ajax2.php?rand=' + Math.random(), true);//准备发送请求,以get的方式请求，异步
    xhr.send(null);//发送请求，get不需要提交数据，则填null

});


//头部信息
addEvent(window, 'click', function () {
    //通过点击事件，不断是点击请求返回数据,但是IE浏览器会默认上一次的数据，处理加上：?rand=' + Math.random()
    var xhr = createXHR();//创建XHR对象

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // alert(xhr.getAllResponseHeaders());//获取全部头部信息
                alert(xhr.getResponseHeader('Content-Type'));//获取单个头部信息
            } else {
                alert('获取数据错误！ 错误代号：' + xhr.status + '错误信息：' + xhr.responseText);
            }
        }
    };

    xhr.open('get', 'ajax2.php?rand=' + Math.random(), true);//准备发送请求,以get的方式请求，异步
    xhr.setRequestHeader('myname', 'pan');//设置头部信息
    xhr.send(null);//发送请求，get不需要提交数据，则填null

});


//
addEvent(window, 'click', function () {
    //通过点击事件，不断是点击请求返回数据,但是IE浏览器会默认上一次的数据，处理加上：?rand=' + Math.random()
    var xhr = createXHR();//创建XHR对象

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
               alert(xhr.responseText);
            } else {
                alert('获取数据错误！ 错误代号：' + xhr.status + '错误信息：' + xhr.responseText);
            }
        }
    };

    xhr.open('get', 'ajax2.php?rand=' + Math.random() + '&name=pan&age=23', true);//准备发送请求,以get的方式请求，异步
    xhr.setRequestHeader('myname', 'pan');//设置头部信息
    xhr.send(null);//发送请求，get不需要提交数据，则填null

});

 */
// //调用ajax
// addEvent(document, 'click', function () {
//     setAjax({
//         method: 'get',
//         url: 'ajax2.php',
//         data: {
//             'name': 'pan',
//             'age': 100
//         },
//         success: function (text) {
//             alert(text);
//         },
//         async: false
//     });
// });

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

/*
addEvent(document, 'click', function () {
    var xhr = createXHR();

    xhr.open('get', 'ajax2.php?rand=' + Math.random(), false);
    xhr.send(null);
    alert(xhr.responseText);
});
*/

/*
//get请求
addEvent(document, 'click', function () {
    var xhr = createXHR();
    var url = 'ajax2.php?rand=' + Math.random();
    url = params(url, 'name', 'pan');
    url = params(url, 'age', '100');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert(xhr.responseText);
            }else {
                alert('获取数据错误！ 错误代号：' + xhr.status + '错误信息：' + xhr.responseText);
            }
        }
    };

    xhr.open('get', url, true);
    xhr.send(null);
    // alert(xhr.responseText);
});

function params(url, name, value) {
    url += url.indexOf('?') == -1 ? '?' : '&';
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);

    return url;
}


*/

/*
//post请求
addEvent(document, 'click', function () {
    var xhr = createXHR();
    var url = 'ajax2.php?rand=' + Math.random();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                alert(xhr.responseText);
            }else {
                alert('获取数据错误！ 错误代号：' + xhr.status + '错误信息：' + xhr.responseText);
            }
        }
    };
    xhr.open('post', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name=pan&age=100');
});

function params(url, name, value) {
    url += url.indexOf('?') == -1 ? '?' : '&';
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);

    return url;
}
*/

/*
//json加载
addEvent(document, 'click', function () {
    var xhr = createXHR();
    var url = 'ajax.json?rand=' + Math.random();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
               var box = JSON.parse(xhr.responseText);
               alert(box);
            }else {
                alert('获取数据错误！ 错误代号：' + xhr.status + '错误信息：' + xhr.responseText);
            }
        }
    };
    xhr.open('get', url, true);
    xhr.send(null);
});

*/

//名值对转换为字符串
function params(data) {
    var arr = [];
    for (var i in data) {
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    }
      return arr.join('&');
}

//封装ajax
function ajax(obj) {
    var xhr = createXHR();
    obj.url = obj.url + '?rand' + Math.random();
    obj.data = params(obj.data);

    if (obj.method === 'get') {
        obj.url += obj.url.indexOf('?') == -1 ? '?' + obj.data : '&' + obj.data;
    }

    if (obj.async === true) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                callback();
            }
        };
    }

    xhr.open(obj.method, obj.url, obj.async);
    if (obj.method === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(obj.data);
    } else {
        xhr.send(null);
    }

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

//调用ajax'get', 'ajax2.php', 'name=pan&age=100'
addEvent(document, 'click', function () {
    ajax({
        method:'post',
        url:'ajax2.php',
        data:{
            name:'pan',
            age:100
        },
        success:function (text) {
            alert(text);
        },
        async:true
    });
});










