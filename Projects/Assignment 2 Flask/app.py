from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route("/", methods=["POST", "GET"])
def index():
    if request.method == "POST":
        email = request.form['email-getstarted']
        return redirect(url_for('.success_url', email=email))

    return render_template("index.html")

@app.route("/success")
def success_url():
    email = request.args['email']
    message = "Thankyou for your response "+email
    return render_template("success.html", message = message)



if __name__ == "__main__":
    app.debug = True;
    app.run();
