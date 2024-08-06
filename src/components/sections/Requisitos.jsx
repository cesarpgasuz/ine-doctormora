import { REQUISITOS } from "../../data"
const Requisitos = () => {
    return (
        <div className="contenedor padding-25">
            <h2 className="text-2xl font-bold uppercase mb-6">Requisitos</h2>

            <div className="flex flex-col gap-6">
                {REQUISITOS.map(requisito => (


                    <div key={requisito.id}>
                        <h3 className="font-bold">{requisito.name}</h3>
                        {requisito.documentos && (
                            <ul className="pl-4 list-disc text-slate-600 leading-7 mt-2">
                                {requisito.documentos.map((item, index) => (
                                    <li key={index} className="text-sm">{item}</li>
                                ))}
                            </ul>

                        )}
                    </div>

                ))}
            </div>

            <p className="leading-6 mt-8 text-sm">Si no cuenta con algún documento con fotografía o comprobante de domicilio puedes presentar dos testigos con su credencial para votar vigente.</p>

        </div>
    )
}
export default Requisitos