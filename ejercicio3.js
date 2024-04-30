function dividir(dividendo, divisor) {
    if (typeof dividendo !== 'number' || typeof divisor !== 'number') {
      return 'Error: Ambos valores deben ser números.';
    }
  
    if (divisor === 0) {
      return 'Error: No se permite la división entre cero.';
    }
  
    let cociente = 0;
    let residuo = dividendo;
  
    while (residuo >= divisor) {
      residuo -= divisor;
      cociente++;
    }
  
    return `El resultado es ${cociente} y sobran ${residuo}`;
  }
  console.log(dividir(11, 5));