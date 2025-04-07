import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { confirmPassword, ...userData } = data;

    try {
      const response = await fetch("https://localhost:7033/api/UsersApi/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        reset();
        navigate("/");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Error en el registro");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor");
    }
  };

  const password = watch("password");

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} className="container d-flex flex-column justify-content-center gap-4">
        <div>
          <label>Nombre</label>
          <input className="form-control" {...register("name", { required: "Este campo es obligatorio" })} />
          {errors.name && <span className="text-danger">{errors.name.message}</span>}
        </div>

        <div>
          <label>Email</label>
          <input type="email" className="form-control" {...register("email", { required: "Este campo es obligatorio" })} />
          {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: "Este campo es obligatorio" })}
          />
          {errors.password && <span className="text-danger">{errors.password.message}</span>}
        </div>

        <div>
          <label>Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            {...register("confirmPassword", {
              required: "Este campo es obligatorio",
              validate: (value) => value === password || "Las contraseñas no coinciden",
            })}
          />
          {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}
        </div>

        <div>
        <label>Comunidad autónoma</label>
        <select
    className="form-control"
    {...register("comunidadAutonoma", {
      required: "Este campo es obligatorio"
    })}
  >
    <option value="Andalucia">Andalucía</option>
    <option value="Catalunya">Cataluña</option>
    <option value="Madrid">Madrid</option>
    <option value="Valencia">Comunidad Valenciana</option>
    <option value="Galicia">Galicia</option>
    <option value="CastillaLaMancha">Castilla-La Mancha</option>
    <option value="CastillaLeon">Castilla y León</option>
    <option value="PaisVasco">País Vasco</option>
    <option value="Canarias">Canarias</option>
    <option value="Aragon">Aragón</option>
    <option value="Baleares">Islas Baleares</option>
    <option value="Murcia">Región de Murcia</option>
    <option value="Extremadura">Extremadura</option>
    <option value="Cantabria">Cantabria</option>
    <option value="Navarra">Navarra</option>
    <option value="LaRioja">La Rioja</option>
    <option value="PaisVasco">País Vasco</option>
  </select>
  {errors.comunidadAutonoma && <span className="text-danger">{errors.comunidadAutonoma.message}</span>}
</div>

        <div className="d-flex justify-content-center">
          <button className="mt-5 mx-auto botonLogin" type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;