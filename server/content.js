Meteor.publish('content', function() {
  return Content.find();
});

Content.remove({}); // removes all content

var content =  {
  'en-us': {
    races: ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-elf', 'Half-Orc', 'Tiefling', 'Aasimar [DMG]', 'Aarakocra [EE]', 'Genasi [EE]', 'Goliath [EE]',
                    'Changeling [UA]', 'Shifter [UA]', 'Warforged [UA]', 'Minotaur [UA]'],
    proficiencies: [ 'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Survival', 'Stealth'],
    attributes: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
    subraces:  {
      'Dwarf': ['Hill', 'Mountain'],
      'Elf': ['High', 'Wood', 'Drow', 'Eladrin [DMG]'],
      'Halfling': ['Lightfoot', 'Stout'],
      'Human': ['Standard', 'Variant'],
      'Dragonborn': [''],
      'Gnome': ['Forest', 'Rock', 'Deep [EE]'],
      'Genasi [EE]': ['Air', 'Earth', 'Fire', 'Water'],
      'Shifter [UA]': ['Beasthide', 'Cliffwalk', 'Longtooth', 'Razorclaw', 'Wildhunt']
    },
    classes: [ 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'],
    backgrounds: [ 'Acolyte', 'Charlatan', 'Criminal', 'Spy', 'Entertainer', 'Gladiator', 'Folk Hero', 'Guild Artisan', 'Guild Merchant', 'Hermit', 'Noble', 'Knight', 'Outlander', 'Sage', 'Sailor', 'Pirate', 'Soldier', 'Urchin'],
    alignments: ['Lawful Good' ,'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'True Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'],
    items: {
      Glaive: 'A long, two handed pole with a single-edged blade on the end.',
      Longsword: 'A long, double-edged blade capable of being held in both hands.',
    },
    pages: {
      home: {
        left: {
          createButton: 'New Character',
          searchText: 'Search Characters',
        },
        right: {
          emptyState: '<div class="CTAContent"><h4>Let\'s create someone great.</h4><p>We\'re really excited you decided to join. We worked REALLY hard on making character creation and management as easy as can be.Let us hold your hand through the whole process.</p><button class="btn" ng-click="newCharacter()">Create your first character</button></div>',
        }
      },
      create: {
        buttons: {
          next: 'Next',
          previous: 'Previous'
        },
        race: {
          header: '<h5>Let\'s start by picking your race</h5>',
          section: {
            race: {
              header: '<p>Your race gives you a few interesting characteristics, like bonus stats, darkvision, etc.</p>',
              label: 'Standard Races'
            },
            subrace: {
              header: '<p>Your race has subraces, which provide extra characteristics.</p>',
              label: 'Subraces available'
            },
            cliffHeader: 'The Important Bits'
          },
          Entry: '<div class="emptyState"><div class="emptyStateContent"><h5>Your race says a lot about who you are.</h5><p>Are you a strong, burly, gnome-hating dwarf? Or is a lithe, dextrous elf more your style? Choose a race to see which one fits you best.</p></div></div>',
          Dwarf: {
            large: '<h5>Dwarves</h5><p>Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite all dwarves.Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk. Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully.</p><p>Dwarves can live to be more than 400 years old, so the oldest living dwarves often remember a very different world. For example, some of the oldest dwarves living in Citadel Felbarr (in the world of the Forgotten Realms) can recall the day, more than three centuries ago, when orcs conquered the fortress and drove them into an exile that lasted over 250 years. This longevity grants them a perspective on the world that shorter-lived races such as humans and halflings lack. Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change. They respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds in the youth of the world, and don’t abandon those traditions lightly. Part of those traditions is devotion to the gods of the dwarves, who uphold the dwarven ideals of industrious labor, skill in battle, and devotion to the forge. Individual dwarves are determined and loyal, true to their word and decisive in action, sometimes to the point of stubbornness. Many dwarves have a strong sense of justice, and they are slow to forget wrongs they have suffered. A wrong done to one dwarf is a wrong done to the dwarf’s entire clan, so what begins as one dwarf’s hunt for vengeance can become a full-blown clan feud.</p>',
            cliff: '<ul><li><strong>Speed:</strong> 25 feet</li><li><strong>Size:</strong> 4-5 ft. 150lbs</li><li><strong>Age:</strong> 50-350 roughly.</li><li><strong>Languages:</strong> Common, Dwarvish</li><li><strong>Darkvision:</strong> Can see 60ft in dim light, 60ft colorless in darkness</li><li><strong>Alignment:</strong> Mostly lawful</li><li><strong>Ability Score Bonus:</strong> +2 to constitution</li><li><strong>Stonecutting:</strong>When making a history check to stonework, double proficiency bonus</li><li><strong>Dwarvish Resilience:</strong> Advantage/resistance vs poison</li><li><strong>Bonus Proficiencies:</strong> Battleaxe, handaxe, throwing hammer, warhammer.</li><li><strong>Tool Proficiency:</strong> Smith tool, brewer\'s supplies, mason\'s tools</li></ul>',
            subraces: {
              Hill: {
                large: '<hr>As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.',
                cliff: '<ul><li><strong>Speed:</strong> 25 feet</li><li><strong>Size:</strong> 4-5 ft. 150lbs</li><li><strong>Age:</strong> 50-350 roughly.</li><li><strong>Languages:</strong> Common, Dwarvish</li><li><strong>Darkvision:</strong> Can see 60ft in dim light, 60ft colorless in darkness</li><li><strong>Alignment:</strong> Mostly lawful</li><li><strong>Ability Score Bonus:</strong> +2 to constitution</li><li><strong>Stonecutting:</strong>When making a history check to stonework, double proficiency bonus</li><li><strong>Dwarvish Resilience:</strong> Advantage/resistance vs poison</li><li><strong>Bonus Proficiencies:</strong> Battleaxe, handaxe, throwing hammer, warhammer.</li><li><strong>Tool Proficiency:</strong> Smith tool, brewer\'s supplies, mason\'s tools</li><hr><li><strong>Abilty Score Bonus:</strong> +1 to wisdom</li><li><strong>Bonus toughness:</strong> +(1 x level) to maximum hitpoints</li></ul>',
              },
              Mountain: {
                large: '<hr>As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.',
                cliff: '<ul><li><strong>Speed:</strong> 25 feet</li><li><strong>Size:</strong> 4-5 ft. 150lbs</li><li><strong>Age:</strong> 50-350 roughly.</li><li><strong>Languages:</strong> Common, Dwarvish</li><li><strong>Darkvision:</strong> Can see 60ft in dim light, 60ft colorless in darkness</li><li><strong>Alignment:</strong> Mostly lawful</li><li><strong>Ability Score Bonus:</strong> +2 to constitution</li><li><strong>Stonecutting:</strong>When making a history check to stonework, double proficiency bonus</li><li><strong>Dwarvish Resilience:</strong> Advantage/resistance vs poison</li><li><strong>Bonus Proficiencies:</strong> Battleaxe, handaxe, throwing hammer, warhammer.</li><li><strong>Tool Proficiency:</strong> Smith tool, brewer\'s supplies, mason\'s tools</li><hr><li><strong>Abilty Score Bonus:</strong> +2 to strength</li><li><strong>Bonus Proficiencies:</strong> Light, medium armor</li></ul>',
              }
            }
          },
          Elf: {
            large: '<h5>Elves</h5><p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world</p><p>With their unearthly grace and fine features, elves appear hauntingly beautiful to humans and members of many other races. They are slightly shorter than humans on average, ranging from well under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145 pounds. Males and females are about the same height, and males are only marginally heavier than females.</p><p>Elves’ coloration encompasses the normal human range and also includes skin in shades of copper, bronze, and almost bluish-white, hair of green or blue, and eyes like pools of liquid gold or silver. Elves have no facial and little body hair. They favor elegant clothing in bright colors, and they enjoy simple yet lovely jewelry.</p><p>Elves can live well over 700 years, giving them a broad perspective on events that might trouble the shorter-lived races more deeply. They are more often amused than excited, and more likely to be curious than greedy. They tend to remain aloof and unfazed by petty happenstance. When pursuing a goal, however, whether adventuring on a mission or learning a new skill or art, elves can be focused and relentless. They are slow to make friends and enemies, and even slower to forget them. They reply to petty insults with disdain and to serious insults with vengeance.</p><p>ike the branches of a young tree, elves are flexible in the face of danger. They trust in diplomacy and compromise to resolve differences before they escalate to violence. They have been known to retreat from intrusions into their woodland homes, confident that they can simply wait the invaders out. But when the need arises, elves reveal a stern martial side, demonstrating skill with sword, bow, and strategy.</p>',
            cliff: '<ul><li><strong>Speed:</strong> 30 feet</li><li><strong>Size:</strong> 5-7 ft.</li><li><strong>Age:</strong> 100-750 roughly.</li><li><strong>Languages:</strong> Common, Elvish</li><li><strong>Darkvision:</strong> Can see 60ft in dim light, 60ft colorless in darkness</li><li><strong>Alignment:</strong> Gentler chaos. More often good than not</li><li><strong>Ability Score Bonus:</strong> +2 to dexterity</li><li><strong>Keen Senses:</strong> Proficiency in Perception</li><li><strong>Fey Ancestry:</strong> Advantage on charmed saving throws. Resistant to sleep</li></ul>',
            subraces: {
              High: {
                large: '<hr> As a high elf, you have a keen mind and a mastery of at least the basics of magic.',
                cliff: '<ul><li><strong>Speed:</strong>30 feet</li><li><strong>Size:</strong> 5-7 ft.</li><li><strong>Age:</strong> 100-750 roughly.</li><li><strong>Languages:</strong> Common, Elvish</li><li><strong>Darkvision:</strong> Can see 60ft in dim light, 60ft colorless in darkness</li><li><strong>Alignment:</strong> Gentler chaos. More often good than not</li><li><strong>Ability Score Bonus:</strong> +2 to dexterity</li><li><strong>Keen Senses:</strong> Proficiency in Perception</li><li><strong>Fey Ancestry:</strong> Advantage on charmed saving throws. Resistant to sleep</li><hr><li><strong>Ability Score Bonus:</strong> +1 to intelligence</li><li><strong>Bonus Proficiency:</strong> Longsword, shortsword, longbow, shortbow</li><li><strong>Cantrip Bonus:</strong> Bonus wizard cantrip.</li><li><strong>Language Bonus:</strong> Read, write, speak.</li></ul>',
              },
              Wood: {
                large: '<hr> As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests.',
                cliff: '<ul><li><strong>Speed:</strong> <span class="improved">35 feet</span></li><li><strong>Size:</strong> 5-7 ft.</li><li><strong>Age:</strong> 100-750 roughly.</li><li><strong>Languages:</strong> Common, Elvish</li><li><strong>Darkvision:</strong> Can see 60ft in dim light, 60ft colorless in darkness</li><li><strong>Alignment:</strong> Gentler chaos. More often good than not</li><li><strong>Ability Score Bonus:</strong> +2 to dexterity</li><li><strong>Keen Senses:</strong> Proficiency in Perception</li><li><strong>Fey Ancestry:</strong> Advantage on charmed saving throws. Resistant to sleep</li><hr><li><strong>Ability Score Bonus:</strong> +1 to wisdom</li><li><strong>Bonus Proficiency:</strong> Longsword, shortsword, longbow, shortbow</li><li><strong>Mask of the Wild:</strong> You can attempt to hide when lightly obscured</li></ul>',
              },
              Drow: {
                large: '<hr> Were it not for one renowned exception, the race of drow would be universally reviled. Their depraved society is preoccupied with the favor of Lolth, their spider-goddess, who sanctions murder and the extermination of entire families as noble houses vie for position. Drow grow up believing that surface-dwelling races are worthless except as slaves.',
                cliff: '<ul><li><strong>Speed:</strong> 30 feet</li><li><strong>Size:</strong> 5-7 ft.</li><li><strong>Age:</strong> 100-750 roughly.</li><li><strong>Languages:</strong> Common, Elvish</li><li><strong>Darkvision:</strong> <span class="improved">Can see 120ft in dim light, 120ft colorless in darkness</span></li><li><strong>Alignment:</strong> Gentler chaos. More often good than not</li><li><strong>Ability Score Bonus:</strong> +2 to dexterity</li><li><strong>Keen Senses:</strong> Proficiency in Perception</li><li><strong>Fey Ancestry:</strong> Advantage on charmed saving throws. Resistant to sleep<hr></li><strong>Ability Score Bonus:</strong> +1 to charisma</li><li><strong>Disadvantage in Sunlight:</strong> Attacks rolls and perception checks</li><li><strong>Cantrip Bonus:</strong> Dancing Lights, Faerie Fire (3rd lvl), Darkness (5th lvl)</li></ul>',
              },
              'Eladrin [DMG]': {
                large: '<hr>Creatures of magic with strong ties to nature, eladrin live in the twilight realm of the Feywild. Their cities sometimes cross over to the Material Plane, appearing briefly in mountain valleys or deep forest glades before fading back into the Feywild.',
                cliff: '<ul><li><strong>Speed:</strong> 30 feet</li><li><strong>Size:</strong> 5-7 ft.</li><li><strong>Age:</strong> 100-750 roughly.</li><li><strong>Languages:</strong> Common, Elvish</li><li><strong>Darkvision:</strong> Can see 60ft in dim light, 60ft colorless in darkness</li><li><strong>Alignment:</strong> Gentler chaos. More often good than not</li><li><strong>Ability Score Bonus:</strong> +2 to dexterity</li><li><strong>Keen Senses:</strong> Proficiency in Perception</li><li><strong>Fey Ancestry:</strong> Advantage on charmed saving throws. Resistant to sleep<hr></li><strong>Ability Score Bonus:</strong> +1 to intelligence</li><li><strong>Bonus Proficiency:</strong> Longsword, shortsword, longbow, shortbow</li><li><strong>Misty Step:</strong> Can cast Misty Step once per short/long rest.</li></ul>',
              }
            }
          },
          Halfling: {
            large: '<h5>Halflings</h5><p>The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along an dirt road or a raft floating downriver.The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds.</p> <p>Halflings’ skin ranges from tan to pale with a ruddy cast, and their hair is usually brown or sandy brown and wavy. They have brown or hazel eyes. Halfling men often sport long sideburns, but beards are rare among them and mustaches even more so. They like to wear simple, comfortable, and practical clothes, favoring bright colors. Halfling practicality extends beyond their clothing. They’re concerned with basic needs and simple pleasures and have little use for ostentation. Even the wealthiest of halflings keep their treasures locked in a cellar rather than on display for all to see. They have a knack for finding the most straightforward solution to a problem, and have little patience for dithering.</p><p>Halflings are an affable and cheerful people. They cherish the bonds of family and friendship as well as the comforts of hearth and home, harboring few dreams of gold or glory. Even adventurers among them usually venture into the world for reasons of community, friendship, wanderlust, or curiosity. They love discovering new things, even simple things, such as an exotic food or an unfamiliar style of clothing.</p><p>Most halflings live in small, peaceful communities with large farms and well-kept groves. They rarely build kingdoms of their own or even hold much land beyond their quiet shires. They typically don’t recognize any sort of halfling nobility or royalty, instead looking to family elders to guide them. Families preserve their traditional ways despite the rise and fall of empires.</p>',
            cliff: '<ul><li><strong>Speed:</strong> 25 feet</li><li><strong>Size:</strong> 2-3 ft. 40lbs. Small</li><li><strong>Age:</strong> 20-250 roughly.</li><li><strong>Languages:</strong> Common, Halfling</li><li><strong>Alignment:</strong> Mostly lawful good</li><li><strong>Ability Score Bonus:</strong> +2 to dexterity</li><li><strong>Lucky:</strong> Reroll 1s once on attack roll, saving throws, or ability check.</li><li><strong>Brave:</strong> Advantage on saving throws vs frightening</li><li><strong>Halfling Nimbleness:</strong> Move through the space of any creature large than you.</li></ul>',
            subraces: {
              Lightfoot: {
                large: '<hr>As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety.',
                cliff: '<ul><li><strong>Speed:</strong> 25 feet</li> <li><strong>Size:</strong> 2-3 ft. 40lbs. Small</li> <li><strong>Age:</strong> 20-250 roughly.</li> <li><strong>Languages:</strong> Common, Halfling</li> <li><strong>Alignment:</strong> Mostly lawful good</li> <li><strong>Ability Score Bonus:</strong> +2 to dexterity</li> <li><strong>Lucky:</strong> Reroll 1s once on attack roll, saving throws, or ability check.</li> <li><strong>Brave:</strong> Advantage on saving throws vs frightening</li> <li><strong>Halfling Nimbleness:</strong> Move through the space of any creature large than you.</li> <hr><li><strong>Ability Score Bonus:</strong> +1 to charisma</li> <li><strong>Naturally Stealthy:</strong> Attempt to hide hwen obscured by a creature one size larger.</li>'
              },
              Stout: {
                large: '<hr>As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.',
                cliff: '<ul><li><strong>Speed:</strong> 25 feet</li><li><strong>Size:</strong> 2-3 ft. 40lbs. Small</li><li><strong>Age:</strong> 20-250 roughly.</li><li><strong>Languages:</strong> Common, Halfling</li><li><strong>Alignment:</strong> Mostly lawful good</li><li><strong>Ability Score Bonus:</strong> +2 to dexterity</li><li><strong>Lucky:</strong> Reroll 1s once on attack roll, saving throws, or ability check.</li><li><strong>Brave:</strong> Advantage on saving throws vs frightening</li><li><strong>Halfling Nimbleness:</strong> Move through the space of any creature large than you.</li><hr><li><strong>Ability Score Bonus:</strong> +1 to constitution</li><li><strong>Stout Resilience:</strong> Advantage/resistance vs poison.</li></ul>',
             }
            }
          },
          Human: {
            large: '<h5>Humans</h5><p>In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.</p><p>With their penchant for migration and conquest, humans are more physically diverse than other common races. There is no typical human. An individual can stand from 5 feet to a little over 6 feet tall and weigh from 125 to 250 pounds. Human skin shades range from nearly black to very pale, and hair colors from black to blond (curly, kinky, or straight); males might sport facial hair that is sparse or thick. A lot of humans have a dash of nonhuman blood, revealing hints of elf, orc, or other lineages. Humans reach adulthood in their late teens and rarely live even a single century</p><p>umans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled. When they settle, though, they stay: they build cities to last for the ages, and great kingdoms that can persist for long centuries. An individual human might have a relatively short life span, but a human nation or culture preserves traditions with origins far beyond the reach of any single human’s memory. They live fully in the present—making them well suited to the adventuring life—but also plan for the future, striving to leave a lasting legacy. Individually and as a group, humans are adaptable opportunists, and they stay alert to changing political and social dynamics.</p>',
            cliff: '<ul><li><strong>Speed:</strong> 30 feet</li><li><strong>Size:</strong> 5-7 ft.</li><li><strong>Age:</strong> 18-100 roughly.</li><li><strong>Alignment:</strong> All</li><li><strong>Languages:</strong> Common, bonus language</li><li><strong>Ability Score Bonus:</strong> +1 to all</li></ul>',
            subraces: {
              Standard: {
                large: '<hr>Standard humans enjoy no extra bonuses.',
                cliff: '<ul><li><strong>Speed:</strong> 30 feet</li><li><strong>Size:</strong> 5-7 ft.</li><li><strong>Age:</strong> 18-100 roughly.</li><li><strong>Alignment:</strong> All</li><li><strong>Languages:</strong> Common, bonus language</li><li><strong>Ability Score Bonus:</strong> +1 to all</li></ul>',
              },
              Variant: {
                large: '<hr>Variant humans lose the +1 to all bonuses, but gain +1 to two stats, one feat, and one proficiency.',
                cliff: '<ul><li><strong>Speed:</strong> 30 feet</li><li><strong>Size:</strong> 5-7 ft.</li><li><strong>Age:</strong> 18-100 roughly.</li><li><strong>Alignment:</strong> All</li><li><strong>Languages:</strong> Common, bonus language</li><li></li><hr><li><strong>Subrace Bonus:</strong> +1 to two ability scores</li><li><strong>Subrace Bonus:</strong> Bonus Feat</li><li><strong>Subrace Bonus:</strong> Bonus Proficiency</li></ul>'
              }
            }
          },
        },
        class: {
          Entry: '<div class="emptyState"><div class="emptyStateContent"><h5>Your class determines what you can do.</h5><p>An axe-wielding strongman. A nimble rogue. A potent wizard. Choose a class to see which fits you best. </p></div></div>',
          header: '<h5>Next, let\'s choose your class</h5>',
          section: {
            class: {
              header: '<p>Your class broadly dictates your vocation, talents, and tactics</p>',
              label: 'Standard Classes'
            },
            profs: {
              header: '<p>Good choice. You can now pick a couple of proficiencies and your saving throw.</p>',
              labels :{
                profs: '<h6><strong>Proficiencies</strong></h6>',
                savingthrows: 'Saving <h6><strong>Saving throw</strong></h6>'
              }
            },
            cliffHeader: 'The Important Bits'
          },
          Barbarian: {
            cliff: 'BARBARIANS GOT SOME BIG OL SWINGIN DICKS',
            large: "<h4>Barbarian</h4><p>Barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.</p><p>For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.</p><h5>Primal Instinct</h5><p>People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign o f weakness. The strong embrace their animal nature keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.</p><p>Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.</p><h5>A Life of Danger</h5><p>Not every m ember of the tribes deemed “barbarians” by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don’t have to.</p><p>Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life o f the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties.</p>",
          },
          Bard: {
            cliff: '',
            large: '',
          },
          Cleric: {
            cliff: '',
            large: '',
          },
          Druid: {
            cliff: '',
            large: '',
          },
          Fighter: {
            cliff: '',
            large: '',
          },
          Monk: {
            cliff: '',
            large: '',
          },
          Paladin: {
            cliff: '',
            large: '',
          },
          Ranger: {
            cliff: '',
            large: '',
          },
          Rogue: {
            cliff: '',
            large: '',
          },
          Sorcerer: {
            cliff: '',
            large: '',
          },
          Warlock: {
            cliff: '',
            large: '',
          },
          Wizard: {
            cliff: '',
            large: '',
          },
        },
        backgrounds: {
          Entry: '<div class="emptyState"><div class="emptyStateContent"><h5>Let\'s figure out who you were</h5><p>A rough and tumble soldier? Maybe a bookish sage, perhaps? Or does a purse-snatcher sound more your game? Remember, this is who you were, not necessarily who you are. You might be a thief with a heart of gold! </p></div></div>',
        },
        ability: {
          Default: '<p>Characters in D&D have six abilities: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. A character also has a score attached to each ability. Your ability score describes in broad terms your talent, training, and competence when doing things related to that ability. The higher the score, the better your character is with that ability. Your abilities, in many ways, act as your character\'s foundation and set the stage for your adventuring career.</p><p>A typical monster has the same six abilities and follows the same rules as a character for the abilities\' use, although a monster relies on its abilities far less than an adventurer does.</p><p>A score of 10 or 11 is average for a human adult. A score of 18 is the highest that a normal person usually reaches. Adventurers can have scores as high as 20, and monsters and divine beings can have scores as high as 30. </p>',
          Strength: 'Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force. You typically use Strength to climb, jump, swim, strike a foe with a melee weapon, break down doors, lift gates, and burst restraints. Any character who fights in hand-to-hand combat can benefit from a high Strength score. Fighters and other warriors, therefore, prefer high Strength scores. <ul><li>1 (–5):  Morbidly weak, has significant trouble lifting own limbs</li><li>2-3 (–4):  Needs help to stand, can be knocked over by strong breezes</li><li>4-5 (–3):  Knocked off balance by swinging something dense</li><li>6-7 (–2):  Difficulty pushing an object of their weight</li><li>8-9 (–1):  Has trouble even lifting heavy objects</li><li>10-11 (0):  Can literally pull their own weight</li><li>12-13 (1):  Carries heavy objects for short distances</li><li>14-15 (2):  Visibly toned, throws small objects for long distances</li><li>16-17 (3):  Carries heavy objects with one arm</li><li>18-19 (4):  Can break objects like wood with bare hands</li><li>20-21 (5):  Able to out-wrestle a work animal or catch a falling person</li><li>22-23 (6):  Can pull very heavy objects at appreciable speeds</li><li>24-25 (7):  Pinnacle of brawn, able to out-lift several people</li></ul>',
          Dexterity: '<p>Dexterity measures your character\'s physical agility, reflexes, balance, and poise. You typically use Dexterity to perform an acrobatic action, such as maintaining balance while moving across a precarious surface, contorting your body to wriggle through a tight space, striking a distant foe using a projectile, or slipping free from bindings.</p><p>Rogues and other characters who wear light armor prefer high Dexterity scores, since it helps them avoid enemy attacks. A character might also use Dexterity when making attacks with certain weapons: bows, slings, and the like. Any character who wants to react to danger quickly can benefit from a high Dexterity score.</p> ',
          Constitution: '<p>Constitution measures your health and durability. You typically use Constitution to hold your breath, do a forced march, run a long distance, and perform a strenuous activity for a long period. All characters benefit from having a high Constitution score.</p>',
          Intelligence: '<p>Intelligence describes your mental acuity, your education, and your ability to reason, recall information, and employ logic to overcome challenges and complications. You typically use Intelligence to remember an important fact, find clues to a puzzle, or cast an arcane spell. Arcane magic, such as that used by wizards, often requires a keen mind for mastery and thus Intelligence is most important to such characters.</p>',
          Wisdom: '<p>Wisdom reflects how attuned you are to your surroundings, representing general perceptiveness, intuition, insight, and other, less tangible senses. Wisdom is also important for understanding divine edicts and expectations.</p><p>Although Wisdom is important to all characters who want to be alert, Wisdom is especially important to clerics and druids, since the ability is crucial for channeling divine power from the gods and the environment.</p>',
          Charisma: '<p>Charisma measures your ability to influence others and the strength of your personality. A high Charisma suggests a strong sense of purpose, whereas a low Charisma indicates a less self-assured personality. Charisma also determines how well you lead those who follow you.</p><p>All characters benefit from a high Charisma, especially those who deal with nonplayer characters, such as hirelings, henchmen, and intelligent monsters. Charisma is also important to spellcasters who manipulate magical power through sheer force of will.</p>',
        },
      }
    }
  }
};

Content.insert(content);

/*

cliff: '<ul><li><strong>Speed:</strong> 25 feet</li>
<li><strong>Size:</strong> 2-3 ft. 40lbs. Small</li>
<li><strong>Age:</strong> 20-250 roughly.</li>
<li><strong>Languages:</strong> Common, Halfling</li>
<li><strong>Alignment:</strong> Mostly lawful good</li>
<li><strong>Ability Score Bonus:</strong> +2 to dexterity</li>
<li><strong>Lucky:</strong> Reroll 1s once on attack roll, saving throws, or ability check.</li>
<li><strong>Brave:</strong> Advantage on saving throws vs frightening</li>
<li><strong>Halfling Nimbleness:</strong> Move through the space of any creature large than you.</li>
<hr><li><strong>Ability Score Bonus:</strong> +1 to constitution</li>
<li><strong>Stout Resilience:</strong> Advantage/resistance vs poison.</li>
</ul>',


*/
