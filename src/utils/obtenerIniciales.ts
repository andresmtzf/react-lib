/**
 * @description Obtiene iniciales de dos palabras y las regresa como una cadena
 *
 * @author andres.martinez  Hábil MX
 * @version 1.0.0, 02/02/2023
 * @param primeraPalabra
 * @param segundaPalabra
 * @returns Iniciales: ejemplo (AM)
 */
export const obtenerIniciales = (primeraPalabra: string, segundaPalabra = primeraPalabra) => {
  return `${primeraPalabra.charAt(0).toUpperCase()}${
    segundaPalabra === primeraPalabra
      ? segundaPalabra.charAt(1).toUpperCase()
      : segundaPalabra.charAt(0).toUpperCase()
  }`
}
