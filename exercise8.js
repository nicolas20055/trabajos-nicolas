function info(text) {
    let number = text.replace(/[^0-9]/g,"").length;

    let space=0;

    for (let i = 0; i < text.length; i++) {

        if (text[i] == " ") {

            space= space+1

        }
    }
    let length=(text.length)-(number)-(space)

    
    return "letters:"+length+"  numbers:"+number+" spaces:"+space


}

console.log(info("ana1 "))