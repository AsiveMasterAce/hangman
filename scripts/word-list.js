// const wordList = [
//   {
//     word: "oxygen",
//     hint: "A colorless, odorless gas essential for life.",
//   },
//   // {
//   //     word: "mountain",
//   //     hint: "A large natural elevation of the Earth's surface."
//   // },
//   // {
//   //     word: "painting",
//   //     hint: "An art form using colors on a surface to create images or expression."
//   // },
//   // {
//   //     word: "astronomy",
//   //     hint: "The scientific study of celestial objects and phenomena."
//   // },
//   // {
//   //     word: "football",
//   //     hint: "A popular sport played with a spherical ball."
//   // },
//   // {
//   //     word: "chocolate",
//   //     hint: "A sweet treat made from cocoa beans."
//   // },
//   // {
//   //     word: "butterfly",
//   //     hint: "An insect with colorful wings and a slender body."
//   // },
//   // {
//   //     word: "history",
//   //     hint: "The study of past events and human civilization."
//   // },
//   // {
//   //     word: "pizza",
//   //     hint: "A savory dish consisting of a round, flattened base with toppings."
//   // },
//   // {
//   //     word: "jazz",
//   //     hint: "A genre of music characterized by improvisation and syncopation."
//   // },
//   // {
//   //     word: "camera",
//   //     hint: "A device used to capture and record images or videos."
//   // },
//   // {
//   //     word: "diamond",
//   //     hint: "A precious gemstone known for its brilliance and hardness."
//   // },
//   // {
//   //     word: "adventure",
//   //     hint: "An exciting or daring experience."
//   // },
//   // {
//   //     word: "science",
//   //     hint: "The systematic study of the structure and behavior of the physical and natural world."
//   // },
//   // {
//   //     word: "bicycle",
//   //     hint: "A human-powered vehicle with two wheels."
//   // },
//   // {
//   //     word: "sunset",
//   //     hint: "The daily disappearance of the sun below the horizon."
//   // },
//   // {
//   //     word: "coffee",
//   //     hint: "A popular caffeinated beverage made from roasted coffee beans."
//   // },
//   // {
//   //     word: "dance",
//   //     hint: "A rhythmic movement of the body often performed to music."
//   // },
//   // {
//   //     word: "galaxy",
//   //     hint: "A vast system of stars, gas, and dust held together by gravity."
//   // },
//   // {
//   //     word: "orchestra",
//   //     hint: "A large ensemble of musicians playing various instruments."
//   // },
//   // {
//   //     word: "volcano",
//   //     hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
//   // },
//   // {
//   //     word: "novel",
//   //     hint: "A long work of fiction, typically with a complex plot and characters."
//   // },
//   // {
//   //     word: "sculpture",
//   //     hint: "A three-dimensional art form created by shaping or combining materials."
//   // },
//   // {
//   //     word: "symphony",
//   //     hint: "A long musical composition for a full orchestra, typically in multiple movements."
//   // },
//   // {
//   //     word: "architecture",
//   //     hint: "The art and science of designing and constructing buildings."
//   // },
//   // {
//   //     word: "ballet",
//   //     hint: "A classical dance form characterized by precise and graceful movements."
//   // },
//   // {
//   //     word: "astronaut",
//   //     hint: "A person trained to travel and work in space."
//   // },
//   // {
//   //     word: "waterfall",
//   //     hint: "A cascade of water falling from a height."
//   // },
//   // {
//   //     word: "technology",
//   //     hint: "The application of scientific knowledge for practical purposes."
//   // },
//   // {
//   //     word: "rainbow",
//   //     hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
//   // },
//   // {
//   //     word: "universe",
//   //     hint: "All existing matter, space, and time as a whole."
//   // },
//   // {
//   //     word: "piano",
//   //     hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
//   // },
//   // {
//   //     word: "vacation",
//   //     hint: "A period of time devoted to pleasure, rest, or relaxation."
//   // },
//   // {
//   //     word: "rainforest",
//   //     hint: "A dense forest characterized by high rainfall and biodiversity."
//   // },
//   // {
//   //     word: "theater",
//   //     hint: "A building or outdoor area in which plays, movies, or other performances are staged."
//   // },
//   // {
//   //     word: "telephone",
//   //     hint: "A device used to transmit sound over long distances."
//   // },
//   // {
//   //     word: "language",
//   //     hint: "A system of communication consisting of words, gestures, and syntax."
//   // },
//   // {
//   //     word: "desert",
//   //     hint: "A barren or arid land with little or no precipitation."
//   // },
//   // {
//   //     word: "sunflower",
//   //     hint: "A tall plant with a large yellow flower head."
//   // },
//   // {
//   //     word: "fantasy",
//   //     hint: "A genre of imaginative fiction involving magic and supernatural elements."
//   // },
//   // {
//   //     word: "telescope",
//   //     hint: "An optical instrument used to view distant objects in space."
//   // },
//   // {
//   //     word: "breeze",
//   //     hint: "A gentle wind."
//   // },
//   // {
//   //     word: "oasis",
//   //     hint: "A fertile spot in a desert where water is found."
//   // },
//   // {
//   //     word: "photography",
//   //     hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
//   // },
//   // {
//   //     word: "safari",
//   //     hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
//   // },
//   // {
//   //     word: "planet",
//   //     hint: "A celestial body that orbits a star and does not produce light of its own."
//   // },
//   // {
//   //     word: "river",
//   //     hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
//   // },
//   // {
//   //     word: "tropical",
//   //     hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
//   // },
//   // {
//   //     word: "mysterious",
//   //     hint: "Difficult or impossible to understand, explain, or identify."
//   // },
//   // {
//   //     word: "enigma",
//   //     hint: "Something that is mysterious, puzzling, or difficult to understand."
//   // },
//   // {
//   //     word: "paradox",
//   //     hint: "A statement or situation that contradicts itself or defies intuition."
//   // },
//   // {
//   //     word: "puzzle",
//   //     hint: "A game, toy, or problem designed to test ingenuity or knowledge."
//   // },
//   // {
//   //     word: "whisper",
//   //     hint: "To speak very softly or quietly, often in a secretive manner."
//   // },
//   // {
//   //     word: "shadow",
//   //     hint: "A dark area or shape produced by an object blocking the light."
//   // },
//   // {
//   //     word: "secret",
//   //     hint: "Something kept hidden or unknown to others."
//   // },
//   // {
//   //     word: "curiosity",
//   //     hint: "A strong desire to know or learn something."
//   // },
//   // {
//   //     word: "unpredictable",
//   //     hint: "Not able to be foreseen or known beforehand; uncertain."
//   // },
//   // {
//   //     word: "obfuscate",
//   //     hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
//   // },
//   // {
//   //     word: "unveil",
//   //     hint: "To make known or reveal something previously secret or unknown."
//   // },
//   // {
//   //     word: "illusion",
//   //     hint: "A false perception or belief; a deceptive appearance or impression."
//   // },
//   // {
//   //     word: "moonlight",
//   //     hint: "The light from the moon."
//   // },
//   // {
//   //     word: "vibrant",
//   //     hint: "Full of energy, brightness, and life."
//   // },
//   // {
//   //     word: "nostalgia",
//   //     hint: "A sentimental longing or wistful affection for the past."
//   // },
//   // {
//   //     word: "brilliant",
//   //     hint: "Exceptionally clever, talented, or impressive."
//   // },

