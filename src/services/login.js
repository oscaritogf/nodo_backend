//src/services/login

import settings from "./settings";

export async function LoginUser(userLogin) {
    try {
        
        const response = await fetch(`${ settings.local }/login/custom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify(userLogin),
            credentials: 'include'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${response.status} - ${errorData.detail || 'Ocurrió un error'}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en LoginUser:", error);
        throw error;  
    }
}