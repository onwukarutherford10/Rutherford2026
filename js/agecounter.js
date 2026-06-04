const birthDate = document.querySelector('#bday').value;
const calBtn = document.querySelector('#calculateBtn');
const result = document.querySelector('#myresult');

calBtn.addEventListener('click', () => {
   const birth = new Date(birthDate.value);
   const today = new Date()
   let age = birth.getFullYear() - today.getFullYear();
   result.textContent = `You are ${age} years old`;
})