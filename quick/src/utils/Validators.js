export const validatorRequired = {
    required: { value: true, errorMessage: "Campo requerido" }
}
export const validatorOnlyNumbers = {
    pattern: {value: /^[0-9]*$/, errorMessage: "Ingrese solo números"}
}

export const validatorMinLength = (minlength) => {
    return {minlength: {value: minlength, errorMessage: `El valor minimo debe ser ${minlength}`}}
}

export const validatorEmail = {
    pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, errorMessage: "Por favor ingrese un email valido"}
}