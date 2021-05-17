from flask import Flask, render_template, request,session
from web3 import Web3

app = Flask(__name__)
app.static_folder = 'static'
app.secret_key = 'the random string'

#Ethereum-ganache
ganache_url = "HTTP://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(ganache_url))



@app.route("/")
def home():
    return render_template("home.html")


@app.route("/camera")
def camera():
    return render_template("camera.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/amount")
def amount():
    return render_template("amount.html")

@app.route("/otp")
def otp():
    return render_template("otp.html")

@app.route("/success")
def success():
    bal =  session.pop('balance_sender' , None) 
    return render_template("success.html" , bal = bal)


@app.route("/makePayment", methods = ["POST"])
def makePayment():
    amount = request.form.get('amount') #Form field name to exctract amount of ether to transfer!!
    private_key = '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d' #of sender  

    sender = '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1' #payer
    receiver = '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0' #payee

        
    nonce = web3.eth.getTransactionCount(sender)

    #Transaction Details
    tx = {
        'nonce': nonce,
        'to': receiver,
        'value': web3.toWei(amount, 'ether'),
        'gas': 2000000,
        'gasPrice': 0,
        }


    signed_tx = web3.eth.account.signTransaction(tx, private_key)

    tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
    curr_hash=web3.toHex(tx_hash)


    block_current=web3.eth.getBlock('latest')
    block_no=block_current['number']


    current_for_timestamp=web3.eth.getBlock(block_no)
    time_stamp=current_for_timestamp['timestamp']

    print("Block number: ",block_no)
    print("Current Hash: ",curr_hash)
    print("TimeStamp: ",time_stamp)

    if block_current['number']>1:
        prev_block=web3.eth.getTransactionByBlock(block_no-1,0)
        prev_hash=prev_block['hash']
        prev_hash=web3.toHex(prev_hash)
    else :
        prev_hash=0

    print("Previous Hash: ",prev_hash)

    balance_sender = web3.eth.getBalance(sender)
    balance_sender = web3.fromWei(balance_sender,'ether')

    balance_receiver = web3.eth.getBalance(receiver)
    balance_receiver = web3.fromWei(balance_receiver,'ether')

    session["balance_receiver"] = int(balance_receiver)
    session["balance_sender"] = int(balance_sender)
    return render_template("otp.html") #Add your html file name and use variables accordingly




if __name__ == "__main__":
    app.run(debug=True)
