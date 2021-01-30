let str = window.location.search
let size = document.getElementsByClassName('radio')



let queryString = window.location.search.slice(1);

let obj = {
    size:null,
    color:[],
    manufacturer:[],
}

const path = () => {
    let history = '?';
    let size = '';
    let colors = '';
    let man = '';
    const func = (i, name) => {
        return `&${name}=${obj.color[i]}`
    }
    const funcMan = (i) => {
        return `&manufacturer=${obj.manufacturer[i]}`
    }
    if (!obj.color) {

    } else if (!!obj.color) {
        for (let j = 0; j < obj.color.length; j++) {
            colors = colors + func(j, 'color')
        }
    }
    if (!!obj.size) {
        size =`&size=${obj.size}`;
    }
    if (!obj.manufacturer){

    } else if (!!obj.manufacturer) {
        for (let j = 0; j < obj.manufacturer.length; j++) {
            man = man + funcMan(j);
        }
    }


    console.log(`${history}${size}${colors}${man}`)

}

if (!!queryString) {
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
        path()
    })
}

let color = document.getElementsByClassName('checkbox')

for (let i =0; i<color.length; i++) {
    if (!obj.color) {

    }else if (!!obj.color[i]) {
        color[(obj.color[i]) -1].checked = true

    }

    /*if (!!obj.color[i]) {
        color[(obj.color[i]) -1].checked = true
    }*/
}

for (let i=0; i < color.length; i++) {
    const func = (i) => {
        return `&color=${obj.color[i]}`
    }
    color[i].addEventListener('click',(e) => {
        if (color[i].checked === true) {
            obj.color.push(color[i].value)
        } else if (color[i].checked === false) {
            obj.color = obj.color.filter(el => el !== color[i].value)
        }

        path()
        }


    )
}

const options = document.getElementsByClassName("option")


for (let i =0; i < options.length; i++) {
    if (!obj.manufacturer) {

    } else if (!!obj.manufacturer[i]) {
        for (let j = 0; j < options.length; j++ ){
            if (obj.manufacturer[i] === "b%26c") {
                options[1].selected = true;
            }
            if (obj.manufacturer[i] === options[j].value) {

                options[j].selected=true;
            }
        }
    }
}

for (let i =0; i<options.length; i++) {
    options[i].addEventListener('click', () => {

        let arr = []
        for (let j =0; j <options.length; j++) {

            if (options[j].selected) {
                 arr.push(options[j].value)
                obj.manufacturer = arr;
            }
        }
        path()
    })
}

//options[1].selected = true;










/*
params = new URLSearchParams(
    new URL(`http://domain.com/filter${window.location.search}`).search
)
console.log([...params])*/
