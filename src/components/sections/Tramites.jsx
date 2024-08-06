import { TRAMITES } from "../../data"

const Tramites = () => {

    const TramiteItem = ({ tramite }) => (
        <li>
            {tramite}
        </li>
    )

    return (
        <div className="contenedor padding-25">
            <h2 className="font-bold mb-6 uppercase text-2xl">Tramites</h2>

            <ul className="leading-8">
                {TRAMITES.map((tramite, index) => (
                    <TramiteItem
                        key={index}
                        tramite={tramite}
                    />
                ))}
            </ul>


        </div>
    )
}
export default Tramites