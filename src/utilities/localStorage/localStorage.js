function setLocalItems(setObject) {
    return localStorage.setItem('productKey', JSON.stringify(setObject))
}

function addToLocalStore(id) {
    if (typeof window !== 'undefined') {
        const storeCart = JSON.parse(localStorage.getItem('productKey')) || {}
        const quantity = storeCart[id]
        if (quantity) {
            ++storeCart[id]
        } else {
            storeCart[id] = 1
        }
        setLocalItems(storeCart)
    }

}
function removeFromLocalStore(id) {
    if (typeof window !== 'undefined') {
        const keyStore = JSON.parse(localStorage.getItem('productKey'))
        if (keyStore) {
           delete keyStore[id];
           setLocalItems(keyStore)
        }
    }

}

function removeLocalStore(key) {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key)
    }

}

export {
    addToLocalStore,
    removeFromLocalStore,
    removeLocalStore
}

