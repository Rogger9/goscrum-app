export const expresions = {
  password: /^(?=.*\d)(?=.*[a-zA-Z]).{5,20}$/, // 6 a 20 digitos con numeros y letras/caract espec opc
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //numeros y letras, mayus y minus
  firstLetter: /(^\w{1})|(\s+\w{1})/g,
}
