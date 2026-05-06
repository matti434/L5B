export default function AuthModals() {
  return (
    <>
      <div
        className="modal fade"
        id="mi-modal"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content efecto-glass">
            <div className="modal-header texto-bienvenido text-center">
              <h5 className="modal-title text-white">Bienvenido</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              />
            </div>
            <div className="modal-body">
              <form
                className="row contenedor-formulario-inicioSesion"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="col-12 col-md-6 p-3 order-1 order-md-1 g-4">
                  <div className="mb-2">
                    <label htmlFor="username" className="form-label text-white">
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="username"
                      placeholder="Usuario"
                      minLength={4}
                      maxLength={20}
                      required
                    />
                    <small className="form-text text-white">
                      El usuario debe tener más de 4 caracteres
                    </small>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label text-white">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      id="password"
                      placeholder="Contraseña"
                      minLength={10}
                      maxLength={20}
                      pattern="[A-Za-z0-9]{10,20}"
                      required
                    />
                    <small className="form-text text-white">
                      Debe tener más de 10 caracteres (solo letras y números)
                    </small>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-outline-info btn-sm mt-2 p-2"
                      >
                        Iniciar sesión
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 contenedor-imagen-form order-2 order-md-2" />
              </form>
            </div>
            <div className="modal-footer bg-transparent border-0">
              <button
                type="button"
                className="btn btn-secondary btn-login"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="mi-modal-registro"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content efecto-glass">
            <div className="modal-header texto-bienvenido text-center">
              <h5 className="modal-title text-white">Crear cuenta</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              />
            </div>
            <div className="modal-body">
              <form
                className="row contenedor-formulario-inicioSesion"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="col-12 col-md-6 contenedor-imagen-form-registro order-2 order-md-2 g-4" />
                <div className="col-12 col-md-6 p-3 order-1 order-md-1">
                  <div className="mb-2">
                    <label htmlFor="reg-name" className="form-label text-white">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="reg-name"
                      placeholder="Nombre"
                      minLength={4}
                      maxLength={20}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="reg-email" className="form-label text-white">
                      Correo
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="reg-email"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="reg-pass" className="form-label text-white">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      id="reg-pass"
                      placeholder="Contraseña"
                      minLength={10}
                      maxLength={20}
                      pattern="[A-Za-z0-9]{10,20}"
                      required
                    />
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-outline-info btn-sm mt-2 p-2"
                      >
                        Registrarse
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer bg-transparent border-0">
              <button
                type="button"
                className="btn btn-secondary btn-login"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
