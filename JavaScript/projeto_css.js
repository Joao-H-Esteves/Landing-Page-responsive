var nrImagem = 0;
var imagens = [];
var refrescar = 1; // mudar imagem de 1 em 1 segundo

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "imagens/moto-eyes.jpg";
imagens[1] = "imagens/moto-eyes1.jpeg";
imagens[2] = "imagens/moto-eyes2.jpeg";
imagens[3] = "imagens/moto-eyes3.jpeg";
//...erro no link da imagem 0

function rodarImagens() {
    //  document.getElementById('misto').src = imagens[]; //erro aqui
   document.images["misto"].src = imagens[nrImagem++];

   if (nrImagem >= imagens.length)
      nrImagem = 0;

   setTimeout("rodarImagens()", refrescar * 2800);  
}

rodarImagens();