
/*FUNCTIONS*/

//Phase tracker function
function phase_tracker() {
    //Start of budget phase
    if (budget_phase == true) {
        //Reveal the budget buttons
        budget_buttons.style.display = "flex";
        //Slow the budget buttons to fade in
        budget_buttons.style.opacity = "0";
        budget_buttons.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => budget_buttons.style.opacity = "1", 10);
    }
    //End of budget phase
    if (budget_phase == false) {
        //Hide the budget buttons
        budget_buttons.style.opacity = "0";
        setTimeout(() => {
            budget_buttons.style.display = "none";
            //Hide the budget table
            budget_table.style.display = "none";
        }, 500);
        //When scoreCount reaches 3 reveal the attribute buttons and hide the attribute description and attribute_picks_text
        if (scoreCount >= 1) {
            attribute_buttons.style.display = "flex";
            attribute_buttons.style.opacity = "1";
            attribute_buttons.style.transition = "opacity 0.5s ease-in-out";
            setTimeout(() => attribute_buttons.style.opacity = "1", 10);
        }
    }
    //If attribute_phase is true and scoreCount is greater than or equal to 1 do the following
    if (attribute_phase == true && scoreCount >= 1) {
        //Hide attribute_description and attribute_picks_text
        attribute_description.style.display = "none";
        attribute_picks_text.style.display = "none";
    }
    //Start of attribute phase
    if (attribute_phase == true && scoreCount == 0) {
        //Reveal attributes, attribute_description and attribute_picks
        attributes.style.display = "flex";
        attribute_description.style.display = "flex";
        attribute_picks.style.display = "flex";
        attribute_picks_table.style.display = "flex";
        attribute_picks_text.style.display = "flex";
        //Slow attributes, attribute_description, attribute_descriptions, and attribute_picks fade in
        attributes.style.opacity = "0";
        attribute_description.style.opacity = "0";
        attribute_picks.style.opacity = "0";
        attribute_picks_table.style.opacity = "0";
        attribute_picks_text.style.opacity = "0";
        attributes.style.transition = "opacity 0.5s ease-in-out";
        attribute_description.style.transition = "opacity 0.5s ease-in-out";
        attribute_picks.style.transition = "opacity 0.5s ease-in-out";
        attribute_picks_table.style.transition = "opacity 0.5s ease-in-out";
        attribute_picks_text.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => {
            attributes.style.opacity = "1";
            attribute_description.style.opacity = "1";
            attribute_picks.style.opacity = "1";
            attribute_picks_table.style.opacity = "1";
            attribute_picks_text.style.opacity = "1";
        }, 10);
    }
    //End of attribute phase
    if (attribute_phase == false) {
        //Hide attributes, attribute_description, attribute_descriptions and attribute_picks
        attributes.style.display = "none";
        attribute_description.style.display = "none";
        attribute_descriptions.style.display = "none";
        attribute_picks.style.display = "none";
    }
    //Start of ability phase
    if (ability_phase == true) {
        //Reveal attributes and attribute_scores and health
        stats.style.display = "flex";
        attributes.style.display = "flex";
        attribute_scores.style.display = "flex";
        health.style.display = "flex";
        abilities.style.display = "flex";
        tags.style.display = "flex";
        //Slow attributes, attribute_scores, and health fade in
        stats.style.opacity = "0";
        attributes.style.opacity = "0";
        attribute_scores.style.opacity = "0";
        health.style.opacity = "0";
        abilities.style.opacity = "0";
        tags.style.opacity = "0";
        attributes.style.transition = "opacity 0.5s ease-in-out";
        attribute_scores.style.transition = "opacity 0.5s ease-in-out";
        health.style.transition = "opacity 0.5s ease-in-out";
        abilities.style.transition = "opacity 0.5s ease-in-out";
        tags.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => {
            stats.style.opacity = "1";
            attributes.style.opacity = "1";
            attribute_scores.style.opacity = "1";
            health.style.opacity = "1";
            abilities.style.opacity = "1";
            tags.style.opacity = "1";
        }, 10);
        //Hide attribute_buttons
        attribute_buttons.style.opacity = "0";
        setTimeout(() => {
            attribute_buttons.style.display = "none";
        }, 500);
        //Get abilities
        makeAbilityCards();
        makeTagCards();
    }
    //End of ability phase
    if (ability_phase == false) {
        //Hide attributes, attribute_scores, and health
        health.style.display = "none";
        abilities.style.display = "none";
        tags.style.display = "none";
    }
    //Disable cancel buttons during attribute phase until scoreCount >= 3
    document.querySelectorAll(".cancel_button").forEach(function (button) {
        if (attribute_phase == true && scoreCount < 3) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
    //Log current phase
    if (budget_phase == true) {
        console.log("Current Phase: Budget");
    }
    if (attribute_phase == true) {
        console.log("Current Phase: Attributes");
    }
    if (ability_phase == true) {
        console.log("Current Phase: Abilities");
    }
}

//Handle select elements function
function handleSelectElements(selectElements, scoreOptions) {
    //Log function call
    console.log("Updating select elements");
    //Loop through select elements
    selectElements.forEach(function (select) {
        //Loop through score options
        scoreOptions.forEach(function (scoreOption) {
            //Create option
            const option = document.createElement("option");
            //Set option value and text
            option.value = scoreOption.score;
            option.textContent = scoreOption.score;
            select.appendChild(option);
        });
    });
}

//Reset choices function
function resetChoices() {
    //Reset budget phase
    if (budget_phase == true) {
        //Hide budget_buttons
        budget_buttons.style.opacity = "0";
        setTimeout(() => {
            budget_buttons.style.display = "none";
        }, 500);
    }
    //Reset attribute phase
    if (attribute_phase == true) {
        //Hide attribute_buttons
        attribute_buttons.style.opacity = "0";
        setTimeout(() => {
            attribute_buttons.style.display = "none";
        }, 500);
        //Reset attribute_values
        attribute_values.forEach(function (attribute_value) {
            attribute_value.value = 0;
        });
        //Reset int_pick, will_pick, phy_pick
        intPick.textContent = "";
        willPick.textContent = "";
        phyPick.textContent = "";
        //Reset scoreCount
        scoreCount = 0;
        //Update and call phase_tracker
        phase_tracker();
        //Re-enable the select elements
        attribute_select.forEach(function (select) {
            select.disabled = false;
        });
        //Call handleSelectElements
        handleSelectElements(attribute_select, scoreOptions);
    }
    //Reset ability phase
    if (ability_phase == true) {
        //Hide health
        health.style.opacity = "0";
        setTimeout(() => {
            health.style.display = "none";
        }, 500);
    }
}

//Get stats function
function getStats() {
    //If ability_phase is true and scoreCount is 3 do the following
    if (ability_phase == true && scoreCount == 3) {
        //Get stats for defenses    
        witsScore.textContent = Math.ceil((attribute_values[0].value) / 2);
        sprScore.textContent = Math.ceil((attribute_values[1].value) / 2);
        refScore.textContent = Math.ceil((attribute_values[2].value) / 2);
        //Get stats for action
        action_score.textContent = attribute_values[0].value + attribute_values[2].value;
    }
}

//This function generates the ability cards
function makeAbilityCards() {
    //Clear existing ability cards
    abilityWrapper.innerHTML = "";
    //Loop through abilityList and create ability cards
    abilityList.forEach(function (ability) {
        //Create ability card *
        let abilityCard = document.createElement("div");
        abilityCard.className = "ability_card";
        //Create ability name
        let abilityName = document.createElement("h3");
        abilityName.textContent = ability.name;
        //Create ability description
        let abilityDescription = document.createElement("p");
        abilityDescription.textContent = ability.description;
        //Append ability name to ability card
        abilityCard.appendChild(abilityName);
        //If an ability is a power type **
        if (ability.power == true) {
            //Create power label
            let abilityPower = document.createElement("p");
            abilityPower.textContent = "Power";
            //Append power label to ability card
            abilityCard.appendChild(abilityPower);
        }
        //Append ability description to ability card
        abilityCard.appendChild(abilityDescription);
        //If an ability has a damage array ***
        if (ability.damage.length > 0) {
            //Create damage table
            let damageTable = document.createElement("div");
            damageTable.className = "card_table";
            //Create damage row
            let damageRow = document.createElement("div");
            damageRow.className = "row";
            //Create damage header cell
            let damageHeader = document.createElement("div");
            damageHeader.className = "card_cell";
            damageHeader.textContent = "Damage: ";
            //Append ability damage header cell to ability damage column
            damageRow.appendChild(damageHeader);
            //Append ability damage row to ability damage table
            damageTable.appendChild(damageRow);
            //Loop through ability.damage array
            ability.damage.forEach(function (damage) {
                //Create ability damage cell
                let damageCell = document.createElement("div");
                damageCell.className = "card_cell";
                damageCell.textContent = damage.name.charAt(0).toUpperCase() + damage.name.slice(1).toLowerCase();
                //Append ability damage column to ability damage table
                damageTable.appendChild(damageRow);
                //Append ability damage cell to ability damage column
                damageRow.appendChild(damageCell);
                //Append ability damage table to ability card
                abilityCard.appendChild(damageTable);
            });
        }
        //If an ability.outcome.length > 0 ****
        if (ability.outcome && ability.outcome.length > 0) {
            //Create ability outcome
            let abilityOutcome = document.createElement("p");
            abilityOutcome.innerHTML = ability.outcome;
            //Append ability outcome to ability card
            abilityCard.appendChild(abilityOutcome);
        }
        //If an ability.upgrades is not empty ******
        if (ability.upgrades.length > 0) {
            //Create upgrade table
            let upgradeTable = document.createElement("div");
            upgradeTable.className = "card_table";
            //Create ability upgrades row
            let column3 = document.createElement("div");
            column3.className = "card_row";
            //Create upgrade header cells
            let cell0 = document.createElement("div");
            cell0.className = "card_cell";
            cell0.textContent = "Upgrade: ";
            //Create ability upgrades cells
            let cell1 = document.createElement("div");
            cell1.className = "card_cell";
            cell1.textContent = ability.upgrades[0];
            //Create ability pool cells
            let cell2 = document.createElement("div");
            cell2.className = "card_cell";
            cell2.textContent = ability.upgrades[1];
            //Create ability cost cells
            let cell3 = document.createElement("div");
            cell3.className = "card_cell";
            cell3.textContent = ability.upgrades[2];
            //Append ability upgrades cells to ability upgrades column
            column3.appendChild(cell0);
            column3.appendChild(cell1);
            column3.appendChild(cell2);
            column3.appendChild(cell3);
            //Append ability upgrades column to ability grade table
            upgradeTable.appendChild(column3);
            //Append upgrade table to ability card
            abilityCard.appendChild(upgradeTable);
        }
        if (ability.table.length > 0) {
            //Create table div
            let tableDiv = document.createElement("div");
            tableDiv.className = "card_table";
            //Create header column using keys of the first table row
            let headerCol = document.createElement("div");
            headerCol.className = "col";
            //Get the keys of the first table row
            let keys = Object.keys(ability.table[1]);
            //Loop through the keys and create header cells
            keys.forEach(key => {
                let cell = document.createElement("div");
                cell.className = "card_cell";
                // Capitalize the key for the header
                cell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                headerCol.appendChild(cell);
            });
            tableDiv.appendChild(headerCol);
            //Loop through ability.table array to create data columns
            ability.table.forEach(function (tableRow) {
                let dataCol = document.createElement("div");
                dataCol.className = "col";
                keys.forEach(key => {
                    let cell = document.createElement("div");
                    cell.className = "card_cell";
                    cell.textContent = tableRow[key];
                    dataCol.appendChild(cell);
                });
                tableDiv.appendChild(dataCol);
            });
            //Append table to ability card
            abilityCard.appendChild(tableDiv);
        }
        //Create ability grade table *****
        let tierTable = document.createElement("div");
        tierTable.className = "card_table";
        //Create ability grade header column
        let column1 = document.createElement("div");
        column1.className = "col";
        //Create ability grade header cells
        let cell1 = document.createElement("div");
        cell1.className = "card_cell";
        cell1.textContent = abilityTier[0].grade;
        //Create ability pool header cell
        let cell2 = document.createElement("div");
        cell2.className = "card_cell";
        cell2.textContent = abilityTier[0].pool;
        //Create ability cost header cell
        let cell3 = document.createElement("div");
        cell3.className = "card_cell";
        cell3.textContent = abilityTier[0].cost;
        //Append ability grade header cells to ability grade header column
        column1.appendChild(cell1);
        column1.appendChild(cell2);
        column1.appendChild(cell3);
        //Append ability grade header column to ability grade table
        tierTable.appendChild(column1);
        //Loop through abilityTier and create ability grade table elements
        abilityTier.forEach(function (tier) {
            //If an ability.tier is equal to the current tier
            if (ability.tier == tier.tier) {
                //Create ability grade column
                let column2 = document.createElement("div");
                column2.className = "col";
                //Create ability grade cells
                let cell1 = document.createElement("div");
                cell1.className = "card_cell";
                cell1.textContent = tier.grade;
                //Create ability pool cells
                let cell2 = document.createElement("div");
                cell2.className = "card_cell";
                cell2.textContent = tier.pool;
                //Create ability cost cells
                let cell3 = document.createElement("div");
                cell3.className = "card_cell";
                cell3.textContent = tier.cost;
                //Append ability grade cells to ability grade column
                column2.appendChild(cell1);
                column2.appendChild(cell2);
                column2.appendChild(cell3);
                //Append ability grade column to ability grade table
                tierTable.appendChild(column2);
            }
        });
        //Append ability grade table to ability card
        abilityCard.appendChild(tierTable);

        //Append ability grade table to ability card
        abilityCard.appendChild(tierTable);
        //If ability.table is not empty *******

        //If an ability.tags is not empty ********
        if (ability.tags.length >= 1) {
            //Create tags table
            let tagsTable = document.createElement("div");
            tagsTable.className = "card_table";
            //Create ability tags column
            let tagsRow = document.createElement("div");
            tagsRow.className = "card_row";
            //Create tags header cells
            let tagsCell = document.createElement("div");
            tagsCell.className = "card_cell";
            tagsCell.textContent = "Tags: ";
            //Append ability tags cells to ability tags column
            tagsRow.appendChild(tagsCell);
            tagList.forEach(function (tag) {
                //If the ability has the tag
                const foundTag = ability.tags.find(t => t.toUpperCase() === tag.name.toUpperCase());
                if (foundTag) {
                    //Create a tag cell
                    let cell = document.createElement("div");
                    cell.className = "card_cell";
                    cell.textContent = foundTag;
                    //Append tag cell to ability tags column
                    tagsRow.appendChild(cell);
                }
            });
            //Append ability tags column to ability grade table
            tagsTable.appendChild(tagsRow);
            //Append tags table to ability card
            abilityCard.appendChild(tagsTable);
        }

        //Append ability card to ability wrapper
        abilityWrapper.appendChild(abilityCard);
    });
}

function makeTagCards() {
    tagWrapper.innerHTML = "";
    tagList.forEach(function (tag) {
        //Create tag card *
        let tagCard = document.createElement("div");
        tagCard.className = "tag_card";
        //Create tag header
        let tagHeader = document.createElement("h3");
        tagHeader.className = "tag_header";
        tagHeader.textContent = tag.name;
        //Append tag header to tag card
        tagCard.appendChild(tagHeader);
        //Create tag row **
        let tagRow = document.createElement("div");
        tagRow.className = "card_row";
        //Create Add to cell ***
        let tagCell1 = document.createElement("div");
        tagCell1.className = "card_cell";
        tagCell1.textContent = "Add to: ";
        //Create tag description
        let tagDescription = document.createElement("p");
        tagDescription.className = "tag_description";
        tagDescription.textContent = tag.description;
        //Create tag table ****
        let tagTable = document.createElement("div");
        tagTable.className = "card_table";
        //Append Add to cell to tag row
        tagRow.appendChild(tagCell1);
        //Append tag row to tag table
        tagTable.appendChild(tagRow);
        //Iterate through tagList.addTo
        tag.addTo.forEach(function (addTo) {
            //Create addTo row *****
            let tagCell2 = document.createElement("div");
            tagCell2.className = "card_cell";
            tagCell2.textContent = addTo;
            //Append addTo cells to addTo row
            tagRow.appendChild(tagCell2);
            tagTable.appendChild(tagRow);
        });
        //Append addTo table to tag card
        tagCard.appendChild(tagTable);
        //Append tag description to tag card
        tagCard.appendChild(tagDescription);
        //If the tag has senseTypes, build a separate table and append beneath description
        if (tag.senseTypes && tag.senseTypes.length >= 1) {
            //Create senseTypes table
            let senseTypesTable = document.createElement("div");
            senseTypesTable.className = "card_table";
            //Create senseTypes row
            let senseTypesRow = document.createElement("div");
            senseTypesRow.className = "card_row";
            //Create senseTypes label cell
            let senseTypesCell = document.createElement("div");
            senseTypesCell.className = "card_cell";
            senseTypesCell.textContent = "Sense Types: ";
            //Append label cell to senseTypes row
            senseTypesRow.appendChild(senseTypesCell);
            tag.senseTypes.forEach(function (senseType) {
                //Create a cell for each sense type
                let senseTypeCell = document.createElement("div");
                senseTypeCell.className = "card_cell";
                senseTypeCell.textContent = senseType.name;
                senseTypesRow.appendChild(senseTypeCell);
            });
            //Append the completed row to the senseTypes table
            senseTypesTable.appendChild(senseTypesRow);
            //Append senseTypes table beneath the description
            tagCard.appendChild(senseTypesTable);
        }
        //Append tag card to tag wrapper
        tagWrapper.appendChild(tagCard);
    });
}

/*VARIABLES */

//Phase Trackers
let budget_phase = false;
let attribute_phase = false;
let ability_phase = false;

//DOM Elements
const budget_buttons = document.getElementById("budget_buttons");
budget_buttons.style.display = "none";

const attribute_buttons = document.getElementById("attribute_buttons");
attribute_buttons.style.display = "none";

const stats = document.getElementById("stats");
stats.style.display = "none";

const attributes = document.getElementById("attributes");
attributes.style.display = "none";

const attribute_scores = document.getElementById("attribute_scores");
attribute_scores.style.display = "none";

const attribute_descriptions = document.getElementById("attribute_descriptions");
attribute_descriptions.style.display = "none";

const attribute_description = document.getElementById("attribute_description");
attribute_description.style.display = "none";

const attribute_picks = document.getElementById("attribute_picks");
attribute_picks.style.display = "none";

const attribute_picks_table = document.getElementById("attribute_picks_table");
attribute_picks_table.style.display = "none";

const attribute_picks_text = document.getElementById("attribute_picks_text");

const health = document.getElementById("health");
health.style.display = "none";

const abilities = document.getElementById("abilities");
abilities.style.display = "none";

const tags = document.getElementById("tags");
tags.style.display = "none";

const chosen_budget = document.getElementById("chosen_budget");

const interface_text = document.getElementById("interface_text");

const intScore = document.getElementById("chosen_intelligence");
const willScore = document.getElementById("chosen_will");
const phyScore = document.getElementById("chosen_physical");

const intPick = document.getElementById("int_pick");
const willPick = document.getElementById("will_pick");
const phyPick = document.getElementById("phy_pick");

const refScore = document.getElementById("ref_score");
const sprScore = document.getElementById("spr_score");
const witsScore = document.getElementById("wits_score");
const action_score = document.getElementById("action_score");

const abilityWrapper = document.getElementById("ability_wrapper");
const tagWrapper = document.getElementById("tag_wrapper");

//Budget Tracker Variable
let current_budget = 0;

//Score Count
let scoreCount = 0;

//Attribute Values
//Array to store the attribute values
let attribute_values = [
    {
        attribute: "int_select",
        value: 0
    },
    {
        attribute: "will_select",
        value: 0
    },
    {
        attribute: "phy_select",
        value: 0
    }
];

//ATTRIBUTE SELECT

//Get all elements with the class "attribute_select"    
const attribute_select = document.querySelectorAll(".attribute_select");
//Add event listener to each element of the attribute select class
attribute_select.forEach(function (select) {
    select.addEventListener('change', function () {
        //Iterate through the attribute_values array
        attribute_values.forEach(function (attribute_value) {
            //If attribute_value.attribute matches the select.id
            if (attribute_value.attribute === select.id) {
                //Update the Attribute scores
                if (select.id === "int_select") {
                    console.log('select id is ', select.id, 'select value is ', select.value);
                    intScore.textContent = select.value;
                    intPick.textContent = "INT: " + select.value;
                }
                if (select.id === "will_select") {
                    console.log('select id is ', select.id, 'select value is ', select.value);
                    willScore.textContent = select.value;
                    willPick.textContent = "WILL: " + select.value;
                }
                if (select.id === "phy_select") {
                    console.log('select id is ', select.id, 'select value is ', select.value);
                    phyScore.textContent = select.value;
                    phyPick.textContent = "PHY: " + select.value;
                }
                //Update the attribute_values array
                attribute_values[0].value = Number(intScore.textContent);
                attribute_values[1].value = Number(willScore.textContent);
                attribute_values[2].value = Number(phyScore.textContent);
                //Increment the scoreCount
                scoreCount++;
                //If scoreCount is greater than 0 reveal the attribute buttons
                if (scoreCount > 0) {
                    attribute_buttons.style.display = "flex";
                }
                //Call the phase_tracker function
                phase_tracker();
                //Get the selected value to remove it from the other select elements
                const getOption = select.value;
                //Disable the select dropdown for the chosen attribute
                select.disabled = true;
                //Get all options that match getOption across the page
                document.querySelectorAll(`option[value="${getOption}"]`)
                    //Remove that option from all selects
                    .forEach(option => option.remove());
            }
        });
    });
});

//CONFIRM BUTTON

//Get all elements with the class "confirm_button"
const confirm = document.querySelectorAll(".confirm_button");
//Add event listener to each element of the confirm class
confirm.forEach(function (button) {
    button.addEventListener('click', function () {
        if (budget_phase == true && scoreCount == 0) {
            //Update the interface text to show the current budget 
            interface_text.textContent = "Current Budget: " + current_budget + " points.";
            //Update and call phase_tracker
            budget_phase = false;
            attribute_phase = true;
            phase_tracker();
            //Call handleSelectElements
            handleSelectElements(attribute_select, scoreOptions);
        }
        //If attribute_phase is true and scoreCount is 3 do the following
        if (attribute_phase == true && scoreCount == 3) {
            //Update and call phase_tracker
            attribute_phase = false;
            ability_phase = true;
            phase_tracker();
            //Call getStats
            getStats();
        }
    });
});

//CANCEL BUTTON

//Get all elements with the class "cancel_button"
const cancel = document.querySelectorAll(".cancel_button");
//Add event listener to each element of the cancel class
cancel.forEach(function (button) {
    button.addEventListener('click', function () {
        //Call resetChoices
        resetChoices();
    });
});

//BUDGET OPTION BUTTON

//Select all elements with the class "budgetOption"
const options = document.querySelectorAll('.budgetOption');
//Iterate over the NodeList and add an event listener to each element
options.forEach(function (option) {
    option.addEventListener('click', function (event) {
        //Update the UI based on the selected budget option
        let key = event.target.textContent;
        for (i = 0; i < budgetOptions.length; i++) {
            if (key == budgetOptions[i].budget) {
                //Call phase_tracker
                budget_phase = true;
                phase_tracker();
                //Update the chosen budget
                chosen_budget.textContent = budgetOptions[i].budget;
                current_budget = budgetOptions[i].budget;
            }
        }
    });
});

//Get the more info button
const more_info = document.getElementById("more_info");
//Add event listener to the more info button
more_info.addEventListener('click', function () {
    //If the attribute descriptions are displayed
    if (attribute_descriptions.style.display === "flex") {
        //Change the text to "More info"
        more_info.textContent = "More info"
        //Change the display of the attribute descriptions
        attribute_descriptions.style.display = "none";
    }
    //If the attribute descriptions are not displayed
    else if (attribute_descriptions.style.display === "none") {
        //Change the text to "Show less"
        more_info.textContent = "Show less"
        //Change the display of the attribute descriptions
        attribute_descriptions.style.display = "flex";
    }
});


