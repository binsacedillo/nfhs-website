function getPlayerDetails(playerName) {
    let player = {};
    switch (playerName.toLowerCase()) {
        // Real Madrid players
        case "eden hazard":
            player = { name: "Eden Hazard", team: "Real Madrid", position: "Forward" };
            break;
        case "thibaut courtois":
            player = { name: "Thibaut Courtois", team: "Real Madrid", position: "Goalkeeper" };
            break;

        // FC Barcelona players
        case "lionel messi":
            player = { name: "Lionel Messi", team: "FC Barcelona", position: "Forward" };
            break;
        case "gerard piqué":
            player = { name: "Gerard Piqué", team: "FC Barcelona", position: "Defender" };
            break;

        default:
            player = null;
    }
    return player;
}

function showPlayerDetails() {
    const playerNameInput = document.getElementById("playerNameInput");
    const playerName = playerNameInput.value.trim();
    const playerInfo = document.getElementById("playerInfo");

    const player = getPlayerDetails(playerName);
    if (player) {
        playerInfo.innerHTML = `
            <h2>${player.name}</h2>
            <p>Team: ${player.team}</p>
            <p>Position: ${player.position}</p>
        `;
    } else {
        playerInfo.innerHTML = "<p>Player not found. Please try again.</p>";
    }
}