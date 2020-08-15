import os, io
from flask import Flask, flash, request, redirect, url_for, jsonify
from werkzeug.utils import secure_filename
from flask import send_from_directory
from FoodLabel import FoodLabel
from CarbonLabeler import CarbonLabeler


ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}


app = Flask(__name__)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET','POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        print(type(file))
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            img = file.read()
            # convert to bytes format
            #file.save('tmp.jpg')
            labels = FoodLabel(img).getLabels()
            footprints = CarbonLabeler(labels).getFootprints()
            print(type(footprints))
            return jsonify(footprints)
    return "Are you sure you submitted a post request?"

if __name__ == "__main__":
    app.run(debug=True)