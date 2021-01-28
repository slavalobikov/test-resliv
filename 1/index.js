let input = document.getElementById("input");
let h1 = document.getElementById('h1')


input.addEventListener('input', (e) => {
    if (e.target.value === '12345') {
        h1.classList.remove('red')
    } else {
        h1.classList.add('red')
    }
})

console.log('input' , input.oninput)