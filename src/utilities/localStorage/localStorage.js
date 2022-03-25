function setLocalItems(setArray) {
    return localStorage.setItem('productKey', JSON.stringify(setArray))
}

function addToLocalStore(id) {
    if (typeof window !== 'undefined') {
        let localProductCart = {}
        const storeCart = localStorage.getItem('productKey')

        if (storeCart) {
            localProductCart = JSON.parse(storeCart)
        }
        const quantity = localProductCart[id]
        if (quantity) {
            const newQuantity = quantity + 1
            localProductCart[id] = newQuantity
        } else {
            localProductCart[id] = 1
        }
        setLocalItems(localProductCart)
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

