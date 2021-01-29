let str = window.location.search


let queryString = window.location.search.slice(1);

let obj = {}

if (queryString) {
    queryString = queryString.split('#')[0];
    let arr = queryString.split('&');

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i].split('=');


        let paramNum = undefined;
        let paramName = a[0].replace(/\[\d*\]/, function (v) {
            paramNum = v.slice(1, -1);
            return '';
        });
        let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
        paramName = paramName.toLowerCase();
        paramValue = paramValue.toLowerCase();
        if (obj[paramName]) {
            if (typeof obj[paramName] === 'string') {
                obj[paramName] = [obj[paramName]];
            }
            if (typeof paramNum === 'undefined') {
                obj[paramName].push(paramValue);
            } else {
                obj[paramName][paramNum] = paramValue;
            }
        } else {
            obj[paramName] = paramValue;
        }
    }

}

let size = document.getElementsByClassName('radio')

if (obj.size === 'm') {
    size[1].checked = true
} else if (obj.size === 's') {
    size[0].checked = true
} else if (obj.size === 'l') {
    size[2].checked = true
}
for (let i = 0; i < size.length; i++) {
    size[i].addEventListener('click', (e) => {
        obj.size = size[i].value
        console.log('path', `/filter?size=${size[i].value}`)

    })
}

let color = document.getElementsByClassName('checkbox')

for (let i =0; i<color.length; i++) {
    if (!!obj.color[i]) {
        color[(obj.color[i]) -1].checked = true
    }
}

for (let i=0; i < color.length; i++) {
    const func = (i) => {
        return `&color=${obj.color[i]}`
    }
    color[i].addEventListener('click',(e) => {
        console.log('color[0].checked',color[i].checked )
        if (color[i].checked === true) {
            obj.color.push(color[i].value)
        } /*else if (color[i].checked === false) {
            obj.color.filter(el => false)
        }*/
console.log('obj', obj)
        let colors = '';
        for (let j = 0; j < obj.color.length; j++) {
             colors = colors + func(j)
        }
        console.log('colors', colors)
    }  )
}








/*
window.location.search = `?size=${obj.size}&color=1&color=2&manufacturer=aaa&manufacturer=ddd`
*/
console.log('obj', window.location.search)

console.log('str', obj)
console.log(window.location)





/*
params = new URLSearchParams(
    new URL(`http://domain.com/filter${window.location.search}`).search
)
console.log([...params])*/
