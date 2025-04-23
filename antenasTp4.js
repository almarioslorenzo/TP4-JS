//Ejercicio 1
const router = {
    modelo: "1941",
    marca: "TP-Cisco",
    puertos: 8,
    velocidad: 6000, // Mbps
    soportaWifi: true,
};
console.log(router);

//Ejercicio 2
const dispositivoRed = [
    {tipo: "Router", marca: "Cisco", modelo "1941", precio: 1200},
    {tipo: "Switch", marca: "TP-Link", modelo: "TL-SG108E", precio: 150},
    {tipo: "Firewall", marca: "Cisco", modelo: "ASA 5506-X", precio: 2500},
    {tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Lite", precio: 320},
    {tipo: "Router", marca: "TP-Link", modelo: "Archer C7", precio: 180},
];
console.log(dispositivoRed);

//Ejercicio 3
const dispositivosCisco = dispositivoRed.filter(dispositivo => dispositivo.marca === "Cisco");
console.log(dispositivosCisco);

//Ejercicio 4
const servidores = [
    {nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux"},
    {nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows"},
    {nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux"},
    {nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux"},
    {nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows"}
];
const direccionesIP = servidores.map(servidor => servidor.ip);
console.log(direccionesIP);

//Ejercicio 5
const paquetesDatos = [
    {id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3},
    {id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1},
    {id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5},
    {id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2},
    {id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4}
];
const paquetesFiltradosOrdenados = paquetesDatos
    .filter(paquete => paquete.tamaño > 1000)
    .sort((a, b) => a.prioridad - b.prioridad);
console.log(paquetesFiltradosOrdenados);

//Ejercicio 6
const traficoRed = {
    "08:00": 1250,
    "09:00": 1870,
    "10:00": 2100,
    "11:00": 1950,
    "12:00": 1600,
    "13:00": 1300,
    "14:00": 1700,
    "15:00": 2200,
    "16:00": 1800,
    "17:00": 1500
  };
const horas = Object.keys(traficoRed);
const totalDatos = horas.reduce((acum, hora) => acum + traficoRed[hora], 0);
  
const horaMayorTrafico = horas.reduce((maxHora, hora) => 
    traficoRed[hora] > traficoRed[maxHora] ? hora : maxHora
); 
console.log("Total de datos transferidos:", totalDatos, "MB");
console.log("Hora con mayor tráfico:", horaMayorTrafico, "-", traficoRed[horaMayorTrafico], "MB");

//Ejercicio 7
const conexiones = [
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
    { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
    { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
    { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
  ];

const conexionesPorProtocolo = {};
conexiones.forEach(conexion => {
    const protocolo = conexion.protocolo;
    conexionesPorProtocolo[protocolo] = (conexionesPorProtocolo[protocolo] || 0) + 1;
});
console.log("Conexiones por protocolo:", conexionesPorProtocolo);
  
