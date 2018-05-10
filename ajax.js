
//AJAX同步请求
addEvent(window, 'click', function () {
    //通过点击事件，不断是点击请求返回数据,但是IE浏览器会默认上一次的数据，处理加上：?rand=' + Math.random()
    var xhr = createXHR();//创建XHR对象
    xhr.open('get', 'ajax1.php?rand=' + Math.random(), false);//准备发送请求,以get的方式请求，同步
    xhr.send(null);//发送请求，get不需要提交数据，则填null
    alert(xhr.responseText);//获取返回来的文本数据

    if (xhr.status == 200) {
        alert(xhr.statusText);//获取数据返回的状态
    } else {
        alert('获取数据错误！ 错误代号：' + xhr.status + '错误信息：' + xhr.responseText);
    }

});



















