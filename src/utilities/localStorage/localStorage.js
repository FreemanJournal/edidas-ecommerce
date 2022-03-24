function setLocalItems(setArray) {
    return localStorage.setItem('productKey', JSON.stringify(setArray))
}

function addToLocalStore(id) {
    if (typeof window !== 'undefined') {
        const keyStore = JSON.parse(localStorage.getItem('productKey'))
        if (keyStore) {
            const keyStoreItem = keyStore.find(item => id in item)
            if (keyStoreItem) {
                setLocalItems(keyStore.map(item => (id in item) ? { [id]: item[id] + 1 } : item))
            } else {
                setLocalItems([...keyStore, { [id]: 1 }])
            }
        } else {
            setLocalItems([{ [id]: 1 }])
        }
    }

}
function removeFromLocalStore(id) {
    if (typeof window !== 'undefined') {
        const keyStore = JSON.parse(localStorage.getItem('productKey'))
        if (keyStore) {
            const keyStoreItem = keyStore.find(item => id in item)
            if (keyStoreItem) {
                setLocalItems(keyStore.map(item => (id in item) ? { [id]: item[id] - 1 } : item))
            }
            if (keyStoreItem[id] === 1) {
                keyStore.splice(keyStore.indexOf(keyStoreItem), 1)
                setLocalItems(keyStore)
            }
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

