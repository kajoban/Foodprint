import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from FoodLabel import FoodLabel

import nltk
from nltk.corpus import wordnet

'''
    Create a food object for all items with valid carbon footprint, and upload to firebase DB


'''

service_json='Carbon_Foodprint.json'

creds = credentials.Certificate(service_json)
firebase_admin.initialize_app(creds)
db = firestore.client()

class Food(object):

    def __init__(self, name, ftype, co2_per_serving):
    
        self.name = name
        self.co2_per_serving = co2_per_serving
        self.ftype = ftype

        def oz2kg(oz):
            return oz / 35.274

        if ftype == "protein":
            self.serving = "3 oz"
            self.weight = oz2kg(2)
        if ftype == "fruit":
            self.serving = "1 fruit/1 cup equivalent"
            self.weight = 0.15
        if ftype == "oil":
            self.serving = "1 tbsp"
            self.weight = 0.015
        if ftype == "nut/fat":
            self.serving = "1.5 oz"
            self.weight = oz2kg(1.5)
        if ftype == "carb":
            self.serving = "2 oz"
            self.weight = oz2kg(2)
        if ftype == "liq":
            self.serving = "1 cup"
            self.weight = "0.25"

    
    
    def get_serving_size(self):
        return self.serving 

    def get_weight(self):
        return self.weight

    def get_co2_per_serving(self):
        return self.co2_per_serving

    def getftype(self):
        return self.ftype

    def get_name(self):
        return self.name

    def __str__(self):
        return ' '.join(["Name: ", self.name," kg per serving : ", str(self.weight) , " Serving size: ", self.serving])
    
footprints = {}
with open('footprints.txt') as f:
    for line in f.readlines():
        items = line.split()
        kgCO2e = float(items[-3])
        item_name = ' '.join(items[0:-3]).lower().strip()
        foodtype = items[-1]
        footprints[item_name] = Food(item_name, foodtype, kgCO2e)

synonymous_footprints = {}
for item_name in footprints:
    synonymous_footprints[item_name] = []
    # only get closest synonym set
    for synset in wordnet.synsets(item_name):
        # get closest family of synonyms
        for l in synset.lemmas():
            synonymous_footprints[item_name].append(l.name().lower().replace("_", " ").strip())
        break

for origin in synonymous_footprints:
    original_footprint = footprints[origin]
    for relative in synonymous_footprints[origin]:
        # add relative
        equivalent = Food(relative, original_footprint.getftype(), original_footprint.get_co2_per_serving())
        footprints[relative] = equivalent
        print(footprints[relative])

for food_name in footprints:
    food = footprints[food_name]
    footprint_reference = db.collection(u'carbon-footprints').document(food.get_name())
    footprint_reference.set({
        'name': food.get_name(),
        'carbon-per-portion': food.get_co2_per_serving(),
        'portion-size': food.get_serving_size(),
        'portion-kg': food.get_weight()

    }, merge=True)

