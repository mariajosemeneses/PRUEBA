var datosEnviados = {
    nombreDepositante: '',
    valorADepositar: ''
};

function buscarCliente() {
    // Obtener el número de cuenta ingresado
    var numeroCuenta = document.getElementById('numeroCuenta').value;

    // Lógica de backend (simulada)
    var clienteEncontrado = obtenerClientePorNumeroCuenta(numeroCuenta);

    // Verificar si se encontró el cliente
    if (clienteEncontrado) {
        mostrarPaginaCliente(clienteEncontrado);
    } else {
        alert('Cliente no encontrado. Verifique el número de cuenta.');
    }
}

function obtenerClientePorNumeroCuenta(numeroCuenta) {
    // Simulación de datos (puedes reemplazar esto con tu lógica de backend)
    var clientes = [
        { numeroCuenta: '123456789', nombre: 'Juan', apellido: 'Pérez', tipoCuenta: 'Ahorros' },
        { numeroCuenta: '987654321', nombre: 'María', apellido: 'Gómez', tipoCuenta: 'Corriente' }
    ];

    // Buscar el cliente por número de cuenta
    return clientes.find(cliente => cliente.numeroCuenta === numeroCuenta);
}

function mostrarPaginaCliente(cliente) {
    // Ocultar la página principal
    document.getElementById('main').style.display = 'none';

    // Crear contenedor de resultados (página del cliente)
    var paginaClienteContainer = document.getElementById('paginaCliente');
    paginaClienteContainer.innerHTML = `<h2>Datos del Cliente</h2>
                                       <form id="clienteForm">
                                           <label for="nombre">Nombre:</label>
                                           <input type="text" id="nombre" value="${cliente.nombre}" readonly>
                                           
                                           <label for="apellido">Apellido:</label>
                                           <input type="text" id="apellido" value="${cliente.apellido}" readonly>
                                           
                                           <label for="tipoCuenta">tipoCuenta:</label>
                                           <input type="text" id="tipoCuenta" value="${cliente.tipoCuenta}" readonly>
                                           
                                           <label for="nombreDepositante">Nombre del Depositanto:</label>
                                           <input type="text" id="nombreDepositante" placeholder="Ingrese el nombre">
                                           
                                           <label for="valorADepositar">Valor:</label>
                                           <input type="text" id="valorADepositar" placeholder="Ingrese el valor">
                                       </form>
                                       <button type="button" onclick="enviarDatos()">Aceptar</button>
                                       <button type="button" onclick="regresarAMain()">Regresar</button>`;

    // Mostrar la página del cliente
    paginaClienteContainer.style.display = 'block';
}

function enviarDatos() {
     // Obtener el formulario del cliente
     var clienteForm = document.getElementById('clienteForm');

     // Almacenar los datos enviados desde el formulario del cliente
     datosEnviados.nombreDepositante = document.getElementById('nombreDepositante').value;
     datosEnviados.valorADepositar = document.getElementById('valorADepositar').value;
 
     // Ocultar la página del cliente
     document.getElementById('paginaCliente').style.display = 'none';
 
     // Crear contenedor de resultados finales (página de resultados)
     var resultadosFinalesContainer = document.getElementById('paginaResultados');
     resultadosFinalesContainer.innerHTML = `<h2>Resultados Finales</h2>
                                             <form id="resultadosForm">
                                                 ${clienteForm.innerHTML}
                                                 <p><strong>Nombre del Depositante:</strong> ${datosEnviados.nombreDepositante}</p>
                                                 <p><strong>Valor:</strong> ${datosEnviados.valorADepositar}</p>
                                             </form>
                                             <button type="button" onclick="confirmar()">Búsqueda Exitosa</button>
                                             <button type="button" onclick="cancelar()">Cancelar</button>
                                             <button type="button" onclick="regresarAMain()">Regresar</button>`;
     
     // Deshabilitar la edición en el formulario de resultados finales
     var resultadosForm = document.getElementById('resultadosForm');
     var inputs = resultadosForm.getElementsByTagName('input');
     for (var i = 0; i < inputs.length; i++) {
         inputs[i].readOnly = true;
     }
 
     // Mostrar la página de resultados
     resultadosFinalesContainer.style.display = 'block';
 }


function confirmar() {
    // Ocultar otras páginas
    document.getElementById('paginaResultados').style.display = 'none';
    document.getElementById('cancelar').style.display = 'none';

    // Crear contenedor de búsqueda exitosa
    var confirmarContainer = document.getElementById('confirmar');
    confirmarContainer.innerHTML = `<h2>Confirmar</h2>
                                          <button type="button" onclick="regresarAMain()">Regresar</button>`;
    
    // Mostrar la página de búsqueda exitosa
    confirmarContainer.style.display = 'block';
}

function confirmar() {
    // Obtener los datos del formulario de resultados finales
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var tipoCuenta = document.getElementById('tipoCuenta').value;
    var nombreDepositante = document.getElementById('nombreDepositante').value;
    var valorADepositar = document.getElementById('valorADepositar').value;

    // Ocultar otras páginas
    document.getElementById('paginaResultados').style.display = 'none';
    document.getElementById('cancelar').style.display = 'none';

    // Crear contenedor de búsqueda exitosa
    var confirmarContainer = document.getElementById('confirmar');
    confirmarContainer.innerHTML = `<h2>Búsqueda Exitosa</h2>
                                          <p><strong>Nombre:</strong> ${nombre}</p>
                                          <p><strong>Apellido:</strong> ${apellido}</p>
                                          <p><strong>tipoCuenta:</strong> ${tipoCuenta}</p>
                                          <p><strong>Nombre del Depositante:</strong> ${nombreDepositante}</p>
                                          <p><strong>Valor:</strong> ${valorADepositar}</p>
                                          <button type="button" onclick="regresarAMain()">Regresar al Inicio</button>`;
    
    // Mostrar la página de búsqueda exitosa
    confirmarContainer.style.display = 'block';
}


function regresarAMain() {
    // Limpiar el campo de búsqueda
    document.getElementById('numeroCuenta').value = '';

    // Mostrar la página principal
    document.getElementById('main').style.display = 'block';

    // Ocultar todas las demás páginas
    document.getElementById('paginaCliente').style.display = 'none';
    document.getElementById('paginaResultados').style.display = 'none';
    document.getElementById('confirmar').style.display = 'none';
    document.getElementById('cancelar').style.display = 'none';
}