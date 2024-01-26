import React, { useRef, useState } from "react";
import "./Upload.css";

const data = [
  { id: 1, links: "timesonline.co.uk", prefix: "QB0GaK7" },
  { id: 2, links: "merriam-webster.com", prefix: "8oUTDyz" },
  { id: 3, links: "newyorker.com", prefix: "Z9i2o9o" },
  { id: 4, links: "angelfire.com", prefix: "pW44f49" },
  { id: 5, links: "rambler.ru", prefix: "w1vDJvP" },
  { id: 6, links: "timesonline.co.uk", prefix: "Uz3Uq87" },
  { id: 7, links: "state.gov", prefix: "PwT2wMc" },
  { id: 8, links: "youtube.com", prefix: "c1TO1x6" },
  { id: 9, links: "washingtonpost.com", prefix: "4KtfXaU" },
  { id: 10, links: "icq.com", prefix: "nh294Ty" },
  { id: 11, links: "cbsnews.com", prefix: "0e56PW3" },
  { id: 12, links: "google.pl", prefix: "NNq9FXo" },
  { id: 13, links: "uiuc.edu", prefix: "55b5FKK" },
  { id: 14, links: "creativecommons.org", prefix: "0Q43Q2J" },
  { id: 15, links: "cam.ac.uk", prefix: "1dYVlCo" },
  { id: 16, links: "microsoft.com", prefix: "5leG2TS" },
  { id: 17, links: "ebay.co.uk", prefix: "2tYI62f" },
  { id: 18, links: "ucsd.edu", prefix: "Dfdk2F4" },
  { id: 19, links: "constantcontact.com", prefix: "6OFdyTY" },
  { id: 20, links: "seesaa.net", prefix: "IYU6iyo" },
  { id: 21, links: "globo.com", prefix: "9Q8j9h5" },
  { id: 22, links: "github.io", prefix: "5e7TzC8" },
  { id: 23, links: "bluehost.com", prefix: "8Je0tSH" },
  { id: 24, links: "engadget.com", prefix: "9S74C00" },
  { id: 25, links: "psu.edu", prefix: "38yv9fT" },
  { id: 26, links: "canalblog.com", prefix: "w6WNGwa" },
  { id: 27, links: "pen.io", prefix: "4RW1EV6" },
  { id: 28, links: "parallels.com", prefix: "llpTUMe" },
  { id: 29, links: "skyrock.com", prefix: "rdv8kZ3" },
  { id: 30, links: "fastcompany.com", prefix: "7zIf8YB" },
  { id: 31, links: "4shared.com", prefix: "3y72wJ1" },
  { id: 32, links: "unc.edu", prefix: "x92LK5W" },
  { id: 33, links: "irs.gov", prefix: "fvD4yQu" },
  { id: 34, links: "apache.org", prefix: "7d46u5g" },
  { id: 35, links: "deliciousdays.com", prefix: "04Gwoph" },
  { id: 36, links: "smugmug.com", prefix: "Z8NZ9t6" },
  { id: 37, links: "list-manage.com", prefix: "SeVM7Vy" },
  { id: 38, links: "icio.us", prefix: "HO3p8A4" },
  { id: 39, links: "webeden.co.uk", prefix: "5dndeO4" },
  { id: 40, links: "howstuffworks.com", prefix: "NkEas9V" },
];

const Upload = () => {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      // You can perform additional logic here if needed
    }
  };

  

  const handleRemove = () => {
    setUploadedFile(null);
  };

  return (
    <div id="main">
      <div id="info">
        <span className="upload_csv">Upload CSV</span>
        <span style={{ float: "right", marginRight: "20px" }}>
          <img
            src="image.png"
            style={{ borderRadius: "50%", marginTop: "20px" }}
            alt=""
          />
        </span>
        <span
          style={{ float: "right", marginRight: "30px", paddingTop: "20px" }}
        >
          <img src="notify.svg" alt="" />
        </span>
      </div>

      <div id="upload-container">
        <div className="card">
          <div id="drop" onClick={handleUpload}>
            <div className="image-container">
              <img src="Microsoft_Office_Excel.svg" alt="Image" />
            </div>
            <p className="text">
              {uploadedFile ? (
                <>
                  {uploadedFile.name}
                  <div id="remove" onClick={handleRemove}>
                    Remove
                  </div>
                </>
              ) : (
                "Drop your excel sheet or "
              )}
              {!uploadedFile && (
                <span id="browse" onClick={handleUpload}>
                  browse
                </span>
              )}
            </p>
          </div>
          <div className="button-container">
            <button className="upload-button" >Upload</button>
          </div>
        </div>
        <input
          type="file"
          className="browse-input"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      <div id="upload"></div>
    </div>
  );
};

export default Upload;
