//BUDGET OPTIONS ARRAY
const budgetOptions = [
    {
        level: "D",
        description: "Callow Hero, Freshman",
        budget: 10
    },
    {
        level: "C",
        description: "Adept Hero, Sophomore",
        budget: 20
    },
    {
        level: "B",
        description: "Expert Hero, Seasoned",
        budget: 30
    },
    {
        level: "A",
        description: "Renowned Hero, Veteran",
        budget: 40
    },
    {
        level: "S",
        description: "Epic Hero, Legend",
        budget: 50
    },
];

//SCORE ARRAY
const scoreOptions = [
    {
        description: "One",
        score: 1,
    },
    {
        description: "Two",
        score: 2,
    },
    {
        description: "Three",
        score: 3,
    },
];

//OUTCOME SCORES ARRAY
const outcomeScore = "Outcome: 1 to 3 = Good, lasts 3 rounds. <br> 4 or more = Awesome, lasts until the encounter ends.</b>";

//ABILITY TIER ARRAY
const abilityTier = [
    { tier: 0, grade: "Grade", pool: "Pool", cost: "Cost" },
    { tier: 1, grade: 'D', pool: 1, cost: 1 },
    { tier: 1, grade: 'C', pool: 2, cost: 2 },
    { tier: 1, grade: 'B', pool: 3, cost: 3 },
    { tier: 1, grade: 'A', pool: 4, cost: 4 },
    { tier: 1, grade: 'S', pool: 5, cost: 5 },
    { tier: 2, grade: 'D', pool: 1, cost: 2 },
    { tier: 2, grade: 'C', pool: 2, cost: 4 },
    { tier: 2, grade: 'B', pool: 3, cost: 6 },
    { tier: 2, grade: 'A', pool: 4, cost: 8 },
    { tier: 2, grade: 'S', pool: 5, cost: 10 },
    { tier: 3, grade: 'D', pool: 1, cost: 3 },
    { tier: 3, grade: 'C', pool: 2, cost: 6 },
    { tier: 3, grade: 'B', pool: 3, cost: 9 },
    { tier: 3, grade: 'A', pool: 4, cost: 12 },
    { tier: 3, grade: 'S', pool: 5, cost: 15 }
];

//AREA SIZE ARRAY
const areaSize = [
    {
        grade: "D", size: "A small bedroom"
    },
    {
        grade: "C", size: "The Loop Chicago"
    },
    {
        grade: "B", size: "New York City"
    },
    {
        grade: "A", size: "Illinois State"
    },
    {
        grade: "S", size: "Antarctica"
    },
];

