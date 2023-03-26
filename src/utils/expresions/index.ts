export const expresions = {
  password: /^(?=.*\d)(?=.*[a-zA-Z]).{5,20}$/, // 6 a 20 digitos con numeros y letras/caract espec opc
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //numeros y letras, mayus y minus
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  time: /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/,
  phoneNumber: /^(\+?[0-9][0-9])?(\s?)([0-9])(\s?)[9876543]\d{3}(\s?)\d{4}$/, // (+56/56)(posible espacio)(09/9)(posible espacio)(9,8,7,6,5,4,3)(3 números)(posible espacio)(4 números) ej: +569 4444 4444,
  firstLetter: /(^\w{1})|(\s+\w{1})/g,
}
