function createGame(player1, hour, player2) {
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
  createCard('21/11', 'segunda',
    createGame("senegal", "0 x 2", "netherlands") +
    createGame("england", "6 x 2", "iran")
  ) +
  createCard('22/11', 'terça',
    createGame("argentina", "1x2", "saudi arabia") +
    createGame("france", "4x1", "australia")
  ) +
  createCard('23/11', 'quarta',
    createGame("germany", "1 x 2", "japan") +
    createGame("spain", "7 x 0", "costa rica") +
    createGame("belgium", "1 x 0", "canada")
  ) +
  createCard('24/11', 'quinta',
    createGame("portugal", "3 x 2", "ghana") +
    createGame("brazil", "2 x 0", "serbia")
  ) +
  createCard('25/11', 'sexta',
    createGame("netherlands", "1 x 1", "ecuador") +
    createGame("england", "0 x 0", "united states")
  ) +
  createCard('26/11', 'sabado',
    createGame("france", "2 x 1", "denmark") +
    createGame("argentina", "2 x 0", "mexico")
  ) +
  createCard('27/11', 'domingo',
    createGame("belgium", "0 x 2", "morocco") +
    createGame("croatia", "4 x 1", "canada") +
    createGame("spain", "1 x 1", "germany")
  ) +
  createCard('28/11', 'segunda',
    createGame("brazil", "2 x 0", "switzerland") +
    createGame("portugal", "2 x 0", "uruguay")
  ) +
  createCard('29/11', 'terça',
    createGame("netherlands", "2 x 0", "qatar") +
    createGame("wales", "0 x 3", "england")
  ) +
  createCard('30/11', 'quarta',
    createGame("tunisia", "1 x 0", "france") +
    createGame("poland", "0  x  2", "argentina")
  ) +
  createCard('01/12', 'quinta',
    createGame("croatia", "0 x 0", "belgium") +
    createGame("costa rica", "2 x 4", "germany") +
    createGame("japan", "2 x 1", "spain")
  ) +
  createCard('02/12', 'sexta',
    createGame("south korea", "2 x 1", "portugal") +
    createGame("cameroon", "1 x 0", "brazil")
  ) +
  createCard('03/12', 'sabádo',
    createGame("netherlands", "3 x 1", "united states") +
    createGame("argentina", "2 x 1", "australia")
  ) +
  createCard('04/12', 'domingo',
    createGame("france", "3 x 1", "poland") +
    createGame("england", "3 x 0", "senegal")
  )+
  createCard('05/12', 'segunda',
  createGame("japan", "1(1) x 1 (3)", "croatia") +
  createGame("brazil", "4 x 1", "south korea")
)+
  createCard('06/12', 'terça',
  createGame("morocco", "12:00", "spain") +
  createGame("portugal", "16:00", "switzerland")
)+
createCard('09/12', 'sabado',
  createGame("croatia", "12:00", "brazil") +
  createGame("netherlands", "16:00", "argentina")
)+
createCard('10/12', 'terça',
  createGame("Por/Swit", "12:00", "Mar/Spa") +
  createGame("england", "16:00", "france")
) 
