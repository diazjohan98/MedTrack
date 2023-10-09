import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { show_alert } from "../../../functions";
import vectorPNG from "../../../assets/img/Vector.png";
import "./css/medicamentosStyle.css";
import { Sidebar } from "../../../components/sidebar/Sidebar";

export const Medicamento = () => {
  const url = "https://backend-med-track.vercel.app/api/medicaments";

  const [medicaments, setMedicaments] = useState([]);
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [unidadMedida, setUnidadMedida] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getMedicaments();
  }, []);

  const getMedicaments = async () => {
    const respuesta = await axios.get(url);
    console.log(respuesta.data);
    setMedicaments(respuesta.data);
  };

  const openModal = (op, id, nombre, tipo, unidadMedida, cantidad) => {
    setId("");
    setNombre("");
    setTipo("");
    setUnidadMedida("");
    setCantidad("");
    setOperation(op);
    if (op === 1) {
      setTitle("Registrar medicamento");
    }
    if (op === 2) {
      setTitle("Editar medicamento");
      setId(id);
      setNombre(nombre);
      setTipo(tipo);
      setUnidadMedida(unidadMedida);
      setCantidad(cantidad);
    }
    window.setTimeout(() => {
      document.getElementById("id").focus();
    }, 500);
  };

  const validar = () => {
    let parametros;
    let metodo;
    if (id.trim() === "") {
      show_alert("Escribe el id del medicamento", "warning");
    } else if (nombre.trim() === "") {
      show_alert("Escribe el nombre del medicamento", "warning");
    } else if (tipo.trim() === "") {
      show_alert("Escribe el tipo del medicamento", "warning");
    } else if (unidadMedida.trim() === "") {
      show_alert("Escribe la unidad de medida del medicamento", "warning");
    } else if (cantidad.trim() === "") {
      show_alert("Escribe la cantidad del medicamento", "warning");
    } else {
      if (operation === 1) {
        parametros = {
          idMedicamento: id.trim(),
          Nombre: nombre.trim(),
          Tipo: tipo.trim(),
          unidadMedida: unidadMedida.trim(),
          Cantidad: cantidad.trim(),
        };
        metodo = "POST";
      }
      if (operation === 2) {
        parametros = {
          idMedicamento: id.trim(),
          Nombre: nombre.trim(),
          Tipo: tipo.trim(),
          unidadMedida: unidadMedida.trim(),
          Cantidad: cantidad.trim(),
        };
        metodo = "PUT";
      }
      send_data(parametros, metodo);
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
          getMedicaments();
        }
      })
      .catch(function (error) {
        show_alert("Error en la solicitud", "error");
        console.log(error);
      });
  };

  const deleteMedicament = (id, name) => {

    Swal.fire({
        title: "¿Seguro de eliminar el medicamento " + name + "?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        denyButtonText: "No, cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          setId(id);
          send_data({ idMedicamento: id }, "DELETE");
          Swal.fire('El medicamento fue eliminado', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('El medicamento NO fue eliminado', '', 'info')
        }
      })
    }


  return (
    <div>
      <Sidebar />
      <div className="containerMedicamentos mx-5">
        <div className="titleContainer mx-3">
          <img src={vectorPNG} alt="" className="mx-1" />
          <p className="titleMedicamentos">Registra Medicamentos</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-3 ps-5">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#modalMedicaments"
                onClick={() => openModal(1)}
              >
                <i className="fa-solid fa-plus"></i> Añadir medicamento
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
                    <th>Tipo</th>
                    <th>Unidad de medida</th>
                    <th>Cantidad</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {medicaments.map((medicament) => (
                    <tr key={medicament.id}>
                      <td className="text-center">
                        {medicament.idMedicamento}
                      </td>
                      <td className="text-center">{medicament.Nombre}</td>
                      <td className="text-center">{medicament.Tipo}</td>
                      <td className="text-center">{medicament.unidadMedida}</td>
                      <td className="text-center">{medicament.Cantidad}</td>
                      <td className="text-center">
                        <button
                          onClick={() =>
                            openModal(
                              2,
                              medicament.idMedicamento,
                              medicament.Nombre,
                              medicament.Tipo,
                              medicament.unidadMedida,
                              medicament.Cantidad
                            )
                          }
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#modalMedicaments"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteMedicament(
                            medicament.idMedicamento,
                            medicament.Nombre
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
        <div id="modalMedicaments" className="modal fade" aria-hidden="true">
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
                    id="tipo"
                    className="form-control"
                    placeholder="Tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                  <input
                    type="text"
                    id="unidadMedida"
                    className="form-control"
                    placeholder="Unidad de medida"
                    value={unidadMedida}
                    onChange={(e) => setUnidadMedida(e.target.value)}
                  ></input>
                </div>{" "}
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                  <input
                    type="text"
                    id="cantidad"
                    className="form-control"
                    placeholder="Cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
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
