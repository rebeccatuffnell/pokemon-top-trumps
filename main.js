// pokemon name
let pokeName;
let cPokeName;

// player values
let pHeight;
let pHealth;
let pAttack;
let pDefense;
let pSpeed;

// computer values
let cHeight;
let cHealth;
let cAttack;
let cDefense;
let cSpeed;

// score 
let win = 0;
let loss = 0;
let draw = 0;

// function which generates player + computer pokemon and the values
async function getPokemon() {
    let random = Math.floor(Math.random() * 150);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    let data = await response.json();
    console.log(data);
    pokeNameHeader = document.querySelector("h1");
    pokeNameData = data.name;
    pokeName = pokeNameData.charAt(0).toUpperCase() + pokeNameData.slice(1);
    pokeNameHeader.innerText = pokeName;

    let img = document.querySelector("img");
    img.src = data.sprites.front_default;

    let height = document.querySelector(".height");
    pHeight = height.innerText = data.height;

    let hp = document.querySelector(".hp");
    pHealth = hp.innerText = data.stats[0].base_stat;

    let attack = document.querySelector(".attack");
    pAttack = attack.innerText = data.stats[1].base_stat;

    let defense = document.querySelector(".defense");
    pDefense = defense.innerText = data.stats[2].base_stat;

    let speed = document.querySelector(".speed");
    pSpeed = speed.innerText = data.stats[5].base_stat;


    // computer card
    let compRandom = Math.floor(Math.random() * 150);
    let compResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${compRandom}/`);
    let compData = await compResponse.json();
    console.log(compData);
    cPokeNameHeader = document.querySelector(".compHeader");
    cPokeNameData = compData.name;
    cPokeName = cPokeNameData.charAt(0).toUpperCase() + cPokeNameData.slice(1);
    cPokeNameHeader.innerText = cPokeName;

    let imgComp = document.querySelector(".img2");
    imgComp.src = compData.sprites.front_default;


    cHeight = compData.height;

    cHealth = compData.stats[0].base_stat;

    cAttack = compData.stats[1].base_stat;

    cDefense = compData.stats[2].base_stat;

    cSpeed = compData.stats[5].base_stat;

    let rHeight = document.querySelector(".cHeight")
    rHeight.innerText = 0;
    let rHealth = document.querySelector(".cHealth")
    rHealth.innerText = 0;
    let rAttack = document.querySelector(".cAttack")
    rAttack.innerText = 0;
    let rDefense = document.querySelector(".cDefense")
    rDefense.innerText = 0;
    let rSpeed = document.querySelector(".cSpeed")
    rSpeed.innerText = 0;

}

getPokemon();

let button = document.querySelector("#newPokemon");

button.innerText = "New Pokemon"; 

button.addEventListener("click", getPokemon);

// Height button
async function heightTest() {
    if (pHeight === cHeight) {
            draw++;
            alert("It's a draw!");
        
            } else {
                if (pHeight > cHeight) {
                    win++;
                    alert(`
                                    You win! 
                    Your ${pokeName} beat their ${cPokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                } else {
                    loss++;
                    alert(`
                                    You lose! 
                    Their ${cPokeName} beat your ${pokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                }
            }
            let rHeight = document.querySelector(".cHeight")
            rHeight.innerText = cHeight;
            let rHealth = document.querySelector(".cHealth")
            rHealth.innerText = cHealth;
            let rAttack = document.querySelector(".cAttack")
            rAttack.innerText = cAttack;
            let rDefense = document.querySelector(".cDefense")
            rDefense.innerText = cDefense;
            let rSpeed = document.querySelector(".cSpeed")
            rSpeed.innerText = cSpeed;
}


let buttonHeight = document.querySelector("#buttonHeight");
buttonHeight.innerText = "Choose Height";

buttonHeight.addEventListener("click", heightTest);


// Health button
async function healthButton() {
    if (pHealth === cHealth) {
        draw++;
            alert("It's a draw!");
            } else {
                if (pHealth > cHealth) {
                    win++;
                    alert(`
                                    You win! 
                    Your ${pokeName} beat their ${cPokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                } else {
                    loss++;
                    alert(`
                                    You lose! 
                    Their ${cPokeName} beat your ${pokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                }
            }
            let rHeight = document.querySelector(".cHeight")
            rHeight.innerText = cHeight;
            let rHealth = document.querySelector(".cHealth")
            rHealth.innerText = cHealth;
            let rAttack = document.querySelector(".cAttack")
            rAttack.innerText = cAttack;
            let rDefense = document.querySelector(".cDefense")
            rDefense.innerText = cDefense;
            let rSpeed = document.querySelector(".cSpeed")
            rSpeed.innerText = cSpeed;
}


let buttonHealth = document.querySelector("#buttonHealth");
buttonHealth.innerText = "Choose HP";

buttonHealth.addEventListener("click", healthButton);

// Attack button
async function attackButton() {
    if (pAttack === cAttack) {
        draw++;
            alert("It's a draw!");
            } else {
                if (pAttack > cAttack) {
                    win++;
                    alert(`
                                    You win! 
                    Your ${pokeName} beat their ${cPokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                } else {
                    loss++;
                    alert(`
                                    You lose! 
                    Their ${cPokeName} beat your ${pokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                }
            }
            let rHeight = document.querySelector(".cHeight")
            rHeight.innerText = cHeight;
            let rHealth = document.querySelector(".cHealth")
            rHealth.innerText = cHealth;
            let rAttack = document.querySelector(".cAttack")
            rAttack.innerText = cAttack;
            let rDefense = document.querySelector(".cDefense")
            rDefense.innerText = cDefense;
            let rSpeed = document.querySelector(".cSpeed")
            rSpeed.innerText = cSpeed;
}


let buttonAttack = document.querySelector("#buttonAttack");
buttonAttack.innerText = "Choose Attack";

buttonAttack.addEventListener("click", attackButton);

// Defense button
async function defenseButton() {
    if (pDefense === cDefense) {
        draw++;
            alert("It's a draw!");
            } else {
                if (pDefense > cDefense) {
                    win++;
                    alert(`
                                    You win! 
                    Your ${pokeName} beat their ${cPokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                } else {
                    loss++;
                    alert(`
                                    You lose! 
                    Their ${cPokeName} beat your ${pokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                }
            }
            let rHeight = document.querySelector(".cHeight")
            rHeight.innerText = cHeight;
            let rHealth = document.querySelector(".cHealth")
            rHealth.innerText = cHealth;
            let rAttack = document.querySelector(".cAttack")
            rAttack.innerText = cAttack;
            let rDefense = document.querySelector(".cDefense")
            rDefense.innerText = cDefense;
            let rSpeed = document.querySelector(".cSpeed")
            rSpeed.innerText = cSpeed;
}


let buttonDefense = document.querySelector("#buttonDefense");
buttonDefense.innerText = "Choose Defense";

buttonDefense.addEventListener("click", defenseButton);

// Defense button
async function speedButton() {
    if (pSpeed === cSpeed) {
        draw++;
            alert("It's a draw!");
            } else {
                if (pSpeed > cDefense) {
                    win++;
                    alert(`
                                    You win! 
                    Your ${pokeName} beat their ${cPokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                } else {
                    loss++;
                    alert(`
                                    You lose! 
                    Their ${cPokeName} beat your ${pokeName}.
                    Wins: ${win} Losses: ${loss} Draws: ${draw}`);
                }
            }
            let rHeight = document.querySelector(".cHeight")
            rHeight.innerText = cHeight;
            let rHealth = document.querySelector(".cHealth")
            rHealth.innerText = cHealth;
            let rAttack = document.querySelector(".cAttack")
            rAttack.innerText = cAttack;
            let rDefense = document.querySelector(".cDefense")
            rDefense.innerText = cDefense;
            let rSpeed = document.querySelector(".cSpeed")
            rSpeed.innerText = cSpeed;
}


let buttonSpeed = document.querySelector("#buttonSpeed");
buttonSpeed.innerText = "Choose Speed";

buttonSpeed.addEventListener("click", speedButton);



// top of card - name, type
// height, attack, health, 


// 2nd plan
// create a computer that also has a card
// give the user a choice of heigth, hp, attack, def, speed
// if user has higher or lower than computer win or lose