'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LoginUser } from "@/services/login";
import { LoginFormValidator } from "@/utils/utils";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ErrorNotification from "@/components/ErrorNotification";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    console.log("Cleaning localStorage");
    localStorage.removeItem("token");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const warnings = LoginFormValidator(email, password);

    if (warnings.length === 0) {
      LoginUser({ email, password })
        .then((response) => {
          if (response.error) {
            setWarningMessage([response.error]);
          } else {
            localStorage.setItem("token", response.idToken);
            router.push("/inicio");
          }
        })
        .catch(() => {
          setWarningMessage(["Email incorrecto o contraseña incorrecta"]);
        });
    } else {
      setWarningMessage(warnings);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen" style={{  
      background: "linear-gradient(90deg, rgba(224, 121, 63, 1) 0%, rgba(224, 121, 63, 0.5) 100%)"
    }}>

      <div className="w-full lg:w-1/3 items-center" style={{ background: "rgba(255, 255, 255)" }}>
        <div className="relative h-1/4 p-5">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/login_img.svg')" }}
          ></div>
          <div className="absolute inset-0" 
            style={{ background: "linear-gradient(100deg, rgba(224, 121, 63, 1.00) 40%, rgba(224, 121, 63, 0.50) 100%)" }}
          />
          <div className="relative h-full w-full flex text-white ml-5 mt-4 ">
            <Image 
              src="/images/logo_nodo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="p-8 h-3/4 flex flex-col justify-between items-center">
          <div className="w-full h-full">
            <div className="w-full rounded-lg bg-white h-full flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold text-custom-gray mb-5 mt-10 text-center">Inicio de sesión</h1>
                <h3 className="text-1xl text-custom-gray mb-9 text-center">Inicia sesión con tu cuenta de NODO</h3>

                <form className="flex flex-col mt-auto" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-xs font-semibold text-custom-gray mb-4">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ingresa un correo válido"
                      className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput"
                      required
                      style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                    />
                  </div>

                  <div className="relative mb-6">
                    <label htmlFor="password" className="block text-xs font-semibold text-custom-gray mb-4">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingresa tu contraseña"
                      className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput"
                      required
                      style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3  pt-8 text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  {warningMessage.length > 0 && <ErrorNotification errors={warningMessage} className="mb-4" />}

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full py-4 px-3 text-white rounded-md font-bold"
                      style={{ backgroundColor: '#E0793F', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}
                    >
                      Iniciar sesión
                    </button>

                    <div className="mt-4 text-center">
                      <p className="text-sm text-custom-gray">
                        ¿No tienes una cuenta?{' '}
                        <span onClick={() => router.push('/register')} className="cursor-pointer hover:underline font-bold">
                          Regístrate aquí
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
