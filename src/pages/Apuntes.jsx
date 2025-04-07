import Header from "../components/Header";
import Inglés from "../assets/united-kingdom.png";
import Notes from "../assets/notes.webp"
import Png from "../assets/pngicon.png"


function Apuntes() {
    return(
        <div className="bodyOthers">
            <Header />
            <div className="d-flex align-items-center ms-5 ps-5 mt-4">
                <img src={Inglés} alt="Icono asignatura" width="150" height="auto"/>
                <h1 className="ms-3">Inglés</h1>
            </div>
            <div className="notesBox mx-auto text-center">
                <div className="d-flex justify-content-center">
                    <img src={Notes} alt="Apuntes" width="200" height="350" className="notesBlur mt-5"/>
                    <img src={Png} alt="Png" width="70" height="70" className="pngIcon"/>
                </div>  
                <h5 className="mt-4">Apuntes Inglés Selectividad</h5>
                <button className="botonDownload mt-4">Descargar</button>
            </div>
        </div>
    );
}

export default Apuntes