 export const DAYS = [
    {
        id: 1,
        dias: ['06/20/24', '06/21/24']
    },
    {
        id: 2,
        dias: ['07/04/24', '07/05/24', '07/18/24', '07/19/24']
    },
    {
        id: 3,
        dias: ['08/01/24', '08/02/24', '08/15/24', '08/16/24', '08/29/24', '08/30/24']

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