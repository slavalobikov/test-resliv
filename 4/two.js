window.onmessage = function(e) {

    let payload = JSON.parse(e.data);
    if (payload.par === 'set') {
        localStorage.setItem(payload.key, payload.data);
        console.log('writen')
    } else if (payload.par === 'delete')  {
        localStorage.removeItem(payload.key)
        console.log('delete')
    } else if (payload.par === 'get') {
        console.log(localStorage.getItem(payload.key))

    }

};