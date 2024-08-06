import { DAYS } from "../../data"
import FechaItem from "../UI/FechaItem"

const Fechas = () => {


    return (
        <div className="contenedor padding-25">
            <h2 className="mb-6 font-bold text-2xl uppercase">Fechas</h2>

            <div className="flex flex-col gap-5">
                {DAYS.map(day => (

                    <FechaItem
                        key={day.id}
                        day={day}
                    />

                ))}

            </div>

        </div>
    )
}
export default Fechas