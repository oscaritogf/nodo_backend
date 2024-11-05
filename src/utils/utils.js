// utils.js o utils/utils.js

export function FormValidator({ email, password, confirmPassword, fechaNacimiento }) {
    const warnings = [];

    // Validación de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !emailPattern.test(email)) {
        warnings.push('Ingresa un correo válido.');
    }

    // Validación de contraseña
    if (password) {
        if (password.length < 6) {
            warnings.push('La contraseña debe tener al menos 6 caracteres.');
        }
        if (!/[A-Z]/.test(password)) {
            warnings.push('La contraseña debe tener al menos una letra mayúscula.');
        }
        if (!/[\W_]/.test(password)) {
            warnings.push('La contraseña debe tener al menos un carácter especial.');
        }
        if (/(012|123|234|345|456|567|678|789|890)/.test(password)) {
            warnings.push('La contraseña no puede tener secuencias de números.');
        }
    }

    // Validación de confirmación de contraseña (solo si se proporciona confirmPassword)
    if (confirmPassword !== undefined && password !== confirmPassword) {
        warnings.push('Las contraseñas no coinciden.');
    }

    // Validación de fecha de nacimiento (solo si se proporciona fechaNacimiento)
    if (fechaNacimiento) {
        const currentDate = new Date();
        const birthDate = new Date(fechaNacimiento);
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();
        if (age < 21 || (age === 21 && monthDifference < 0)) {
            warnings.push('Debes ser mayor de 21 años para registrarte.');
        }
    }

    return warnings;
}

