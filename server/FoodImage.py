import os, io
from google.cloud import vision
from google.cloud.vision import types
import pandas as pd

class FoodImage(object):
        
    def __init__(self, image_path)
        os.environ['GOOGLE_APPLICATION_CREDENTIALS'] =r'Carbon_Foodprint.json'

        client = vision.ImageAnnotatorClient()

        with io.open(image_path, 'rb') as image_file:
            content = image_file.read()

        image = vision.types.Image(content=content)
        response = client.object_localization(image = image)
        localized_object_annotations = response.localized_object_annotations

        self.labels = []
        for obj in localized_object_annotations:
            if obj.score >= 0.8:
                self.labels.append(obj.name)
    def getlabels(self):
        return labels
