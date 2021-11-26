import React from "react";


import style from "../css/Contacto.module.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contacto = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2g9fmp4', 'template_xopdnqy',e.target,'user_BLMjPgWw1lzctNbxUeHQt')
      .then((result) => {
          console.log(result.text);
          console.log("enviado")
          swal({
            title: "Mensaje enviado exitosamente",
            icon: "success",
            button: "Aceptar!",
          });
      }, (error) => {
          console.log(error.text);
          console.log("nada")
      });
      e.target.reset();
  };
  return (
    <div className={"ContainerMain"}>
    <div className=" mainconteiner">
      <section>
        <div className="container-xxl border-radius-x green-bg ">
          <div className="row align-items-start ">
            <div className="col">
              <h3 className="text-center py-2">Contactate con nosotros</h3>
              <p className="fs-6 p-3">
                Es nuestra misión contribuir al bienestar de las mascotas,
                buscar un hogar digno a cada uno de los animales y ayudar al
                bienestar tanto de ellos, como de las personas que los llevan y
                adoptan en su hogar, garantizando el confort y la comodidad.{" "}
                <br />
                <br />
                Tu opinión es muy importante para nosotros, ya que nos ayuda a
                mejorar como organización, y por supuesto, podemos mejorar,
                cambiar e innovar pensando siempre en el bienestar de todos los
                perritos.
              </p>
              <img
                className="w-100"
                src="assets/img/porque-adoptar.jpg"
                alt="porque adoptar"
              />
              <div className={style.flex__container}>
                <form className={style.from} onSubmit={sendEmail}>
                  <div className={style.fromm__section}>
                    <input
                      type="text" name="name"
                      className={style.from__input}
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div className={style.fromm__section}>
                    <input
                      type="email"
                      name="email"
                      className={style.from__input}
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className={style.fromm__section}>
                    <textarea
                      className={style.from__input}
                      name="message"
                      placeholder="mensaje"
                      required
                      
                    ></textarea>
                  </div>
                  <div id="bt2">
                  
                    <input className={style.bto} type="submit" 
                    id="" />
                  </div>
                </form>
                <div className={style.imagen2}>
                  <div className={style.imagen}>
                    <img
                      src="https://img.icons8.com/ios/452/gmail--v2.png"
                      alt="Imagen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    
      </div>
    </div>
    
  );
};

export default Contacto;
