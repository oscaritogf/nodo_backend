'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorNotification from '@/components/ErrorNotification';
import { ForgotPassword } from '@/services/ForgotPassword'; // Importar el servicio de recuperación de contraseña
import Image from 'next/image';

const ForgotPasswordComponent = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [warningMessage, setWarningMessage] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await ForgotPassword({ email });
            
            if (response.error) {
                setWarningMessage([response.error || 'Error al enviar la solicitud.']);
                return;
            }

            setSuccessMessage('Por favor, revisa tu correo electrónico para restaurar tu contraseña.');
            setEmail('');
        } catch (error) {
            setWarningMessage([error.message || 'Error al conectar con el servidor.']);
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
                            className="w-auto h-auto" 
                        />
                    </div>
                </div>

                <div className="p-8 h-3/4 flex flex-col justify-between items-center">
                    <div className="w-full h-full">
                        <div className="w-full rounded-lg bg-white h-full flex flex-col justify-between">
                            <div>
                                {/* Mensaje de éxito */}
                                {successMessage && (
                                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                                        <p className="font-bold">Solicitud enviada</p>
                                        <p>{successMessage}</p>
                                    </div>
                                )}

                                {warningMessage.length > 0 && <ErrorNotification errors={warningMessage} />}
                                
                                <h1 className="text-4xl font-bold text-custom-gray mb-5 mt-10 text-center">Recuperar Contraseña</h1>
                                <h3 className="text-1xl text-custom-gray mb-9 text-center">Ingresa tu correo para recuperar tu cuenta en NODO</h3>

                                <form className="flex flex-col mt-auto" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Correo electrónico
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Ingresa tu correo electrónico"
                                            className="w-full p-4 mt-1 bg-custom-fondoInput mb-9 text-custom-gray"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <button type="submit" className="w-full py-4 px-3 text-white rounded-md font-bold bg-custom-orange"
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}>
                                            Enviar
                                        </button>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-sm text-custom-gray">
                                            ¿Ya recuperaste tu contraseña?{' '}
                                            <span onClick={() => router.push('/login')} className="cursor-pointer hover:underline font-bold">
                                                Inicia sesión
                                            </span>
                                        </p>
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

export default ForgotPasswordComponent;

