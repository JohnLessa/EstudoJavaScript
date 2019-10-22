class DateHelper{

    dataParaTexto(data){
        return data.getDate()
        + '/' + (negociacao.data.getMonth() + 1)
        + '/' + negociacao.data.getFullYear();
    }

    textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}