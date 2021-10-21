const team = {
    _players: [
        {
        firstName: 'Edwin',
        lastName: 'Martens',
        age: 19,
        },
        {
            firstName: 'Mark',
            lastName: 'van Wijk',
            age: 19,
        },
        {
            firstName: 'Thomas',
            lastName: 'Mosterd',
            age: 22,
        }
    ],
    _games: [
        {
            opponent: 'Indians',
            teamPoints: 9,
            opponentPoints: 5,
        },
        {
            opponent: 'Braves',
            teamPoints: 6,
            opponentPoints: 7,
        },
        {
            opponent: 'Dodgers',
            teamPoints: 2,
            opponentPoints: 0,
        },
    ],

    get players () {
        return this._players;
    },

    get games () {
        return this._games;
    },

    addPlayer (firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        }
        this._players.push(player);
    },

    addGame (opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        }
        this._games.push(game);
    },
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Giants', 10, 5);
team.addGame('Brewers', 5, 7);
team.addGame('Red Sox', 3, 1);
console.log(team.games);