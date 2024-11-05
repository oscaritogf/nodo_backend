'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorNotification from '@/components/ErrorNotification';
import { VerifyUser } from '@/services/verify'; // Importar el servicio de verificación
import Image from 'next/image';

const Verify = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [warningMessage, setWarningMessage] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            verificationCode
        };

        console.log("Datos enviados:", data); // Imprimir en consola antes de la verificación

        try {
            const response = await VerifyUser(data); // Llamar al servicio VerifyUser

            if (response.error) {
                setWarningMessage([response.error || 'Error al verificar.']);
                return;
            }

            router.push('/'); 
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
                                {/* Mensaje de verificación */}
                                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
                                    <p className="font-bold">Verificación requerida</p>
                                    <p>Se ha enviado un código de verificación a tu correo. Ingresa tu correo y el código de verificación para verificar tu cuenta. Tienes una hora para hacerlo antes de que el código expire.</p>
                                </div>

                                {warningMessage.length > 0 && <ErrorNotification errors={warningMessage} />}
                                
                                <h1 className="text-4xl font-bold text-custom-gray mb-5 mt-10 text-center">Verificación</h1>
                                <h3 className="text-1xl text-custom-gray mb-9 text-center">Verifica tu cuenta en NODO</h3>

                                <form className="flex flex-col mt-auto" onSubmit={handleSubmit}>
                                    <div className='mb-6'>
                                        <label htmlFor="email" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Correo
                                        </label>
                                        <input
                                            id="email"
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Ingresa un correo válido"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput text-custom-gray"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                        
                                    </div>

                                    <div>
                                        <label htmlFor="verificationCode" className="block text-xs font-semibold text-custom-gray mb-4">
                                            Código de Verificación
                                        </label>
                                        <input
                                            id="verificationCode"
                                            type="text"
                                            value={verificationCode}
                                            onChange={(e) => setVerificationCode(e.target.value)}
                                            placeholder="Ingresa el código de verificación"
                                            className="w-full p-4 mt-1 rounded-md bg-custom-fondoInput mb-9 text-custom-gray"
                                            required
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <button type="submit" className="w-full py-4 px-3 text-white rounded-md font-bold bg-custom-orange"
                                            style={{ boxShadow: '0 1px 10px rgba(0, 0, 0, 0.7)' }}>
                                            Verificar
                                        </button>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-sm text-custom-gray">
                                            ¿Ya tienes una cuenta?{' '}
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

export default Verify;
