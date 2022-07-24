function carregar() {
        var msg=document.getElementById('msg')
        var foto=document.getElementById('image')
        var data = new Date()
        var hora = data.getHours()
        var min = data.getMinutes()
        msg.innerText = 'Agora são '+hora+'horas'+' e '+min+'minutos'
        var ano=document.getElementById('ano')
        var dia=document.getElementById('dia')
        var mes=document.getElementById('mes')
        ano.innerHTML='você tá em: '+data.getFullYear()
        dia.innerText='você tá no dia: '+data.getDate()
        mes.innerText='você tá no mes: '+data.getMonth()
        if (hora >=0 && hora<12){
            //bom dia
            image.src = 'manha.png'
        }else if (hora >=12 && hora <=18){
            //boa tarde
            image.src = 'tarde.png'
            document.body.style.background='#b9846f'
        }else{
            image.src = 'noite.png'
            document.body.style.backgroung='#1C1C1C'
            //boa noite
        }
    }   