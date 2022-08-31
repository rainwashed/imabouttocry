const popup = {}
const popupObjects = {
    popup: document.getElementById('popup'),
    title: document.querySelector('div#popup h6'),
    description: document.querySelector('div#popup p'),
    actions: document.getElementsByClassName('popup__actions')[0],
}

popup['closePopup'] = function (e) {
    if (typeof popup == 'undefined' || !popup)
        window?.location?.reload() // unable to find the utils class so no choice but to reload and hope that the utils script is loaded.
    else {
        popupObjects['popup'].classList.remove('popup-visible')
        setTimeout(() => {
            popupObjects['popup'].classList.remove('visible')
            utils['clearPopup']()
        }, 250)
    }
}

utils['clearPopup'] = function () {
    popupObjects['title'].innerText = ''
    popupObjects['description'].innerText = ''
    for (let i = 0; i < popupObjects['actions'].children.length; i++) {
        popupObjects['actions'].children[i].remove()
    }
}

utils['createPopup'] = function (title, description, actions) {}

// seperate this from url handler

function hashChangeHandler() {
    let currentHash = window?.location?.hash
    console.log('Hash has changed, current value =', currentHash)
}
window.addEventListener('hashchange', hashChangeHandler)

// dom object listeners
document
    .getElementById('popup__forceclose')
    .addEventListener('click', popup['closePopup'])
