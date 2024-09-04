 export const DAYS = [
    {
        id: 1,
        dias: ['09/11/24', '09/12/24', '09/25/24', '09/26/24']
    },
    {
        id: 2,
        dias: ['10/09/24', '10/10/24', '10/22/24', '10/23/24']
    },
    {
        id: 3,
        dias: ['11/04/24', '11/05/24', '11/15/24', '11/19/24', '11/29/24']

    },
    {
        id: 4,
        dias: ['12/02/24', '12/12/24', '12/13/24']

    }
]

export const TRAMITES = [
    'Reposicion por robo o extravio',
    'Inscripcion',
    'Cambio de domicilio',
    'Entrega de credencial para votar'
]


export const REQUISITOS = [
    {
        id: 1,
        name: 'Acta de Nacimiento'
    },
    {
        id: 2,
        name: 'Documento con fotografia',
        documentos: [ 'Credencial de elector',
            'Pasaporte vigente',
            'Licencia de Manejo vigente',
            'Matricula consular vigente',
            'Cedula profesional',
            'Credencial escolar o constancia de estudios',
            'Certificado de estudios de secundaria o prepa (que no pase de 10 años de expedición)',
            'Cartilla de servicio militar',
            'Credencial adulto mayor (INAPAM)']
        
    },
    {
        id: 3,
        name: 'Comprobante de Domicilio',
        documentos: [
            'Recibo de Luz',
            'Recibo de Agua',
            'Recibo de Telefono',
            'Recibo de Predial'
        ]
    }
]