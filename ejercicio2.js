function greet() {
    let name='edwin'
    let fuLLName=' '
    if(name.length>=2){
        fuLLName=name.toUpperCase().charAt(0)+name.slice(1)
    }
    greeting(fuLLName)
}
function greeting(fuLLName) {
    let text ='hola nombre,bienvenido al programa'
    let textReplace = text.replace('nombre',fuLLName)

    console.log(textReplace);
}

greet()