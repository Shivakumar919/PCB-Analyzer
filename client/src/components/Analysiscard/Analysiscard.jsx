import "./Analysis.css";

export default function AnalysisCard({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="analysis-card">

      <div className="analysis-card-header">
        <h2>🤖 AI PCB Analysis</h2>
        <span className="status">Completed</span>
      </div>

      {/* PCB Type */}

      <div className="analysis-section">
        <h3>PCB Type</h3>
        <p>{analysis.pcbType || "Unknown"}</p>
      </div>

      {/* Confidence */}

      <div className="analysis-section">
        <h3>Confidence</h3>
        <p>{analysis.confidence || "Unknown"}</p>
      </div>

      {/* Components */}

      <div className="analysis-section">
        <h3>Detected Components</h3>

        {(analysis.components || []).length > 0 ? (
          <div className="component-list">

            {analysis.components.map((component, index) => (

              <div
                className="component-item"
                key={index}
              >
                <h4>
                  {component.designator} - {component.type}
                </h4>

                <p>
                  <strong>Value:</strong> {component.value}
                </p>

                <p>
                  <strong>Description:</strong>{" "}
                  {component.description}
                </p>

              </div>

            ))}

          </div>
        ) : (
          <p>No components detected.</p>
        )}

      </div>

      {/* Missing Components */}

    {/* Missing Components */}

    {/* Missing Components */}

      <div className="analysis-section">

        <h3>Missing Components</h3>

        {(analysis.missingComponents || []).length > 0 ? (

          <ul>

            {analysis.missingComponents.map((item, index) => (

              <li key={index}>
                {typeof item === "string"
                  ? item
                  : `${item.designator ?? ""} ${item.type ?? ""} ${item.value ?? ""}`.trim()}
              </li>

            ))}

          </ul>

        ) : (

          <p>No missing components detected.</p>

        )}

      </div>

      {/* Faults */}
{/* Faults */}

      <div className="analysis-section">

        <h3>Detected Faults</h3>

        {(analysis.faults || []).length > 0 ? (

          <ul>

            {analysis.faults.map((item, index) => (

              <li key={index}>
                {typeof item === "string"
                  ? item
                  : `${item.designator ?? ""} ${item.type ?? ""} ${item.value ?? ""}`.trim()}
              </li>

            ))}

          </ul>

        ) : (

          <p>No faults detected.</p>

        )}

      </div>

      {/* Suggestions */}

      <div className="analysis-section">

        <h3>Suggestions</h3>

        {(analysis.suggestions || []).length > 0 ? (

          <ul>

            {analysis.suggestions.map((item, index) => (

              <li key={index}>{item}</li>

            ))}

          </ul>

        ) : (

          <p>No suggestions available.</p>

        )}

      </div>

    </div>
  );
}