'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorNotification from '@/components/ErrorNotification';
import { RegisterUser } from '@/services/register';
import Image from 'next/image';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [apellidoCompleto, setApellidoCompleto] = useState('');
    const [warningMessage, setWarningMessage] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    
    const handleNameKeyPress = (e) => {
        const regex = /^[A-Za-zÀ-ÿ\s]*$/; 
        if (!regex.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            password,
            nombre_completo: nombreCompleto,
            apellido_completo: apellidoCompleto
        };

        try {
            const response = await RegisterUser(data);

            if (response.error) {
                setWarningMessage([response.error || 'Error al registrar.']);
                return;
            }

            router.push('/'); 
        } catch (error) {
            setWarningMessage([error.message || 'Error al conectar con el servidor.']);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Alternar entre mostrar y ocultar contraseña
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
                            className="w-auto h-auto" 
                        />
                    </div>
                </div>

                <div className="p-8 h-3/4 flex flex-col justify-between items-center">
                    <div className="w-full h-full">
                        <div className="w-full rounded-lg bg-white h-full flex flex-col justify-between">
                            <div>
                            {warningMessage.length > 0 && <ErrorNotification errors={warningMessage} />}
                                <h1 className="text-4xl font-bold text-custom-gray mb-5 mt-10 text-center">Registro</h1>
                                <h3 className="text-1xl text-custom-gray mb-9 text-center">Crea tu cuenta en NODO</h3>

                                <form className="flex flex-col mt-auto" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="nombreCompleto" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Nombre 
                                        </label>
                                        <input
                                            id="nombreCompleto"
                                            type="text"
                                            value={nombreCompleto}
                                            onChange={(e) => setNombreCompleto(e.target.value)}
                                            onKeyDown={handleNameKeyPress} // Bloquear entrada de números/caracteres especiales
                                            placeholder="Ingresa tu nombre completo"
                                            className="w-full p-4 mt-1  bg-custom-fondoInput mb-9  text-custom-gray"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="apellidoCompleto" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Apellido 
                                        </label>
                                        <input
                                            id="apellidoCompleto"
                                            type="text"
                                            value={apellidoCompleto}
                                            onChange={(e) => setApellidoCompleto(e.target.value)}
                                            onKeyDown={handleNameKeyPress} // Bloquear entrada de números/caracteres especiales
                                            placeholder="Ingresa tu apellido completo"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9 text-custom-gray"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Correo
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Ingresa un correo válido"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9 text-custom-gray"
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
                                            type={showPassword ? "text" : "password"} // Cambiar el tipo de input según la visibilidad
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Ingresa tu contraseña"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray "
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

                                    <div className="mt-6">
                                        <button type="submit" className="w-full py-4 px-3 text-white rounded-md font-bold bg-custom-orange"
                                            style={{boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}>
                                            Registrarse
                                        </button>

                                        <div className="mt-4 text-center">
                                            <p className="text-sm text-custom-gray">
                                                ¿Ya tienes una cuenta?{' '}
                                                <span onClick={() => router.push('/login')} className="cursor-pointer hover:underline font-bold">
                                                    Inicia sesión
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

export default Register;

