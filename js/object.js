const premierLeague = [ {
    clubName : 'Arsenal',
    position : '1st',
    bestPlayer : 'Saka',
    city : 'London',
    players:{
        forwarders : ['Eze', 'Saka', 'Moreno'],
        midfielders : 'Rice',
        defenders : ['Saliba', 'Timber']
    }
},
{
    clubName : 'Manchester City',
    position : '2nd',
    bestPlayer : 'Haaland',
    city : 'Manchester',
    players:{
        forwarders : ['Haaland', 'Foden', 'Doku'],
        midfielders : ['Rodri', 'Cheki', 'Silva'],
        defenders : 'Stones',
    }
},
{
    clubName : 'Manchester United',
    position : '3rd',
    bestPlayer : 'Bruno',
    city : 'Manchester',
    players:{
        forwarders : ['Cunha', 'Amad', 'Mbeumo'],
        midfielders : ['Bruno', 'Casemero', 'Mainoo'],
        defenders : ['Maguire', 'Yoro', 'Shaw']
    }
}
]

function firstTeam(){
    return premierLeague[0]['clubName']
}
console.log(firstTeam())

function bestPlayer(){
    return premierLeague[0]['bestPlayer']
}
console.log(bestPlayer())

function firstForward(){
    return premierLeague[0].players.forwarders[0]
}
console.log(firstForward())

function totalDefenders(){
    return premierLeague[0].players.defenders.length
}
console.log(totalDefenders())

function statement(){
    let team;
    for(i=0; i<premierLeague.length; i++){
       team = premierLeague[i]
    }
    return team
}
console.log(statement(team.clubName + "is in " + team.position + 'position'))