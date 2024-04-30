function esAnioBisiesto(year) {
    if (typeof year !== 'number') {
      return 'Error: en el número ingresado.';
    }
  
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
}
    console.log(esAnioBisiesto(2000));
    console.log(esAnioBisiesto(2006));
    console.log(esAnioBisiesto(2000));
    console.log(esAnioBisiesto(2024));
   