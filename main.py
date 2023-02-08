from bs4 import BeautifulSoup
import requests
import json

HEADERS = {'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'},

html_text = requests.get('https://www.pro-football-reference.com/years/2022/games.htm', headers=HEADERS).text
soup = BeautifulSoup(html_text, 'lxml')

win_teams = soup.find_all('td', attrs={'data-stat' : 'winner'})
lose_teams = soup.find_all('td', attrs={'data-stat' : 'loser'})
win_score = soup.find_all('td', attrs={'data-stat' : 'pts_win'})
lose_score = soup.find_all('td', attrs={'data-stat' : 'pts_lose'})

matchups = []
ranges = [[0, 271], [272, 285]]
for rangE in ranges: 
    for i in range(rangE[0], rangE[1]):
        if 'strong' in win_teams[i].attrs:
            strong = win_teams[i].find('strong')
            a = strong.find('a').text
        else:
            a = win_teams[i].find('a').text

        if 'strong' in lose_teams[i].attrs:
            strong = lose_teams[i].find('strong')
            b = strong.find('a').text
        else:
            b = lose_teams[i].find('a').text

        new_match = {
            'winner': a,
            'loser': b,
            'winner_pts': win_score[i].text,
            'loser_pts': lose_score[i].text
        }

        matchups.append(new_match)



