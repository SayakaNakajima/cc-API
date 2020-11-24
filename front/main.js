// const { response } = require("express");
// const { default: glyphs } = require("services/glyphs");
const glyph = document.getElementById("glyph").value;
const radical = document.getElementById("radical").value;
const strokes = document.getElementById("strokes").value;
const test_grade = document.getElementById("test_grade").value;
const data = {
    glyph,
    radical,
    strokes,
    test_grade
};

const demo = async ()  => {
    console.log(data);
    url = 'http:///localhost:5000/glyphs'
    const fetchGet = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        /*
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        */
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        /*
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        */
        body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    })
    .then(response => {
        console.log('02');
        console.log(response);
        document.getElementById("appearance").innerText = response.json()}
    );
    // return response.json(); // レスポンスの JSON を解析
    fetchGet();
};

const form0 = document.getElementById("form01");
const addElem = () => {
    console.log('check');
    console.log('01');
    console.log(data);
    const bt = document.createElement('button');

    bt.innerText = 'Register';
    bt.onclick = demo();
    form0.append(bt);
};

addElem();
// registerButton.addEventListener("onclick", demo);

/*
    const id = document.getElementById("id");
    await fetch("/glyphs", )
    setupJson.JSON.strigify()
*/


