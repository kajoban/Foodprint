import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import flask
from FoodLabel import FoodLabel

service_json = 'Carbon_Foodprint.json'
class SmartLabels(object):

    def __init__(self, labels):
        print(type(labels))

        self.index = -1
        self.smartify()
        self.smartLabels = [label.strip().lower() for label in labels]
        self.smartLabels = list(set(self.smartLabels))
        

    def smartify(self):
        pass
        # add some NLP for categorization
    
    def __iter__(self):
        return self
    
    def __next__(self):
        self.index += 1
        if self.index >= len(self.smartLabels):
            self.index = -1
            raise StopIteration
        else:
            return self.smartLabels[self.index]
    def __str__(self):
        return str(self.smartLabels)

creds = credentials.Certificate(service_json)
firebase_admin.initialize_app(creds)
db = firestore.client()

#
# Find the amount of CO2 emissions in a food based off image labels
#
#
class CarbonLabeler():
    
    
    # initialize labels and connection to firebase
    def __init__(self, labels):

        self.footprints=[]
        self.smartLabels = SmartLabels(labels)
        print(self.smartLabels)


    def getFootprints(self):

        footprints = []
        recognized_footprints = db.collection(u'carbon-footprints')
        for label in self.smartLabels:
            print('SEARCHING FOR', label)
            item_ref = recognized_footprints.document(label)
            item = item_ref.get()
            if item.exists:
                print(f'Document data: {item.to_dict()}')
                self.footprints.append(item.to_dict())
            else:
                print(u'Not recognized, sorry!')

        return self.footprints






