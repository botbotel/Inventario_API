let userDefault = 'tesoreriaValencia'
let passDefault = 'tesoreriaValencia'

function redirect() {

    let user = document.getElementById('userName').value
    let pass = document.getElementById('userPassword').value

    if(user === userDefault && pass === passDefault) {
        window.location.href = './index.html'
    }   else {
        alert('Usuario / contraseña incorrectos')
    }
}
