export function formatearFecha(fecha){
 
    const meses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const [mes, dia, anioCorto] = fecha.split('/');

    const anio = parseInt(anioCorto, 10) < 100 ? 2000 + parseInt(anioCorto, 10) : parseInt(anioCorto, 10)

    const mesIndex = parseInt(mes, 10) -1;

    const nombreMes = meses[mesIndex]

    return `${dia} de ${nombreMes} del ${anio}`

}

export function convertirFecha(fecha){
    const [mes, dia, anioCorto] = fecha.split('/').map(Number);
    const anio = anioCorto < 100 ? 2000 + anioCorto: anioCorto;
    return new Date(anio,mes-1,dia)
}