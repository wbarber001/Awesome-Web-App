
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
        ability_menu_nav.style.display = "flex";
        abilities.style.display = "flex";
        //Slow attributes, attribute_scores, and health fade in
        stats.style.opacity = "0";
        attributes.style.opacity = "0";
        attribute_scores.style.opacity = "0";
        health.style.opacity = "0";
        ability_menu_nav.style.opacity = "0";
        abilities.style.opacity = "0";
        attributes.style.transition = "opacity 0.5s ease-in-out";
        attribute_scores.style.transition = "opacity 0.5s ease-in-out";
        health.style.transition = "opacity 0.5s ease-in-out";
        ability_menu_nav.style.transition = "opacity 0.5s ease-in-out";
        abilities.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => {
            stats.style.opacity = "1";
            attributes.style.opacity = "1";
            attribute_scores.style.opacity = "1";
            health.style.opacity = "1";
            ability_menu_nav.style.opacity = "1";
            abilities.style.opacity = "1";
        }, 10);
        //Hide attribute_buttons
        attribute_buttons.style.opacity = "0";
        setTimeout(() => {
            attribute_buttons.style.display = "none";
        }, 500);
        //Generate menu,ability cards and tag cards
        makeAbilityMenu();
        makeAbilityCards();
    }
    //End of ability phase
    if (character_phase == true) {
        //Clear ability_wrapper
        document.getElementById("ability_wrapper").innerHTML = "";
        //Hide budget_header
        const budget_head = document.getElementById("budget_head");
        budget_head.style.display = "none";
        //Hide budget_text
        budget_text.style.display = "none";
        //Hide ability_menu_nav
        ability_menu_nav.style.display = "none";
        //Hide ability_cart
        ability_cart.style.display = "none";
        //Hide attribute buttons
        attribute_buttons.style.display = "none";
        //Reveal name_input
        name_input.style.display = "flex";
        //Get the name
        let name = document.getElementById("character_name").value;
        if (name.length == 0) {
            name = "Enter Name";
        }
        //Add an event listerner to name_input
        name_input.addEventListener("change", function () {
            name = document.getElementById("character_name").value;
            //Get the attributes
            const attributes = {
                intelligence: intScore.textContent,
                will: willScore.textContent,
                physical: phyScore.textContent
            }
            //Get the stats (read after getStats() updates the DOM)
            const stats = {
                ref: refScore.textContent,
                spr: sprScore.textContent,
                wits: witsScore.textContent,
                action: actionScore.textContent
            }
            //Get the ability cart
            const characterAbilities = abilityCart;
            //New Character
            const newCharacter = new Character(name, current_budget, attributes, stats, characterAbilities);
            //Log the new character
            console.log(newCharacter);
            //Show abilityCart in ability_wrapper
            const abilityWrapperEl = document.getElementById("ability_wrapper");
            abilityWrapperEl.innerHTML = "";
            abilityCart.forEach(function (ability) {
                const abilityCard = document.createElement("div");
                abilityCard.classList.add("item_wrapper");

                const abilityRow = document.createElement("div");
                abilityRow.classList.add("row");

                const abilityName = document.createElement("div");
                abilityName.classList.add("item_name");
                abilityName.textContent = ability.name;

                const abilityGrade = document.createElement("div");
                abilityGrade.classList.add("item_grade");
                abilityGrade.textContent = "Grade: " + ability.grade;

                const abilityPool = document.createElement("div");
                abilityPool.classList.add("ability_cart_pool");
                abilityPool.textContent = "Pool: " + ability.pool;

                abilityRow.appendChild(abilityName);
                abilityRow.appendChild(abilityGrade);
                abilityRow.appendChild(abilityPool);
                abilityCard.appendChild(abilityRow);

                if (ability.tags && ability.tags.length > 0) {
                    const tagsContainer = document.createElement("div");
                    tagsContainer.classList.add("tags");
                    ability.tags.forEach(tag => {
                        const tagSpan = document.createElement("div");
                        tagSpan.classList.add("tag");
                        tagSpan.textContent = tag.name;
                        tagsContainer.appendChild(tagSpan);
                    });
                    abilityCard.appendChild(tagsContainer);
                }

                abilityWrapperEl.appendChild(abilityCard);
            });
        });
    }
    //Disable cancel buttons during attribute phase until scoreCount >= 3
    document.querySelectorAll(".cancel_button").forEach(function (button) {
        if (attribute_phase == true && scoreCount < 3) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
}

//This function sets the options for the select elements
function handleSelectElements(selectElements, scoreOptions) {
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

//This function gets the character's defense and action stats
function getStats() {
    //If ability_phase is true and scoreCount is 3 do the following
    if (ability_phase == true && scoreCount == 3) {
        //Get stats for defenses    
        witsScore.textContent = Math.ceil((attribute_values[0].value) / 2);
        sprScore.textContent = Math.ceil((attribute_values[1].value) / 2);
        refScore.textContent = Math.ceil((attribute_values[2].value) / 2);
        //Get stats for action
        actionScore.textContent = attribute_values[0].value + attribute_values[2].value;
    }
    //If ability_phase is true and ability_cart_list has children
    if (ability_phase == true && document.getElementById("ability_cart_list").children.length > 0) {
        const defenseUpgrades = [];
        const actionUpgrades = [];
        //Loop through abilityCart and look up upgrades from abilityList
        abilityCart.forEach(function (cartAbility) {
            //Find the matching ability in abilityList
            const listAbility = abilityList.find(a => a.name === cartAbility.name);
            if (!listAbility || listAbility.upgrades.length === 0) return;
            //Get the grade key (d, c, b, a, s) from the cart ability's grade
            const gradeKey = cartAbility.grade.toLowerCase();
            //Loop through the upgrades
            listAbility.upgrades.forEach(function (upgrade) {
                //Get the upgrade value for this grade
                const upgradeValue = upgrade[gradeKey] || 0;
                if (upgrade.type === "Reflex" || upgrade.type === "Spirit" || upgrade.type === "Wits") {
                    defenseUpgrades.push({ type: upgrade.type, value: upgradeValue });
                }
                if (upgrade.type === "Action") {
                    actionUpgrades.push({ type: upgrade.type, value: upgradeValue });
                }
            });
        });
        //Add defense upgrades to defense stats
        defenseUpgrades.forEach(function (upgrade) {
            if (upgrade.type === "Reflex") {
                refScore.textContent = parseInt(refScore.textContent) + upgrade.value;
            }
            if (upgrade.type === "Spirit") {
                sprScore.textContent = parseInt(sprScore.textContent) + upgrade.value;
            }
            if (upgrade.type === "Wits") {
                witsScore.textContent = parseInt(witsScore.textContent) + upgrade.value;
            }
        });
        //Add action upgrades to action stats
        actionUpgrades.forEach(function (upgrade) {
            actionScore.textContent = parseInt(actionScore.textContent) + upgrade.value;
        });
    }
}

//This function generates a menu to navigate Abilities and Tags
function makeAbilityMenu() {
    const abilityMenu = document.getElementById("ability_menu");
    //Clear existing menu
    abilityMenu.innerHTML = "";
    //Iterate through abilityList and create menu items
    abilityList.forEach(function (ability) {
        //Create menu item
        let abilityItem = document.createElement("li");
        abilityItem.className = "menuCell";
        abilityItem.innerHTML = ability.name.charAt(0).toUpperCase() + ability.name.slice(1).toLowerCase();
        //Append menu items to menu
        abilityMenu.appendChild(abilityItem);
    });
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
        abilityDescription.innerHTML = ability.description;
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
        if (ability.damage && ability.damage.length > 0) {
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
            //Create header row
            let headerRow = document.createElement("div");
            headerRow.className = "card_row";
            let headerCell = document.createElement("div");
            headerCell.className = "card_cell";
            headerCell.textContent = "Upgrades: ";
            headerRow.appendChild(headerCell);
            //Loop through each upgrade object and add its type as a cell
            ability.upgrades.forEach(function (upgrade) {
                let upgradeCell = document.createElement("div");
                upgradeCell.className = "card_cell";
                upgradeCell.textContent = upgrade.type;
                headerRow.appendChild(upgradeCell);
            });
            upgradeTable.appendChild(headerRow);
            //Append upgrade table to ability card
            abilityCard.appendChild(upgradeTable);
        }
        //If an ability.table is not empty ******
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

//This function generates the tag cards
function makeTagCards(tagName, targetTable) {
    //Get the ability card
    let abilityCard = targetTable.closest('.ability_card');
    //Get the existing tag card
    let existingTag = abilityCard.querySelector('.tag_card');
    //If the existing tag card is not empty
    if (existingTag) {
        let existingTitle = existingTag.querySelector("h3").textContent;
        existingTag.remove();
        if (existingTitle.toUpperCase() === tagName) return;
    }
    //Loop through tagList
    tagList.forEach(function (tag) {
        //If the tag name is equal to the tag name
        if (tag.name.toUpperCase() === tagName) {
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
            tagDescription.innerHTML = tag.description;
            //Create button row
            let tagButtonRow = document.createElement("div");
            tagButtonRow.className = "card_row";
            //Create tag card Add button
            let tagButton = document.createElement("button");
            tagButton.className = "add_button";
            tagButton.textContent = "Add";
            //Add event listener to tag card Add button
            tagButton.addEventListener("click", function (e) {
                let clickedTagCard = e.target.closest(".tag_card");
                let parentAbilityCard = e.target.closest(".ability_card");
                //Get the tag name and ability name
                let tagName = clickedTagCard.querySelector(".tag_header").textContent;
                let abilityName = parentAbilityCard.querySelector("h3").textContent;
                //Loop through abilityCart
                abilityCart.forEach(function (ability) {
                    //If the ability name is equal to the ability name
                    if (ability.name === abilityName) {
                        //If the tag is already in the ability's tags array, skip it
                        if (ability.tags.includes(tagName)) return;
                        //Check if doubling the cost would exceed the budget
                        let oldCost = parseInt(ability.cost);
                        let newCost = oldCost * 2;
                        if (total_cost - oldCost + newCost > current_budget) {
                            //Show the message panel
                            toggleMessage();
                            return;
                        }
                        //The first tag should not double the cost of a specific group of abilities
                        if (damageAbilities.includes(ability.name)) {
                            console.log(ability.name);
                            //If the number of the ability's tags that are damage tags is zero and the tag is a damage tag, do not double the cost
                            if (ability.tags.filter(tag => damageTags.includes(tag)).length === 0 && damageTags.includes(tagName)) {
                                newCost = oldCost;
                            }
                        }
                        if (ability.name === "IMPERVIOUS") {
                            // Map each grade to its max allowed tags
                            const imperviousTagLimits = { D: 1, C: 2, B: 3, A: 4, S: 5 };
                            const tagLimit = imperviousTagLimits[ability.grade] ?? 0;
                            // Block adding if already at the limit
                            if (ability.tags.length >= tagLimit) return;
                            // All tags within the grade's allowance are free (no cost doubling)
                            if (ability.tags.length < tagLimit) {
                                newCost = oldCost;
                            }
                        }
                        //Add the tag to the ability item in abilityCart
                        ability.tags.push(tagName);
                        //Double the ability's cost
                        ability.cost = newCost;
                        //Update total_cost
                        total_cost -= oldCost;
                        total_cost += newCost;
                        //Update the global cart cost display
                        cart_total.textContent = total_cost;
                        //Find the matching item_wrapper by ability name, then target its .tags div
                        let cartItems = document.querySelectorAll(".item_wrapper");
                        //Loop through cartItems
                        cartItems.forEach(function (item) {
                            //Get the ability cart name
                            let nameEl = item.querySelector(".item_name");
                            //If the ability cart name is equal to the ability name
                            if (nameEl && nameEl.textContent === abilityName) {
                                //Update the cost label in the cart row
                                let costEl = item.querySelector(".ability_cost");
                                if (costEl) costEl.textContent = "Cost: " + newCost;
                                //Get the tags div
                                let tagsDiv = item.querySelector(".tags");
                                //Create a tag
                                let tag = document.createElement("div");
                                tag.className = "tag";
                                tag.textContent = tagName.charAt(0).toUpperCase() + tagName.slice(1).toLowerCase();
                                tagsDiv.appendChild(tag);
                            }
                        });
                    }
                });
                console.log("Add:", tagName, "to:", abilityName);
            });
            //Create Remove button
            let tagButton2 = document.createElement("button");
            tagButton2.className = "remove_button";
            tagButton2.textContent = "Remove";
            //Add event listener to tag card Remove button
            tagButton2.addEventListener("click", function (e) {
                let clickedTagCard = e.target.closest(".tag_card");
                let parentAbilityCard = e.target.closest(".ability_card");
                //Get the tag name and ability name
                let tagName = clickedTagCard.querySelector(".tag_header").textContent;
                let abilityName = parentAbilityCard.querySelector("h3").textContent;
                //Loop through abilityCart
                abilityCart.forEach(function (ability) {
                    //If the ability name is equal to the ability name
                    if (ability.name === abilityName) {
                        //If the tag is not in the ability's tags array, skip it
                        if (!ability.tags.includes(tagName)) return;
                        //Remove the tag from the ability item in abilityCart
                        ability.tags = ability.tags.filter(tag => tag !== tagName);
                        let oldCost = parseInt(ability.cost);
                        let newCost = Math.floor(oldCost / 2);
                        //iterate through abilityTier for the matching tier and grade, if newCost is less than the cost in abilityTier, set newCost to the cost in abilityTier
                        abilityTier.forEach(function (tier) {
                            if (tier.tier === ability.tier && tier.grade === ability.grade) {
                                if (newCost < tier.cost) {
                                    newCost = tier.cost;
                                }
                            }
                        });
                        //Update the ability's cost
                        ability.cost = newCost;
                        //Update total_cost by subtracting only the difference
                        total_cost = total_cost - oldCost + newCost;
                        //Update the global cart cost display
                        cart_total.textContent = total_cost;
                        //Find the matching item_wrapper by ability name, then target its .tags div
                        let cartItems = document.querySelectorAll(".item_wrapper");
                        //Loop through cartItems
                        cartItems.forEach(function (item) {
                            //Get the ability cart name
                            let nameEl = item.querySelector(".item_name");
                            //If the ability cart name is equal to the ability name
                            if (nameEl && nameEl.textContent === abilityName) {
                                //Update the cost label in the cart row
                                let costEl = item.querySelector(".ability_cost");
                                if (costEl) costEl.textContent = "Cost: " + ability.cost;
                                //Get the tags div
                                let tagsDiv = item.querySelector(".tags");
                                //Remove the specific tag that matches tagName
                                tagsDiv.querySelectorAll(".tag").forEach(function (tagEl) {
                                    if (tagEl.textContent.toUpperCase() === tagName.toUpperCase()) {
                                        tagEl.remove();
                                    }
                                });
                            }
                        });
                    }
                });
                console.log("Remove:", tagName, "from:", abilityName);
            });
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
            //Append add button to button row
            tagButtonRow.appendChild(tagButton);
            tagButtonRow.appendChild(tagButton2);
            //Append button row to tag card
            tagCard.appendChild(tagButtonRow);
            //Append tag card beneath target table
            targetTable.parentNode.insertBefore(tagCard, targetTable.nextSibling);

            // Scroll the tag card into view
            const stickyTopHeight = document.getElementById("sticky_top").offsetHeight;
            const topPosition = tagCard.getBoundingClientRect().top + window.scrollY - stickyTopHeight;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    });
}

//Function to toggle the slim cart
function toggleSlimCart() {
    const cartText = document.getElementById("ability_cart_text");
    const collapseBtn = document.getElementById("collapse_cart");
    const DURATION = 500;

    if (slim_cart.style.display === "none") {
        // COLLAPSE: fade out list/buttons/text, then fade in slim cart
        //Update the item amount and total cost
        document.getElementById("item_amount").textContent = abilityCart.length;
        document.getElementById("total_cost").textContent = total_cost;
        collapseBtn.textContent = "Expand cart";

        //Fade out the list, buttons and text box
        ability_cart_list.style.transition = "opacity " + DURATION + "ms ease-in-out";
        ability_cart_buttons.style.transition = "opacity " + DURATION + "ms ease-in-out";
        cartText.style.transition = "opacity " + DURATION + "ms ease-in-out";
        ability_cart_list.style.opacity = "0";
        ability_cart_buttons.style.opacity = "0";
        cartText.style.opacity = "0";

        setTimeout(() => {
            ability_cart_list.style.display = "none";
            ability_cart_buttons.style.display = "none";
            cartText.style.display = "none";

            //Fade in slim cart
            slim_cart.style.transition = "opacity " + DURATION + "ms ease-in-out";
            slim_cart.style.opacity = "0";
            slim_cart.style.display = "flex";
            setTimeout(() => slim_cart.style.opacity = "1", 10);
        }, DURATION);

    } else {
        // EXPAND: fade out slim cart, then fade in list/buttons/text
        collapseBtn.textContent = "Collapse cart";

        slim_cart.style.transition = "opacity " + DURATION + "ms ease-in-out";
        slim_cart.style.opacity = "0";

        setTimeout(() => {
            slim_cart.style.display = "none";

            //Fade in list, buttons and text box
            ability_cart_list.style.transition = "opacity " + DURATION + "ms ease-in-out";
            ability_cart_buttons.style.transition = "opacity " + DURATION + "ms ease-in-out";
            cartText.style.transition = "opacity " + DURATION + "ms ease-in-out";
            ability_cart_list.style.opacity = "0";
            ability_cart_buttons.style.opacity = "0";
            cartText.style.opacity = "0";
            ability_cart_list.style.display = "flex";
            ability_cart_buttons.style.display = "flex";
            cartText.style.display = "";
            setTimeout(() => {
                ability_cart_list.style.opacity = "1";
                ability_cart_buttons.style.opacity = "1";
                cartText.style.opacity = "1";
            }, 10);
        }, DURATION);
    }
}

function toggleMessage() {
    const DURATION = 500;
    if (message.style.display == "none") {
        //Fade in message
        message.style.transition = "opacity " + DURATION + "ms ease-in-out";
        message.style.opacity = "0";
        message.style.display = "flex";
        setTimeout(() => message.style.opacity = "1", 10);
    } else {
        //Fade out message
        message.style.transition = "opacity " + DURATION + "ms ease-in-out";
        message.style.opacity = "0";
        setTimeout(() => message.style.display = "none", DURATION);
    }
}

//Ability constructor
function Ability(name, grade, cost, tags, tier) {
    this.name = name;
    this.grade = grade;
    this.cost = cost;
    this.tags = tags;
    this.tier = tier;
}

//Character constructor
function Character(name, budget, attributes, stats, abilities) {
    this.name = name;
    this.budget = budget;
    this.attributes = attributes;
    this.stats = stats;
    this.abilities = abilities;
}

/*VARIABLES */

//Phase Trackers
let budget_phase = false;
let attribute_phase = false;
let ability_phase = false;
let character_phase = false;

//Elements revealed during phases
const name_input = document.getElementById("name_input");
name_input.style.display = "none";

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

const ability_menu_nav = document.getElementById("ability_menu_nav");
ability_menu_nav.style.display = "none";

const message = document.getElementById("message");
message.style.display = "none";

const ability_cart = document.getElementById("ability_cart");
ability_cart.style.display = "none";

const ability_cart_list = document.getElementById("ability_cart_list");

const cart_total = document.getElementById("cart_total");

const slim_cart = document.getElementById("slim_cart");
slim_cart.style.display = "none";

//Elements revealed after budget confirmation
const chosen_budget = document.getElementById("chosen_budget");

const interface_text = document.getElementById("interface_text");

//Elements revealed after attribute confirmation
const intScore = document.getElementById("chosen_intelligence");
const willScore = document.getElementById("chosen_will");
const phyScore = document.getElementById("chosen_physical");

const intPick = document.getElementById("int_pick");
const willPick = document.getElementById("will_pick");
const phyPick = document.getElementById("phy_pick");

//Elements revealed after stats are calculated
const refScore = document.getElementById("ref_score");
const sprScore = document.getElementById("spr_score");
const witsScore = document.getElementById("wits_score");
const actionScore = document.getElementById("action_score");

//Elements revealed after stats are calculated
const abilityWrapper = document.getElementById("ability_wrapper");
const tagWrapper = document.getElementById("tag_wrapper");

//Budget Tracker Variable
let current_budget = 0;

//Score Count
let scoreCount = 0;

//Total cost of items currently in the ability cart
let total_cost = 0;

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

//Ability Cart
let abilityCart = [];

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
                    intScore.textContent = select.value;
                    intPick.textContent = "INT: " + select.value;
                }
                if (select.id === "will_select") {
                    willScore.textContent = select.value;
                    willPick.textContent = "WILL: " + select.value;
                }
                if (select.id === "phy_select") {
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
        //If ability_phase is true and ability_cart_list is not empty do the following
        if (ability_phase == true && ability_cart_list.children.length > 0) {
            //Iterate through the ability cart, if there are damageAbilities, ensure they each have at least 1 damage tag
            let needDamageTag = [];
            abilityCart.forEach(function (ability) {
                //Check if this cart ability is a damage ability or IMPERVIOUS (damageAbilities is an array of strings)
                if (damageAbilities.includes(ability.name) || ability.name === "IMPERVIOUS") {
                    //Check if the ability has at least one damage tag (damageTags is an array of strings)
                    const hasDamageTag = ability.tags.some(function (tag) {
                        return damageTags.includes(tag);
                    });
                    if (!hasDamageTag) {
                        needDamageTag.push(ability.name);
                    }
                }
            });
            //If any abilities are missing a damage tag, show the message and block phase transition
            if (needDamageTag.length > 0) {
                const message_text = document.getElementById("message_text");
                message_text.textContent = "You must add at least one damage tag to the following abilities: " + needDamageTag.join(", ");
                toggleMessage();
                return;
            }
            character_phase = true;
            ability_phase = false;
            phase_tracker();
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

//ATTRIBUTES MORE INFO BUTTON

//Get the more info button
const more_info = document.getElementById("more_info");
//Add event listener to the more info button
more_info.addEventListener('click', function () {
    //If the attribute descriptions are displayed
    if (attribute_descriptions.style.display === "flex") {
        //Fade out
        attribute_descriptions.style.opacity = "0";
        attribute_descriptions.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => {
            //Change the display of the attribute descriptions
            attribute_descriptions.style.display = "none";
            //Change the text to "More info"
            more_info.textContent = "More info";
        }, 500);
    }
    //If the attribute descriptions are not displayed
    else if (attribute_descriptions.style.display === "none") {
        //Change the text to "Show less"
        more_info.textContent = "Show less";
        //Fade in
        attribute_descriptions.style.display = "flex";
        attribute_descriptions.style.opacity = "0";
        attribute_descriptions.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => attribute_descriptions.style.opacity = "1", 10);
    }
});

//ABILITY MENU MORE INFO BUTTON

//Get the more info button
const show_less = document.getElementById("show_less");
//Add event listener to the more info button
show_less.addEventListener('click', function () {
    //If the attribute descriptions are displayed
    if (ability_menu_description.style.display === "flex" || ability_menu_description.style.display === "") {
        //Fade out
        ability_menu_description.style.opacity = "0";
        ability_menu_description.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => {
            //Change the display of the attribute descriptions
            ability_menu_description.style.display = "none";
            //Change the text to "More info"
            show_less.textContent = "Show more";
        }, 500);
    }
    //If the attribute descriptions are not displayed
    else if (ability_menu_description.style.display === "none") {
        //Change the text to "Show less"
        show_less.textContent = "Show less";
        //Fade in
        ability_menu_description.style.display = "flex";
        ability_menu_description.style.opacity = "0";
        ability_menu_description.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => ability_menu_description.style.opacity = "1", 10);
    }
});

//ABILITY MENU BUTTONS

//Add event listener to the ability menu container to handle dynamically created menu cells
document.getElementById("ability_menu").addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains("menuCell")) {
        let menuName = e.target.textContent.toUpperCase();
        console.log("Scrolling to:", menuName);
        // Find the ability card with the matching title
        let cards = document.querySelectorAll(".ability_card");
        cards.forEach(function (card) {
            //Get the title of the card
            let title = card.querySelector("h3");
            //If the title matches the menu name
            if (title && title.textContent.toUpperCase() === menuName) {
                //Get the height of the sticky top
                const stickyTopHeight = document.getElementById("sticky_top").offsetHeight;
                //Calculate the top position of the card
                const topPosition = card.getBoundingClientRect().top + window.scrollY - stickyTopHeight;
                //Scroll to the card
                window.scrollTo({ top: topPosition, behavior: "smooth" });
            }
        });
    }
});

