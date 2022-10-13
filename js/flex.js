function fd(valor){
    document.getElementById('container').style.flexDirection=valor;
}
function fw(valor){
    document.getElementById('container').style.flexWrap=valor;
}
function fj(valor){
    document.getElementById('container').style.justifyContent=valor;
}
function fo(valor){
    document.getElementById('container').style.alignItems=valor;
}

var n=0;
function slide(){
    var imagens = ['../img/andre.jpg','../img/Pinto.jpg','../img/Socrates.jpg'];
    var legendas = ['chulo','chulo','chulo'];
    var linkpub = ['www.google.com','www.google.com','www.google.com'];
    document.getElementById('image_pub').src=imagens[n];
    document.getElementById('text_pub').innerHTML=legendas[n];
    document.getElementById('link_pub').href=linkpub[n];

    if(n<2) n++;
    else n=0
    setTimeout("slide()",2000);
}