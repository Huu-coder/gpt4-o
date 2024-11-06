function adjustHeight(el) {
    el.style.height = '42px'; // Reset height to auto
    const tBx = document.getElementById('usr')
    if (tBx.value.length < 100) {
        el.style.height = '42px';
    }
    else {
        el.style.height = (el.scrollHeight) + 'px'; // Set new height based on content
    }

}

// Account
