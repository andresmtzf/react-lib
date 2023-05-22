export function imprimirElementos<T>(elementos: T[]): void {
  elementos.forEach((elemento) => {
    console.log(elemento)
  })
}
