'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorNotification from '@/components/ErrorNotification';
import { RegisterUser } from '@/services/register';
import Image from 'next/image';

const Register = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [idRol, setIdRol] = useState('1'); 
    const [primerNombre, setPrimerNombre] = useState('');
    const [segundoNombre, setSegundoNombre] = useState('');
    const [primerApellido, setPrimerApellido] = useState('');
    const [segundoApellido, setSegundoApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [warningMessage, setWarningMessage] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            password,
            id_rol: idRol,
            primer_nombre: primerNombre,
            segundo_nombre: segundoNombre,
            primer_apellido: primerApellido,
            segundo_apellido: segundoApellido,
            telefono
        };

        try {
            const response = await RegisterUser(data);

            if (response.error) {
                setWarningMessage([response.error || 'Error al registrar.']);
                return;
            }

            router.push('/'); 
        } catch (error) {
            setWarningMessage(['Error al conectar con el servidor.']);
        }
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
                            {warningMessage.length > 0 && <ErrorNotification errors={warningMessage} />}
                                <h1 className="text-4xl font-bold text-custom-gray mb-5 mt-10 text-center">Registro</h1>
                                <h3 className="text-1xl text-custom-gray mb-9 text-center">Crea tu cuenta en NODO</h3>

                                <form className="flex flex-col mt-auto" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="primerNombre" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Primer Nombre
                                        </label>
                                        <input
                                            id="primerNombre"
                                            type="text"
                                            value={primerNombre}
                                            onChange={(e) => setPrimerNombre(e.target.value)}
                                            placeholder="Ingresa tu primer nombre"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="segundoNombre" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Segundo Nombre
                                        </label>
                                        <input
                                            id="segundoNombre"
                                            type="text"
                                            value={segundoNombre}
                                            onChange={(e) => setSegundoNombre(e.target.value)}
                                            placeholder="Ingresa tu segundo nombre"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9"
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="primerApellido" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Primer Apellido
                                        </label>
                                        <input
                                            id="primerApellido"
                                            type="text"
                                            value={primerApellido}
                                            onChange={(e) => setPrimerApellido(e.target.value)}
                                            placeholder="Ingresa tu primer apellido"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="segundoApellido" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Segundo Apellido
                                        </label>
                                        <input
                                            id="segundoApellido"
                                            type="text"
                                            value={segundoApellido}
                                            onChange={(e) => setSegundoApellido(e.target.value)}
                                            placeholder="Ingresa tu segundo apellido"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9"
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
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Contraseña
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Ingresa tu contraseña"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="telefono" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Teléfono
                                        </label>
                                        <input
                                            id="telefono"
                                            type="tel"
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            placeholder="Ingresa tu número de teléfono"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>
                                    <div className="mt-6">
                                <button type="submit" className="w-full py-4 px-3 text-white rounded-md font-bold"
                                    style={{ backgroundColor: '#E0793F', boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}>
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
