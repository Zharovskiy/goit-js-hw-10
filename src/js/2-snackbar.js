import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formSnackbar = document.querySelector('.form');
formSnackbar.addEventListener('submit', createNotification);

function createNotification(event) {
    event.preventDefault();
    const form = event.target;
    const delay = form.elements.delay.value;
    const state = form.elements.state.value;
    const promise = makePromise({delay, state});
    promise.then(onFullFiled).catch(onRejected);
};

const makePromise = ({delay, state}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(state === 'fulfilled') {
                resolve(delay)
            } else {
                reject(delay)
            }
        }, delay);
    });
};

function onFullFiled(delay) {
    iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: '#FFFFFF',
        messageSize: '16px',
        backgroundColor: '#59A10D',
        position: 'topRight'
    });
};

function onRejected(delay) {
    iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: '#FFFFFF',
        messageSize: '16px',
        backgroundColor: '#EF4040',
        position: 'topRight'
    });
};


