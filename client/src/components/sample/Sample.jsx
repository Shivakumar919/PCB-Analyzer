import "./SampleLibrary.css";

import amplifier from "../assets/amplifier.jpg";
import charging from "../../assets/chargingckt.jpg";
import sensor from "../../assets/sensor.jpg";
import esp32 from '../../assets/esp32.png'
const samples = [
  {
    id: 1,
    title: "Amplifier PCB",
    image: amplifier,
  },
  {
    id: 2,
    title: "Charging Circuit",
    image: charging,
  },
  {
    id: 3,
    title: "Sensor PCB",
    image: sensor,
  },
  {
    id: 4,
    title: "Esp32",
    image: esp32,
  },
];

export default function SampleLibrary({ onSelect }) {
  return (
    <div className="sample-library">
      <h2>Try Sample PCB Images</h2>
      <p className="sample-text">
        Don't have a PCB? Choose one of these sample images to test the AI.
      </p>

      <div className="sample-grid">
        {samples.map((sample) => (
          <div
            key={sample.id}
            className="sample-card"
            onClick={() => onSelect(sample.image)}
          >
            <img src={sample.image} alt={sample.title} />
            <h4>{sample.title}</h4>

            <button className="sample-btn">
              Analyze Sample
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}