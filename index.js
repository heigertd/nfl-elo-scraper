let season = [
    { winner: "Buffalo Bills", loser: "Los Angeles Rams", winner_pts: "31", loser_pts: "10" },
    { winner: "New Orleans Saints", loser: "Atlanta Falcons", winner_pts: "27", loser_pts: "26" },
    { winner: "Cleveland Browns", loser: "Carolina Panthers", winner_pts: "26", loser_pts: "24" },
    { winner: "Chicago Bears", loser: "San Francisco 49ers", winner_pts: "19", loser_pts: "10" },
    { winner: "Pittsburgh Steelers", loser: "Cincinnati Bengals", winner_pts: "23", loser_pts: "20" },
    { winner: "Houston Texans", loser: "Indianapolis Colts", winner_pts: "20", loser_pts: "20" },
    { winner: "Philadelphia Eagles", loser: "Detroit Lions", winner_pts: "38", loser_pts: "35" },
    { winner: "Washington Commanders", loser: "Jacksonville Jaguars", winner_pts: "28", loser_pts: "22" },
    { winner: "Miami Dolphins", loser: "New England Patriots", winner_pts: "20", loser_pts: "7" },
    { winner: "Baltimore Ravens", loser: "New York Jets", winner_pts: "24", loser_pts: "9" },
    { winner: "Kansas City Chiefs", loser: "Arizona Cardinals", winner_pts: "44", loser_pts: "21" },
    { winner: "Minnesota Vikings", loser: "Green Bay Packers", winner_pts: "23", loser_pts: "7" },
    { winner: "New York Giants", loser: "Tennessee Titans", winner_pts: "21", loser_pts: "20" },
    { winner: "Los Angeles Chargers", loser: "Las Vegas Raiders", winner_pts: "24", loser_pts: "19" },
    { winner: "Tampa Bay Buccaneers", loser: "Dallas Cowboys", winner_pts: "19", loser_pts: "3" },
    { winner: "Seattle Seahawks", loser: "Denver Broncos", winner_pts: "17", loser_pts: "16" },
    { winner: "Kansas City Chiefs", loser: "Los Angeles Chargers", winner_pts: "27", loser_pts: "24" },
    { winner: "New York Giants", loser: "Carolina Panthers", winner_pts: "19", loser_pts: "16" },
    { winner: "New York Jets", loser: "Cleveland Browns", winner_pts: "31", loser_pts: "30" },
    { winner: "Jacksonville Jaguars", loser: "Indianapolis Colts", winner_pts: "24", loser_pts: "0" },
    { winner: "Detroit Lions", loser: "Washington Commanders", winner_pts: "36", loser_pts: "27" },
    { winner: "Miami Dolphins", loser: "Baltimore Ravens", winner_pts: "42", loser_pts: "38" },
    { winner: "Tampa Bay Buccaneers", loser: "New Orleans Saints", winner_pts: "20", loser_pts: "10" },
    { winner: "New England Patriots", loser: "Pittsburgh Steelers", winner_pts: "17", loser_pts: "14" },
    { winner: "Los Angeles Rams", loser: "Atlanta Falcons", winner_pts: "31", loser_pts: "27" },
    { winner: "San Francisco 49ers", loser: "Seattle Seahawks", winner_pts: "27", loser_pts: "7" },
    { winner: "Dallas Cowboys", loser: "Cincinnati Bengals", winner_pts: "20", loser_pts: "17" },
    { winner: "Arizona Cardinals", loser: "Las Vegas Raiders", winner_pts: "29", loser_pts: "23" },
    { winner: "Denver Broncos", loser: "Houston Texans", winner_pts: "16", loser_pts: "9" },
    { winner: "Green Bay Packers", loser: "Chicago Bears", winner_pts: "27", loser_pts: "10" },
    { winner: "Buffalo Bills", loser: "Tennessee Titans", winner_pts: "41", loser_pts: "7" },
    { winner: "Philadelphia Eagles", loser: "Minnesota Vikings", winner_pts: "24", loser_pts: "7" },
    { winner: "Cleveland Browns", loser: "Pittsburgh Steelers", winner_pts: "29", loser_pts: "17" },
    { winner: "Miami Dolphins", loser: "Buffalo Bills", winner_pts: "21", loser_pts: "19" },
    { winner: "Carolina Panthers", loser: "New Orleans Saints", winner_pts: "22", loser_pts: "14" },
    { winner: "Chicago Bears", loser: "Houston Texans", winner_pts: "23", loser_pts: "20" },
    { winner: "Cincinnati Bengals", loser: "New York Jets", winner_pts: "27", loser_pts: "12" },
    { winner: "Indianapolis Colts", loser: "Kansas City Chiefs", winner_pts: "20", loser_pts: "17" },
    { winner: "Minnesota Vikings", loser: "Detroit Lions", winner_pts: "28", loser_pts: "24" },
    { winner: "Baltimore Ravens", loser: "New England Patriots", winner_pts: "37", loser_pts: "26" },
    { winner: "Tennessee Titans", loser: "Las Vegas Raiders", winner_pts: "24", loser_pts: "22" },
    { winner: "Philadelphia Eagles", loser: "Washington Commanders", winner_pts: "24", loser_pts: "8" },
    { winner: "Jacksonville Jaguars", loser: "Los Angeles Chargers", winner_pts: "38", loser_pts: "10" },
    { winner: "Atlanta Falcons", loser: "Seattle Seahawks", winner_pts: "27", loser_pts: "23" },
    { winner: "Los Angeles Rams", loser: "Arizona Cardinals", winner_pts: "20", loser_pts: "12" },
    { winner: "Green Bay Packers", loser: "Tampa Bay Buccaneers", winner_pts: "14", loser_pts: "12" },
    { winner: "Denver Broncos", loser: "San Francisco 49ers", winner_pts: "11", loser_pts: "10" },
    { winner: "Dallas Cowboys", loser: "New York Giants", winner_pts: "23", loser_pts: "16" },
    { winner: "Cincinnati Bengals", loser: "Miami Dolphins", winner_pts: "27", loser_pts: "15" },
    { winner: "Minnesota Vikings", loser: "New Orleans Saints", winner_pts: "28", loser_pts: "25" },
    { winner: "Atlanta Falcons", loser: "Cleveland Browns", winner_pts: "23", loser_pts: "20" },
    { winner: "Buffalo Bills", loser: "Baltimore Ravens", winner_pts: "23", loser_pts: "20" },
    { winner: "New York Giants", loser: "Chicago Bears", winner_pts: "20", loser_pts: "12" },
    { winner: "Tennessee Titans", loser: "Indianapolis Colts", winner_pts: "24", loser_pts: "17" },
    { winner: "Dallas Cowboys", loser: "Washington Commanders", winner_pts: "25", loser_pts: "10" },
    { winner: "Seattle Seahawks", loser: "Detroit Lions", winner_pts: "48", loser_pts: "45" },
    { winner: "Los Angeles Chargers", loser: "Houston Texans", winner_pts: "34", loser_pts: "24" },
    { winner: "Philadelphia Eagles", loser: "Jacksonville Jaguars", winner_pts: "29", loser_pts: "21" },
    { winner: "New York Jets", loser: "Pittsburgh Steelers", winner_pts: "24", loser_pts: "20" },
    { winner: "Arizona Cardinals", loser: "Carolina Panthers", winner_pts: "26", loser_pts: "16" },
    { winner: "Las Vegas Raiders", loser: "Denver Broncos", winner_pts: "32", loser_pts: "23" },
    { winner: "Green Bay Packers", loser: "New England Patriots", winner_pts: "27", loser_pts: "24" },
    { winner: "Kansas City Chiefs", loser: "Tampa Bay Buccaneers", winner_pts: "41", loser_pts: "31" },
    { winner: "San Francisco 49ers", loser: "Los Angeles Rams", winner_pts: "24", loser_pts: "9" },
    { winner: "Indianapolis Colts", loser: "Denver Broncos", winner_pts: "12", loser_pts: "9" },
    { winner: "New York Giants", loser: "Green Bay Packers", winner_pts: "27", loser_pts: "22" },
    { winner: "Tampa Bay Buccaneers", loser: "Atlanta Falcons", winner_pts: "21", loser_pts: "15" },
    { winner: "Buffalo Bills", loser: "Pittsburgh Steelers", winner_pts: "38", loser_pts: "3" },
    { winner: "Minnesota Vikings", loser: "Chicago Bears", winner_pts: "29", loser_pts: "22" },
    { winner: "Los Angeles Chargers", loser: "Cleveland Browns", winner_pts: "30", loser_pts: "28" },
    { winner: "New England Patriots", loser: "Detroit Lions", winner_pts: "29", loser_pts: "0" },
    { winner: "Houston Texans", loser: "Jacksonville Jaguars", winner_pts: "13", loser_pts: "6" },
    { winner: "New York Jets", loser: "Miami Dolphins", winner_pts: "40", loser_pts: "17" },
    { winner: "New Orleans Saints", loser: "Seattle Seahawks", winner_pts: "39", loser_pts: "32" },
    { winner: "Tennessee Titans", loser: "Washington Commanders", winner_pts: "21", loser_pts: "17" },
    { winner: "San Francisco 49ers", loser: "Carolina Panthers", winner_pts: "37", loser_pts: "15" },
    { winner: "Philadelphia Eagles", loser: "Arizona Cardinals", winner_pts: "20", loser_pts: "17" },
    { winner: "Dallas Cowboys", loser: "Los Angeles Rams", winner_pts: "22", loser_pts: "10" },
    { winner: "Baltimore Ravens", loser: "Cincinnati Bengals", winner_pts: "19", loser_pts: "17" },
    { winner: "Kansas City Chiefs", loser: "Las Vegas Raiders", winner_pts: "30", loser_pts: "29" },
    { winner: "Washington Commanders", loser: "Chicago Bears", winner_pts: "12", loser_pts: "7" },
    { winner: "Atlanta Falcons", loser: "San Francisco 49ers", winner_pts: "28", loser_pts: "14" },
    { winner: "Cincinnati Bengals", loser: "New Orleans Saints", winner_pts: "30", loser_pts: "26" },
    { winner: "New England Patriots", loser: "Cleveland Browns", winner_pts: "38", loser_pts: "15" },
    { winner: "Indianapolis Colts", loser: "Jacksonville Jaguars", winner_pts: "34", loser_pts: "27" },
    { winner: "New York Jets", loser: "Green Bay Packers", winner_pts: "27", loser_pts: "10" },
    { winner: "Minnesota Vikings", loser: "Miami Dolphins", winner_pts: "24", loser_pts: "16" },
    { winner: "New York Giants", loser: "Baltimore Ravens", winner_pts: "24", loser_pts: "20" },
    { winner: "Pittsburgh Steelers", loser: "Tampa Bay Buccaneers", winner_pts: "20", loser_pts: "18" },
    { winner: "Los Angeles Rams", loser: "Carolina Panthers", winner_pts: "24", loser_pts: "10" },
    { winner: "Seattle Seahawks", loser: "Arizona Cardinals", winner_pts: "19", loser_pts: "9" },
    { winner: "Buffalo Bills", loser: "Kansas City Chiefs", winner_pts: "24", loser_pts: "20" },
    { winner: "Philadelphia Eagles", loser: "Dallas Cowboys", winner_pts: "26", loser_pts: "17" },
    { winner: "Los Angeles Chargers", loser: "Denver Broncos", winner_pts: "19", loser_pts: "16" },
    { winner: "Arizona Cardinals", loser: "New Orleans Saints", winner_pts: "42", loser_pts: "34" },
    { winner: "Cincinnati Bengals", loser: "Atlanta Falcons", winner_pts: "35", loser_pts: "17" },
    { winner: "Carolina Panthers", loser: "Tampa Bay Buccaneers", winner_pts: "21", loser_pts: "3" },
    { winner: "Baltimore Ravens", loser: "Cleveland Browns", winner_pts: "23", loser_pts: "20" },
    { winner: "Tennessee Titans", loser: "Indianapolis Colts", winner_pts: "19", loser_pts: "10" },
    { winner: "Dallas Cowboys", loser: "Detroit Lions", winner_pts: "24", loser_pts: "6" },
    { winner: "Washington Commanders", loser: "Green Bay Packers", winner_pts: "23", loser_pts: "21" },
    { winner: "New York Giants", loser: "Jacksonville Jaguars", winner_pts: "23", loser_pts: "17" },
    { winner: "Las Vegas Raiders", loser: "Houston Texans", winner_pts: "38", loser_pts: "20" },
    { winner: "New York Jets", loser: "Denver Broncos", winner_pts: "16", loser_pts: "9" },
    { winner: "Kansas City Chiefs", loser: "San Francisco 49ers", winner_pts: "44", loser_pts: "23" },
    { winner: "Seattle Seahawks", loser: "Los Angeles Chargers", winner_pts: "37", loser_pts: "23" },
    { winner: "Miami Dolphins", loser: "Pittsburgh Steelers", winner_pts: "16", loser_pts: "10" },
    { winner: "Chicago Bears", loser: "New England Patriots", winner_pts: "33", loser_pts: "14" },
    { winner: "Baltimore Ravens", loser: "Tampa Bay Buccaneers", winner_pts: "27", loser_pts: "22" },
    { winner: "Denver Broncos", loser: "Jacksonville Jaguars", winner_pts: "21", loser_pts: "17" },
    { winner: "Miami Dolphins", loser: "Detroit Lions", winner_pts: "31", loser_pts: "27" },
    { winner: "Philadelphia Eagles", loser: "Pittsburgh Steelers", winner_pts: "35", loser_pts: "13" },
    { winner: "Atlanta Falcons", loser: "Carolina Panthers", winner_pts: "37", loser_pts: "34" },
    { winner: "Dallas Cowboys", loser: "Chicago Bears", winner_pts: "49", loser_pts: "29" },
    { winner: "Minnesota Vikings", loser: "Arizona Cardinals", winner_pts: "34", loser_pts: "26" },
    { winner: "New Orleans Saints", loser: "Las Vegas Raiders", winner_pts: "24", loser_pts: "0" },
    { winner: "New England Patriots", loser: "New York Jets", winner_pts: "22", loser_pts: "17" },
    { winner: "Tennessee Titans", loser: "Houston Texans", winner_pts: "17", loser_pts: "10" },
    { winner: "San Francisco 49ers", loser: "Los Angeles Rams", winner_pts: "31", loser_pts: "14" },
    { winner: "Washington Commanders", loser: "Indianapolis Colts", winner_pts: "17", loser_pts: "16" },
    { winner: "Seattle Seahawks", loser: "New York Giants", winner_pts: "27", loser_pts: "13" },
    { winner: "Buffalo Bills", loser: "Green Bay Packers", winner_pts: "27", loser_pts: "17" },
    { winner: "Cleveland Browns", loser: "Cincinnati Bengals", winner_pts: "32", loser_pts: "13" },
    { winner: "Philadelphia Eagles", loser: "Houston Texans", winner_pts: "29", loser_pts: "17" },
    { winner: "New York Jets", loser: "Buffalo Bills", winner_pts: "20", loser_pts: "17" },
    { winner: "Detroit Lions", loser: "Green Bay Packers", winner_pts: "15", loser_pts: "9" },
    { winner: "Minnesota Vikings", loser: "Washington Commanders", winner_pts: "20", loser_pts: "17" },
    { winner: "Los Angeles Chargers", loser: "Atlanta Falcons", winner_pts: "20", loser_pts: "17" },
    { winner: "Cincinnati Bengals", loser: "Carolina Panthers", winner_pts: "42", loser_pts: "21" },
    { winner: "Miami Dolphins", loser: "Chicago Bears", winner_pts: "35", loser_pts: "32" },
    { winner: "New England Patriots", loser: "Indianapolis Colts", winner_pts: "26", loser_pts: "3" },
    { winner: "Jacksonville Jaguars", loser: "Las Vegas Raiders", winner_pts: "27", loser_pts: "20" },
    { winner: "Seattle Seahawks", loser: "Arizona Cardinals", winner_pts: "31", loser_pts: "21" },
    { winner: "Tampa Bay Buccaneers", loser: "Los Angeles Rams", winner_pts: "16", loser_pts: "13" },
    { winner: "Kansas City Chiefs", loser: "Tennessee Titans", winner_pts: "20", loser_pts: "17" },
    { winner: "Baltimore Ravens", loser: "New Orleans Saints", winner_pts: "27", loser_pts: "13" },
    { winner: "Carolina Panthers", loser: "Atlanta Falcons", winner_pts: "25", loser_pts: "15" },
    { winner: "Tampa Bay Buccaneers", loser: "Seattle Seahawks", winner_pts: "21", loser_pts: "16" },
    { winner: "Minnesota Vikings", loser: "Buffalo Bills", winner_pts: "33", loser_pts: "30" },
    { winner: "Miami Dolphins", loser: "Cleveland Browns", winner_pts: "39", loser_pts: "17" },
    { winner: "Tennessee Titans", loser: "Denver Broncos", winner_pts: "17", loser_pts: "10" },
    { winner: "New York Giants", loser: "Houston Texans", winner_pts: "24", loser_pts: "16" },
    { winner: "Detroit Lions", loser: "Chicago Bears", winner_pts: "31", loser_pts: "30" },
    { winner: "Kansas City Chiefs", loser: "Jacksonville Jaguars", winner_pts: "27", loser_pts: "17" },
    { winner: "Pittsburgh Steelers", loser: "New Orleans Saints", winner_pts: "20", loser_pts: "10" },
    { winner: "Indianapolis Colts", loser: "Las Vegas Raiders", winner_pts: "25", loser_pts: "20" },
    { winner: "Green Bay Packers", loser: "Dallas Cowboys", winner_pts: "31", loser_pts: "28" },
    { winner: "Arizona Cardinals", loser: "Los Angeles Rams", winner_pts: "27", loser_pts: "17" },
    { winner: "San Francisco 49ers", loser: "Los Angeles Chargers", winner_pts: "22", loser_pts: "16" },
    { winner: "Washington Commanders", loser: "Philadelphia Eagles", winner_pts: "32", loser_pts: "21" },
    { winner: "Tennessee Titans", loser: "Green Bay Packers", winner_pts: "27", loser_pts: "17" },
    { winner: "Buffalo Bills", loser: "Cleveland Browns", winner_pts: "31", loser_pts: "23" },
    { winner: "Detroit Lions", loser: "New York Giants", winner_pts: "31", loser_pts: "18" },
    { winner: "Washington Commanders", loser: "Houston Texans", winner_pts: "23", loser_pts: "10" },
    { winner: "New England Patriots", loser: "New York Jets", winner_pts: "10", loser_pts: "3" },
    { winner: "Atlanta Falcons", loser: "Chicago Bears", winner_pts: "27", loser_pts: "24" },
    { winner: "Baltimore Ravens", loser: "Carolina Panthers", winner_pts: "13", loser_pts: "3" },
    { winner: "Philadelphia Eagles", loser: "Indianapolis Colts", winner_pts: "17", loser_pts: "16" },
    { winner: "New Orleans Saints", loser: "Los Angeles Rams", winner_pts: "27", loser_pts: "20" },
    { winner: "Las Vegas Raiders", loser: "Denver Broncos", winner_pts: "22", loser_pts: "16" },
    { winner: "Cincinnati Bengals", loser: "Pittsburgh Steelers", winner_pts: "37", loser_pts: "30" },
    { winner: "Dallas Cowboys", loser: "Minnesota Vikings", winner_pts: "40", loser_pts: "3" },
    { winner: "Kansas City Chiefs", loser: "Los Angeles Chargers", winner_pts: "30", loser_pts: "27" },
    { winner: "San Francisco 49ers", loser: "Arizona Cardinals", winner_pts: "38", loser_pts: "10" },
    { winner: "Buffalo Bills", loser: "Detroit Lions", winner_pts: "28", loser_pts: "25" },
    { winner: "Dallas Cowboys", loser: "New York Giants", winner_pts: "28", loser_pts: "20" },
    { winner: "Minnesota Vikings", loser: "New England Patriots", winner_pts: "33", loser_pts: "26" },
    { winner: "Cincinnati Bengals", loser: "Tennessee Titans", winner_pts: "20", loser_pts: "16" },
    { winner: "Cleveland Browns", loser: "Tampa Bay Buccaneers", winner_pts: "23", loser_pts: "17" },
    { winner: "Miami Dolphins", loser: "Houston Texans", winner_pts: "30", loser_pts: "15" },
    { winner: "Jacksonville Jaguars", loser: "Baltimore Ravens", winner_pts: "28", loser_pts: "27" },
    { winner: "Washington Commanders", loser: "Atlanta Falcons", winner_pts: "19", loser_pts: "13" },
    { winner: "Carolina Panthers", loser: "Denver Broncos", winner_pts: "23", loser_pts: "10" },
    { winner: "New York Jets", loser: "Chicago Bears", winner_pts: "31", loser_pts: "10" },
    { winner: "Las Vegas Raiders", loser: "Seattle Seahawks", winner_pts: "40", loser_pts: "34" },
    { winner: "Los Angeles Chargers", loser: "Arizona Cardinals", winner_pts: "25", loser_pts: "24" },
    { winner: "Kansas City Chiefs", loser: "Los Angeles Rams", winner_pts: "26", loser_pts: "10" },
    { winner: "San Francisco 49ers", loser: "New Orleans Saints", winner_pts: "13", loser_pts: "0" },
    { winner: "Philadelphia Eagles", loser: "Green Bay Packers", winner_pts: "40", loser_pts: "33" },
    { winner: "Pittsburgh Steelers", loser: "Indianapolis Colts", winner_pts: "24", loser_pts: "17" },
    { winner: "Buffalo Bills", loser: "New England Patriots", winner_pts: "24", loser_pts: "10" },
    { winner: "Cleveland Browns", loser: "Houston Texans", winner_pts: "27", loser_pts: "14" },
    { winner: "Baltimore Ravens", loser: "Denver Broncos", winner_pts: "10", loser_pts: "9" },
    { winner: "Detroit Lions", loser: "Jacksonville Jaguars", winner_pts: "40", loser_pts: "14" },
    { winner: "Minnesota Vikings", loser: "New York Jets", winner_pts: "27", loser_pts: "22" },
    { winner: "Washington Commanders", loser: "New York Giants", winner_pts: "20", loser_pts: "20" },
    { winner: "Philadelphia Eagles", loser: "Tennessee Titans", winner_pts: "35", loser_pts: "10" },
    { winner: "Pittsburgh Steelers", loser: "Atlanta Falcons", winner_pts: "19", loser_pts: "16" },
    { winner: "Green Bay Packers", loser: "Chicago Bears", winner_pts: "28", loser_pts: "19" },
    { winner: "San Francisco 49ers", loser: "Miami Dolphins", winner_pts: "33", loser_pts: "17" },
    { winner: "Seattle Seahawks", loser: "Los Angeles Rams", winner_pts: "27", loser_pts: "23" },
    { winner: "Cincinnati Bengals", loser: "Kansas City Chiefs", winner_pts: "27", loser_pts: "24" },
    { winner: "Las Vegas Raiders", loser: "Los Angeles Chargers", winner_pts: "27", loser_pts: "20" },
    { winner: "Dallas Cowboys", loser: "Indianapolis Colts", winner_pts: "54", loser_pts: "19" },
    { winner: "Tampa Bay Buccaneers", loser: "New Orleans Saints", winner_pts: "17", loser_pts: "16" },
    { winner: "Los Angeles Rams", loser: "Las Vegas Raiders", winner_pts: "17", loser_pts: "16" },
    { winner: "Buffalo Bills", loser: "New York Jets", winner_pts: "20", loser_pts: "12" },
    { winner: "Cincinnati Bengals", loser: "Cleveland Browns", winner_pts: "23", loser_pts: "10" },
    { winner: "Dallas Cowboys", loser: "Houston Texans", winner_pts: "27", loser_pts: "23" },
    { winner: "Detroit Lions", loser: "Minnesota Vikings", winner_pts: "34", loser_pts: "23" },
    { winner: "Jacksonville Jaguars", loser: "Tennessee Titans", winner_pts: "36", loser_pts: "22" },
    { winner: "Philadelphia Eagles", loser: "New York Giants", winner_pts: "48", loser_pts: "22" },
    { winner: "Baltimore Ravens", loser: "Pittsburgh Steelers", winner_pts: "16", loser_pts: "14" },
    { winner: "Kansas City Chiefs", loser: "Denver Broncos", winner_pts: "34", loser_pts: "28" },
    { winner: "Carolina Panthers", loser: "Seattle Seahawks", winner_pts: "30", loser_pts: "24" },
    { winner: "San Francisco 49ers", loser: "Tampa Bay Buccaneers", winner_pts: "35", loser_pts: "7" },
    { winner: "Los Angeles Chargers", loser: "Miami Dolphins", winner_pts: "23", loser_pts: "17" },
    { winner: "New England Patriots", loser: "Arizona Cardinals", winner_pts: "27", loser_pts: "13" },
    { winner: "San Francisco 49ers", loser: "Seattle Seahawks", winner_pts: "21", loser_pts: "13" },
    { winner: "Minnesota Vikings", loser: "Indianapolis Colts", winner_pts: "39", loser_pts: "36" },
    { winner: "Cleveland Browns", loser: "Baltimore Ravens", winner_pts: "13", loser_pts: "3" },
    { winner: "Buffalo Bills", loser: "Miami Dolphins", winner_pts: "32", loser_pts: "29" },
    { winner: "New Orleans Saints", loser: "Atlanta Falcons", winner_pts: "21", loser_pts: "18" },
    { winner: "Pittsburgh Steelers", loser: "Carolina Panthers", winner_pts: "24", loser_pts: "16" },
    { winner: "Philadelphia Eagles", loser: "Chicago Bears", winner_pts: "25", loser_pts: "20" },
    { winner: "Jacksonville Jaguars", loser: "Dallas Cowboys", winner_pts: "40", loser_pts: "34" },
    { winner: "Detroit Lions", loser: "New York Jets", winner_pts: "20", loser_pts: "17" },
    { winner: "Kansas City Chiefs", loser: "Houston Texans", winner_pts: "30", loser_pts: "24" },
    { winner: "Denver Broncos", loser: "Arizona Cardinals", winner_pts: "24", loser_pts: "15" },
    { winner: "Cincinnati Bengals", loser: "Tampa Bay Buccaneers", winner_pts: "34", loser_pts: "23" },
    { winner: "Los Angeles Chargers", loser: "Tennessee Titans", winner_pts: "17", loser_pts: "14" },
    { winner: "New York Giants", loser: "Washington Commanders", winner_pts: "20", loser_pts: "12" },
    { winner: "Las Vegas Raiders", loser: "New England Patriots", winner_pts: "30", loser_pts: "24" },
    { winner: "Green Bay Packers", loser: "Los Angeles Rams", winner_pts: "24", loser_pts: "12" },
    { winner: "Jacksonville Jaguars", loser: "New York Jets", winner_pts: "19", loser_pts: "3" },
    { winner: "Baltimore Ravens", loser: "Atlanta Falcons", winner_pts: "17", loser_pts: "9" },
    { winner: "Buffalo Bills", loser: "Chicago Bears", winner_pts: "35", loser_pts: "13" },
    { winner: "Carolina Panthers", loser: "Detroit Lions", winner_pts: "37", loser_pts: "23" },
    { winner: "Cincinnati Bengals", loser: "New England Patriots", winner_pts: "22", loser_pts: "18" },
    { winner: "New Orleans Saints", loser: "Cleveland Browns", winner_pts: "17", loser_pts: "10" },
    { winner: "Houston Texans", loser: "Tennessee Titans", winner_pts: "19", loser_pts: "14" },
    { winner: "Kansas City Chiefs", loser: "Seattle Seahawks", winner_pts: "24", loser_pts: "10" },
    { winner: "Minnesota Vikings", loser: "New York Giants", winner_pts: "27", loser_pts: "24" },
    { winner: "San Francisco 49ers", loser: "Washington Commanders", winner_pts: "37", loser_pts: "20" },
    { winner: "Dallas Cowboys", loser: "Philadelphia Eagles", winner_pts: "40", loser_pts: "34" },
    { winner: "Pittsburgh Steelers", loser: "Las Vegas Raiders", winner_pts: "13", loser_pts: "10" },
    { winner: "Green Bay Packers", loser: "Miami Dolphins", winner_pts: "26", loser_pts: "20" },
    { winner: "Los Angeles Rams", loser: "Denver Broncos", winner_pts: "51", loser_pts: "14" },
    { winner: "Tampa Bay Buccaneers", loser: "Arizona Cardinals", winner_pts: "19", loser_pts: "16" },
    { winner: "Los Angeles Chargers", loser: "Indianapolis Colts", winner_pts: "20", loser_pts: "3" },
    { winner: "Dallas Cowboys", loser: "Tennessee Titans", winner_pts: "27", loser_pts: "13" },
    { winner: "Atlanta Falcons", loser: "Arizona Cardinals", winner_pts: "20", loser_pts: "19" },
    { winner: "Tampa Bay Buccaneers", loser: "Carolina Panthers", winner_pts: "30", loser_pts: "24" },
    { winner: "Detroit Lions", loser: "Chicago Bears", winner_pts: "41", loser_pts: "10" },
    { winner: "Cleveland Browns", loser: "Washington Commanders", winner_pts: "24", loser_pts: "10" },
    { winner: "New York Giants", loser: "Indianapolis Colts", winner_pts: "38", loser_pts: "10" },
    { winner: "Kansas City Chiefs", loser: "Denver Broncos", winner_pts: "27", loser_pts: "24" },
    { winner: "Jacksonville Jaguars", loser: "Houston Texans", winner_pts: "31", loser_pts: "3" },
    { winner: "New England Patriots", loser: "Miami Dolphins", winner_pts: "23", loser_pts: "21" },
    { winner: "New Orleans Saints", loser: "Philadelphia Eagles", winner_pts: "20", loser_pts: "10" },
    { winner: "Pittsburgh Steelers", loser: "Baltimore Ravens", winner_pts: "16", loser_pts: "13" },
    { winner: "Seattle Seahawks", loser: "New York Jets", winner_pts: "23", loser_pts: "6" },
    { winner: "San Francisco 49ers", loser: "Las Vegas Raiders", winner_pts: "37", loser_pts: "34" },
    { winner: "Green Bay Packers", loser: "Minnesota Vikings", winner_pts: "41", loser_pts: "17" },
    { winner: "Los Angeles Chargers", loser: "Los Angeles Rams", winner_pts: "31", loser_pts: "10" },
    { winner: "Kansas City Chiefs", loser: "Las Vegas Raiders", winner_pts: "31", loser_pts: "13" },
    { winner: "Jacksonville Jaguars", loser: "Tennessee Titans", winner_pts: "20", loser_pts: "16" },
    { winner: "Buffalo Bills", loser: "New England Patriots", winner_pts: "35", loser_pts: "23" },
    { winner: "Cincinnati Bengals", loser: "Baltimore Ravens", winner_pts: "27", loser_pts: "16" },
    { winner: "Atlanta Falcons", loser: "Tampa Bay Buccaneers", winner_pts: "30", loser_pts: "17" },
    { winner: "Carolina Panthers", loser: "New Orleans Saints", winner_pts: "10", loser_pts: "7" },
    { winner: "Minnesota Vikings", loser: "Chicago Bears", winner_pts: "29", loser_pts: "13" },
    { winner: "Pittsburgh Steelers", loser: "Cleveland Browns", winner_pts: "28", loser_pts: "14" },
    { winner: "Houston Texans", loser: "Indianapolis Colts", winner_pts: "32", loser_pts: "31" },
    { winner: "Miami Dolphins", loser: "New York Jets", winner_pts: "11", loser_pts: "6" },
    { winner: "San Francisco 49ers", loser: "Arizona Cardinals", winner_pts: "38", loser_pts: "13" },
    { winner: "Washington Commanders", loser: "Dallas Cowboys", winner_pts: "26", loser_pts: "6" },
    { winner: "Denver Broncos", loser: "Los Angeles Chargers", winner_pts: "31", loser_pts: "28" },
    { winner: "Philadelphia Eagles", loser: "New York Giants", winner_pts: "22", loser_pts: "16" },
    { winner: "Seattle Seahawks", loser: "Los Angeles Rams", winner_pts: "19", loser_pts: "16" },
    { winner: "Detroit Lions", loser: "Green Bay Packers", winner_pts: "20", loser_pts: "16" },
    { winner: "San Francisco 49ers", loser: "Seattle Seahawks", winner_pts: "41", loser_pts: "23" },
    { winner: "Jacksonville Jaguars", loser: "Los Angeles Chargers", winner_pts: "31", loser_pts: "30" },
    { winner: "Buffalo Bills", loser: "Miami Dolphins", winner_pts: "34", loser_pts: "31" },
    { winner: "New York Giants", loser: "Minnesota Vikings", winner_pts: "31", loser_pts: "24" },
    { winner: "Cincinnati Bengals", loser: "Baltimore Ravens", winner_pts: "24", loser_pts: "17" },
    { winner: "Dallas Cowboys", loser: "Tampa Bay Buccaneers", winner_pts: "31", loser_pts: "14" },
    { winner: "Kansas City Chiefs", loser: "Jacksonville Jaguars", winner_pts: "27", loser_pts: "20" },
    { winner: "Philadelphia Eagles", loser: "New York Giants", winner_pts: "38", loser_pts: "7" },
    { winner: "Cincinnati Bengals", loser: "Buffalo Bills", winner_pts: "27", loser_pts: "10" },
    { winner: "San Francisco 49ers", loser: "Dallas Cowboys", winner_pts: "19", loser_pts: "12" },
    { winner: "Philadelphia Eagles", loser: "San Francisco 49ers", winner_pts: "31", loser_pts: "7" },
    { winner: "Kansas City Chiefs", loser: "Cincinnati Bengals", winner_pts: "23", loser_pts: "20" },
    ]

