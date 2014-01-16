# -*- coding: utf8 -*-
"""
@author:    Matthias Feys (matthiasfeys@spurrit.com), Spurrit
@date:      %(date)
"""
import logging, pymongo

logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)
logger=logging.getLogger("mongo-utils")

db = pymongo.MongoClient()
annotations=db.annotations

def get_events():
    events=[]
    for event in annotations.reference_events.find():
        events.append(event)
    return events
def get_event(name):
    return annotations.reference_events.find_one({"name":name})

def add_events():
#    eventstring='''AanslagenNoorwegen
#AardbevingChristchurch
#ArrestatieRatkoMladic
#kernrampFukushima
#NoodweerPukkelpop
#ProcesJanssens
#ZaakBellensFagard
#AanslagLuik
#ArrestatieDSK
#InterviewVangheluwe
#MusicForLife
#OsamaGedood
#SaabFailliet'''
    eventstring='''https://nl.wikipedia.org/wiki/Schietpartij_Alphen_aan_den_Rijn | Schietpartij Alphen aan den Rijn - Wikipedia
https://nl.wikipedia.org/wiki/Schietpartij_in_Baflo | Schietpartij in Baflo - Wikipedia
https://nl.wikipedia.org/wiki/Bomaanslag_in_Alexandri%C3%AB | Bomaanslag in Alexandrië - Wikipedia
https://nl.wikipedia.org/wiki/Bomaanslag_op_de_luchthaven_Domodedovo | Bomaanslag op de luchthaven Domodedovo - Wikipedia
https://nl.wikipedia.org/wiki/Aanslag_in_Luik | Aanslag in Luik - Wikipedia
https://nl.wikipedia.org/wiki/Aanslag_in_Minsk_2011 | Aanslag in Minsk 2011 - Wikipedia
https://nl.wikipedia.org/wiki/Aanslagen_in_Noorwegen_2011 | Aanslagen in Noorwegen 2011 - Wikipedia
https://nl.wikipedia.org/wiki/Schietpartij_in_Realengo | Schietpartij in Realengo - Wikipedia
https://nl.wikipedia.org/wiki/Kernramp_van_Fukushima | Kernramp van Fukushima - Wikipedia
https://nl.wikipedia.org/wiki/Noodweer_tijdens_Pukkelpop_2011 | Noodweer tijdens Pukkelpop 2011 - Wikipedia
https://nl.wikipedia.org/wiki/Treinongeval_bij_Wenzhou | Treinongeval bij Wenzhou - Wikipedia
https://nl.wikipedia.org/wiki/Aardbeving_Christchurch_2011 | Aardbeving Christchurch 2011 - Wikipedia
https://nl.wikipedia.org/wiki/Ratko_Mladi%C4%87 | Ratko Mladić - Wikipedia
https://nl.wikipedia.org/wiki/Zaak-Janssen | Zaak-Janssen - Wikipedia
https://nl.wikipedia.org/wiki/Music_For_Life_2011 | Music For Life 2011 - Wikipedia
https://nl.wikipedia.org/wiki/Dood_van_Osama_bin_Laden | Dood van Osama bin Laden - Wikipedia
https://nl.wikipedia.org/wiki/Saab_Automobile | Saab Automobile - Wikipedia'''
    events=eventstring.split('\n')
    for event in events:
        link,name=event.split(' | ')
        annotations.reference_events.insert({"name":name.replace(' - Wikipedia',''),"link":link})

if __name__ == '__main__':
    add_events()