 export const DAYS = [
    {
        id: 1,
        dias: ['12/26/24', '12/27/24']
    },
    {
        id: 2,
        dias: ['01/09/25', '01/10/25', '01/23/25', '01/24/25']
    },
    {
        id: 3,
        dias: ['02/07/25', '02/10/25']

    },
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