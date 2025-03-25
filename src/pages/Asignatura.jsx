import Header from "../components/Header";
import Inglés from "../assets/united-kingdom.png";


function Asignatura() {
    return(
        <div className="bodyOthers">
    <Header />
    <div className="d-flex justify-content-center">
        <div className="asignaturaBox d-flex flex-column">
            <div className="d-flex justify-content-end">
                <h5 className="mb-0 mt-2">FASE GENERAL</h5>
            </div>
            <div className="d-flex align-items-center">
                <img src={Inglés} className="me-3" height="100" width="auto" alt="Inglés" />
                <h1 className="mb-0"><b>Inglés</b></h1>
            </div>
            <p className="mt-5">Fecha 1a convocatoria:</p>
            <p>Fecha 2a convocatoria:</p>
            <div className="mt-auto d-flex justify-content-end">
                <button className="botonAsignatura d-flex align-items-center">
                    <img alt="Apuntes" className="me-2" />
                    <span>Apuntes</span>
                </button>
            </div>
        </div>
    </div>
    <div className="px-5 mt-4">
        <h5>Exámenes</h5>
        <hr />
    </div>
</div>
    );    
};

export default Asignatura