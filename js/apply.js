const btn = document.querySelector('#btn')
const bulb = document.querySelector('#bulbImage')
btn.addEventListener('click', () =>{
    let text = btn.innerHTML
    if(text == 'On'){
        btn.innerHTML = 'Off'
        bulb.src = 'image/imgjavascript.jpeg'
        
    }else if(text == 'Off'){
        btn.innerHTML = 'On'  
        bulb.src = 'image/img2javascript.jpeg'
    }
})
const body = document.querySelector('#containner')
const cBtn = document.querySelector('#colorBtn')
cBtn.addEventListener('click', () => {
    let mode = cBtn.innerHTML
    if(mode == 'Dark Mode'){
        cBtn.innerHTML = 'Light Mode'
        body.style.backgroundColor =  "black"
    }else if(mode == 'Light Mode'){
        cBtn.innerHTML = 'Dark Mode'
        body.style.backgroundColor =  "white"
    }
})