function tocarMusica(){
   const audio = document.getElementById("musica");
    if (audio.paused) {
         audio.play().catch(error => {
             console.error("Erro ao reproduzir o áudio:", error);
         });
    } else {
         audio.pause().catch(error => {
             console.error("Erro ao pausar o áudio:", error);
         });
    } 
}   