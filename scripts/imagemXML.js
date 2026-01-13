function carregarXML() {
    var imagem = new XMLHttpRequest();
    imagem.open("GET", "https://avatars.githubusercontent.com/u/253275162?s=400&v=4", true);
    imagem.responseType = 'blob';
    imagem.onload = function () {
        if(this.status === 200){
            var imagemBlob = this.response;
            var urlImagem = URL.createObjectURL(imagemBlob);
            var imgElement = document.getElementById("imagemXML");
            imgElement.src = urlImagem;
            imgElement.onload = function(){
                URL.revokeObjectURL(imagemBlob)
            }
        }
        
}
imagem.send();
}
carregarXML();