//   {
//     word: "serendipity",
//     hint: "The occurrence and development of events by chance in a happy or beneficial way.",
//   },
//   {
//     word: "quintessential",
//     hint: "Representing the most perfect or typical example of a quality or class.",
//   },
//   {
//     word: "clandestine",
//     hint: "Kept secret or done secretively, especially to avoid detection.",
//   },
//   {
//     word: "acquiesce",
//     hint: "Accept something reluctantly but without protest.",
//   },
//   {
//     word: "zephyr",
//     hint: "A soft, gentle breeze.",
//   },
//   {
//     word: "ephemeral",
//     hint: "Lasting for a very short time.",
//   },
//   {
//     word: "juxtaposition",
//     hint: "The fact of two things being placed close together with contrasting effect.",
//   },
//   {
//     word: "onomatopoeia",
//     hint: "A word that phonetically imitates or resembles the sound it describes.",
//   },
//   {
//     word: "anachronism",
//     hint: "A thing belonging or appropriate to a period other than that in which it exists.",
//   },
//   {
//     word: "sanguine",
//     hint: "Optimistic or positive, especially in an apparently inappropriate situation.",
//   },
//   {
//     word: "esoteric",
//     hint: "Intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.",
//   },
//   {
//     word: "melancholic",
//     hint: "Affected by or inclined to melancholy; gloomy.",
//   },
//   {
//     word: "parsimonious",
//     hint: "Excessively unwilling to spend money or use resources.",
//   },
//   {
//     word: "serendipitous",
//     hint: "Occurring or discovered by chance in a happy or beneficial way.",
//   },
//   {
//     word: "ubiquitous",
//     hint: "Present, appearing, or found everywhere.",
//   },
//   {
//     word: "paradigm",
//     hint: "A typical example or model of something.",
//   },
//   {
//     word: "surreptitious",
//     hint: "Stealthy or secretive.",
//   },
//   {
//     word: "quixotic",
//     hint: "Exceedingly idealistic; unrealistic and impractical.",
//   },
//   {
//     word: "effervescent",
//     hint: "Bubbly or fizzy in appearance or action.",
//   },
//   {
//     word: "quiescent",
//     hint: "Quietly at rest; dormant.",
//   },
//   {
//     word: "panacea",
//     hint: "A solution or remedy for all difficulties or diseases.",
//   },
//   {
//     word: "palimpsest",
//     hint: "A manuscript or piece of writing material on which the original writing has been effaced to make room for later writing but of which traces remain.",
//   },
//   {
//     word: "zeitgeist",
//     hint: "The general intellectual, moral, and cultural climate of an era.",
//   },
//   {
//     word: "recursive",
//     hint: "Relating to or involving a program that calls itself, or a definition that refers back to earlier parts of the definition.",
//   },
//   {
//     word: "schadenfreude",
//     hint: "Pleasure derived by someone from another person's misfortune.",
//   },
//   {
//     word: "conundrum",
//     hint: "A confusing and difficult problem or question.",
//   },
//   {
//     word: "insouciant",
//     hint: "Showing a casual lack of concern; indifferent.",
//   },
//   {
//     word: "abstruse",
//     hint: "Difficult to understand; obscure.",
//   },
//   {
//     word: "lugubrious",
//     hint: "Looking or sounding sad and dismal.",
//   },
//   {
//     word: "sanguine",
//     hint: "Optimistic or positive, especially in an apparently inappropriate situation.",
//   },
//   {
//     word: "idiosyncratic",
//     hint: "Relating to idiosyncrasies; peculiar or individual.",
//   },
//   {
//     word: "ineffable",
//     hint: "Too great or extreme to be expressed or described in words.",
//   },
//   {
//     word: "oxymoron",
//     hint: "A figure of speech in which two opposite or contradictory terms appear together.",
//   },
//   {
//     word: "penumbra",
//     hint: "The partially shaded outer region of the shadow cast by an opaque object.",
//   },
//   {
//     word: "plethora",
//     hint: "A large or excessive amount of something.",
//   },
//   {
//     word: "quagmire",
//     hint: "A soft, wet, muddy area of ground that gives way underfoot.",
//   },
//   {
//     word: "quintessential",
//     hint: "Representing the most perfect or typical example of a quality or class.",
//   },
//   {
//     word: "recalcitrant",
//     hint: "Obstinately defiant of authority or restraint.",
//   },
//   {
//     word: "serendipity",
//     hint: "The occurrence and development of events by chance in a happy or beneficial way.",
//   },
//   {
//     word: "sibilant",
//     hint: "Making a hissing sound like the letter 'S'.",
//   },
//   {
//     word: "sycophantic",
//     hint: "Seeking to gain advantage by flattering influential people.",
//   },
//   {
//     word: "taciturn",
//     hint: "Reserved or uncommunicative in speech.",
//   },
//   {
//     word: "tintinnabulation",
//     hint: "The ringing or sounding of bells.",
//   },
// ];

