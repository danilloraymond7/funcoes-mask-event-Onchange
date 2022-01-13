// * FUNCOES PARA EVENTOS ONCHANGE

// MASCARA - CELULAR
const mascaraParaCelular = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
};

// MASCARA APENAS PARA LETRAS
const soLetras = (value) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

// MASCARA-CEP
const mascaraCep = (value) => {
  return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
};

// MASCARA 00/00/0000
const mascaraParaDate = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};

// MASCARA APENAS PARA NÚMEROS
const soNumeros = (value) => {
  return value.replace(/\D/g, "");
};

// MASCARA- CPF
const mascaraParaCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};
