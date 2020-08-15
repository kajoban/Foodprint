import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import flask
from FoodLabel import FoodLabel

path = "apple.jpg"
data = FoodImage(path).getlabels()
print(str(data.iloc[0,0]))
MAX_HITS = 5

class SmartLabels(object):

    def __init__(self, data):

        self.index = -1
        self.labels = []
        for label in data.iloc[0:MAX_HITS, 0]:
            self.labels.append(str(label))
        self.smartify()

    def smartify(self):
        self.smartLabels = []
        for label in self.labels:
            # replace with NLP 
            label = label.strip().lower()
            self.smartLabels.append(label)

        #remove duplicates
        self.smartLabels = list(set(self.smartLabels))
    
    def __iter__(self):
        return self
    
    def __next__(self):
        self.index += 1
        if self.index >= len(self.smartLabels):
            self.index = -1
            raise StopIteration
        else:
            return self.smartLabels[self.index]
# app = flask.Flask(__name__)


cred = credentials.Certificate('Carbon_Foodprint.json')
firebase_admin.initialize_app(cred)

db = firestore.client()


def find_footprint(data):

    footprints = []
    recognized_footprints = db.collection(u'carbon-footprints')
    for smartLabel in smartLabel(data):
        # query against db using GET request
        print('SEARCHING FOR', smartLabel)
        print(type(smartLabel))
        print(len(smartLabel))
        item_ref = recognized_footprints.document(smartLabel)
        item = item_ref.get()
        if item.exists:
            print(f'Document data: {item.to_dict()}')
            footsprints.append(item.to_dict())
        else:
            print(u'Not recognized, sorry!')
        # if carbon footprint is found, append footprint to footprints
    return footprints

find_footprint(data)


