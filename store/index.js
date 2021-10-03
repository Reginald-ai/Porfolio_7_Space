const state = () => ({
  planets: [
    {
      title: "Mercury ",
      img: "mercury.png",
      text1:
        "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.",
      text2:
        "Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, day temperatures can reach highs of 800°F (430°C). Without an atmosphere to retain that heat at night, temperatures can dip as low as -290°F (-180°C).",
      text3:
        "Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
      id: 1
    },
    {
      title: "Venus ",
      img: "venus.png",
      text1:
        "It's a cloud-swaddled planet named for a love goddess, often called Earth’s twin. But pull up a bit closer, and Venus turns hellish. Our nearest planetary neighbor, the second planet from the Sun, has a surface hot enough to melt lead. The atmosphere is so thick that, from the surface, the Sun is just a smear of light.",
      text2:
        "In some ways it is more an opposite of Earth than a twin: Venus spins backward, has a day longer than its year, and lacks any semblance of seasons. It might once have been a habitable ocean world, like Earth, but that was at least a billion years ago.",
      text3:
        "A runaway greenhouse effect turned all surface water into vapor, which then leaked slowly into space. The present-day surface of volcanic rock is blasted by high temperatures and pressures. Asked if the surface of Venus is likely to be life-bearing today, we can give a quick answer: a hard “no.”",
      id: 2
    },
    {
      title: "Earth ",
      img: "earth.png",
      text1:
        "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system,",
      text2:
        "it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",
      text3:
        "The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”",
      id: 3
    },
    {
      title: "Mars ",
      img: "mars.png",
      text1:
        "Mars is no place for the faint-hearted. It’s dry, rocky, and bitter cold. The fourth planet from the Sun, Mars is one of Earth's two closest planetary neighbors (Venus is the other).",
      text2:
        "Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light.",
      text3:
        "Despite being inhospitable to humans, robotic explorers – like NASA's new Perseverance rover – are serving as pathfinders to eventually get humans to the surface of the Red Planet.",
      id: 4
    },
    {
      title: "Jupiter ",
      img: "jupiter.png",
      text1:
        "Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold,",
      text2:
        "windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
      text3:
        "Jupiter is surrounded by dozens of moons. Jupiter also has several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice.",
      id: 5
    },
    {
      title: "Saturn ",
      img: "saturn.png",
      text1:
        "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Like fellow gas giant Jupiter,Saturn is a massive ball made mostly of hydrogen and helium.",
      text2:
        "Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.",
      text3:
        "From the jets of water that spray from Saturn's moon Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries.",
      id: 6
    },
    {
      title: "Uranus ",
      img: "uranus.png",
      text1:
        "The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit.",
      text2:
        "This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball. The first planet found with the aid of a telescope,",
      text3:
        "Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.",
      id: 7
    },
    {
      title: "Neptune ",
      img: "neptune.png",
      text1:
        "Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth,",
      text2:
        "Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.",
      text3:
        "Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.",
      id: 8
    }
  ],
  visions: [
    {
      id: "1",
      img: "space-station-svgrepo-com.png",
      title: "International Space Station",
      text:
        "The International Space Station is a large spacecraft in orbit around Earth. It serves as a home where crews of astronauts and cosmonauts live. The space station is also a unique science laboratory. Several nations worked together to build and use the space station. The space station is made of parts that were assembled in space by astronauts. It orbits Earth at an average altitude of approximately 250 miles. It travels at 17,500 mph. This means it orbits Earth every 90 minutes. NASA is using the space station to learn more about living and working in space. These lessons will make it possible to send humans farther into space than ever before.",
      year: "November 1998",
      depth: {
        title: "How Old Is the Space Station?",
        text:
          "The first piece of the International Space Station was launched in November 1998. A Russian rocket launched the Russian Zarya (zar EE uh) control module. About two weeks later, the space shuttle Endeavour met Zarya in orbit. The space shuttle was carrying the U.S. Unity node. The crew attached the Unity node to Zarya.",
        text1:
          "More pieces were added over the next two years before the station was ready for people to live there. The first crew arrived on November 2, 2000. People have lived on the space station ever since. More pieces have been added over time. NASA and its partners from around the world completed construction of the space station in 2011"
      }
    },
    {
      id: "2",
      img: "space-ship-svgrepo-com.png",
      title: "New Horizons",
      text:
        "NASA's New Horizons spacecraft is the first spacecraft to explore Pluto up close, flying by the dwarf planet and its moons on July 14, 2015. In early 2019, New Horizons flew past its second major science target—2014 MU69, the most distant object ever explored up close.",
      year: "Jan. 19, 2006 / 19:00:00 UT",
      depth: {
        title: "In Depth: New Horizons",
        text:
          "New Horizons is a NASA mission to study the dwarf planet Pluto, its moons, and other objects in the Kuiper Belt, a region of the solar system that extends from about 30 AU, near the orbit of Neptune, to about 50 AU from the Sun.",
        text1:
          "It was the first mission in NASA’s New Frontiers program, a medium-class, competitively selected and principal investigator-led series of missions. (The program also includes Juno and OSIRIS-REx.) "
      }
    },
    {
      id: "3",
      img: "space-shuttle-svgrepo-com.png",
      title: "Space Shuttle",
      text:
        "The space shuttle was NASA’s space transportation system. It carried astronauts and cargo to and from Earth orbit. The first space shuttle flight took place April 12, 1981. The shuttle made its final landing July 21, 2011. During those 30 years, the space shuttle launched on 135 missions.",
      year: "April 12, 1981",
      depth: {
        title: "What Did the Space Shuttle Do?",
        text:
          "The space shuttle carried as many as seven astronauts at a time to and from space. In all, 355 people flew on the shuttle. Some of them flew more than one time. During its history, the space shuttle flew many different types of missions. ",
        text1:
          " It launched satellites and served as an orbiting science laboratory. Its crews repaired and improved other spacecraft, such as the Hubble Space Telescope. The shuttle also flew missions for the military. On its later missions, the space shuttle was mostly used to work on the International Space Station."
      }
    },
    {
      id: "4",
      img: "alien-space-svgrepo-com.png",
      title: "The search for alien life",
      text:
        "The desire to know our place in the universe is a core human yearning, and people have pondered the question for thousands of years. Indeed, hundreds of years before the birth of Christ, Greek philosophers such as Anaximander and Epicurus speculated that the cosmos is teeming with planets, many of which may support life.",
      year: "16th century",
      depth: {
        title: "Are we alone?",
        text:
          "We couldn't move beyond mere speculation for a very long time, however — until we invented telescopes and developed a proper understanding of the scientific method. Humanity notched both of those milestones centuries ago, and scientists are now going great guns in the search for alien life.",
        text1:
          "Well, going great guns is a bit of an overstatement. But we've made considerable progress, especially in the last decade or so, and some big discoveries may be coming soon. Let's take a brief look at where the hunt for ET has been and where it's headed."
      }
    },
    {
      id: "5",
      img: "planet-space-svgrepo-com.png",
      title: "What is a Planet?",
      text:
        "This seemingly simple question doesn't have a simple answer. Everyone knows that Earth, Mars and Jupiter are planets. But both Pluto and Ceres were once considered planets until new discoveries triggered scientific debate about how to best describe them—a vigorous debate that continues to this day.",
      year: "17th century",
      depth: {
        title: "The Scientific Process",
        text:
          "Science is a dynamic process of questioning, hypothesizing, discovering, and changing previous ideas based on what is learned.",
        text1:
          "Scientific ideas are developed through reasoning and tested against observations. Scientists assess and question each other's work in a critical process called peer review."
      }
    },
    {
      id: "6",
      img: "space-capsule-svgrepo-com (1).png",
      title: "Space capsule",
      text:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Capsules are distinguished from satellites primarily by the ability to survive reentry and return a payload to the Earth's surface from orbit.",
      year: "17th century",
      depth: {
        title: "The History Process",
        text:
          ". Capsule-based crewed spacecraft such as Soyuz or Orion are often supported by a service or adapter module, and sometimes augmented with an extra module for extended space operations. Capsules make up the majority of crewed spacecraft designs, although one crewed spaceplane, the Space Shuttle, has flown in orbit.",
        text1:
          "Current examples of crewed space capsules include Soyuz, Shenzhou, and Dragon 2. Examples of new crew capsules currently in development include NASA's Orion and Starliner, Russia's Orel, India's Gaganyaan, and China's Next-generation crewed spacecraft. Historic examples of crewed capsules include Vostok, Mercury, Voskhod, Gemini, and Apollo. A crewed space capsule must be able to sustain life in an often demanding thermal and radiation environment in the vacuum of space. It may be expendable (used once, like Soyuz) or reusable."
      }
    },
    {
      id: "7",
      img: "sun-space-svgrepo-com 1.png",
      title: "The Sun",
      text:
        "Our Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit.",
      year: "unknown",
      depth: {
        title: "Potential for Life ",
        text:
          "The Sun itself is not a good place for living things, with its hot, energetic mix of gases and plasma.",
        text1:
          "But the Sun has made life on Earth possible, providing warmth as well as the energy that organisms like plants use to form the basis of many food chains."
      }
    },
    {
      id: "8",
      img: "planet-svgrepo-com 1.png",
      title: "The Moon Landing",
      text:
        "Apollo 17 mission Commander Eugene Cernan checks out the lunar roving vehicle (LRV) at the Taurus-Littrow landing site in December 1972. LRVs, also called moon buggies, are electric vehicles designed to expand astronauts' range of exploration on the low-gravity surface of the moon. The east end of the moon's South Massif rises in the background at right.",
      year: "December 1972",
      depth: {
        title: "A brief history of moon exploration",
        text:
          "For as long as humans have gazed skyward, the moon has been a focus of fascination. We could always see our cosmic partner’s mottled, cratered face by eye. Later, ",
        text1:
          " telescopes sharpened our views of its bumps, ridges, and relict lava seas. Finally, in the mid-20th century, humans visited Earth’s moon and saw its surface up close."
      }
    }
  ]
});

const getters = {
  getPlanets: state => id => {
    return state.planets.find(planet => planet.id == id);
  },
  getVisions: state => id => {
    return state.visions.find(vision => vision.id == id);
  }
};

export default {
  state,
  getters
};
