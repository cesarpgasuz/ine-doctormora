import { formatearFecha, convertirFecha } from "../../utilities/formateador"
const FechaItem = ({ day }) => {

    const { dias } = day

    const fechaActual = new Date()

    // fechaActual.setHours(0,0,0,0)


    return (
        <div className="border border-slate-400 px-6 py-4">
            <ul className="text-center leading-7">
                {dias.map((dia, index) => (
                    <li key={index} className={convertirFecha(dia) < fechaActual ? 'line-through text-slate-800/40' : 'font-semibold'}>{formatearFecha(dia)}</li>
                ))}
            </ul>

        </div>
    )
}
export default FechaItem