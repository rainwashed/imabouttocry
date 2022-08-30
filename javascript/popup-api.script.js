function hashChangeHandler() {
    let currentHash = window?.location?.hash
    console.log('Hash has changed, current value =', currentHash)
}

window.addEventListener('hashchange', hashChangeHandler)
