function createGame(player1, hour, player2){
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
              ${games}
            </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
            createCard('21/11' , 'segunda',
		    createGame("senegal", "0 x 2", "netherlands")+
            createGame("england", "6 x 2", "iran") 
            )+
            createCard('22/11' , 'terça',
            createGame("argentina", "07:00", "saudi arabia") +
            createGame("france", "16:00", "australia")
            )+
            createCard('23/11' , 'quarta',
            createGame("germany", "10:00", "japan")+
            createGame("spain",   "13:00", "costa rica")+
            createGame("belgium", "16:00", "canada")
            )+
            createCard('24/11' , 'quinta',
            createGame("portugal", "13:00", "ghana")+
            createGame("brazil",   "16:00", "serbia")
            )+
            createCard('25/11' , 'sexta',
            createGame("netherlands", "13:00", "ecuador")+
            createGame("england",   "16:00", "united states")
            )+
            createCard('26/11' , 'sabado',
            createGame("france", "13:00", "denmark")+
            createGame("argentina",   "16:00", "mexico")
            )+
            createCard('27/11' , 'domingo',
            createGame("belgium", "10:00", "morocco")+
            createGame("croatia", "13:00", "canada")+
            createGame("spain",   "16:00", "germany")
            )+
            createCard('28/11' , 'segunda',
            createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "uruguay")
            )+
            createCard('29/11' , 'terça',
            createGame("netherlands", "12:00", "qatar") +
            createGame("wales", "16:00", "england")
            )+
            createCard('30/11' , 'quarta',
            createGame("tunisia", "12:00", "france") +
            createGame("poland", "16:00", "argentina")
            )+
            createCard('01/12' , 'quinta',
            createGame("croatia", "12:00", "belgium") +
            createGame("costa rica", "16:00", "germany") +
            createGame("japan", "16:00", "spain") 
            ) +
            createCard('02/12' , 'sexta',
            createGame("south korea", "12:00", "portugal") +
            createGame("cameroon", "16:00", "brazil") 
                
            )+
            createCard('03/12' , 'sábado',
            createGame("1A", "12:00","INTERNACIONAL KHALIFA", "Oitavas de final 1", "2B") +
            createGame("1C", "16:00", "AL RAYYAN","Oitavas de final 2", "2D")   
            )+
            createCard('05/12' , 'segunda', "Oitavas de final 3 e 4",
            createGame("1E", "12:00","AL WAKRAH", "Oitavas de final 3", "2F") +
            createGame("1G", "16:00", "PORTO DE DOHA", "Oitavas de final 4", "2H")   
            )+
            createCard('05/12' , 'domingo',
            createGame("1D", "12:00", "AL THUMAMA","Oitavas de final  6", "2C") +
            createGame("1B", "16:00","AL KHOR",  "Oitavas de final 5", "2A") 
            )+
            createCard('05/12' , 'domingo',
            createGame("1F", "12:00", "CIDADE DA EDUCAÇÃO","Oitavas de final  7", "2E") +
            createGame("bandeira_padrao.sgv","1B", "16:00","AL KHOR",  "Oitavas de final 8", "2A") 
            )+
            










        {
            "id": 7,
            "rodada": "Oitavas de final 7",
            "diaSemana": "TER",
            "data": "06/12/2022",
            "hora": "12:00",
            "estadio": "CIDADE DA EDUCAÇÃO",
            "partida": "1F x 2E",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        },
        {
            "id": 8,
            "rodada": "Oitavas de final 8",
            "diaSemana": "TER",
            "data": "06/12/2022",
            "hora": "16:00",
            "estadio": "NACIONAL DE LUSAIL",
            "partida": "1H x 2G",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        },
        {
            "id": 9,
            "rodada": "Quartas de final 1",
            "diaSemana": "SEX",
            "data": "09/12/2022",
            "hora": "16:00",
            "estadio": "NACIONAL DE LUSAIL",
            "partida": "Venc. O1 x Venc. O2",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        },
        {
            "id": 10,
            "rodada": "Quartas de final 2",
            "diaSemana": "SEX",
            "data": "09/12/2022",
            "hora": "12:00",
            "estadio": "CIDADE DA EDUCAÇÃO",
            "partida": "Venc. O3 x Venc. O4",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        },
        {
            "id": 11,
            "rodada": "Quartas de final 3",
            "diaSemana": "SÁB",
            "data": "10/12/2022",
            "hora": "16:00",
            "estadio": "AL KHOR",
            "partida": "Venc. O5 x Venc. O6",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        },
        {
            "id": 12,
            "rodada": "Quartas de final 4",
            "diaSemana": "SÁB",
            "data": "10/12/2022",
            "hora": "12:00",
            "estadio": "AL THUMAMA",
            "partida": "Venc. O7 x Venc. O8",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        },
        {
            "id": 13,
            "rodada": "Semi final 1",
            "diaSemana": "TER",
            "data": "13/12/2022",
            "hora": "16:00",
            "estadio": "NACIONAL DE LUSAIL",
            "partida": "Venc. Q1 x Venc. Q2",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        },
        {
            "id": 14,
            "rodada": "Semi final 2",
            "diaSemana": "QUA",
            "data": "14/12/2022",
            "hora": "16:00",
            "estadio": "AL KHOR",
            "partida": "Venc. Q3 x Venc. Q4",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        },
        {
            "id": 15,
            "rodada": "Terceiro lugar",
            "diaSemana": "SÁB",
            "data": "17/12/2022",
            "hora": "12:00",
            "estadio": "INTERNACIONAL KHALIFA",
            "partida": "Perd. S1 x Perd. S2",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        },
        {
            "id": 16,
            "rodada": "Final",
            "diaSemana": "DOM",
            "data": "18/12/2022",
            "hora": "12:00",
            "estadio": "NACIONAL DE LUSAIL",
            "partida": "Venc. S1 x Venc. S2",
            "mandante": "bandeira_padrao.svg",
            "visitante": "bandeira_padrao.svg"
        }
  
