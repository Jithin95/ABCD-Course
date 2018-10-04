from flask import Flask, render_template, request
app = Flask(__name__)

def calculateGrade(percent):
        if (100 >= percent and percent >= 95):
            return 'S';
        elif (95 > percent and percent >= 90):
            return 'A+';
        elif (90 > percent and percent >= 85):
            return 'A';
        elif (85 > percent and percent >= 80):
            return 'B+';
        elif (80 > percent and percent >= 75):
            return 'B';
        elif (75 > percent and percent >= 70):
            return 'C+';
        elif (70 > percent and percent >= 65):
            return 'C';
        elif (65 > percent and percent >= 60):
            return 'D+';
        elif (60 > percent and percent >= 55):
            return 'D';
        elif (55 > percent and percent >= 50):
            return 'E'
        elif (percent < 50):
            return 'F'
        else :
            return 'Invalid'

@app.route("/", methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        # print(request.form['username'])
        username = request.form['user_name']
        reg_no = request.form['reg_no']
        sem = request.form['sem']
        markslist= []
        sem_status = 1
        subject1_name = request.form['subject1_name']
        subject1_mark = int(request.form['subject1_mark'])
        subject1_tmark = int(request.form['subject1_tmark'])
        percent = (subject1_mark/subject1_tmark)*100
        grade = calculateGrade(percent)
        if grade == "F":
            sem_status = 0
        markslist.append({"sub_name": subject1_name, "sub_mark": subject1_mark, "sub_tmark": subject1_tmark, "grades":grade})

        subject2_name = request.form['subject2_name']
        subject2_mark = int(request.form['subject2_mark'])
        subject2_tmark = int(request.form['subject2_tmark'])
        percent = (subject2_mark/subject2_tmark)*100
        grade = calculateGrade(percent)
        if grade == "F":
            sem_status = 0
        markslist.append({"sub_name": subject2_name, "sub_mark": subject2_mark, "sub_tmark": subject2_tmark, "grades":grade})

        subject3_name = request.form['subject3_name']
        subject3_mark = int(request.form['subject3_mark'])
        subject3_tmark = int(request.form['subject3_tmark'])
        percent = (subject3_mark/subject3_tmark)*100
        grade = calculateGrade(percent)
        if grade == "F":
            sem_status = 0
        markslist.append({"sub_name": subject3_name, "sub_mark": subject3_mark, "sub_tmark": subject3_tmark, "grades":grade})

        subject4_name = request.form['subject4_name']
        subject4_mark = int(request.form['subject4_mark'])
        subject4_tmark = int(request.form['subject4_tmark'])
        percent = (subject4_mark/subject4_tmark)*100
        grade = calculateGrade(percent)
        if grade == "F":
            sem_status = 0
        markslist.append({"sub_name": subject4_name, "sub_mark": subject4_mark, "sub_tmark": subject4_tmark, "grades":grade})


        if sem == "selectsem":
            return render_template("index.html", error="Please select Semester")
        else:
            if sem_status == 1:
                semstatus = "Passed"
            else:
                semstatus = "Failed"

            return render_template("marklist.html", name= username, reg_no = reg_no, semester= sem, marklist= markslist, sem_status= semstatus)
    else:
        return render_template("index.html")

if __name__=='__main__':
    app.debug = True
    app.run()
