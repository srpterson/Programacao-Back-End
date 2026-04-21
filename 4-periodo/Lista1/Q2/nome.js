export function primeiroNomeMaiusculo(nomeCompleto) {
  const partes = nomeCompleto.trim().split(" ");
  return partes[0].toUpperCase();
}