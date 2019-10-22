class DateHelper{

    dataParaTexto(data){
        return data.getDate()
        + '/' + (negociacao.data.getMonth() + 1)
        + '/' + negociacao.data.getFullYear();
    }
    
    textoParaData(texto){
        return Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2));
    }
}