const form = document.querySelector('.feedback-form');
form.addEventListener('submit', handleSubmit);
form.addEventListener('input', saveDataInLocal);
let saveData = {};

if(localStorage.getItem('feedback-form-state')) {
  saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
  for(let key in saveData) {
    form.elements[key].value = saveData[key];
  }
}

function saveDataInLocal({target: {value, name}}) {
  saveData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(saveData));
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email.trim() !== "" && message.trim() !== "") {
    const userCredentials = {};
    userCredentials.email = email;
    userCredentials.message = message;
    console.log(userCredentials);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } 
};