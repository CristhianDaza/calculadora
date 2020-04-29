let NuevoNumero = '',
    Numero = 0,
    Operacion = '',
    Resultado = 0,
    Indicador = false,
    Pantalla = document.getElementById('display'),
    Teclas = document.getElementsByClassName('tecla')

for (i = 0; i < Teclas.length; i++) {
  Teclas[i].addEventListener('click', function (event) {
    id = event.target.getAttribute('id')
    padding = event.target.style.padding;
    padding1 = event.target.style.padding;
    event.target.style.padding = '20%';
    event.target.style.padding = '3px';

    function cambio() {
      event.target.style.padding = padding;
      event.target.style.padding = padding1;
    }

    setTimeout(cambio, 100)
    switch (id) {
      case 'on':
        Pantalla.innerHTML = '0'
        Numero = 0
        NuevoNumero = ''
        Indicador = false
        break
      case 'mas':
        if (Resultado !== 0) {
          Numero = parseFloat(Resultado)
        } else {
          Numero = parseFloat(NuevoNumero)
        }
        NuevoNumero = ''
        Pantalla.innerHTML = NuevoNumero
        Operacion = 'mas'
        break
      case 'menos':
        if (Resultado !== 0) {
          Numero = parseFloat(Resultado)
        } else {
          Numero = parseFloat(NuevoNumero)
        }
        NuevoNumero = ''
        Pantalla.innerHTML = NuevoNumero
        Operacion = 'menos'
        break;
      case 'por':
        if (Resultado !== 0) {
          Numero = parseFloat(Resultado)
        } else {
          Numero = parseFloat(NuevoNumero)
        }
        NuevoNumero = ''
        Pantalla.innerHTML = NuevoNumero
        Operacion = 'por'
        break;
      case 'dividido':
        if (Resultado !== 0) {
          Numero = parseFloat(Resultado)
        } else {
          Numero = parseFloat(NuevoNumero)
        }
        NuevoNumero = ''
        Pantalla.innerHTML = NuevoNumero
        Operacion = 'dividido'
        break
      case 'igual':
        if (Indicador === true) {
          if (Operacion === 'mas') {
            Resultado = parseFloat(NuevoNumero) + parseFloat(Numero)
          }
          if (Operacion === 'menos') {
            Resultado = parseFloat(NuevoNumero) - parseFloat(Numero)
          }
          if (Operacion === 'por') {
            Resultado = parseFloat(NuevoNumero) * parseFloat(Numero)
          }
          if (Operacion === 'dividido') {
            Resultado = parseFloat(NuevoNumero) / parseFloat(Numero)
          }
          NuevoNumero = Resultado
        } else {
          Numero = NuevoNumero
          NuevoNumero = Resultado
          Indicador = true
        }
        Resultado = Resultado.toString()
        if (Resultado.length > 7) {
          Resultado = parseFloat(Resultado)
          Resultado = Resultado.toExponential(2)
          Pantalla.innerHTML = Resultado
        } else {
          Pantalla.innerHTML = Resultado
        }
        break;
      case 'sign':
        if (Pantalla.innerHTML !== '0' || Pantalla.innerHTML !== '') {
          if (NuevoNumero !== '') {
            NuevoNumero = parseFloat(NuevoNumero)
            NuevoNumero = - NuevoNumero
            Pantalla.innerHTML = NuevoNumero
          }
        }
        break;
      case 'punto':
        id = '.'
        for (i = 0; i < NuevoNumero.length; i++) {
          if (NuevoNumero[i] === '.') {
            id = ''
          }
        }
        if (Pantalla.innerHTML !== '0') {
          NuevoNumero = NuevoNumero + id
          Pantalla.innerHTML = NuevoNumero
        };
        break;
      default:
        Indicador = false
        NuevoNumero = NuevoNumero.toString()
        if (NuevoNumero.length <= 7) {
          if (Pantalla.innerHTML === '0' && id === '0') {} else {
            NuevoNumero = NuevoNumero + id
            Pantalla.innerHTML = NuevoNumero
          }
        }
        if (Operacion === 'mas') {
          Resultado = Numero + parseFloat(NuevoNumero)
        }
        if (Operacion === 'menos') {
          Resultado = Numero - parseFloat(NuevoNumero)
        }
        if (Operacion === 'por') {
          Resultado = Numero * parseFloat(NuevoNumero)
        }
        if (Operacion === 'dividido') {
          Resultado = Numero / parseFloat(NuevoNumero)
        }
        break
    }
  })
}