//ABILITY CARD COST

//Add an event listener to the ability wrapper
document.getElementById("ability_wrapper").addEventListener('click', function (e) {
    let col = e.target.closest(".col");
    if (col) {
        let cells = col.querySelectorAll(".card_cell");
        // Tier table columns have exactly 3 cells: Grade, Pool, Cost
        if (cells.length === 3) {
            let abilityCard = col.closest(".ability_card");
            let abilityName = abilityCard ? abilityCard.querySelector("h3").textContent : "";
            //Get the grade and cost
            let grade = cells[0].textContent;
            let cost = cells[2].textContent;
            // Check if the actual cost cell (the 3rd cell) was the one clicked
            if (e.target === cells[2]) {
                // Ensure we don't log the table header column itself
                if (cost.toLowerCase() !== "cost") {
                    //If total_cost is greater than current_budget
                    if (total_cost + parseInt(cost) > current_budget) {
                        //Display an error message
                        toggleMessage();
                        return;
                    }
                    console.log("Ability:", abilityName, "Grade:", grade, "Cost:", cost);
                    //Reveal the ability cart
                    ability_cart.style.display = "flex";
                    //Create the ability cart row
                    const item_wrapper = document.createElement("div");
                    item_wrapper.classList.add("item_wrapper");
                    const item_row = document.createElement("div");
                    item_row.classList.add("row");
                    const item_name = document.createElement("div");
                    item_name.classList.add("item_name");
                    item_name.textContent = abilityName;
                    const item_grade = document.createElement("div");
                    item_grade.classList.add("item_grade");
                    item_grade.textContent = "Grade: " + grade;
                    const ability_cost = document.createElement("div");
                    ability_cost.classList.add("ability_cost");
                    ability_cost.textContent = "Cost: " + cost;
                    const remove = document.createElement("div");
                    remove.textContent = "remove";
                    remove.classList.add("remove");
                    const tags = document.createElement("div");
                    tags.classList.add("tags");
                    //Add the ability cart row to the ability cart
                    item_row.appendChild(item_name);
                    item_row.appendChild(item_grade);
                    item_row.appendChild(ability_cost);
                    item_row.appendChild(remove);
                    item_wrapper.appendChild(item_row);
                    item_wrapper.appendChild(tags);
                    ability_cart_list.appendChild(item_wrapper);
                    //Get the tier of the ability
                    let tier = 1;
                    abilityList.forEach(function (ability) {
                        if (ability.name === abilityName) {
                            tier = ability.tier;
                        }
                    });
                    //Add the ability to the ability cart array
                    abilityCart.push(new Ability(abilityName, grade, cost, [], tier));
                    //Collect the cost of the ability as a number
                    total_cost += parseInt(cost);
                    //Update the ability cart text
                    cart_total.textContent = total_cost;
                    console.log("Current Ability Cost: " + total_cost);
                    //Apply ability upgrades to stats
                    getStats();
                }
            }
        }
    }
});

