export function LoginFormValidator(
    email,
    password
){

    const warnings = [];

    if (email.length === 0) {
        warnings.push('Ingresa un correo es obligatorio');
    }

    if (password.length === 0) {
        warnings.push('Ingresa una contraseña es obligatoria');
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        warnings.push('Ingresa un correo valido');
    }

    if (password.length < 6) {
        warnings.push('La contraseña debe tener al menos 6 caracteres');
    }

    if (!/[A-Z]/.test(password)) {
        warnings.push('La contraseña debe tener al menos una letra mayúscula');
    }

    if (!/[\W_]/.test(password)) {
        warnings.push('La contraseña debe tener al menos un caracter especial');
    }

    if (/(012|123|234|345|456|567|678|789|890)/.test(password)) {
        warnings.push('La contraseña no puede tener secuencias de números');
    }

    return warnings;
}