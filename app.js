function encriptar(){
    let texto = document.getElementById('input').value;
    if(texto==''){
        document.getElementById('texto_var1').innerHTML='Uuuh, que solo está por aquí...';
        document.getElementById('texto_var2').innerHTML='que meyo! por favor, ingresa el texto que deseas encriptar.';
        document.getElementById('ternurin').src='img/ternurin_fantasma.png'
    } else{
        texto=texto.toLowerCase();

        const keys={'e':'enter','i':'imes','a':'ai','o':'ober','u':'ufat'};
        for(i in keys){ texto=texto.replaceAll(`${i}`,`${keys[i]}`); }

        document.getElementById('texto_var1').innerHTML='El texto encriptado es el siguiente:';
        document.getElementById('texto_var2').innerHTML=texto;
        document.getElementById('ternurin').src='img/ternurin_bienvenida1.png'
    }
}

function desencriptar(){
    let texto = document.getElementById('input').value;
    if(texto==''){
        document.getElementById('texto_var1').innerHTML='Uuuh, que solo está por aquí...';
        document.getElementById('texto_var2').innerHTML='que meyo! por favor, ingresa el texto que deseas desencriptar.';
        document.getElementById('ternurin').src='img/ternurin_fantasma.png'
    } else{
        const keys={'enter':'e','imes':'i','ai':'a','ober':'o','ufat':'u'};
        texto=texto.toLowerCase();
        for(i in keys){ texto=texto.replaceAll(`${i}`,`${keys[i]}`); }

        document.getElementById('texto_var1').innerHTML='El texto desencriptado es el siguiente:';
        document.getElementById('texto_var2').innerHTML=texto;
        document.getElementById('ternurin').src='img/ternurin_bienvenida1.png'
    }
} 

function borrar(){
    document.getElementById('texto_var1').innerHTML='Bienvenide!';
    document.getElementById('texto_var2').innerHTML='Por favor, ingresa el texto que deseas encriptar.';
    document.getElementById('ternurin').src='img/ternurin_bienvenida1.png' 
    formulario.reset();
}

function copiar(){
    let textoACopiar = document.getElementById('texto_var2').textContent;
    navigator.clipboard.writeText(textoACopiar);
    document.getElementById('texto_var1').innerHTML='Copiado!'
    document.getElementById('ternurin').src='img/ternurin_bienvenida1.png'
}