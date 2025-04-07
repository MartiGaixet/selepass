import Header from "../components/Header";
import Inglés from "../assets/united-kingdom.png";
import { useNavigate } from "react-router-dom";

function Asignatura() {

    const navigate = useNavigate();

    const goApuntes = () => {
        navigate("/Apuntes");
      };

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
                <button className="botonAsignatura d-flex align-items-center" onClick={goApuntes}>
                    <img alt="Apuntes" className="me-2"/>
                    <span>Apuntes</span>
                </button>
            </div>
        </div>
    </div>
    <div className="px-5 mt-4">
        <h5>Exámenes</h5>
        <hr/>
        <div className="d-flex flex-wrap gap-5">
            <div className="yearBox">
                <h5 className="yearBoxTitle">2024</h5>
                <p>2 exámenes</p>
            </div>
            <div className="yearBox">
                <h5 className="yearBoxTitle">2023</h5>
                <p>2 exámenes</p>
            </div>
            <div className="yearBox">
                <h5 className="yearBoxTitle">2022</h5>
                <p>2 exámenes</p>
            </div>
            <div className="yearBox">
                <h5 className="yearBoxTitle">2021</h5>
                <p>2 exámenes</p>
            </div>
            <div className="yearBox">
                <h5 className="yearBoxTitle">2020</h5>
                <p>2 exámenes</p>
            </div>
            <div className="yearBox">
                <h5 className="yearBoxTitle">2019</h5>
                <p>2 exámenes</p>
            </div>
            <div className="yearBox">
                <h5 className="yearBoxTitle">2018</h5>
                <p>2 exámenes</p>
            </div>
        </div>
    </div>
</div>
    );
};

export default Asignatura