const wordList = [
  {
    word: "SUITCASE",
    hint: "A container used for carrying personal belongings while traveling."
  },
  {
    word: "SAXOPHONE",
    hint: "A woodwind musical instrument known for its smooth, jazzy sound."
  },
  {
    word: "RENAISSANCE",
    hint: "A period of European history marked by a revival of art, literature, and learning."
  },
  {
    word: "ALGORITHM",
    hint: "A step-by-step procedure for solving a problem or accomplishing a task."
  },
  {
    word: "PORTFOLIO",
    hint: "A collection of work samples or investment assets."
  },
  {
    word: "CHRYSANTHEMUM",
    hint: "A flowering plant with daisy-like blooms."
  },
  {
    word: "PERSEVERANCE",
    hint: "The quality of continuing to try despite difficulties or setbacks."
  },
  {
    word: "ARCHIPELAGO",
    hint: "A group of islands clustered together in a sea or ocean."
  },
  {
    word: "SILHOUETTE",
    hint: "The dark outline or shape of something shown against a lighter background."
  },
  {
    word: "BIOSPHERE",
    hint: "The part of the Earth's environment where life exists."
  },
  {
    word: "PHILANTHROPY",
    hint: "The practice of donating money, goods, or time to help others or to do good for society."
  },
  {
    word: "PALINDROME",
    hint: "A word, phrase, number, or other sequence of characters that reads the same backward as forward."
  },
  {
    word: "RENAISSANCE",
    hint: "A period of European history marked by a revival of art, literature, and learning."
  },
  {
    word: "AQUAMARINE",
    hint: "A bluish-green variety of the mineral beryl, used as a gemstone."
  },
  {
    word: "FILIBUSTER",
    hint: "A political procedure where a senator or representative extends debate to delay or prevent a vote on a bill."
  },
  {
    word: "QUINTESSENTIAL",
    hint: "Representing the most perfect or typical example of a quality or class."
  },
  {
    word: "BIOLUMINESCENCE",
    hint: "The production and emission of light by a living organism."
  },
  {
    word: "ONOMATOPOEIA",
    hint: "A word that phonetically imitates or resembles the sound it describes."
  },
  {
    word: "SERENDIPITY",
    hint: "The occurrence and development of events by chance in a happy or beneficial way."
  },
  {
    word: "EQUILIBRIUM",
    hint: "A state of balance between opposing forces or actions."
  },
  {
    word: "KARAOKE",
    hint: "A form of entertainment where people sing along with recorded music."
  },
  {
    word: "CALLIGRAPHY",
    hint: "The art of beautiful handwriting."
  },
  {
    word: "HAIKU",
    hint: "A traditional form of Japanese poetry consisting of three lines."
  },
  {
    word: "CHRONOLOGY",
    hint: "The arrangement of events or dates in the order of their occurrence."
  },
  {
    word: "ZEPHYR",
    hint: "A gentle, mild breeze."
  },
  {
    word: "EFFERVESCENT",
    hint: "Bubbling or fizzing, as with carbonation."
  },
  {
    word: "QUINTESSENCE",
    hint: "The pure essence of something; the most perfect embodiment of a quality."
  },
  {
    word: "CREPUSCULAR",
    hint: "Active or occurring at dawn or dusk."
  },
  {
    word: "MELANCHOLIC",
    hint: "Characterized by or expressing sadness, gloom, or depression."
  },
  {
    word: "DENOUEMENT",
    hint: "The final part of a play, film, or narrative in which the strands of the plot are drawn together and matters are explained or resolved."
  },
  {
    word: "EPHEMERAL",
    hint: "Lasting for a very short time; impermanent."
  },
  {
    word: "QUIXOTIC",
    hint: "Exceedingly idealistic; unrealistic and impractical."
  },
  {
    word: "ZEITGEIST",
    hint: "The defining spirit or mood of a particular period of time."
  },
  {
    word: "QUINTESSENTIAL",
    hint: "Representing the most perfect or typical example of a quality or class."
  },
  {
    word: "SERENDIPITY",
    hint: "The occurrence and development of events by chance in a happy or beneficial way."
  },
  {
    word: "EQUILIBRIUM",
    hint: "A state of balance between opposing forces or actions."
  },
  {
    word: "KARAOKE",
    hint: "A form of entertainment where people sing along with recorded music."
  },
  {
    word: "CALLIGRAPHY",
    hint: "The art of beautiful handwriting."
  },
  {
    word: "HAIKU",
    hint: "A traditional form of Japanese poetry consisting of three lines."
  },
  {
    word: "CHRONOLOGY",
    hint: "The arrangement of events or dates in the order of their occurrence."
  },
  {
    word: "ZEPHYR",
    hint: "A gentle, mild breeze."
  },
  {
    word: "EFFERVESCENT",
    hint: "Bubbling or fizzing, as with carbonation."
  }
];