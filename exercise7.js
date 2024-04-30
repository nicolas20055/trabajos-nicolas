function password(password) {
    if (password.length < 8) {
        return false
    }
    if (!/[A-Z]/.test(password)) {
        return false
    }
    if (!/\d/.test(password)) {
        return false
    }
    return true
}

console.log(password("aaaA1212"))