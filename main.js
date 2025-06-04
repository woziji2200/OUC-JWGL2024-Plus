window.addEventListener('load', () => {
    const openXxtz = document.querySelector('#openXxtz span');
    if(openXxtz && openXxtz.textContent == '0') {
        openXxtz.style.display = 'none';
        console.log(openXxtz.textContent);
    }
})