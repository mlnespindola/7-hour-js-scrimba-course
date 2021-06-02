const h2 = document.getElementById('counter-el');
const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
const saveEl = document.getElementById('save-el');

let count = 0;

const increment = () => {
    // ++count;
    count++;
    h2.innerHTML = count;
};

const save = () => {
    // saveEl.append(count) ;
    // saveEl.append(' - ');

    //alternativa:
    saveEl.innerHTML += count + ' - ';

    count = 0
    h2.innerHTML = count;
};
 
incrementBtn.addEventListener('click', increment);
saveBtn.addEventListener('click', save);