from flask import Flask, request
import json
from os import path

from senti import get_senti

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
    courseSenti = get_senti([reqJson["courseRemarks"]])
    for instructor in reqJson["instructors"]:
        reqInst = reqJson["instructors"][instructor]
        if instructor not in fileJson["instructors"]:
            fileJson["instructors"][instructor] = {
                "MCQs": [ { "answers": [0, 0, 0, 0, 0] } for i in range(len(reqInst["MCQs"])) ],
                "profRemarks": [],
                "courseRemarks": [],
                "AIRemarks": [0, 0, 0]
            }
        fileInst = fileJson["instructors"][instructor]
        print(fileInst)

        for opt, opt_obj in zip(reqInst["MCQs"], fileInst["MCQs"]):
            opt_obj["answers"][opt] += 1

        profSenti = get_senti([reqInst["profRemarks"]])
        fileInst["AIRemarks"][0] += courseSenti[0] + profSenti[0]
        fileInst["AIRemarks"][1] += courseSenti[1] + profSenti[1]
        fileInst["AIRemarks"][2] += courseSenti[2] + profSenti[2]
        # AIRemarks is a sentiment array [negative, neutral, positive]
        # totals don't matter, just their ratio

        fileInst["profRemarks"].append(reqInst["profRemarks"])
        fileInst["courseRemarks"].append(reqJson["courseRemarks"])

    with open(f"courses/{courseId}.json", "w") as f:
        json.dump(fileJson, f, indent=2)

    return "OK"

@app.route("/api/info/<courseId>", methods=["GET"])
def info(courseId):
    if not path.exists(f"courses/{courseId}.json"):
        return "course not found", 404
    with open(f"courses/{courseId}.json") as f:
        return json.load(f)
