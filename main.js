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
    createGame("portugal", "4 x 1", "ghana") +
    createGame("brazil", "2 x 0", "serbia")
  ) +
  createCard('25/11', 'sexta',
    createGame("netherlands", "1 x 1", "ecuador") +
    createGame("england", "16:00", "united states")
  ) +
  createCard('26/11', 'sabado',
    createGame("france", "13:00", "denmark") +
    createGame("argentina", "16:00", "mexico")
  ) +
  createCard('27/11', 'domingo',
    createGame("belgium", "10:00", "morocco") +
    createGame("croatia", "13:00", "canada") +
    createGame("spain", "16:00", "germany")
  ) +
  createCard('28/11', 'segunda',
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguay")
  ) +
  createCard('29/11', 'terça',
    createGame("netherlands", "12:00", "qatar") +
    createGame("wales", "16:00", "england")
  ) +
  createCard('30/11', 'quarta',
    createGame("tunisia", "12:00", "france") +
    createGame("poland", "16:00", "argentina")
  ) +
  createCard('01/12', 'quinta',
    createGame("croatia", "12:00", "belgium") +
    createGame("costa rica", "16:00", "germany") +
    createGame("japan", "16:00", "spain")
  ) +
  createCard('02/12', 'sexta',
    createGame("south korea", "12:00", "portugal") +
    createGame("cameroon", "16:00", "brazil")

  )