//TAG BUTTONS

//Add event listener to the ability wrapper that opens the tag cards
document.getElementById("ability_wrapper").addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains("card_cell")) {
        let tagName = e.target.textContent.toUpperCase();
        let targetTable = e.target.closest(".card_table");
        if (targetTable) {
            makeTagCards(tagName, targetTable);
        }
    }
});

//REMOVE BUTTON

//Add event listener to the ability cart list that removes the ability from the ability cart array
document.getElementById("ability_cart_list").addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains("remove")) {
        //Get the item wrapper
        let item_wrapper = e.target.closest(".item_wrapper");
        //Get the ability cart row
        let item_row = item_wrapper.querySelector(".row");
        //Get the ability cart name
        let item_name = item_row.querySelector(".item_name");
        //Get the ability cart grade
        let item_grade = item_row.querySelector(".item_grade");
        //Get the ability cart cost
        let ability_cost = item_row.querySelector(".ability_cost");
        //Get the ability name
        let abilityName = item_name.textContent;
        //Get the grade of the ability
        let grade = item_grade.textContent;
        //Get the cost of the ability
        let costText = ability_cost.textContent;
        //Get the cost of the ability
        let item_cost = parseInt(costText.replace("Cost: ", ""));
        //Remove the ability from the ability cart
        item_wrapper.remove();
        abilityCart = abilityCart.filter(item => item.name !== abilityName);
        //Subtract the cost of the ability from the ability cost
        total_cost -= item_cost;
        //Update the ability cart text
        cart_total.textContent = total_cost;
        //Recalculate stats from scratch after removal
        getStats();

        // Hide the ability cart if it is empty
        if (document.getElementById("ability_cart_list").children.length === 0) {
            document.getElementById("ability_cart").style.display = "none";
        }
    }
});

//Close message button
document.getElementById("close_message").addEventListener('click', function () {
    toggleMessage();
});

//Slim cart button
document.getElementById("collapse_cart").addEventListener('click', function () {
    toggleSlimCart();
});