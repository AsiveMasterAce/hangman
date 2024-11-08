const wordList = [
  {
    word: "suitcase",
    hint: "A container used for carrying personal belongings while traveling.",
  },
  {
    word: "serendipity",
    hint: "The occurrence and development of events by chance in a happy or beneficial way.",
  },
  {
    word: "saxophone",
    hint: "A woodwind musical instrument known for its smooth, jazzy sound.",
  },
  {
    word: "renaissance",
    hint: "A period of European history marked by a revival of art, literature, and learning.",
  },
  {
    word: "algorithm",
    hint: "A step-by-step procedure for solving a problem or accomplishing a task.",
  },
  {
    word: "portfolio",
    hint: "A collection of work samples or investment assets.",
  },
  {
    word: "chrysanthemum",
    hint: "A flowering plant with daisy-like blooms.",
  },
  {
    word: "perseverance",
    hint: "The quality of continuing to try despite difficulties or setbacks.",
  },
  {
    word: "archipelago",
    hint: "A group of islands clustered together in a sea or ocean.",
  },
  {
    word: "silhouette",
    hint: "The dark outline or shape of something shown against a lighter background.",
  },
  {
    word: "biosphere",
    hint: "The part of the Earth's environment where life exists.",
  },
  {
    word: "philanthropy",
    hint: "The practice of donating money, goods, or time to help others or to do good for society.",
  },
  {
    word: "palindrome",
    hint: "A word, phrase, number, or other sequence of characters that reads the same backward as forward.",
  },
  {
    word: "renaissance",
    hint: "A period of European history marked by a revival of art, literature, and learning.",
  },
  {
    word: "aquamarine",
    hint: "A bluish-green variety of the mineral beryl, used as a gemstone.",
  },
  {
    word: "filibuster",
    hint: "A political procedure where a senator or representative extends debate to delay or prevent a vote on a bill.",
  },
  {
    word: "quintessential",
    hint: "Representing the most perfect or typical example of a quality or class.",
  },
  {
    word: "bioluminescence",
    hint: "The production and emission of light by a living organism.",
  },
  {
    word: "onomatopoeia",
    hint: "A word that phonetically imitates or resembles the sound it describes.",
  },
  {
    word: "serendipity",
    hint: "The occurrence and development of events by chance in a happy or beneficial way.",
  },
  {
    word: "equilibrium",
    hint: "A state of balance between opposing forces or actions.",
  },
  {
    word: "karaoke",
    hint: "A form of entertainment where people sing along with recorded music.",
  },
  {
    word: "calligraphy",
    hint: "The art of beautiful handwriting.",
  },
  {
    word: "haiku",
    hint: "A traditional form of Japanese poetry consisting of three lines.",
  },
  {
    word: "chronology",
    hint: "The arrangement of events or dates in the order of their occurrence.",
  },
  {
    word: "zephyr",
    hint: "A gentle, mild breeze.",
  },
  {
    word: "effervescent",
    hint: "Bubbling or fizzing, as with carbonation.",
  },
  {
    word: "quintessence",
    hint: "The pure essence of something; the most perfect embodiment of a quality.",
  },
  {
    word: "crepuscular",
    hint: "Active or occurring at dawn or dusk.",
  },
  {
    word: "melancholic",
    hint: "Characterized by or expressing sadness, gloom, or depression.",
  },
  {
    word: "denouement",
    hint: "The final part of a play, film, or narrative in which the strands of the plot are drawn together and matters are explained or resolved.",
  },
  {
    word: "ephemeral",
    hint: "Lasting for a very short time; impermanent.",
  },
  {
    word: "quixotic",
    hint: "Exceedingly idealistic; unrealistic and impractical.",
  },
  {
    word: "zeitgeist",
    hint: "The defining spirit or mood of a particular period of time.",
  },
  {
    word: "kaleidoscope",
    hint: "A tube containing mirrors and pieces of colored glass or paper whose reflections create changing patterns.",
  },
  {
    word: "meticulous",
    hint: "Showing great attention to detail; very careful and precise.",
  },
  {
    word: "labyrinth",
    hint: "A complicated irregular network of passages or paths in which it is difficult to find one's way.",
  },
  {
    word: "cacophony",
    hint: "A harsh, discordant mixture of sounds.",
  },
  {
    word: "peripheral",
    hint: "Related to or situated on the edge or periphery of something.",
  },
  {
    word: "threshold",
    hint: "A point of entry or beginning; the magnitude or intensity that must be exceeded for a certain reaction or phenomenon to occur.",
  },
  {
    word: "nostalgia",
    hint: "A sentimental longing or wistful affection for the past.",
  },
  {
    word: "euphoria",
    hint: "A feeling or state of intense excitement and happiness.",
  },
  {
    word: "mercurial",
    hint: "Subject to sudden or unpredictable changes of mood or mind.",
  },
  {
    word: "paradox",
    hint: "A seemingly absurd or contradictory statement or proposition which when investigated may prove to be well founded or true.",
  },
  {
    word: "symposium",
    hint: "A conference or meeting to discuss a particular subject.",
  },
  {
    word: "theorem",
    hint: "A statement that has been proven based on previously established statements.",
  },
  {
    word: "cavalier",
    hint: "Showing a lack of proper concern; offhand or casual.",
  },
  {
    word: "vernacular",
    hint: "The language or dialect spoken by the ordinary people in a particular country or region.",
  },
  {
    word: "crescendo",
    hint: "A gradual increase in loudness or intensity.",
  },
  {
    word: "insomnia",
    hint: "Habitual sleeplessness; inability to sleep.",
  },
  {
    word: "wanderlust",
    hint: "A strong desire to travel and explore the world.",
  },
  {
    word: "charisma",
    hint: "Compelling attractiveness or charm that can inspire devotion in others.",
  },
  {
    word: "eclectic",
    hint: "Deriving ideas, style, or taste from a broad and diverse range of sources.",
  },
  {
    word: "enigmatic",
    hint: "Difficult to interpret or understand; mysterious.",
  },
  {
    word: "synthesis",
    hint: "The combination of components or elements to form a connected whole.",
  },
  {
    word: "zealous",
    hint: "Having or showing zeal; enthusiastically devoted or diligent.",
  },
  {
    word: "metaphor",
    hint: "A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable.",
  },
  {
    word: "oxygen",
    hint: "A colorless, odorless gas essential for life.",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface.",
  },
  {
    word: "painting",
    hint: "An art form using colors on a surface to create images or expression.",
  },
  {
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena.",
  },
  {
    word: "football",
    hint: "A popular sport played with a spherical ball.",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cocoa beans.",
  },
  {
    word: "butterfly",
    hint: "An insect with colorful wings and a slender body.",
  },
  {
    word: "history",
    hint: "The study of past events and human civilization.",
  },
  {
    word: "pizza",
    hint: "A savory dish consisting of a round, flattened base with toppings.",
  },
  {
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    word: "camera",
    hint: "A device used to capture and record images or videos.",
  },
  {
    word: "diamond",
    hint: "A precious gemstone known for its brilliance and hardness.",
  },
  {
    word: "adventure",
    hint: "An exciting or daring experience.",
  },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  {
    word: "bicycle",
    hint: "A human-powered vehicle with two wheels.",
  },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon.",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage made from roasted coffee beans.",
  },
  {
    word: "dance",
    hint: "A rhythmic movement of the body often performed to music.",
  },
  {
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "orchestra",
    hint: "A large ensemble of musicians playing various instruments.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
  },
  {
    word: "novel",
    hint: "A long work of fiction, typically with a complex plot and characters.",
  },
  {
    word: "sculpture",
    hint: "A three-dimensional art form created by shaping or combining materials.",
  },
  {
    word: "symphony",
    hint: "A long musical composition for a full orchestra, typically in multiple movements.",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    word: "ballet",
    hint: "A classical dance form characterized by precise and graceful movements.",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height.",
  },
  {
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes.",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
  },
  {
    word: "universe",
    hint: "All existing matter, space, and time as a whole.",
  },
  {
    word: "piano",
    hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
  },
  {
    word: "vacation",
    hint: "A period of time devoted to pleasure, rest, or relaxation.",
  },
  {
    word: "rainforest",
    hint: "A dense forest characterized by high rainfall and biodiversity.",
  },
  {
    word: "theater",
    hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
  },
  {
    word: "telephone",
    hint: "A device used to transmit sound over long distances.",
  },
  {
    word: "language",
    hint: "A system of communication consisting of words, gestures, and syntax.",
  },
  {
    word: "desert",
    hint: "A barren or arid land with little or no precipitation.",
  },
  {
    word: "sunflower",
    hint: "A tall plant with a large yellow flower head.",
  },
  {
    word: "fantasy",
    hint: "A genre of imaginative fiction involving magic and supernatural elements.",
  },
  {
    word: "telescope",
    hint: "An optical instrument used to view distant objects in space.",
  },
  {
    word: "breeze",
    hint: "A gentle wind.",
  },
  {
    word: "oasis",
    hint: "A fertile spot in a desert where water is found.",
  },
  {
    word: "photography",
    hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
  },
  {
    word: "safari",
    hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star and does not produce light of its own.",
  },
  {
    word: "river",
    hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
  },
  {
    word: "tropical",
    hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
  },
  {
    word: "mysterious",
    hint: "Difficult or impossible to understand, explain, or identify.",
  },
  {
    word: "enigma",
    hint: "Something that is mysterious, puzzling, or difficult to understand.",
  },
  {
    word: "paradox",
    hint: "A statement or situation that contradicts itself or defies intuition.",
  },
  {
    word: "puzzle",
    hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
  },
  {
    word: "whisper",
    hint: "To speak very softly or quietly, often in a secretive manner.",
  },
  {
    word: "shadow",
    hint: "A dark area or shape produced by an object blocking the light.",
  },
  {
    word: "secret",
    hint: "Something kept hidden or unknown to others.",
  },
  {
    word: "curiosity",
    hint: "A strong desire to know or learn something.",
  },
  {
    word: "unpredictable",
    hint: "Not able to be foreseen or known beforehand; uncertain.",
  },
  {
    word: "obfuscate",
    hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
  },
  {
    word: "unveil",
    hint: "To make known or reveal something previously secret or unknown.",
  },
  {
    word: "illusion",
    hint: "A false perception or belief; a deceptive appearance or impression.",
  },
  {
    word: "moonlight",
    hint: "The light from the moon.",
  },
  {
    word: "vibrant",
    hint: "Full of energy, brightness, and life.",
  },
  {
    word: "nostalgia",
    hint: "A sentimental longing or wistful affection for the past.",
  },
];
