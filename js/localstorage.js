const detail = document.querySelector('.detail');
const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    const fname = document.querySelector('#fullName').value;
    localStorage.setItem('username', fname);
    fname.value = ' ';
})

let user = localStorage.getItem('username');
detail.innerHTML = 'welcome ' + user;