let teams = [
    {
        name: 'Arizona Cardinals',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Atlanta Falcons',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Carolina Panthers',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Chicago Bears',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Dallas Cowboys',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Detroit Lions',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Green Bay Packers',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Los Angeles Rams',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Minnesota Vikings',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'New Orleans Saints',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'New York Giants',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Philadelphia Eagles',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'San Francisco 49ers',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Seattle Seahawks',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Tampa Bay Buccaneers',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Washington Commanders',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Baltimore Ravens',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Buffalo Bills',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Cincinnati Bengals',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Cleveland Browns',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Denver Broncos',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Houston Texans',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Indianapolis Colts',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Jacksonville Jaguars',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Kansas City Chiefs',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Las Vegas Raiders',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Los Angeles Chargers',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Miami Dolphins',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'New England Patriots',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'New York Jets',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Pittsburgh Steelers',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    {
        name: 'Tennessee Titans',
        elo: 1000,
        wins: 0,
        loss: 0
    },
    
]

const expectedScore = (won, winner_elo, loser_elo) => {
    if (won){
        return 1/(1+(10**((loser_elo - winner_elo)/400)))
    }else{
        return 1/(1+(10**((winner_elo - loser_elo)/400)))
    }
}

const newElo = (elo, eloW, eloL, expected, actual, point_differential) => {
    return elo+40*Math.log(point_differential+1*(2.2/((eloW-eloL)*.001+2.2)))*(actual - expected)
    
}