//ABILITY LIST ARRAY
const abilityList = [
    {
        name: "ADHESION",
        power: false,
        description: "The ability to adhere to and move along a surface regardless of gravity.<br>&ensp;No stunt roll needed, simply declare the action to crawl or walk along a plane heedless of gravity.<br>&ensp;Stick: Subtract your adhesion pool from the outcome when the Tags Push or Pull are used against you.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "AGILITY",
        power: false,
        description: "This ability represents extraordinary agility, balance and manual dexterity.<br>&ensp;Add the Agility pool to Physical stunts such as acrobatics, aiming, climbing, piloting, hand eye coordination, etc.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Action", abbreviation: "ACT", d: 1, c: 2, b: 3, a: 4, s: 5
            }, {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Counter", "Reflect"],
    },
    {
        name: "AURA",
        power: true,
        description: "You possess an aura that changes the conditions of the area you occupy.<br>&ensp;Choose what your Aura imposes, be it zero gravity, icy surfaces, an earthquake, psychic waves, torrential rain, etc. Add Aura to a Will stunt vs a difficulty set by the Narrator. The outcome determines the duration of the Aura. For others the Aura pool adds to the difficulty of all stunts performed within. The higher the grade the more extreme the changes to the space of influence.<br>&ensp;Epicenter: The Aura is always centered around the bearer making it harder to do them harm. Subtract the Aura pool from the outcome of physical stunts made against your Reflex. The pool is the number of times Epicenter can be used during an encounter.<br>&ensp;Only one instance of this ability can be in play at a time.",
        outcome: outcomeScore,
        tier: 3,
        upgrades: [
            {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [
            {
                grade: "D", size: "A small bedroom"
            },
            {
                grade: "C", size: "The Loop Chicago"
            },
            {
                grade: "B", size: "New York City"
            },
            {
                grade: "A", size: "Illinois State"
            },
            {
                grade: "S", size: "Antarctica"
            }
        ],
        tags: ["Cold Damage", "Continue", "Damage", "Energy Damage", "Heat Damage", "Mystic Damage", "Physical Damage", "Pierce", "Psychic Damage", "Radiation Damage", "Suffocation Damage", "Toxin Damage"],
    },
    {
        name: "BIND",
        power: true,
        description: "The ability to shoot out a binding that immobilizes a target at range.<br>&ensp;Add the Bind pool to a Physical stunt vs. the target's Reflex. On a hit the captive cannot move and their reflex drops to zero.<br>&ensp;Escape requires the captive to roll a Physical stunt vs the Bind pool.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: ["Area of Effect", "Cold Damage", "Contagion", "Continue", "Counter", "Damage", "Energy Damage", "Heat Damage", "Mystic Damage", "On Contact", "Physical Damage", "Pierce", "Psychic Damage", "Pull", "Radiation Damage", "Reflect", "Suffocation Damage", "Toxin Damage"],
    },
    {
        name: "BURROWING",
        power: false,
        description: "You can burrow through the ground or big solid objects.<br>&ensp;You can do so at a rate akin to having the Speed ability at your Burrowing grade. Whenever you burrow you can decide whether or not to leave a tunnel in your wake.<br>&ensp;Entomb: Add the Burrowing pool to a Physical stunt vs. a target's Wits, on a hit the target cannot move and their reflex drops to zero as they've been pulled into the ground. Escape requires them to roll a Physical stunt vs the Entomb outcome.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Wits", abbreviation: "WITS", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: [],
    },
    {
        name: "BRAINS",
        power: false,
        description: "You possess a high IQ, quick thinking and vast memory.<br>&ensp;Add the Brain pool to Intelligence stunts that test intellect, memory recall and complex problem solving.",
        outcome: "",
        tier: 1,
        upgrades: [
            {
                type: "Action", abbreviation: "ACT", d: 1, c: 2, b: 3, a: 4, s: 5
            }],
        table: [],
        tags: [],
    },
    {
        name: "CHARM",
        power: false,
        description: "You are charismatic, others find your magnetic personality inspiring and persuasive.<br>&ensp;Add the Charm pool to a Will stunt vs the target's Spirit. While under your Charm your ability pool is added to their stunt rolls when their purpose suits your stated interests.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "COMPANION",
        power: true,
        description: "This ability represents an autnomous entity over which you have great influence.<br>&ensp;A companion is driven to help you achieve your interests.<br>&ensp;Companions have an INT, WILL and PHY, choose which is 1, which is 2 and which is 3. The Companion's Action, Wits, Spirit and Reflex are determined as normal.<br>&ensp;Companions are considered to have the ability Endurance at a grade equal to the Companion ability. So a grade B Companion has grade B Endurance. If your Companion has an ability that also grants Endurance use the highest pool and health bar.<br>&ensp;The Companion grade pool is used as points that are slotted into abilities the Companion possesses. Each point slotted into a Companion ability raises that ability's grade by one.",
        outcome: "",
        tier: 3,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "COMPUTING",
        power: false,
        description: "This ability represents the advanced operation of computers.<br>&ensp;Add the Computing pool to Intelligence stunts like writing applications, data research, securing networks, hacking systems, etc. ",
        outcome: "",
        tier: 1,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "COPY",
        power: true,
        description: "The power to copy abilities you witness while in the presence of the owner.<br>&ensp;Roll Intelligence plus Copy vs the target abilityâ€™s pool. The outcome determines when the copied ability expires. Copied abilities are the same grade as the original but cannot exceed your copy grade. The number of abilities you can copy at one time is limited by your copy grade pool.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: ["On Contact"],
    },
    {
        name: "DANGER SENSE",
        power: true,
        description: "A talent for reflexively avoiding concealed or sudden attacks.<br>&ensp;During an encounter subtract your Danger Sense pool from the outcome of an attack targeting your Wits. Covers, sneak attacks, ambushes, traps, falling debris, etc. The Danger Sense pool is the number of times this can be done in an encounter.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [
            {
                type: "Wits", abbreviation: "WITS", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: [],
    },
    {
        name: "DEFTNESS",
        power: false,
        description: "Great manual dexterity when performing fine manipulation.<br>&ensp;Add the Deftness pool to Physical stunts vs difficulty or Wits. Deftness applies to stunts like creating forgeries, demolition, safecracking, stitching wounds, picking pockets, etc. ",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "DEPOWER",
        power: true,
        description: "The power to temporarily remove abilities from others.<br>&ensp;When you depower another they lose an ability of your choice. Roll your Intelligence plus the Depower pool vs the target ability's pool. The outcome determines how long before use of the stripped ability returns. Your Depower pool is the number of abilities you can depower during an encounter.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "DISGUISE",
        power: false,
        description: "Alter your appearance, movements and voice to create the facade of being another person or thing.<br>&ensp;Add the Disguise pool to Intelligence stunts vs. difficulty or Wits.The outcome is the difficulty for any attempt to see through the disguise.",
        outcome: "",
        tier: 1,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "DRAIN",
        power: true,
        description: "Through physical contact you can drain health from a target to replenish your own.<br>&ensp;Add the Drain pool to a Physical stunt vs. the target's Reflex. The outcome is the amount of health you take from the target and use to replenish your own.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "DRIVE",
        power: false,
        description: "Drive represents extraordinary willpower.<br>&ensp;Add the Drive pool to Will stunts that test will power, psychic power or magic skill.<br>&ensp;Focus: You can concentrate your will upon accomplishing a single task.<br>&ensp;For every turn you pass, performing no stunt, you can reduce the difficulty or defense youâ€™re rolling against by 1. This amount cannot exceed your drive grade.<br>&ensp;Losing enough health to reduce you to serious before performing the stunt cancels focus.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Spirit", abbreviation: "SPR", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: [],
    },
    {
        name: "ELASTICITY",
        power: false,
        description: "Stretch and twist your limbs and body as if you were made of elastic.<br>&ensp;You can interact with distant items and attack targets at range. Also, add your elasticity pool to climb and acrobatic stunts.<br>&ensp;Rubber: Subtract the Elasticity pool from the outcome of physical stunts made against your Reflex. The pool is the number of times you can do this during an encounter.<br>&ensp;Envelope: You can wrap your body around captives. The Elasticity pool is the difficulty to escape, you lose health equal to the outcome of their escape stunt.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Action", abbreviation: "ACT", d: 1, c: 2, b: 3, a: 4, s: 5
            }, {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Area of Effect", "Chain", "Counter", "Homing", "Pull", "Push", "Reflect"],
    },
    {
        name: "EMPATHY",
        power: true,
        description: "The ability to experience the feelings of another.<br>&ensp;Roll Will plus Empathy vs Spirit, the outcome determines how long you're empathic.<br>&ensp;Add the outcome to your Reflex when the subject of your empathy attempts a melee or ranged attack against you.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "EMPOWER",
        power: true,
        description: "The power to grant others temporary abilities.<br>&ensp;Theme: When you purchase this ability you must describe its source. eg. inspirational oration, biokinesis, spellcasting, etc.<br>&ensp;When you empower another they receive an ability of your choice at the grade you choose. The highest grade you can grant equals your Empower grade. Roll your Intelligence plus Empower pool vs the pool of the recipient's highest ability grade. The outcome determines how long the granted abilities last. Your Empower pool is the number of abilities you can grant during an encounter. You cannot grant the Empower ability.",
        outcome: outcomeScore,
        tier: 3,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "ENDURANCE",
        power: false,
        description: "You possess extraordinary stamina and resilience.<br>&ensp;Add endurance to Physical stunts that challenge stamina or constitution.<br>&ensp;Your endurance health bar replaces the default health bar.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [
            { grade: "D", good: "x3", ok: "x2", serious: "x2", critical: "x2", ko: "x1" },
            { grade: "C", good: "x4", ok: "x2", serious: "x2", critical: "x2", ko: "x2" },
            { grade: "B", good: "x4", ok: "x3", serious: "x3", critical: "x2", ko: "x2" },
            { grade: "A", good: "x4", ok: "x3", serious: "x3", critical: "x3", ko: "x3" },
            { grade: "S", good: "x5", ok: "x5", serious: "x4", critical: "x3", ko: "x3" }
        ],
        tags: [],
    },
    {
        name: "EVADE",
        power: false,
        description: "The ability to parry or dodge harm.<br>&ensp;Evade: Subtract your Evade pool from the outcome of an attack targeting your reflex. Your Evade pool is the number of times you can use Evade during an encounter.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Counter", "Reflect"],
    },
    {
        name: "EXTRA LIMBS",
        power: false,
        description: "You have additional limbs.<br>&ensp;Add your Extra Limb pool to Physical stunts that involve complex maneuvering. For instance grappling, climbing, swimming or melee weapons.<br>&ensp;Extra: You can perform additional stunts during your action. Your grade determines how many extra stunts you get, extra stunts must be physical. The Extra Limb pool is the number of times Extra can be used during an encounter.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [
            { grade: "D", extraStunts: 1 },
            { grade: "C", extraStunts: 1 },
            { grade: "B", extraStunts: 2 },
            { grade: "A", extraStunts: 2 },
            { grade: "S", extraStunts: 3 }
        ],
        tags: ["Area of Effect", "Chain", "Counter", "Pull", "Push", "Reflect"],
    },
    {
        name: "FIELD",
        power: false,
        description: "You can sheath yourself in a protective field.<br>&ensp;Subtract damage affected by the field from its health bar instead of your own. If your Field doesn't affect an incoming damage type it is instead subtracted from your health bar.<br>&ensp;Damage types not covered by the field simply pass through.<br>&ensp;Choose the damage type your field affects; .<br>&ensp;Inform the Narrator when you raise your Field, in game this is a simple task. The last box you marked off of your field's health bar represents its current condition. Once you cross out the last box labeled \"down\" your field is down.<br>&ensp;At the end of each round fields recover one health box.<br>&ensp;If you drop a damaged field during your action you may reraise the field on a subsequent action at its full health.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [
            { grade: "D", good: "x3", ok: "x2", serious: "x2", critical: "x2", ko: "x1" },
            { grade: "C", good: "x4", ok: "x2", serious: "x2", critical: "x2", ko: "x2" },
            { grade: "B", good: "x4", ok: "x3", serious: "x3", critical: "x2", ko: "x2" },
            { grade: "A", good: "x4", ok: "x3", serious: "x3", critical: "x3", ko: "x3" },
            { grade: "S", good: "x5", ok: "x5", serious: "x4", critical: "x3", ko: "x3" }
        ],
        tags: ["Absorb", "Affect Type", "Cold Damage", "Energy Damage", "Heat Damage", "Mystic Damage", "Physical Damage", "Psychic Damage", "Radiation Damage", "Reflect", "Suffocation Damage", "Toxin Damage"],
    },
    {
        name: "FIGHT",
        power: false,
        description: "Fight represents skill or talent in unarmed combat.<br>&ensp;Add the Fight pool to Physical stunts vs the target's Reflex. When the stunt represents an unarmed attack the outcome is the damage dealt. Subtract the total outcome from the target's health.<br>&ensp;The default damage type is Physical. But when Fight is used in conjunction with a Melee Attack default to its damage type. E.g. studded gloves or metal toed boots.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Chain", "Counter", "Extra Attack", "Push"],
    },
    {
        name: "FLIGHT",
        power: false,
        description: "You can fly.<br>&ensp;Add the Flight pool to a Physical stunt vs. difficulty or Wits. Flight applies to stunts like flying, gliding, or hovering.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: [],
    },
    {
        name: "GESTALT",
        power: false,
        description: "The ability to merge your mind and body with others becoming a single more powerful being.<br>&ensp;The Gestalt possesses all of the abilities of its collective at the same grades. The total number of partners you may merge with at one time is determined by your Gestalt grade.<br>&ensp;If none of the collective possess Might or Endurance the Gestalt gains those abilities at the same grade as the source Gestalt ability.<br>&ensp;If the collective Might or Endurance is lower than the Gestalt ability the Gestalt gains the ability at the Gestalt grade.<br>&ensp;Gestalts have an INT 1, WILL 2, PHY 3 and its Action, Wits, Spirit and Reflex are determined using the upgrades from the abilities of its collective.<br>&ensp;Once the Gestalt merges, roll its Will plus Focus or Resolve if available vs the highest Spirit among the Collective. The outcome determines how long before the Gestalt separates. All participants must consent to merger.<br>&ensp;Merging into a Gestalt or splitting back into individuals is a simple action.<br>&ensp;A Gestalt that has separated on its turn cannot merge again on the next turn. It must wait until the turn after next to reconstitute. At any time a member of the Gestalt can separate from the collective entity. This will cause the Gestalt to separate back into its individual members.<br>&ensp;Note: When player characters are playing a Gestalt they must agree unanimously on each action the Gestalt takes.<br>&ensp;Otherwise the Gestalt loses that turn to the chaotic den of indecision overriding its mind.",
        outcome: outcomeScore,
        tier: 3,
        upgrades: [],
        table: [{ grade: "D", partners: 1 }, { grade: "C", partners: 1 }, { grade: "B", partners: 2 }, { grade: "A", partners: 3 }, { grade: "S", partners: 4 }],
        tags: [],
    },
    {
        name: "GROWTH",
        power: false,
        description: "You possess the power to grow to gigantic proportions.<br>&ensp;While in use Growth functions like the abilities Might and Endurance at the same grade as Growth.<br>&ensp;Big Target: Giants have a normal Reflex as well as a one vs. normal sized attackers. While in use Growth reduces your Reflex vs normal sized attackers or smaller. See Reflex below.",
        outcome: "",
        tier: 3,
        upgrades: [],
        table: [
            { grade: "D", height: "50'", weight: "1500 lbs", reflex: "-1" },
            { grade: "C", height: "100'", weight: "10 tns", reflex: "-1" },
            { grade: "B", height: "500'", weight: "700 tns", reflex: "-2" },
            { grade: "A", height: "1000'", weight: "2 mil tns", reflex: "-2" },
            { grade: "S", height: "2500'", weight: "5 mil tns", reflex: "-3" },
        ],
        tags: [],
    },
    {
        name: "HEAL OTHERS",
        power: true,
        description: "The power to heal others.<br>&ensp;You must be within arms reach of the patient. Roll your Heal Others pool plus your Intelligence vs the patient's degree of injury; Good = 0, Serious = 1, Critical = 2 and KO = 3, your pool cannot be reduced below 1.<br>&ensp;The outcome is the number of health boxes the patient regains.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "HEAL SELF",
        power: true,
        description: "You heal faster than normal.<br>&ensp;At the end of the round roll your Heal Self pool plus your Physical vs your degree of injury; Good = 0, Serious = 1, Critical = 2 and KO = 3, your pool cannot be reduced below 1.<br>&ensp;The outcome is the number of health boxes you regain.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "IMMATERIAL",
        power: false,
        description: "You can become immaterial to solid matter.<br>&ensp;Becoming immaterial is a simple task.<br>&ensp;While immaterial you can pass through solid material and ignore all physical damage.<br>&ensp;Also your Physical stunts have no effect on others or the material world.<br>&ensp;Ghost: With concentration you can become partially material. In this state you can perform Physical stunts while remaining immune to physical harm.<br>&ensp;The pool is the number of times you can use Ghost during an encounter.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "IMPAIR MOVE",
        power: true,
        description: "Cast a substance or energy that hinders a target's movement.<br>&ensp;Add the Impair Move pool to a Physical stunt vs the target's Reflex at range. If successful the target's Physical stunt pools and Reflex are reduced by the Impair Move pool.<br>&ensp;Compare the outcome to the chart below to determine the duration of the impairment.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: ["Area of Effect", "Contagion", "On Contact", "Pull", "Push"],
    },
    {
        name: "IMPAIR SENSE",
        power: true,
        description: "Emit a power that temporarily impairs a target's senses.<br>&ensp;Add the Impair Sense pool to an Intelligence stunt against a target's Wits at a range.<br>&ensp;Each grade allows you to impair an additional senseâ€¦ Sight, Hearing, Smell, Touch and Taste.<br>&ensp;If the stunt succeeds the target's Intelligence stunt pools and Wits are reduced by the Impair Sense pool.<br>&ensp;Compare the outcome to the chart below to determine the duration of the impairment.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: ["Area of Effect", "Contagion", "On Contact", "Pull", "Push"],
    },
    {
        name: "IMPAIR THOUGHT",
        power: true,
        description: "Emit a power that temporarily sedates a target's mind.<br>&ensp;Add the Impair Thought pool to a Will stunt against a target's Spirit at a range.<br>&ensp;If the stunt succeeds the target's Will stunt pools and Spirit are reduced by the Impair Thought pool.<br>&ensp;Compare the outcome to the chart below to determine the duration of the impairment.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "IMPERVIOUS",
        power: false,
        description: "You are impervious to a specific type of damage.<br>&ensp;You can ignore the outcome of a specific damage type.<br>&ensp;Choose a damage type for each grade of Imperviousâ€¦",
        outcome: "",
        tier: 3,
        upgrades: [],
        table: [],
        tags: ["Cold Damage", "Energy Damage", "Heat Damage", "Mystic Damage", "Physical Damage", "Psychic Damage", "Radiation Damage", "Suffocation Damage", "Toxin Damage"],
    },
    {
        name: "INDUCE FEAR",
        power: true,
        description: "The psychic power to induce fear in others.<br>&ensp;Add the Induce Fear pool to a Will stunt vs the target's spirit.<br>&ensp;The target is unable to attack the inducer and must get as far from them as possible.<br>&ensp;The outcome determines how long the target is terrified.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "INSPECT",
        power: false,
        description: "You're able to investigate a scene and pick up hidden details and clues.<br>&ensp;Add the Inspect pool to an Intelligence stunt vs the narrator's difficulty.",
        outcome: "",
        tier: 1,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "INTIMIDATE",
        power: false,
        description: "The ability to threaten, strong arm or dissuade others.<br>&ensp;Add the Intimidate pool to a Will stunt vs the target's Spirit.<br>&ensp;Their next stunt pool is reduced by your Intimidate pool.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "KNOW",
        power: false,
        description: "You know the faces and places that comprise a specific library of information.<br>&ensp;Be it the criminal underworld, local law enforcement, the club scene, etc.<br>&ensp;Confer with the Narrator to make up a subject that fits their campaign.<br>&ensp;Add the Know pool to an Intelligence stunt vs the narrator's difficulty.",
        outcome: "",
        tier: 1,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "LEAP",
        power: true,
        description: "You can leap great distances in a single bound.<br>&ensp;Add the Leap pool to Physical stunts related to acrobatics, climbing, gymnastics and of course leaping.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Action", abbreviation: "ACT", d: 1, c: 2, b: 3, a: 4, s: 5
            }, {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: [],
    },
    {
        name: "MAGIC",
        power: false,
        description: "Magic represents occult knowledge and skilled spellcasting.<br>&ensp;Add the Magic pool to Intelligence stunts to decipher or create occult text.<br>&ensp;Spell Caster: Add the Magic pool to Will stunts alongside abilities that represent spells being cast.<br>&ensp;I.e. You could add Magic to a Will stunt pool along with the ability Ranged Attack to represent a fireball spell.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Spirit", abbreviation: "SPR", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Chain"],
    },
    {
        name: "MELEE ATTACK",
        power: true,
        description: "This ability represents a special unarmed attack, or melee weapon e.g. a jump kick, panther claws, warhammer, etc.<br>&ensp;To use Melee Attack perform a Physical stunt.<br>&ensp;If successful, add the ability bonus to the outcome when determining damage.<br>&ensp;Subtract the total outcome from the target's health.<br>&ensp;Choose which type of damage is inflicted; heat, cold, energy, mystic, physical, psychic, radiation or toxin.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: ["Area of Effect", "Bypass", "Cold Damage", "Contagion", "Continue", "Energy Damage", "Extra Attack", "Feed", "Heat Damage", "Mystic Damage", "On Contact", "Physical Damage", "Pierce", "Psychic Damage", "Push", "Radiation Damage", "Reflect", "Suffocation Damage", "Toxin Damage"],
    },
    {
        name: "MELEE SKILL",
        power: false,
        description: "Melee Skill represents skilled use of melee weapons or talent at wielding improvised weapons.<br>&ensp;Add the Melee Skill pool to a Physical stunt vs the target's Reflex.",
        outcome: "",
        tier: 1,
        upgrades: [],
        table: [],
        tags: ["Chain", "Counter", "Extra Attack", "Feed", "Reflect"],
    },
    {
        name: "MENTAL ILLUSION",
        power: true,
        description: "The ability to psychically alter one's perception of reality.<br>&ensp;Add the Mental Illusion pool to a Will stunt vs. the target's Spirit.<br>&ensp;The outcome determines how long the projection lasts.<br>&ensp;The illusionist describes the illusion the subject experiences.<br>&ensp;The projection is perceived as completely real, leaving the target deaf and blind to reality.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: ["Contagion", "On Contact"],
    },
    {
        name: "MIGHT",
        power: false,
        description: "You possess extraordinary physical strength.<br>&ensp;Add the Might pool to Physical stunts related to strength, swimming, climbing, unarmed fighting and melee weapon use.",
        outcome: "",
        tier: 1,
        upgrades: [],
        table: [],
        tags: ["Area of Effect", "Counter", "Reflect"],
    },
    {
        name: "MIND CONTROL",
        power: true,
        description: "The psychic power to take control of another's mind.<br>&ensp;Add Mind Control to a Will stunt vs the subject's Spirit.<br>&ensp;The outcome determines how long control lasts.<br>&ensp;The subject will carry out your command on their action.<br>&ensp;A command to harm oneself will be followed.<br>&ensp;However a command that will result in the subject's death will be ignored.",
        outcome: outcomeScore,
        tier: 3,
        upgrades: [
            {
                type: "Spirit", abbreviation: "SPR", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Contagion", "On Contact"],
    },
    {
        name: "MULTI-ABILITY",
        power: true,
        description: "A power or item that can produce the effects of multiple abilities.<br>&ensp;Theme: When you purchase this ability you must describe its source. eg. a magic ring, utility belt, cybernetic arm, etc.<br>&ensp;The multi-ability grade can be changed into a different ability at the same grade or split among multiple abilities and Tags.<br>&ensp;Abilities produced with multi-ability function as those abilities.<br>&ensp;The Multi-Ability grade pool is used as points that are slotted into the abilities you choose.<br>&ensp;Each point slotted into an ability raises its grade by one.<br>&ensp;Each Tag you apply to a slotted ability costs a pool point.<br>&ensp;Switching between abilities and Tags counts as a simple task.<br>&ensp;Example: You have TRANSMUTATION Multi-ability A 4.<br>&ensp;You change a crook's clothes into glue.<br>&ensp;So you slot 3 of your points into the ability Bind at grade B and give it the tag contagion.<br>&ensp;That's 3 points to get Bind at grade B and 1 point to add the tag contagion.",
        outcome: "",
        tier: 3,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "MULTIPLY",
        power: false,
        description: "You can produce independently thinking and acting duplicates of yourself. Your duplicates possess all of your stats and abilities excluding Multiply. Duplicates can be produced or aborted as a simple task. All of your Duplicates share a single Duplicates health bar. Once the Duplicates health bar is depleted you're out of Dupes for this encounter.<br>&ensp;All Hands: Add Multiply to Physical stunts and unarmed attacks, your pool is the number of times this can be done in an encounter.<br>&ensp;Explode: Perform a burst of unarmed attacks on multiple targets in one action. Explode by adding Multiply to your stunt roll vs the highest reflex among your targets, plus 1 for each target beyond the first.<br>&ensp;Dupe stunts: You can perform a number of extra stunts on your action determined by your Multiply grade.",
        outcome: "",
        tier: 3,
        upgrades: [],
        table: [
            { grade: "D", Dupe: "One", Stunts: 1 },
            { grade: "C", Dupe: "Three", Stunts: 1 },
            { grade: "B", Dupe: "Several", Stunts: 2 },
            { grade: "A", Dupe: "Dozens", Stunts: 2 },
            { grade: "S", Dupe: "100s", Stunts: 3 },
        ],
        tags: ["Chain"],
    },
    {
        name: "PERCEPTION",
        power: false,
        description: "Your senses have extraordinary sensitivity and range. Each grade allows you to choose one sense; Aura vision, Infrared, Hearing, Smell, Thermal vision, Echolocation, Motion Detection, Spatial perception, Touch, EM vision, Nightvision, Sonar, Vision, Radar, Taste, X-ray. Add the Perception pool to Intelligence stunts to detect distant or inobvious details.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Wits", abbreviation: "WITS", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Sense Type"],
    },
    {
        name: "POCKET DIMENSION",
        power: true,
        description: "You have access to a dimension separate from our own. Add the P. Dimension pool to a Will stunt vs a target's Spirit to vacuum them into the dimension. At the end of each round captives roll Will vs. the outcome. Success means they return to this plane wherever their former captors happen to be.<br>&ensp;The pocket dimension provides life support, source unknown. However there is no water, no food, nor is there sunlight, just land and a glow bright enough to see the distant misty borders of the universe. The bearer can embellish any additional aesthetic features they wish.<br>&ensp;The size of the pocket dimension is based on the ability grade.",
        outcome: "",
        tier: 3,
        upgrades: [],
        table: [
            { grade: "D", size: "A small bedroom" },
            { grade: "C", size: "The Loop Chicago" },
            { grade: "B", size: "New York City" },
            { grade: "A", size: "Illinois State" },
            { grade: "S", size: "Antarctica" }
        ],
        tags: ["Counter", "Reflect"],
    },
    {
        name: "POSSESSION",
        power: true,
        description: "The power to leave your body to possess another's. Add the Possession pool to a Will stunt vs the target's Spirit. The outcome determines how long possession lasts. The host remains aware of your presence and can stop any action that will result in their death.",
        outcome: outcomeScore,
        tier: 2,
        upgrades: [],
        table: [],
        tags: ["Contagion", "On Contact"],
    },
    {
        name: "PSYCHIC",
        power: false,
        description: "Psychic represents skilled use of psychic abilities. Add the Psychic pool to Will stunts to use psychic powers.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Spirit", abbreviation: "SPR", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Chain"],
    },
    {
        name: "RANGED ATTACK",
        power: true,
        description: "This ability represents a ranged attack, e.g. a shuriken, acid spit, auto pistol, etc. To use Ranged Attack perform a Physical stunt. If successful, add the ability bonus to the outcome when determining damage. Subtract the total outcome from the target's health. Choose which type of damage is inflicted\u2026 heat, cold, energy, psychic, mystic, physical, radiation or toxin.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: ["Area of Effect", "Bypass", "Cold Damage", "Contagion", "Continue", "Energy Damage", "Extra Attack", "Feed", "Heat Damage", "Homing", "Mystic Damage", "On Contact", "Physical Damage", "Pierce", "Psychic Damage", "Pull", "Push", "Radiation Damage", "Reflect", "Suffocation Damage", "Toxin Damage"],
    },
    {
        name: "RANGED SKILL",
        power: false,
        description: "Ranged Skill represents skilled marksmanship or throwing accuracy. Add the Ranged Skill pool to Physical stunts like firing a weapon or throwing an object to hit a target at range.",
        outcome: "",
        tier: 1,
        upgrades: [],
        table: [],
        tags: ["Chain", "Extra Attack", "Feed", "Reflect"],
    },
    {
        name: "RESISTANT",
        power: false,
        description: "Resistant protects you from damage. Subtract your Resistant pool from incoming damage that matches your Resistant type. If your Resistant is missing an incoming damage type you suffer full damage. Choose a damage type your Resistant affects.",
        outcome: "",
        tier: 1,
        upgrades: [],
        table: [],
        tags: ["Absorb", "Affect Type", "Cold Damage", "Energy Damage", "Heat Damage", "Mystic Damage", "Physical Damage", "Psychic Damage", "Radiation Damage", "Reflect", "Suffocation Damage", "Toxin Damage"],
    },
    {
        name: "RESOLVE",
        power: false,
        description: "Resolve represents extraordinary mental fortitude. This ability allows you to resist being overwhelmed by psychics, emotions, pain, etc.<br>&ensp;During an encounter subtract your Resolve pool from the outcome of a stunt targeting your Spirit. Your Resolve pool is the number of times you can do this during an encounter.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Spirit", abbreviation: "SPR", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: [],
    },
    {
        name: "RESURRECTION",
        power: true,
        description: "If killed you have a chance of returning to life. On the turn following your death, add the Resurrection pool to a Will stunt vs. your Tally. Your Tally is the number of times you have previously resurrected. This pool cannot be reduced below one die. Outcome determines how soon you resurrect and how much health you regain.<br>&ensp;Tally: Add 1 to your Tally each time you resurrect. If your stunt fails you resurrect, but your Resurrection ability has burned out and will not trigger again.",
        outcome: outcomeScore,
        tier: 3,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "SCIENCE",
        power: false,
        description: "Skill and knowledge in the applied sciences. Add the Science pool to Intelligence stunts related to scientific analysis, research, development or the operation of super science apparatus.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Wits", abbreviation: "WITS", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: [],
    },
    {
        name: "SHRINK",
        power: false,
        description: "You are able to shrink down to a miniscule size. While shrunken you have a bonus to your Reflex when your attackers are normal sized.<br>&ensp;Small Target: Subtract your Shrink pool from the outcome of an attack targeting your reflex. Your Shrink pool is the number of times you can use Small Target during an encounter.",
        outcome: "",
        tier: 3,
        upgrades: [
            {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [
            { grade: "D", height: "6\"", weight: "16 oz.", reflex: "+1" },
            { grade: "C", height: "3.75\"", weight: "6 oz.", reflex: "+1" },
            { grade: "B", height: "28mm", weight: "100 grams", reflex: "+2" },
            { grade: "A", height: "Granular", weight: "1 mote", reflex: "+2" },
            { grade: "S", height: "Microbia", weight: "Insubstantial", reflex: "+3" },
        ],
        tags: [],
    },
    {
        name: "SIPHON",
        power: true,
        description: "Through physical contact you can siphon away another's stamina to increase your power. Add the Siphon pool to a Physical stunt vs the target's reflex. Succeed and the Siphon pool is subtracted from the target's Physical stunt pools for the duration of the ability. Meanwhile you gain the use of an ability at the same grade as the Siphon pool.<br>&ensp;Choose one ability at Siphon's purchase, this choice is permanent. The amount siphoned cannot exceed your pool. The outcome determines how long before the stolen energy returns to the target. Siphon cannot be used again until the energy returns to the target or the ability it feeds is released.",
        outcome: outcomeScore,
        tier: 3,
        upgrades: [],
        table: [],
        tags: ["Damage", "On Contact"],
    },
    {
        name: "SNEAK",
        power: false,
        description: "A talent for avoiding detection. To avoid detection add the Sneak pool to a Physical stunt vs. the highest Wits present. While sneaking a stunt that targets your Reflex or Wits cannot be made against you.<br>&ensp;Sneak Attack: While sneaking add your Sneak pool to a Physical stunt vs a target's Wits. Your sneaking ends after you perform an attack stunt.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Wits", abbreviation: "WITS", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Chain"],
    },
    {
        name: "SPEED",
        power: false,
        description: "You can move at great speed. Add the Speed pool to Physical stunts that test speed and agility.<br>&ensp;Fast: You can attack multiple targets in a single action. Add the Speed pool to a Physical stunt against the highest reflex among your targets. Success means making your target plus a number of additional targets equal to the Speed pool. The Speed pool is the number of times Fast can be used during an encounter.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Action", abbreviation: "ACT", d: 1, c: 2, b: 3, a: 4, s: 5
            }, {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Counter", "Reflect"],
    },
    {
        name: "STEAL",
        power: true,
        description: "Steal abilities from others you touch. Roll Physical plus the Steal pool vs. the target ability's pool. The target ability is removed from your mark and transferred to you at its original grade. If the target ability exceeds your Steal grade they lose the ability while you gain it at a grade equal to your Steal.<br>&ensp;Your outcome determines when the stolen ability transfers back to the target. Your Steal pool is the number of abilities you can steal during an encounter.",
        outcome: outcomeScore,
        tier: 3,
        upgrades: [],
        table: [],
        tags: ["Damage", "On Contact"],
    },
    {
        name: "TECHNOLOGY",
        power: false,
        description: "You're adept at repairing, altering and creating technology. Add the Technology pool to Intelligence stunts related to repair, engineering and demolitions.",
        outcome: "",
        tier: 1,
        upgrades: [],
        table: [],
        tags: [],
    },
    {
        name: "TELEKINESIS",
        power: false,
        description: "The mental power to move objects remotely. Add the Telekinesis pool to Will stunts to manipulate, lift or throw objects with your mind. The heavier or more awkward the maneuver the higher the Narrator should set the difficulty. Objects must be within line of sight.",
        outcome: "",
        tier: 2,
        upgrades: [],
        table: [],
        tags: ["Counter", "Reflect"],
    },
    {
        name: "TELEPATHY",
        power: true,
        description: "The power to read and mentally send information to another's mind. Roll Will plus Telepathy vs Spirit to read a mind or send information to that mind.<br>&ensp;Network: You can interact with multiple minds at once. Choose the highest spirit among your targets and make your stunt roll. Success means you made your target plus one additional target for each point of your telepathy pool.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Spirit", abbreviation: "SPR", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: [],
    },
    {
        name: "TELEPORT",
        power: false,
        description: "Travel instantly from one space to another. Add the Teleport pool to Physical stunts that test speed and agility.<br>&ensp;Blink: You can attack multiple targets in a single action. Add the Teleport pool to a Physical stunt against the highest reflex among your targets. Success means making your target plus a number of additional targets equal to the Teleport pool. The Teleport pool is the number of times Blink can be used during an encounter.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Action", abbreviation: "ACT", d: 1, c: 2, b: 3, a: 4, s: 5
            }, {
                type: "Reflex", abbreviation: "REF", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: ["Counter", "Reflect"],
    },
    {
        name: "WARD",
        power: false,
        description: "The ability to ward off the effects of magic. During an encounter subtract your Ward pool from the outcome of an attack targeting your Spirit. Your Ward pool is the number of times you can use Ward during an encounter.",
        outcome: "",
        tier: 2,
        upgrades: [
            {
                type: "Spirit", abbreviation: "SPR", d: 1, c: 1, b: 2, a: 2, s: 3
            }],
        table: [],
        tags: [],
    },
];

//TAG LIST ARRAY
const tagList = [
    {
        name: "ABSORB",
        description: "Absorbs power from an attack and channels it to another ability.<br>&ensp;Damage stopped by your defensive ability is added to the pool of the ability of your choice. This choice excludes the tagged ability and the decision is permanent.<br>&ensp;The amount absorbed cannot exceed the pool of the tagged ability, i.e. a grade B ability cannot absorb more than 3 outcome. An ability cannot be augmented beyond a pool of 5. Once the augmented ability is used the absorbed points expire.",
        addTo: ["Field", "Impervious", "Resistant"],
        abbreviation: "(Abs)"
    },
    {
        name: "AREA OF EFFECT",
        description: "The ability affects all within an area.<br>&ensp;Choose the highest reflex among targets that are in proximity of one another and make your stunt roll. Success means making your target plus a number of additional targets equal to the ability pool.<br>&ensp;Example: Your Ranged Attack has a pool of 3, with the Area of Effect Tag. You'll affect the target with the highest reflex plus three more for a total of 4 targets.",
        addTo: ["Bind", "Elasticity", "Extra Limbs", "Impair Sense", "Impair Move", "Melee Attack", "Might", "Ranged Attack"],
        abbreviation: "AoE"
    },
    {
        name: "AURA VISION",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Auv)",
    },
    {
        name: "BYPASS",
        description: "Allows damage to ignore fields.<br>&ensp;When a field's grade is equal or less than the Ability's grade, subtract the outcome from the target's health bar, not the field.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Byp)"
    },
    {
        name: "CHAIN",
        description: "Put down multiple foes in a single turn.<br>&ensp;You can attack another target if the previous target was KO'd. The chain ends if you miss a target, fail to KO a target or your total KOs equal your Ability pool.",
        addTo: ["Elasticity", "Extra Limbs", "Fight", "Magic", "Melee Skill", "Multiply", "Psychic", "Ranged Skill", "Sneak", "Speed", "Teleport"],
        abbreviation: "(Cha)"
    },
    {
        name: "COLD DAMAGE",
        description: "Add a damage type to an attack ability.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Col)",
    },
    {
        name: "CONTAGION",
        description: "Physical contact with someone afflicted by the tagged ability passes its effects onto the new contact.<br>&ensp;The number of additional contacts contagion can pass onto cannot exceed the tagged ability's pool. When the tagged ability calls for an outcome use the initial outcome. This number cannot exceed the pool of the tagged ability.<br>&ensp;I.e. with bind grade B on contact can only use up to 2 of an attacker's outcome to bind the attacker. On contact does not protect the bearer from damage and the attacker's protective abilities apply as normal.",
        addTo: ["Bind", "Charm", "Impair Move", "Impair Sense", "Mental Illusion", "Mind Control", "Possession", "Ranged Attack", "Steal"],
        abbreviation: "(Ctg)"
    },
    {
        name: "CONTINUE",
        description: "The tagged ability continues to inflict damage beyond the initial attack.<br>&ensp;Score good or better using the tagged ability and those targeted lose one health for a number of subsequent turns equal to the tagged ability grade.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Con)"
    },
    {
        name: "COUNTER",
        description: "You can counter a melee or unarmed attack to damage your attacker.<br>&ensp;When a melee or unarmed stunt made against you scores \u201cGood\u201d (between 1 to 3 successes) you ignore the effects of your attacker's ability and Tags. The attacker instead suffers the effects of your tagged ability plus one outcome.<br>&ensp;If they score bad the attacker suffers the effects of your tagged ability plus three outcome.",
        addTo: ["Agility", "Bind", "Elasticity", "Evade", "Extra Limbs", "Fight", "Melee Skill", "Might", "Pocket Dimension", "Speed", "Telekinesis", "Teleport"],
        abbreviation: "(Cou)"
    },
    {
        name: "DAMAGE",
        description: "Add a damage property to a non-attack ability.<br>&ensp;The tag adds a damage bonus to a compatible ability. Damage is equal to the pool of the tagged ability. At least one damage type must be chosen when adding this tag. Each additional damage type you apply to your ability counts as a Tag that doubles the cost of the ability.<br>&ensp;Damage types: Cold (Col), Energy (Ene), Heat (Hea), Mystic (Mys), Physical (Phy), Psychic (Psy), Radiation (Rad), Suffocation (Suf), Toxin (Tox).<br>&ensp;Characters hit with Bind or Steal also treat this ability as if they've been hit with a Melee or Ranged Attack. Applying any defense abilities they may possess before suffering damage from the tagged ability.<br>&ensp;Each time a character enters an Aura tagged with Damage they apply their own relevant defense abilities before suffering the Aura's Damage.",
        addTo: ["Aura", "Bind", "Steal"],
        abbreviation: "(Dmg)"
    },
    {
        name: "ECHOLOCATION",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Ech)",
    },
    {
        name: "EM VISION",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Emv)",
    },
    {
        name: "ENERGY DAMAGE",
        description: "Add a damage type to an attack ability.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Ene)",
    },
    {
        name: "EXTRA ATTACK",
        description: "You can attack a single target multiple times in one turn.<br>&ensp;You can roll an additional attack stunt on a single target during your action. The tagged pool is the number of times Extra Attack can be used during an encounter.",
        addTo: ["Fight", "Melee Attack", "Melee Skill", "Ranged Attack", "Ranged Skill"],
        abbreviation: "(Exa)"
    },
    {
        name: "FEED",
        description: "Each nameless goon you put down replenishes your health.<br>&ensp;Each unnamed NPC serving as cannon fodder, whose health bar you reduce to KO'd, replenishes one of your lost health boxes.",
        addTo: ["Fight", "Melee Attack", "Melee Skill", "Ranged Attack", "Ranged Skill"],
        abbreviation: "(Fee)"
    },
    {
        name: "HEARING",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Hrg)",
    },
    {
        name: "HEAT DAMAGE",
        description: "Add a damage type to an attack ability.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Hea)",
    },
    {
        name: "HOMING",
        description: "Your attack will follow your target until it hits or spends all attempts to do so.<br>&ensp;The tagged pool is the number of attempts your attack has to hit the target.",
        addTo: ["Elasticity", "Ranged Attack"],
        abbreviation: "(Hom)"
    },
    {
        name: "INFRARED HEARING",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Inh)",
    },
    {
        name: "MOTION DETECTION",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Mod)",
    },
    {
        name: "MYSTIC DAMAGE",
        description: "Add a damage type to an attack ability.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Mys)",
    },
    {
        name: "NIGHT VISION",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Niv)",
    },
    {
        name: "ON CONTACT",
        description: "Melee attacks made against you expose the attacker to the effects of the tagged ability.<br>&ensp;The number of additional contacts this can pass onto cannot exceed the tagged ability's pool. When the tagged ability calls for an outcome use the initial outcome. This number cannot exceed the pool of the tagged ability.<br>&ensp;I.e. with bind grade B, on contact can only use up to 2 of an attacker's outcome to bind the attacker. On contact does not protect the bearer from damage and the attacker's protective abilities apply as normal.",
        addTo: ["Bind", "Charm", "Copy", "Impair Move", "Impair Sense", "Mental Illusion", "Mind Control", "Possession", "Ranged Attack", "Steal"],
        abbreviation: "(Onc)"
    },
    {
        name: "PHYSICAL DAMAGE",
        description: "Add a damage type to an attack ability.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Phy)",
    },
    {
        name: "PIERCE",
        description: "This attack pierces Resistant.<br>&ensp;Pierce allows you to ignore X* amount of the target's Resistant grade. Even when their Resistant stops all of your attack's damage types.<br>&ensp;*X equals the pool of the tagged ability.",
        addTo: ["Melee Attack", "Ranged Attack", "Aura", "Bind", "Steal"],
        abbreviation: "(Prc)"
    },
    {
        name: "PSYCHIC DAMAGE",
        description: "Add a damage type to an attack ability.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Psy)",
    },
    {
        name: "PULL",
        description: "This ability pulls the target to you.<br>&ensp;When you score a Good outcome (between 1 to 3 successes) the subject is pulled within reach. Their reflex is minus 1 vs. the next physical stunt you roll against them. They will need to use a simple task to move out of reach.<br>&ensp;When you score an awesome outcome the subject is within reach and floored. Their reflex is minus 1 vs. the next physical stunt you roll against them. Getting back on their feet requires a simple task. Getting back on their feet and moving out of reach requires a full action.",
        addTo: ["Bind", "Elasticity", "Extra Limbs", "Impair Move", "Impair Sense", "Ranged Attack"],
        abbreviation: "(Pul)"
    },
    {
        name: "PUSH",
        description: "This ability pushes the target away from you.<br>&ensp;When you score Good (between 1 to 3 successes) the subject is pushed outside of reach. Your Reflex is increased by 1 vs the next physical stunt they perform against you. To attempt a melee attack against you they will need to use a simple task to get back in reach.<br>&ensp;When you score an awesome outcome the subject is pushed far back and floored. Your Reflex is increased by 1 vs the next physical stunt they perform against you. Getting back on their feet requires a simple task, moving a long distance to reach you requires two simple tasks.",
        addTo: ["Elasticity", "Extra Limbs", "Fight", "Impair Move", "Impair Sense", "Melee Attack", "Ranged Attack"],
        abbreviation: "(Pus)"
    },
    {
        name: "RADAR",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Rdr)",
    },
    {
        name: "RADIATION DAMAGE",
        description: "Add a damage type to an attack ability.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Rad)",
    },
    {
        name: "REFLECT",
        description: "You can reflect a ranged attack back to the attacker.<br>&ensp;When a ranged stunt made against you scores less than 4 successes, Good or worse, you ignore the effects of your attacker's ability and Tags. Those effects are instead reflected back at your attacker with one outcome.<br>&ensp;If they score bad you ignore the ability's effects and reflect them back doing three outcome.",
        addTo: ["Agility", "Bind", "Elasticity", "Evade", "Extra Limbs", "Field", "Melee Attack", "Melee Skill", "Might", "Pocket Dimension", "Ranged Attack", "Ranged Skill", "Resistant", "Speed", "Telekinesis", "Teleport"],
        abbreviation: "(Rfl)"
    },
    {
        name: "SMELL",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Sme)",
    },
    {
        name: "SONAR",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Son)",
    },
    {
        name: "SPATIAL PERCEPTION",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Spp)",
    },
    {
        name: "SUFFOCATION DAMAGE",
        description: "Add a damage type to an attack ability.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Suf)",
    },
    {
        name: "TASTE",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Tas)",
    },
    {
        name: "THERMAL VISION",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Thv)",
    },
    {
        name: "TOUCH",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Tou)",
    },
    {
        name: "TOXIN DAMAGE",
        description: "Add a damage type to an attack ability.<br>&ensp;Can also be added to Aura, Bind and Steal.",
        addTo: ["Melee Attack", "Ranged Attack"],
        abbreviation: "(Tox)",
    },
    {
        name: "VISION",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Vis)",
    },
    {
        name: "X-RAY",
        description: "Add a sense type to the Perception ability.<br>&ensp;Having a Sense that suits a Perception stunt can influence the Narrator when determining difficulty.<br>&ensp;Each additional sense type you apply to your Perception ability counts as a Tag that doubles the cost of the ability.",
        addTo: ["Perception"],
        abbreviation: "(Xra)",
    },
];
