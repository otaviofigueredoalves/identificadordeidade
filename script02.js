function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoDigitado = document.querySelector('Input#anonasc')
    var res = document.querySelector('div#res')

    if(anoDigitado.value == '0' || anoDigitado.value > anoAtual){
        alert('VALOR INVALIDO!!! Verifique os dados e tente novamente!')
    }else{
        var idade = anoAtual - (anoDigitado.value)
        var sexbutton = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexbutton[0].checked){
            genero = 'Homem'
            if(idade <= 10){
                //CRIANÇA
                img.setAttribute('src','imagens/bebe.png')
                res.innerHTML = (`Detectamos um menino de ${idade} ano${(idade > 
                1)?'s':''}`)
            } else if(idade < 21){
                //JOVEM
                img.setAttribute('src','imagens/gatinho.png')
                res.innerHTML = (`Detectamos um gatinho de ${idade} anos`)

            } else if(idade < 50){
                //ADULTO
                img.setAttribute('src','imagens/adulto.png')
                res.innerHTML = (`Detectamos um adulto de ${idade} anos`)
            }else if(idade < 110){
                //IDOSO
                img.setAttribute('src','imagens/idoso.png')
                res.innerHTML = (`Detectamos um idoso de ${idade} anos`)
            }else{
                //IMORTAL
                img.setAttribute('src','imagens/imorrivel.png')
                res.innerHTML = (`Detectamos sua mae (feia pra caralhokkk) de 
                ${idade} anos`)
            }
        }else if(sexbutton[1].checked){
            genero = 'Mulher' 
            if(idade <= 10){
                //CRIANÇA
                img.setAttribute('src','imagens/bebe.png')
                res.innerHTML = (`Detectamos uma bebê de ${idade} ano${(idade > 
                1)?'s':''}`)
            } else if(idade < 21){
                //JOVEM
                img.setAttribute('src','imagens/gatinha.png')
                res.innerHTML = (`Detectamos uma <strong>gatinha mimosa</strong> de ${idade} 
                anos`)
            } else if(idade < 50){
                //ADULTO
                img.setAttribute('src', 'imagens/adulta.png')
                res.innerHTML = (`Detectamos uma mulher adulta de ${idade} anos`)
            }else if(idade < 110){
                //IDOSO
                img.setAttribute('src','imagens/idosa.png')
                res.innerHTML = (`Detectamos uma idosa de${idade} anos`)
            }else{
                //IMORTAL
                img.setAttribute('src','imagens/imorrivel.png')
                res.innerHTML = (`Detectamos sua mae (feia pra caralhokkk) de ${idade} anos`)
            }
        }
        res.appendChild(img)
    }
}