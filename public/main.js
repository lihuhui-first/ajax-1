console.log("我是main.js 2");
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);//把JSON变成数组
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1
        }
    };
    request.send();
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response);
            console.log(request.response);
            const object = JSON.parse(request.response)
            console.log(typeof object)
            console.log(object)
            myName.textContent = object.name
        }
    };
    request.send()
};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest;
    request.open("GET", "/3.html")
    request.onload = () => {
        console.log(request.response)
        //创建div
        const div = document.createElement('div')
        //填写div内容
        div.innerHTML = request.response
        //插入到body里面
        document.body.appendChild(div)
    };
    request.onerror = () => { }
    request.send()
};

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onload = () => {
        console.log('request.response')
        //创建script标签
        const script = document.createElement('script')
        //填写script内容
        script.innerHTML = request.response
        //插到body里面
        document.body.appendChild(script)
    }
    request.onerror = () => { };
    request.send();
};

getCSS.onclick = () => {
    const request = new XMLHttpRequest(); //创建对象
    request.open("GET", "/style.css");  //调用对象的open方法,从MDN找，此时readyState = 1
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功2xx 还是失败4xx 5xx
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // //创建style标签
                // const style = document.createElement('style')
                // //填写style内容
                // style.innerHTML = request.response
                // //插到head里面
                // document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    };
    request.send() //发送请求
};
