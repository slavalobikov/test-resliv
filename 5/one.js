const keySet = document.getElementById('keySet');
const itemSet =document.getElementById('itemSet');
const btnSet = document.getElementById('btnSet');
const callSet = document.getElementById('callSet')
const iframe = document.getElementById('iframe');

const postMessageFunc = (key, data, par, callback) => {
    let win = iframe.contentWindow;
    win.postMessage(JSON.stringify({

        key: key.value,
        data: data.value,
        par: par,
        callback: callback.value

    }), "*");


}


btnSet.addEventListener('click', () => {

    postMessageFunc(keySet, itemSet, 'set', callSet)

})

const keyDelete = document.getElementById('keyDelete');
const btnDelete = document.getElementById('btnDelete');

btnDelete.addEventListener('click', () => {
    postMessageFunc(keyDelete, null, 'delete', callSet)
})

const getKey = document.getElementById('getKey');
const btnGet = document.getElementById('btnGet');

btnGet.addEventListener('click', () => {
    postMessageFunc(getKey, null, 'get',callSet)
})




