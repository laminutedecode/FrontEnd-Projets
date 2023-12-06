const notifications = document.querySelector('.notifications')
const buttons = document.querySelectorAll('.buttons .button')


const toastDetails = {
const toastDetails = {
  timer: 5000,
  success: {
    icon: `<ion-icon name="checkmark-circle-outline"></ion-icon>`,
    text: `SUCCESS: Je suis un Toast "Success"`,
  },
  error: {
    icon: ` <ion-icon name="close-circle-outline"></ion-icon>`,
    text: `ERROR: Je suis un Toast "Error"`,
  },
  warning: {
    icon: `<ion-icon name="alert-circle-outline"></ion-icon>`,
    text: `WARNING: Je suis un Toast "Warning"`,
  },
  info: {
    icon: `<ion-icon name="information-circle-outline"></ion-icon>`,
    text: `INFO: Je suis un Toast "info"`,
  },
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId); 
  setTimeout(() => toast.remove(), 10); 
};

const createToast = (id) => {
  console.log(id);
  const {icon, text} =  toastDetails[id]
  const toast = document.createElement('li');
  toast.className = `toast ${id}`
  toast.innerHTML = `
   <div class="column">
      ${icon}
      <span>${text}</span>
   </div>
      <ion-icon onclick="removeToast(this.parentElement)" name="close-circle-outline"></ion-icon>
  `;
  notifications.appendChild(toast)
   toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}


buttons.forEach(btn => {
  btn.addEventListener('click', ()=> createToast(btn.id))
})