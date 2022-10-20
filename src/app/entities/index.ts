export interface Provider {
    idproveedor: string,
    nombreempresa: string,
    nombrecontacto: string,
    cargocontacto: string,
    direccion: string,
    ciudad: string,
    region: string | null,
    codigopostal: string,
    pais: string,
    telefono: string,
    fax: string | null
}

export interface Client {
    idcliente: string,
    usuario: string,
    empresa: string,
    nombres: string,
    correo: string,
    cargo: string,
    direccion: string,
    ciudad: string,
    region: string | null,
    clave: string,
    pais: string,
    telefono: string,
    fax: string | null
}