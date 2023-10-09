import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { show_alert } from "../../../functions";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import vectorPNG from "../../../assets/img/Vector.png";

export const Tratamiento = () => {
  const url = "http://backend-med-track.vercel.app/api/treatments";

  const [treatments, setTreatments] = useState([]);
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [fechaIni, setFechaIni] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTreatments();
  }, []);

  const getTreatments = async () => {
    const respuesta = await axios.get(url);
    console.log(respuesta.data);
    setTreatments(respuesta.data);
  };

  const openModal = (op, id, nombre, fechaIni, fechaFin) => {
    setId("");
    setNombre("");
    setFechaIni("");
    setFechaFin("");
    setOperation(op);
    if (op === 1) {
      setTitle("Registrar tratamiento");
    }
    if (op === 2) {
      setTitle("Editar tratamiento");
      setId(id);
      setNombre(nombre);
      setFechaIni(fechaIni);
      setFechaFin(fechaFin);
    }
    window.setTimeout(() => {
      document.getElementById("id").focus();
    }, 500);
  };

  const validar = () => {
    let parametros;
    let metodo;
    if (id.trim() === "") {
      show_alert("Escribe el id del tratamiento", "warning");
    } else if (nombre.trim() === "") {
      show_alert("Escribe el nombre del tratamiento", "warning");
    } else if (fechaIni.trim() === "") {
      show_alert("Escribe la fecha de inicio del tratamiento", "warning");
    } else if (fechaFin.trim() === "") {
      show_alert("Escribe la fecha final del tratamiento", "warning");
    } else {
      if (operation === 1) {
        parametros = {
          idTratamiento: id.trim(),
          Nombre: nombre.trim(),
          fechaIni: fechaIni.trim(),
          fechaFin: fechaFin.trim(),
        };
        metodo = "POST";
      }
      if (operation === 2) {
        parametros = {
          idTratamiento: id.trim(),
          Nombre: nombre.trim(),
          fechaIni: fechaIni.trim(),
          fechaFin: fechaFin.trim(),
        };
        metodo = "PUT";
      }
      send_data(parametros, metodo);
      console.log(parametros);
    }
  };

  const send_data = async (parametros, metodo) => {
    
    await axios({ method: metodo, url: url, data: parametros })
      .then(function (respuesta) {
        console.log(respuesta.data.tipo);
        let tipo = respuesta.data.tipo;
        let msj = respuesta.data.mensaje;
        show_alert(msj, tipo);
        if (tipo === "success") {
          document.getElementById("btnClose").click();
          getTreatments();
        }
      })
      .catch(function (error) {
        show_alert("Error en la solicitud", "error");
        console.log(error);
      });
  };

  const deleteTreatment = (id, name) => {
    Swal.fire({
      title: "¿Seguro de eliminar el tratamiento " + name + "?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setId(id);
        send_data({ idTratamiento: id }, "DELETE");
        Swal.fire("El tratamiento fue eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El tratamiento NO fue eliminado", "", "info");
      }
    });
  };

  return (
    <div>
      <Sidebar />
      <div className="containerMedicamentos mx-5">
        <div className="titleContainer mx-3">
          <img src={vectorPNG} alt="" className="mx-1" />
          <p className="titleMedicamentos">Tratamientos</p>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row mt-3 ps-5">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#modalTratamientos"
                onClick={() => openModal(1)}
              >
                <i className="fa-solid fa-plus"></i> Añadir tratamiento
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-3 ps-5">
          <div className="col-12 col-lg-8 offset-lg-2">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr className="text-center">
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha de inicio</th>
                    <th>Fecha de fin</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {treatments.map((treatment) => (
                    <tr key={treatment.id}>
                      <td className="text-center">
                        {treatment.idTratamiento}
                      </td>
                      <td className="text-center">{treatment.Nombre}</td>
                      <td className="text-center">{treatment.fechaIni}</td>
                      <td className="text-center">{treatment.fechaFin}</td>
                      <td className="text-center">
                        <button
                          onClick={() =>
                            openModal(
                              2,
                              treatment.idTratamiento,
                              treatment.Nombre,
                              treatment.fechaIni,
                              treatment.fechaFin,
                            )
                          }
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#modalTratamientos"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteTreatment(
                            treatment.idTratamiento,
                            treatment.Nombre,
                          )}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="modalTratamientos" className="modal fade" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <label className="h5">{title}</label>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-hashtag"></i>
                  </span>
                  <input
                    type="text"
                    id="id"
                    className="form-control"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-flask"></i>
                  </span>
                  <input
                    type="text"
                    id="fechaIni"
                    className="form-control"
                    placeholder="Fecha de inicio del tratamiento AAAA-MMM-DD"
                    value={fechaIni}
                    onChange={(e) => setFechaIni(e.target.value)}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                  <input
                    type="text"
                    id="fechaFin"
                    className="form-control"
                    placeholder="Fecha de fin del tratamiento AAAA-MMM-DD"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                  ></input>
                </div>
                <div className="d-grid col-6 mx-auto">
                  <button onClick={() => validar()} className="btn btn-success">
                    <i className="fa-solid fa-save"></i>
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  id="btnClose"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
