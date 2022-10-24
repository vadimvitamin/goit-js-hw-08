import throttle from 'lodash.throttle';

const localStorageKey = 'feedback-form-state';
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');
const formRef = document.querySelector('.feedback-form');
const timeDelay = 500;
const initialFormData = {
  email: '',
  message: '',
};
let currentFormData = initialFormData;

fillForm();

formRef.addEventListener('input', throttle(onFormInput, timeDelay));
formRef.addEventListener('submit', onFeedbackFormSubmit);

function onFormInput(e) {
  currentFormData = {
    ...currentFormData,
    [e.target.name]: e.target.value,
  };
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(localStorageKey, value);
}

function onFeedbackFormSubmit(e) {
  e.preventDefault();

  formRef.reset();
  console.log(currentFormData);
  currentFormData = initialFormData;
  const value = JSON.stringify(currentFormData);
  localStorage.setItem(localStorageKey, value);
}

function loadFeedbackFormState() {
  currentFormData =
    JSON.parse(localStorage.getItem(localStorageKey)) || initialFormData;
  return currentFormData;
}

function fillForm() {
  const { email, message } = loadFeedbackFormState();
  inputRef.value = email;
  textareaRef.value = message;
}
