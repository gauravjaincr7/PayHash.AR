import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from "./utilities";
import menuimg from "./menu-outline.png"
import personimg from "./person-outline.png"
// import { LogoNodejs } from 'react-ionicons'

function App() {
  //Setup references

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //  Load posenet
  const runFacemesh = async () => {

    const net = await facemesh.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    // NEW MODEL
    //const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      //OLD MODEL
      const face = await net.estimateFaces(video);
      // NEW MODEL
      //const face = await net.estimateFaces({input:video});
      console.log(face);

      // Get canvas context
      const ctx = canvasRef.current.getContext("2d");
      requestAnimationFrame(() => { drawMesh(face, ctx) });
    }
  };

  runFacemesh();

  return (
    <div className="App">
      <div class="grid-container">
        <div class="grid-item grid-item-1">
          <div class="nav-icon-background" onclick="openNav()" >
            <img className="myimg" src={menuimg} />


          </div>
          <a href="/"> <p class="logo">HashMine</p></a>


          <div class="nav-icon-background">

            <img className="myimg" src={personimg} />

          </div>
        </div>

        <div class="grid-item grid-item-2">

        </div>

      </div>

      <header className="App-Header">

        <Webcam ref={webcamRef} style={
          {
            position: "absolute",
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "centr",
            zIndex: 9,
            width: 640,
            height: 480,
            top: 100
          }
        } />

        <canvas ref={canvasRef} style={
          {
            position: "absolute",
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "centr",
            zIndex: 9,
            width: 640,
            height: 480,
            top: 100
          }
        } />
      </header>
    </div>
  );
}

export default App;
