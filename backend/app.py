from flask import Flask, request
import json

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

@app.route("/api/info/<courseId>", methods=["GET"])
def info(courseId):
    if not path.exists(f"courses/{courseId}.json"):
        return "course not found", 404
    with open(f"courses/{courseId}.json") as f:
        return json.load(f)
