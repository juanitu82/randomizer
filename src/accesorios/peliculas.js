const util = require('util');

  let accion = [
      { title: '300', year: 2006 },
      { title: 'Apocalypto', year: 2006 },
      { title: 'Assault on Precinct 13', year: 2005 },
      { title: 'Batman Begins', year: 2005 },
      { title: 'Brawl in Cell Block 99', year: 2017 },
      { title: 'Casino Royale', year: 2006 },
      { title: 'Collateral', year: 2004 },
      { title: 'Crawl', year: 2019 },
      { title: 'Death Proof', year: 2007 },
      { title: 'Die Hard', year: 1988 },
      { title: 'Die Hard with a Vengeance', year: 1995 },
      { title: 'Enemy Mine', year: 1985 },
      { title: 'Enemy of the State', year: 1998 },
      { title: 'Face/Off', year: 1997 },
      { title: 'Fast & Furious 5', year: 2011 },
      { title: 'First Blood', year: 1982 },
      { title: 'Gone in 60 Seconds', year: 2000 },
      { title: 'Highlander', year: 1986 },
      { title: 'I, Robot', year: 2004 },
      { title: 'John Wick', year: 2014 },
      { title: 'Kill Bill: Vol. 1', year: 2003 },
      { title: 'Kill Bill: Vol. 2', year: 2004 },
      { title: 'Law Abiding Citizen', year: 2009 },
      { title: 'Limitless', year: 2011 },
      { title: 'Lock Up', year: 1989 },
      { title: 'Mad Max: Fury Road', year: 2015 },
      { title: 'Man on Fire', year: 2004 },
      { title: 'Mission Impossible', year: 1996 },
      { title: 'Mission Impossible III', year: 2006 },
      { title: "Ocean's Eleven", year: 2001 },
      { title: 'Oldboy', year: 2003 },
      { title: 'Olympus Has Fallen', year: 2013 },
      { title: 'Patriot Games', year: 1992 },
      { title: 'Resident Evil', year: 2002 },
      { title: 'Ronin', year: 1998 },
      { title: 'Rush', year: 2013 },
      { title: 'Shooter', year: 2007 },
      { title: 'Sin City', year: 2005 },
      { title: 'Southpaw', year: 2015 },
      { title: 'Speed', year: 1994 },
      { title: 'Taken', year: 2008 },
      { title: 'The Boondock Saints', year: 1999 },
      { title: 'The Bourne Identity', year: 2002 },
      { title: 'The Bourne Supremacy', year: 2004 },
      { title: 'The Bourne Ultimatum', year: 2007 },
      { title: 'The Dark Knight', year: 2008 },
      { title: 'The Dark Knight Rises', year: 2012 },
      { title: 'The Equalizer', year: 2014 },
      { title: 'The Fast and the Furious', year: 2001 },
      { title: 'The Fugitive', year: 1993 },
      { title: 'The Hunt for Red October', year: 1990 },
      { title: 'The Italian Job', year: 2003 },
      { title: 'The Jackal', year: 1997 },
      { title: 'The Rock', year: 1996 },
      { title: 'The Score', year: 2001 },
      { title: 'The Wolverine', year: 2013 },
      { title: 'Top Gun', year: 1986 },
      { title: 'Top Gun: Maverick', year: 2022 },
      { title: 'Transformers', year: 2007 },
      { title: 'True Lies', year: 1994 },
      { title: 'U-571', year: 2000 },
      { title: 'Warrior', year: 2011 },
      { title: 'World War Z', year: 2013 }
  ]

  let argentinas = [
      { title: '9 Reinas', year: 2000 },
      { title: 'Argentina, 1985', year: 2022 },
      { title: 'Caballos Salvajes', year: 1995 },
      { title: 'Carancho', year: 2010 },
      { title: 'Cenizas del Paraíso', year: 1997 },
      { title: 'El Aura', year: 2005 },
      { title: 'El Clan', year: 2015 },
      { title: 'El Hijo de la Novia', year: 2001 },
      { title: 'El Patrón: Radiografía de un Crimen', year: 2014 },
      { title: 'Elefante Blanco', year: 2012 },
      { title: 'Luna de Avellaneda', year: 2004 },
      { title: 'Séptimo', year: 2013 },
      { title: 'Tiempo de Valientes', year: 2005 },
      { title: 'Un Oso Rojo', year: 2002 },
      { title: 'XXY', year: 2007 }
  ]
  
  let comedias = [
      { title: 'Ace Ventura: Pet Detective', year: 1994 },
      { title: 'Ace Ventura: When Nature Calls', year: 1995 },
      { title: 'Alfie', year: 2004 },
      { title: 'Along Came Polly', year: 2004 },
      { title: 'American Pie', year: 1999 },
      { title: 'American Psycho', year: 2000 },
      { title: 'Anger Management', year: 2003 },
      { title: 'Annie Hall', year: 1977 },
      { title: 'Army of Darkness', year: 1992 },
      { title: 'As Good as It Gets', year: 1997 },
      { title: 'Burn After Reading', year: 2008 },
      { title: 'Dodgeball: A True Underdog Story', year: 2004 },
      { title: 'Dumb and Dumber', year: 1994 },
      { title: 'Happy Death Day', year: 2017 },
      { title: 'Hitch', year: 2005 },
      { title: 'Hot Shots! Part Deux', year: 1993 },
      { title: 'I Care a Lot', year: 2020 },
      { title: 'Liar Liar', year: 1997 },
      { title: 'Love & Other Drugs', year: 2010 },
      { title: 'Manhattan', year: 1979 },
      { title: 'Mars Attacks!', year: 1996 },
      { title: 'Meet the Parents', year: 2000 },
      { title: "My Best Friend's Wedding", year: 1997 },
      { title: 'Old School', year: 2003 },
      { title: 'Palm Springs', year: 2020 },
      { title: 'Patch Adams', year: 1998 },
      { title: 'Poor Things', year: 2023 },
      { title: 'Road Trip', year: 2000 },
      { title: 'School of Rock', year: 2003 },
      { title: 'Shrek', year: 2001 },
      { title: 'Sideways', year: 2004 },
      { title: 'Silver Linings Playbook', year: 2012 },
      { title: 'Snatch', year: 2000 },
      { title: 'Stuck on You', year: 2003 },
      { title: 'Super Troopers', year: 2001 },
      { title: 'Superbad', year: 2007 },
      { title: 'Team America: World Police', year: 2004 },
      { title: 'Ted', year: 2012 },
      { title: 'Thank You for Smoking', year: 2005 },
      { title: 'The 40-Year-Old Virgin', year: 2005 },
      { title: 'The Big Lebowski', year: 1998 },
      { title: 'The Devil Wears Prada', year: 2006 },
      { title: 'The Hangover', year: 2009 },
      { title: 'The Terminal', year: 2004 },
      { title: "There's Something About Mary", year: 1998 },
      { title: 'Three Billboards Outside Ebbing, Missouri', year: 2017 },
      { title: 'Top Secret!', year: 1984 },
      { title: 'Vicky Cristina Barcelona', year: 2008 },
      { title: "Wayne's World", year: 1992 },
      { title: 'Wedding Crashers', year: 2005 },
      { title: 'When Harry Met Sally...', year: 1989 },
      { title: 'Zoolander', year: 2001 }
  ]
  
  let fantastico = [
      { title: "The Lord of the Rings: The Return of the King", "year": 2003},
      { title: "The Lord of the Rings: The Fellowship of the Ring", "year": 2001},
      { title: "The Lord of the Rings: The Two Towers", "year": 2002},
      { title: 'Avatar', year: 2009 },
      { title: 'Big Fish', year: 2003 },
      { title: 'Clash of the Titans', year: 2010 },
      { title: 'Maleficent', year: 2014 },
      { title: "Pan's Labyrinth", year: 2006 },
      {
        title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        year: 2003
      },
      { title: 'Sleepy Hollow', year: 1999 },
      { title: 'Star Wars: Episode I - The Phantom Menace', year: 1999 },
      { title: 'Star Wars: Episode II - Attack of the Clones', year: 2002 },
      { title: 'Star Wars: Episode III - Revenge of the Sith', year: 2005 },
      { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
      {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980
      },
      { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
      { title: 'The Hobbit: An Unexpected Journey', year: 2012 },
      { title: 'The Hobbit: The Battle of the Five Armies', year: 2014 },
      { title: 'The Hobbit: The Desolation of Smaug', year: 2013 },
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003
      },
      { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
      { title: 'Underworld', year: 2003 },
      { title: 'Van Helsing', year: 2004 },
      { title: 'Warcraft', year: 2016 }
  ]
  
  let aventura = [
      { title: 'Dawn of the Planet of the Apes', year: 2014 },
      { title: 'Dune', year: 2021 },
      { title: 'Indiana Jones and the Last Crusade', year: 1989 },
      { title: 'Indiana Jones and the Temple of Doom', year: 1984 },
      { title: 'Jurassic Park', year: 1993 },
      { title: 'National Treasure', year: 2004 },
      { title: 'Noah', year: 2014 },
      { title: 'Prince of Persia: The Sands of Time', year: 2010 },
      { title: 'Raiders of the Lost Ark', year: 1981 },
      { title: 'Rise of the Planet of the Apes', year: 2011 },
      { title: 'The Count of Monte Cristo', year: 2002 },
      { title: 'The Hunger Games', year: 2012 },
      { title: 'The Hunger Games: Catching Fire', year: 2013 },
      { title: 'The Hunger Games: Mockingjay - Part 1', year: 2014 },
      { title: 'The Hunger Games: Mockingjay - Part 2', year: 2015 },
      {
        title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
        year: 2023
      },
      { title: 'The Physician', year: 2013 },
      { title: 'Tomb Raider', year: 2018 },
      { title: 'Troy', year: 2004 },
      { title: 'War for the Planet of the Apes', year: 2017 }
  ]
  
  let csFiccion = [
      { title: '12 Monkeys', year: 1995 },
      { title: 'A Quiet Place', year: 2018 },
      { title: 'A Quiet Place II', year: 2020 },
      { title: 'Alien', year: 1979 },
      { title: 'Alien 3', year: 1992 },
      { title: 'Aliens', year: 1986 },
      { title: 'Annihilation', year: 2018 },
      { title: 'Another Earth', year: 2011 },
      { title: 'Back to the Future', year: 1985 },
      { title: 'Blade Runner', year: 1982 },
      { title: 'Blade Runner 2049', year: 2017 },
      { title: 'Coherence', year: 2013 },
      { title: 'Contact', year: 1997 },
      { title: 'Edge of Tomorrow', year: 2014 },
      { title: 'El Hoyo', year: 2019 },
      { title: 'Ex Machina', year: 2014 },
      { title: 'Gattaca', year: 1997 },
      { title: 'Gravity', year: 2013 },
      { title: 'Her', year: 2013 },
      { title: 'I Am Legend', year: 2007 },
      { title: 'I Origins', year: 2014 },
      { title: 'Inception', year: 2010 },
      { title: 'Interstellar', year: 2014 },
      { title: 'Melancholia', year: 2011 },
      { title: 'Minority Report', year: 2002 },
      { title: 'Moon', year: 2009 },
      { title: 'Oxygen', year: 2021 },
      { title: 'Possessor', year: 2020 },
      { title: 'Predator', year: 1987 },
      { title: 'Predestination', year: 2014 },
      { title: 'Prometheus', year: 2012 },
      { title: 'Signs', year: 2002 },
      { title: 'Stargate', year: 1994 },
      { title: 'Terminator 2: Judgment Day', year: 1991 },
      { title: 'The Arrival', year: 2016 },
      { title: 'The Fifth Element', year: 1997 },
      { title: 'The Man from Earth', year: 2007 },
      { title: 'The Martian', year: 2015 },
      { title: 'The Matrix', year: 1999 },
      { title: 'The Matrix Reloaded', year: 2003 },
      { title: 'The Matrix Revolutions', year: 2003 },
      { title: 'The Road', year: 2009 },
      { title: 'The Terminator', year: 1984 },
      { title: 'Total Recall', year: 1990 },
      { title: 'Under the Skin', year: 2013 },
      { title: 'Upgrade', year: 2018 }
  ]
  
  let thriller = [
      { title: 'Along Came a Spider', year: 2001 },
      { title: 'Beast', year: 2017 },
      { title: 'Black Swan', year: 2010 },
      { title: 'Bloodline', year: 2018 },
      { title: "Carlito's Way", year: 1993 },
      { title: 'Changeling', year: 2008 },
      { title: 'Contratiempo', year: 2016 },
      { title: 'Crash', year: 2004 },
      { title: 'Derailed', year: 2005 },
      { title: 'El Cuerpo', year: 2012 },
      { title: 'Eyes Wide Shut', year: 1999 },
      { title: 'Fight Club', year: 1999 },
      { title: 'Frozen', year: 2010 },
      { title: 'Gone Girl', year: 2014 },
      { title: 'Hard Candy', year: 2005 },
      { title: 'High Crimes', year: 2002 },
      { title: 'I Saw the Devil', year: 2010 },
      { title: 'Identity', year: 2003 },
      { title: 'Insomnia', year: 2002 },
      { title: 'Killer Joe', year: 2011 },
      { title: 'Kiss the Girls', year: 1997 },
      { title: 'Matchstick Men', year: 2003 },
      { title: 'Memento', year: 2000 },
      { title: 'Mr. Brooks', year: 2007 },
      { title: 'Mulholland Drive', year: 2001 },
      { title: 'Mulholland Falls', year: 1996 },
      { title: 'Nightcrawler', year: 2014 },
      { title: 'Phone Booth', year: 2002 },
      { title: 'Pride and Glory', year: 2008 },
      { title: 'Primal Fear', year: 1996 },
      { title: 'Red Dragon', year: 2002 },
      { title: 'Red Rooms', year: 2023 },
      { title: 'Shutter Island', year: 2010 },
      { title: 'Sleepers', year: 1996 },
      { title: 'Taxi Driver', year: 1976 },
      { title: 'The Bone Collector', year: 1999 },
      { title: 'The Butterfly Effect', year: 2004 },
      { title: 'The Crimson Rivers', year: 2000 },
      { title: 'The Game', year: 1997 },
      { title: "The Girl Who Kicked The Hornet's Nest", year: 2009 },
      { title: 'The Girl Who Played With Fire', year: 2009 },
      { title: 'The Girl With The Dragon Tattoo', year: 2009 },
      { title: 'The Illusionist', year: 2006 },
      { title: 'The Life of David Gale', year: 2003 },
      { title: 'The Machinist', year: 2004 },
      { title: 'The Manchurian Candidate', year: 2004 },
      { title: 'The Mothman Prophecies', year: 2002 },
      { title: 'The Others', year: 2001 },
      { title: 'The Secret in Their Eyes', year: 2009 },
      { title: 'The Silence of the Lambs', year: 1991 },
      { title: 'The Sixth Sense', year: 1999 },
      { title: 'The Stranger', year: 2022 },
      { title: 'The Talented Mr. Ripley', year: 1999 },
      { title: 'The Thomas Crown Affair', year: 1999 },
      { title: 'The Village', year: 2004 },
      { title: 'Thelma', year: 2017 },
      { title: 'To Catch a Killer', year: 1992 },
      { title: 'Wild Things', year: 1998 }
  ]

  let misterio = [
      { title: 'Promising Young Woman', year: 2020 },
      { title: 'The Gift', year: 2015 },
      { title: 'Wind River', year: 2017 }
  ]

  let deporte = [
      { title: 'Any Given Sunday', year: 1999 },
      { title: 'Blue Chips', year: 1994 },
      { title: 'Challengers', year: 2024 },
      { title: 'Cinderella Man', year: 2005 },
      { title: 'Coach Carter', year: 2005 },
      { title: 'Ferrari', year: 2023 },
      { title: 'Ford v Ferrari', year: 2019 },
      { title: 'Invictus', year: 2009 },
      { title: 'Iron Claw', year: 2023 },
      { title: 'Million Dollar Baby', year: 2004 },
      { title: 'Moneyball', year: 2011 },
      { title: 'Raging Bull', year: 1980 },
      { title: 'Real Steel', year: 2011 },
      { title: 'Remember the Titans', year: 2000 },
      { title: 'Rocky', year: 1976 },
      { title: 'Rocky II', year: 1979 },
      { title: 'Rocky III', year: 1982 },
      { title: 'Rocky IV', year: 1985 },
      { title: 'Rudy', year: 1993 },
      { title: 'Seabiscuit', year: 2003 },
      { title: 'Southpaw', year: 2015 },
      { title: 'The Fighter', year: 2010 },
      { title: 'The Wrestler', year: 2008 },
      { title: 'Trouble with the Curve', year: 2012 }
  ]
  
  let policial = [
      { title: 'A Bronx Tale', year: 1993 },
      { title: 'American Gangster', year: 2007 },
      { title: 'Blow', year: 2001 },
      { title: 'Casino', year: 1995 },
      { title: 'Catch Me If You Can', year: 2002 },
      { title: 'Donnie Brasco', year: 1997 },
      { title: 'End of Watch', year: 2012 },
      { title: 'Fargo', year: 1996 },
      { title: 'Goodfellas', year: 1990 },
      { title: 'Heat', year: 1995 },
      { title: 'Inside Man', year: 2006 },
      { title: 'L.A. Confidential', year: 1997 },
      { title: 'Mystic River', year: 2003 },
      { title: 'Prisoners', year: 2013 },
      { title: 'Pulp Fiction', year: 1994 },
      { title: 'Reservoir Dogs', year: 1992 },
      { title: 'Scarface', year: 1983 },
      { title: 'Serpico', year: 1973 },
      { title: 'Seven', year: 1995 },
      { title: 'Sicario', year: 2015 },
      { title: 'The Departed', year: 2006 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
      { title: 'The Untouchables', year: 1987 },
      { title: 'The Usual Suspects', year: 1995 },
      { title: 'Training Day', year: 2001 },
      { title: 'Zodiac', year: 2007 }
  ]
  
  let historia = [
      { title: '300', year: 2006 },
      { title: 'Agora', year: 2009 },
      { title: 'Apollo 13', year: 1995 },
      { title: 'Defiance', year: 2008 },
      { title: 'Gandhi', year: 1982 },
      { title: 'Gladiator', year: 2000 },
      { title: 'Hotel Rwanda', year: 2004 },
      { title: 'JFK', year: 1991 },
      { title: 'Kingdom of Heaven', year: 2005 },
      { title: 'Michael Collins', year: 1996 },
      { title: 'Munich', year: 2005 },
      { title: 'Pearl Harbor', year: 2001 },
      { title: 'Selma', year: 2014 },
      { title: 'The Imitation Game', year: 2014 },
      { title: 'The Iron Lady', year: 2011 },
      { title: 'The Passion of the Christ', year: 2004 },
      { title: 'Troy', year: 2004 },
      { title: 'Valkyrie', year: 2008 }
  ]
  
  let reales = [
      { title: '127 Hours', year: 2010 },
      { title: 'Argo', year: 2012 },
      { title: 'Captain Phillips', year: 2013 },
      { title: 'Dallas Buyers Club', year: 2013 },
      { title: 'Erin Brockovich', year: 2000 },
      { title: 'Frost/Nixon', year: 2008 },
      { title: 'Monster', year: 2003 },
      { title: 'October Sky', year: 1999 },
      { title: 'Spotlight', year: 2015 },
      { title: 'The Big Short', year: 2015 },
      { title: 'The Last King of Scotland', year: 2006 },
      { title: 'The Social Network', year: 2010 },
      { title: 'The Soloist', year: 2009 },
      { title: 'The Theory of Everything', year: 2014 },
      { title: 'Zero Dark Thirty', year: 2012 }
  ]
  
  let biopics = [
      { title: 'A Beautiful Mind', year: 2001 },
      { title: 'Man on the Moon', year: 1999 },
      { title: 'The Aviator', year: 2004 },
      { title: 'The Doors', year: 1991 },
      { title: 'The Motorcycle Diaries', year: 2004 },
      { title: 'The People vs. Larry Flynt', year: 1996 }
  ]
  
  let romanticas = [
      { title: 'As Good as It Gets', year: 1997 },
      { title: 'Before Sunrise', year: 1995 },
      { title: 'Before Sunset', year: 2004 },
      { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
      { title: 'Notting Hill', year: 1999 },
      { title: 'Silver Linings Playbook', year: 2012 },
      { title: 'The Bridges of Madison County', year: 1995 },
      { title: 'The Fault in Our Stars', year: 2014 },
      { title: 'When Harry Met Sally...', year: 1989 }
  ]
  
  let musica =  [
      { title: '8 Mile', year: 2002 },
      { title: 'A Star is Born', year: 2018 },
      { title: 'Almost Famous', year: 2000 },
      { title: 'Amadeus', year: 1984 },
      { title: 'Birdman', year: 2014 },
      { title: 'Bohemian Rhapsody', year: 2018 },
      { title: 'High Fidelity', year: 2000 },
      { title: 'Ray', year: 2004 },
      { title: 'Shine', year: 1996 },
      { title: 'Whiplash', year: 2014 }
  ]
  
  let cineNoir = [
      {"title": "Drive", "year": 2011}
  ]

  let belicas = [
      { title: '1917', year: 2019 },
      { title: 'All Quiet on the Western Front', year: 2022 },
      { title: 'Apocalypse Now', year: 1979 },
      { title: 'Black Hawk Down', year: 2001 },
      { title: 'Braveheart', year: 1995 },
      { title: 'Dunkirk', year: 2017 },
      { title: 'Enemy at the Gates', year: 2001 },
      { title: 'Fury', year: 2014 },
      { title: 'Inglourious Basterds', year: 2009 },
      { title: 'Saving Private Ryan', year: 1998 },
      { title: "Schindler's List", year: 1993 },
      { title: 'The Boy in the Striped Pyjamas', year: 2008 },
      { title: 'The Hurt Locker', year: 2008 },
      { title: 'The Pianist', year: 2002 },
      { title: 'The Thin Red Line', year: 1998 }
  ]

  let drama = [
      { title: '12 Angry Men', year: 1957 },      
      { title: '12 Years a Slave', year: 2013 },  
      { title: '50/50', year: 2011 },
      { title: 'A Beautiful Mind', year: 2001 },  
      { title: 'A Clockwork Orange', year: 1971 },
      { title: 'A Perfect Murder', year: 1998 },  
      { title: 'American Beauty', year: 1999 },   
      { title: 'American History X', year: 1998 },
      { title: 'American Sniper', year: 2014 },   
      { title: 'Apt Pupil', year: 1998 },
      { title: 'Awakenings', year: 1990 },        
      { title: 'Babel', year: 2006 },
      { title: 'Birth/Rebirth', year: 2023 },     
      { title: 'Buried', year: 2010 },
      { title: 'Cast Away', year: 2000 },
      { title: 'Christine', year: 2016 },
      { title: 'Cidade de Deus', year: 2002 },    
      { title: 'Cinema Paradiso', year: 1988 },   
      { title: 'Citizen X', year: 1995 },
      { title: 'Coda', year: 2021 },
      { title: 'Compliance', year: 2012 },        
      { title: 'Die Welle', year: 2008 },
      { title: 'Downfall', year: 2004 },
      { title: 'El secreto de sus ojos', year: 2009 },
      { title: 'Forrest Gump', year: 1994 },
      { title: 'Good Will Hunting', year: 1997 },
      { title: 'House of Sand and Fog', year: 2003 },
      { title: 'Interview with the Vampire', year: 1994 },
      { title: 'Into the Wild', year: 2007 },
      { title: 'John Q', year: 2002 },
      { title: 'La Pianiste', year: 2001 },
      { title: 'Les Miserables', year: 2012 },
      { title: 'Life is beautiful', year: 1997 },
      { title: 'Lord of War', year: 2005 },
      { title: 'Match Point', year: 2005 },
      { title: 'Misery', year: 1990 },
      { title: "Mr. Holland's Opus", year: 1995 },
      { title: 'Of Mice and Men', year: 1992 },
      { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
      { title: 'Pay it Forward', year: 2000 },
      { title: 'Philadelphia', year: 1993 },
      { title: 'Reign Over Me', year: 2007 },
      { title: 'Return to Paradise', year: 1998 },
      { title: 'Room', year: 2015 },
      { title: 'Scent of a Woman', year: 1992 },
      { title: 'Still Alice', year: 2014 },
      { title: 'Sunshine', year: 2007 },
      { title: 'The Aviator', year: 2004 },
      { title: 'The Basketball Diaries', year: 1995 },
      { title: 'The Book Thief', year: 2013 },
      { title: 'The Bucket List', year: 2007 },
      { title: 'The Danish Girl', year: 2015 },
      { title: 'The Dead Poets Society', year: 1989 },
      { title: 'The Deer Hunter', year: 1978 },
      { title: "The Devil's Advocate", year: 1997 },
      { title: 'The English Patient', year: 1996 },
      { title: 'The Green Mile', year: 1999 },
      { title: 'The Hunt', year: 2012 },
      { title: 'The Impossible', year: 2012 },
      { title: 'The Judge', year: 2014 },
      { title: 'The King’s Speech', year: 2010 },
      { title: 'The Lives of Others', year: 2006 },
      { title: 'The Prestige', year: 2006 },
      { title: 'The Pursuit of Happyness', year: 2006 },
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Truman Show', year: 1998 },
      { title: 'Thirteen', year: 2003 },
      { title: 'Titanic', year: 1997 }
  ]
  
  let terror = [
      { title: '10 Cloverfield Lane', year: 2016 },  
      { title: '13 Sins', year: 2014 },
      { title: 'A Tale of Two Sisters', year: 2003 },
      { title: 'American Mary', year: 2012 },        
      { title: 'Antichrist', year: 2009 },
      { title: 'As Above So Below', year: 2014 },    
      { title: 'Audition', year: 1999 },
      { title: 'Barbarian', year: 2022 },
      { title: 'Bliss', year: 2019 },
      { title: 'Bone Tomahawk', year: 2015 },        
      { title: 'Bones and All', year: 2022 },        
      { title: 'Brightwood', year: 2023 },
      { title: 'Candyman', year: 1992 },
      { title: 'Carrie', year: 1976 },
      { title: 'Caveat', year: 2020 },
      { title: 'Censor', year: 2021 },
      { title: 'Damien: Omen 2', year: 1978 },
      { title: 'Devil', year: 2010 },
      { title: "Don't Breathe", year: 2016 },
      { title: 'Dread', year: 2009 },
      { title: 'Eat', year: 2014 },
      { title: 'Eden Lake', year: 2008 },
      { title: 'Evil Dead', year: 2013 },
      { title: 'Evil Dead Rise', year: 2023 },
      { title: 'Fresh', year: 2022 },
      { title: 'Frontiers', year: 2007 },
      { title: "Gerald's Game", year: 2017 },
      { title: 'Get Out', year: 2017 },
      { title: 'Goodnight Mommy', year: 2014 },
      { title: 'Green Room', year: 2015 },
      { title: 'Hellraiser', year: 1987 },
      { title: 'Hereditary', year: 2018 },
      { title: 'High Tension', year: 2003 },
      { title: 'Honeymoon', year: 2014 },
      { title: 'Hostel', year: 2005 },
      { title: 'Housewife', year: 2017 },
      { title: 'Incident in a Ghostland', year: 2018 },
      { title: 'Infinity Pool', year: 2023 },
      { title: 'Inside', year: 2007 },
      { title: 'Irreversible', year: 2002 },
      { title: 'It', year: 2017 },
      { title: 'It', year: 1990 },
      { title: 'It Comes at Night', year: 2017 },
      { title: 'It Follows', year: 2014 },
      { title: "Jacob's Ladder", year: 1990 },
      { title: 'Kandisha', year: 2020 },
      { title: 'Koko-di Koko-da', year: 2019 },
      { title: 'Kol', year: 2020 },
      { title: 'Kotoko', year: 2011 },
      { title: 'Last Shift', year: 2014 },
      { title: 'Let the Right One In', year: 2008 },
      { title: 'Martyrs', year: 2008 },
      { title: 'Midsommar', year: 2019 },
      { title: 'Moloch', year: 2022 },
      { title: 'Nefarious', year: 2023 },
      { title: 'No One Will Save You', year: 2023 },
      { title: 'Nocturne', year: 2010 },
      { title: "Pan's Labyrinth", year: 2006 },
      { title: 'Pearl', year: 2022 },
      { title: 'Pet Sematary', year: 1989 },
      { title: 'Pyewacket', year: 2017 },
      { title: 'Raw', year: 2016 },
      { title: 'REC', year: 2007 },
      { title: 'Relic', year: 2020 },
      { title: 'Resolution', year: 2012 },
      { title: 'Resurrected', year: 2023 },
      { title: 'Resurrection', year: 2022 },
      { title: 'Revenge', year: 2017 },
      { title: "Rosemary's Baby", year: 1968 },
      { title: 'Saint Maud', year: 2019 },
      { title: 'Saw', year: 2004 },
      { title: 'Scream', year: 1996 },
      { title: 'Shelley', year: 2016 },
      { title: 'Sinister', year: 2012 },
      { title: 'Soft & Quiet', year: 2022 },
      { title: 'Speak No Evil', year: 2022 },
      { title: 'Spring', year: 2014 },
      { title: 'Stigmata', year: 1999 },
      { title: 'Storm of the Century', year: 1999 },
      { title: 'Talk to Me', year: 2022 },
      { title: 'The Advent Calendar', year: 2021 },
      { title: 'The Autopsy of Jane Doe', year: 2016 },
      { title: 'The Babadook', year: 2014 },
      { title: 'The Battery', year: 2012 },
      { title: 'The Beach House', year: 2019 },
      { title: "The Blackcoat's Daughter", year: 2015 },
      { title: 'The Blair Witch Project', year: 1999 },
      { title: 'The Cabin in the Woods', year: 2012 },
      { title: 'The Conjuring', year: 2013 },
      { title: 'The Conjuring 2', year: 2016 },
      { title: 'The Dark and the Wicked', year: 2020 },
      { title: 'The Descent', year: 2005 },
      { title: "The Devil's Candy", year: 2015 },
      { title: 'The Empty Man', year: 2020 },
      { title: 'The Exorcism of Emily Rose', year: 2005 },
      { title: 'The Exorcist', year: 1973 },
      { title: 'The Eyes of My Mother', year: 2016 },
      { title: 'The Feast', year: 2021 },
      { title: 'The Innocents', year: 2021 },
      { title: 'The Invitation', year: 2015 },
      { title: 'The Lazarus Effect', year: 2015 },
      { title: 'The Lighthouse', year: 2019 },
      { title: 'The Lodge', year: 2019 },
      { title: 'The Mothman Prophecies', year: 2002 },
      { title: 'The Neon Demon', year: 2016 },
      { title: 'The Night House', year: 2021 },
      { title: 'The Omen', year: 1976 },
      { title: 'The Orphanage', year: 2007 },
      { title: 'The Others', year: 2001 },
      { title: 'The Perfection', year: 2018 },
      { title: 'The Ring', year: 2002 },
      { title: 'The Ritual', year: 2017 },
      { title: 'The Sadness', year: 2021 },
      { title: 'The Shining', year: 1980 },
      { title: 'The Skeleton Key', year: 2005 },
      { title: 'The Strangers', year: 2008 },
      { title: 'The Visit', year: 2015 },
      { title: 'The Wailing', year: 2016 },
      { title: 'The Witch', year: 2015 },
      { title: 'Triangle', year: 2009 },
      { title: 'Unfriended: Dark Web', year: 2018 },
      { title: 'Unsane', year: 2018 },
      { title: 'Violation', year: 2020 },
      { title: 'What Keeps You Alive', year: 2018 },
      { title: 'Wolf Creek', year: 2005 },
      { title: 'X', year: 2022 }
  ]
  
  
  let peliculas = { accion, argentinas, comedias, fantastico, aventura, csFiccion, thriller, misterio, deporte, policial, historia, reales, biopics, romanticas, musica,
     cineNoir, belicas, drama, terror }
  // console.log(terror.horror_movies[1])
  // let terror2 = accion.accion.sort((a, b) => a.title.localeCompare(b.title));
  // console.log(util.inspect(terror2, { showHidden: false, depth: null, maxArrayLength: null }))
  // console.log(accion.length + argentinas.length + comedias.length + fantastico.length + aventura.length + csFiccion.length + thriller.length + misterio.length + deporte.length +
  //    policial.length + historia.length + reales.length + biopics.length + romanticas.length + musica.length + cineNoir.length + belicas.length + drama.length + terror.length)

  module.exports = { peliculas }