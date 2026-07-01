import { useRef, useState } from "react";
import "./Upload.css";

import amplifier from "../../assets/ampifir.jpg";
import charging from "../../assets/chargingckt.jpg";
import sensor from "../../assets/sensor.jpg";

export default function UploadBox({ onImageSelect }) {
  const fileInput = useRef(null);
  const [preview, setPreview] = useState(null);

  const samples = [
    {
      title: "Amplifier PCB",
      image: amplifier,
    },
    {
      title: "Charging Circuit",
      image: charging,
    },
    {
      title: "Sensor PCB",
      image: sensor,
    },
  ];

  // Handle uploaded file
  function handleFile(file) {
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    if (onImageSelect) {
      onImageSelect(file);
    }
  }

  function handleChange(e) {
    handleFile(e.target.files[0]);
  }

  function handleDrop(e) {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  }

  // Handle sample image
  async function handleSample(sampleImage, title) {
    try {
      const response = await fetch(sampleImage);
      const blob = await response.blob();

      const extension = blob.type.split("/")[1] || "jpg";

      const file = new File(
        [blob],
        `${title}.${extension}`,
        {
          type: blob.type,
        }
      );

      setPreview(URL.createObjectURL(file));

      if (onImageSelect) {
        onImageSelect(file);
      }
    } catch (err) {
      console.error("Sample image error:", err);
      alert("Unable to load sample image.");
    }
  }

  function removeImage() {
    setPreview(null);

    if (onImageSelect) {
      onImageSelect(null);
    }

    if (fileInput.current) {
      fileInput.current.value = "";
    }
  }

  return (
    <div
      className="upload-box"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {!preview ? (
        <>
          <div className="upload-icon">📷</div>

          <h2>Upload PCB Image</h2>

          <p>Drag & Drop your PCB image here</p>

          <span>or</span>

          <button onClick={() => fileInput.current.click()}>
            Browse Files
          </button>

          <input
            ref={fileInput}
            hidden
            type="file"
            accept="image/*"
            onChange={handleChange}
          />

          <hr className="divider" />

          <h3>Try Sample PCB Images</h3>

          <p className="sample-text">
            Don't have a PCB? Test the AI using these samples.
          </p>

          <div className="sample-grid">
            {samples.map((sample) => (
              <div
                key={sample.title}
                className="sample-card"
                onClick={() =>
                  handleSample(sample.image, sample.title)
                }
              >
                <img
                  src={sample.image}
                  alt={sample.title}
                />

                <p>{sample.title}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="preview">
          <img
            src={preview}
            alt="PCB Preview"
          />

          <div className="preview-buttons">
            <button onClick={() => fileInput.current.click()}>
              Change Image
            </button>

            <button
              onClick={removeImage}
              className="remove-btn"
            >
              Remove
            </button>
          </div>

          <input
            ref={fileInput}
            hidden
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}