const calculateElo = (winnerObj, loserObj, win_score, lose_score) =>{
    let winner_elo = winnerObj.elo
    let loser_elo = loserObj.elo
    let draw = false;
    if(win_score === lose_score){
        draw = true;
    }
    let point_differential = win_score - lose_score
    let winner_expected = expectedScore(true, winner_elo, loser_elo)
    let loser_expected = expectedScore(false, winner_elo, loser_elo)

    let winner_new = newElo(winner_elo, winner_elo, loser_elo, winner_expected, draw ? 0.5 : 1, point_differential )
    let loser_new = newElo(loser_elo, winner_elo, loser_elo, loser_expected, draw ? 0.5 : 0, point_differential)

    return {
        winner_new: winner_new,
        loser_new: loser_new 
    }
}

season.forEach(element => {
    let winner = element.winner
    let loser = element.loser
    let win_score = element.winner_pts
    let lose_score = element.loser_pts

    let winnerObj = teams.find(team => team.name === winner)
    let loserObj = teams.find(team => team.name === loser)

    let newElos = calculateElo(winnerObj, loserObj, win_score, lose_score)

    winnerObj.elo = newElos.winner_new
    winnerObj.wins = winnerObj.wins + 1
    loserObj.elo = newElos.loser_new
    loserObj.loss = loserObj.loss + 1

});


teams.sort((a,b) => {
    return a.elo > b.elo ? 1 : -1
})
console.log(teams)



