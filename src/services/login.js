//src/services/login
//import settings from "./settings";

export async function LoginUser(userLogin) {
    try {
        
        const response = await fetch('http://localhost:3000/api/login/custom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify(userLogin)
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