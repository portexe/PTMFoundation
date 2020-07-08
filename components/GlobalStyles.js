import React from 'react';

export const GlobalStyles = () => {
  return (
    <style jsx global>
      {`
        body {
          margin: 0;
          padding: 0;
          background-image: url('https://i.imgur.com/ona6fyD.jpg');
          background-size: 100px 100px;
          background-repeat: repeat;
          height: 100vh;
          background-attachment: fixed;
          height: 100vh;
          overflow-y: hidden;
        }
        .nav {
          padding-top: 15px;
          padding-bottom: 15px;
          text-align: right;
          position: fixed;
          top: 0px;
          right: 0px;
          background-color: white;
          border-radius: 0 0 0 15px;
        }
        .nav a {
          margin: 25px;
          color: black;
          text-decoration: none;
        }
        .feed {
          display: inline-block;
          margin-top: 100px;
        }
        .post img,
        .post video {
          max-width: 100%;
          display: block;
          margin: 0 auto;
          cursor: pointer;
        }
        .post {
          width: 550px;
          display: inline-block;
          margin: 50px;
          padding: 25px;
          max-width: 100%;
          color: white;
          vertical-align: middle;
          max-height: calc(100vh - 100px);
          box-sizing: border-box;
        }
        .post p {
          background-color: rgba(0, 0, 0, 1);
        }
        .post p a {
          color: #ff3838;
        }
        .post p a:hover {
          color: #4d58ff;
        }
        .post h1 {
          background-color: rgba(0, 0, 0, 1);
          font-size: 24px;
          cursor: pointer;
        }

        .loading {
          font-size: 50px;
          background-color: black;
          color: white;
          display: inline-block;
          position: absolute;
          padding: 10px;
        }
        #lonely-post {
          margin-top: 50px;
          width: 100%;
        }
        #lonely-post .post {
          margin: auto;
          max-height: none;
          display: block;
        }
        .lonely-post-controls {
          width: 550px;
          max-width: 100%;
          background-color: white;
          padding: 25px;
          margin-top: 10px;
          margin: auto;
          box-sizing: border-box;
        }
        .not-found {
          padding: 10px;
          background-color: rgba(0, 0, 0, 1);
          color: white;
          font-size: 36px;
          width: 100%;
          text-align: center;
          margin-top: 100px;
        }
      `}
    </style>
  );
};
