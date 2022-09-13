from flask import Flask, request
import json

from os import path
from transformers import AutoModelForSequenceClassification
from transformers import TFAutoModelForSequenceClassification
from transformers import AutoTokenizer
import numpy as np
from scipy.special import softmax
import csv
import urllib.request

task='sentiment'
MODEL = f"cardiffnlp/twitter-roberta-base-{task}"
tokenizer = AutoTokenizer.from_pretrained(MODEL)
model = AutoModelForSequenceClassification.from_pretrained(MODEL)
model.save_pretrained(MODEL)
tokenizer.save_pretrained(MODEL)


def get_senti(text):
    final_scores = np.array([0,0,0])
    for t in text:
        encoded_input = tokenizer(t, return_tensors='pt')
        output = model(**encoded_input)
        scores = output[0][0].detach().numpy()
        scores = softmax(scores)
        final_scores = np.add(final_scores,scores)
    print(final_scores/len(text))
    return final_scores #NEG NU POS


app = Flask(__name__)

def initCourse(courseId, courseName):
    with open(f"courses/{courseId}.json", "w") as f:
        base = {
            "name": courseName,
            "instructors": dict()
        }
        json.dump(base, f)

"""
Request JSON format:
{
    "name": "Intro to Computing",
    "instructors": {
        "profA": {
            "MCQs": [
                0 || 1 || 2 || 3 || 4 // SA/A/N/D/SD
            ],
            "profRemarks": "",
        }
    },
    "courseRemarks": ""
}
"""
@app.route("/api/feedback/<courseId>", methods=["POST"])
def course(courseId):
    reqJson = request.get_json()
    if not path.exists(f"courses/{courseId}.json"):
        initCourse(courseId, reqJson["name"])

    fileJson = {}
    with open(f"courses/{courseId}.json", "r") as f:
        fileJson = json.load(f)

    print(fileJson)
    for instructor in reqJson["instructors"]:
        reqInst = reqJson["instructors"][instructor]
        if instructor not in fileJson["instructors"]:
            fileJson["instructors"][instructor] = {
                "MCQs": [ { "answers": [0, 0, 0, 0, 0] } for i in range(len(reqInst["MCQs"])) ],
                "profRemarks": [],
                "courseRemarks": [],
                "AIRemarks": []
            }
        fileInst = fileJson["instructors"][instructor]
        print(fileInst)

        for opt, opt_obj in zip(reqInst["MCQs"], fileInst["MCQs"]):
            opt_obj["answers"][opt] += 1

        fileInst["profRemarks"].append(reqInst["profRemarks"])
        fileInst["courseRemarks"].append(reqJson["courseRemarks"])

    with open(f"courses/{courseId}.json", "w") as f:
        json.dump(fileJson, f, indent=2)

    return "OK"

"""
Response JSON format
"""
@app.route("/api/info/<courseId>", methods=["GET"])
def info(courseId):
    if not path.exists(f"courses/{courseId}.json"):
        return "course not found", 404
    with open(f"courses/{courseId}.json") as f:
        return json.load(f)
```