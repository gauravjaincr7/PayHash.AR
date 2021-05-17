# PayHash.AR

### Steps to run 
- Change directory to flask app: cd /flask-app
- Open 2 different terminals
- 1st terminal (To run the flask app): ```python3 app.py ``` 
- 2nd terminal (To run ganache for local ethereum blockchain): ``` ganache-cli -d ``` 


### Following tools and libraries are required to run the project:
- Unity
- Vuforia
- Ethereum Blockchain
- Web3 
- Ganache CLI
- Tensorflow js
- OpenCV
- Reactjs
- Flask 
- HTML CSS
- Python3
- VS Code

#### Unity 
A framework purpose-built for AR development allows you to develop your app once, then deploy it across multiple mobile and wearable AR devices.

Download link: https://unity3d.com/get-unity/download

#### Vuforia
Vuforia is an augmented reality software development kit for mobile devices that enables the creation of augmented reality applications. It uses computer vision technology to recognize and track planar images and 3D objects in real time.

Download link: https://developer.vuforia.com/downloads/sdk

Add Vuphoria to Unity using Assets -> import package -> custom package -> vuphoria engine

#### Ethereum Blockchain
Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain.

Programmed in python3 using Web3 Library.

#### Web3
Web3.py is a Python library for interacting with Ethereum. It’s commonly found in decentralized apps (dapps) to help with sending transactions, interacting with smart contracts, reading block data, and a variety of other use cases.

```
pip3 install web3
```

#### Ganache CLI
Ganache CLI, part of the Truffle suite of Ethereum development tools, is the command line version of Ganache, your personal blockchain for Ethereum development.
Ganache CLI uses ethereumjs to simulate full client behavior and make developing Ethereum applications faster, easier, and safer. It also includes all popular RPC functions and features (like events) and can be run deterministically to make development a breeze. https://github.com/trufflesuite/ganache-cli


```
npm install -g ganache-cli 
```

#### Tensorflowjs
TensorFlow.js is a library for machine learning in JavaScript to develop ML models in JavaScript, and use ML directly in the browser or in Node.js.
TensorFlow.js was used to detect face and draw a facial landmark on it. 
``` 
npm install @tensorflow/tfjs 
```
#### OpenCV
OpenCV is a library of programming functions mainly aimed at real-time computer vision. The library is cross-platform and free for use under the open-source Apache 2 License.

OpenCV was used to recognize the registered face in our application.

```
pip3 install opencv-python
pip3 install opencv-contrib-python
```
#### ReactJs
React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

ReactJs was used as front-end for our mobile-friendly web application.

```
npm install -g create-react-app
```
#### Flask
Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.

```
pip3 install Flask
```




