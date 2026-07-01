// import "./Dashboard.css";
// import { useState } from "react";
// import { analyzePCB } from "../services/analysis";
// import { generateReport } from "../utils/reportgenrator";
// import { askPCBQuestion } from "../services/chat";

// export default function Dashboard() {
//   const [file, setFile] = useState(null);
//   const [analysis, setAnalysis] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [question, setQuestion] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const [chatLoading, setChatLoading] = useState(false);

//   const handleAnalyze = async () => {
//     if (!file) {
//       alert("Please select a PCB image");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await analyzePCB(file);

//       console.log("Backend Response:", res);

//       // Change this to setAnalysis(res) if your API returns the object directly
//       setAnalysis(res.analysis);

//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Analysis Failed");
//     } finally {
//       setLoading(false);
//     }
//   };
//   // for questions
//   async function handleSend(question) {
//     // Add user's message
//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "user",
//         text: question,
//       },
//     ]);

//     setLoading(true);

//     try {
//       // Later call your backend here

//       const reply = "This is a demo AI response.";

//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           text: reply,
//         },
//       ]);
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           text: "Something went wrong.",
//         },
//       ]);
//     }

//     setLoading(false);
//   }
//   // changes done for msg
//   console.log("Ask AI button clicked");


// return (
//   <div className="main-content">
//     <h1 className="title">PCB AI Analyzer Dashboard</h1>

//     <div className="cards">
//       <div className="card">
//         <h3>Total Uploads</h3>
//         <h2>{analysis ? 1 : 0}</h2>
//       </div>

//       <div className="card">
//         <h3>Completed Analysis</h3>
//         <h2>{analysis ? 1 : 0}</h2>
//       </div>

//       <div className="card">
//         <h3>Detected Components</h3>
//         <h2>{analysis ? analysis.components.length : 0}</h2>
//       </div>
//     </div>

//     <div className="upload-box">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setFile(e.target.files[0])}
//       />

//       <button
//         className="analyze-btn"
//         onClick={handleAnalyze}
//         disabled={loading}
//       >
//         {loading ? "Analyzing..." : "Analyze PCB"}
//       </button>
//     </div>

//     {analysis && (
//       <div className="analysis-result">

//         <h2>PCB Analysis Result</h2>

//         <button
//           className="download-btn"
//           onClick={() => generateReport(analysis)}
//         >
//           📄 Download Report
//         </button>

//         <div className="card">
//           <h3>PCB Type</h3>
//           <p>{analysis.pcbType}</p>
//         </div>

//         <div className="card">
//           <h3>Confidence</h3>
//           <p>{analysis.confidence}</p>
//         </div>
//         <div className="card">

//           <h2>Ask AI About This PCB</h2>

//           <div className="chat-history">

//             {chatHistory.map((chat, index) => (

//               <div key={index} className="chat-message">

//                 <p>
//                   <strong>You:</strong> {chat.question}
//                 </p>

//                 <p>
//                   <strong>AI:</strong> {chat.answer}
//                 </p>

//                 <hr />

//               </div>

//             ))}

//           </div>

//           <input
//             type="text"
//             placeholder="Ask anything about this PCB..."
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             className="chat-input"
//           />

//           <button
//             className="analyze-btn"
//             onClick={handleAskQuestion}
//             disabled={chatLoading}
//           >
//             {chatLoading ? "Thinking..." : "Ask AI"}
//           </button>

//         </div>


//         <div className="card">
//           <h3>Detected Components</h3>

//           <ul>
//             {analysis.components.map((component, index) => (
//               <li key={index}>
//                 <strong>{component.designator}</strong> - {component.type}
//                 <br />
//                 {component.partNumber && (
//                   <>Part: {component.partNumber}<br /></>
//                 )}
//                 {component.value && (
//                   <>Value: {component.value}<br /></>
//                 )}
//                 {component.marking && (
//                   <>Marking: {component.marking}</>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="card">
//           <h3>Missing Components</h3>

//           {analysis.missingComponents.length === 0 ? (
//             <p>No missing components detected.</p>
//           ) : (
//             <ul>
//               {analysis.missingComponents.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="card">
//           <h3>Faults</h3>

//           {analysis.faults.length === 0 ? (
//             <p>No visible faults detected.</p>
//           ) : (
//             <ul>
//               {analysis.faults.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="card">
//           <h3>AI Suggestions</h3>

//           <ul>
//             {analysis.suggestions.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>

//       </div>
//     )}
//   </div>
// );
// }

import "./Dashboard.css";
import { useState } from "react";
import { analyzePCB } from "../services/analysis";
import { generateReport } from "../utils/reportgenrator";
import { askPCBQuestion } from "../services/chat";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const [loading, setLoading] = useState(false);

  // Chat
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [chatLoading, setChatLoading] = useState(false);

  // -----------------------
  // Analyze PCB
  // -----------------------
  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a PCB image");
      return;
    }

    try {
      setLoading(true);

      const res = await analyzePCB(file);

      console.log(res);

      setAnalysis(res.analysis);

      // Clear previous chat
      setChatHistory([]);
      setQuestion("");

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "PCB analysis failed."
      );
    } finally {
      setLoading(false);
    }
  };

  // -----------------------
  // Ask AI
  // -----------------------
  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    if (!analysis) {
      alert("Analyze a PCB first.");
      return;
    }

    const currentQuestion = question;

    setQuestion("");

    try {
      setChatLoading(true);

      const res = await askPCBQuestion(
        analysis,
        currentQuestion
      );

      setChatHistory((prev) => [
        ...prev,
        {
          question: currentQuestion,
          answer: res.answer,
        },
      ]);

    } catch (err) {
      console.error(err);

      setChatHistory((prev) => [
        ...prev,
        {
          question: currentQuestion,
          answer: "Unable to generate AI response.",
        },
      ]);

    } finally {
      setChatLoading(false);
    }
  };
  return (
  <div className="main-content">

    <h1 className="title">PCB AI Analyzer Dashboard</h1>

    {/* Dashboard Cards */}

    <div className="cards">

      <div className="card">
        <h3>Total Uploads</h3>
        <h2>{analysis ? 1 : 0}</h2>
      </div>

      <div className="card">
        <h3>Completed Analysis</h3>
        <h2>{analysis ? 1 : 0}</h2>
      </div>

      <div className="card">
        <h3>Detected Components</h3>
        <h2>{analysis?.components?.length || 0}</h2>
      </div>

    </div>

    {/* Upload */}

    <div className="upload-box">

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="analyze-btn"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze PCB"}
      </button>

    </div>

    {analysis && (

      <div className="analysis-result">

        <div className="analysis-header">

          <h2>PCB Analysis Result</h2>

          <button
            className="download-btn"
            onClick={() => generateReport(analysis)}
          >
            📄 Download Report
          </button>

        </div>

        <div className="card">

          <h3>PCB Type</h3>

          <p>{analysis.pcbType}</p>

        </div>

        <div className="card">

          <h3>Confidence</h3>

          <p>{analysis.confidence}</p>

        </div>

        {/* Chat Section */}

        <div className="card">

          <h2>Ask AI About This PCB</h2>

          <div className="chat-history">

            {chatHistory.length === 0 ? (

              <p>No questions asked yet.</p>

            ) : (

              chatHistory.map((chat, index) => (

                <div
                  key={index}
                  className="chat-message"
                >

                  <p>

                    <strong>You:</strong> {chat.question}

                  </p>

                  <p>

                    <strong>AI:</strong> {chat.answer}

                  </p>

                  <hr />

                </div>

              ))

            )}

          </div>

          <input
            type="text"
            className="chat-input"
            placeholder="Ask anything about this PCB..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAskQuestion();
              }
            }}
          />

          <button
            className="analyze-btn"
            onClick={handleAskQuestion}
            disabled={chatLoading}
          >
            {chatLoading ? "Thinking..." : "Ask AI"}
          </button>

        </div>

        {/* Components */}

        <div className="card">

          <h3>Detected Components</h3>

          <ul>

            {(analysis.components || []).map(
              (component, index) => (

                <li key={index}>

                  <strong>
                    {component.designator}
                  </strong>

                  {" - "}

                  {component.type}

                  <br />

                  {component.partNumber && (
                    <>
                      Part :
                      {component.partNumber}
                      <br />
                    </>
                  )}

                  {component.value && (
                    <>
                      Value :
                      {component.value}
                      <br />
                    </>
                  )}

                  {component.marking && (
                    <>
                      Marking :
                      {component.marking}
                    </>
                  )}

                </li>

              )
            )}

          </ul>

        </div>
                {/* Missing Components */}

        <div className="card">

          <h3>Missing Components</h3>

          {(analysis.missingComponents || []).length === 0 ? (

            <p>No missing components detected.</p>

          ) : (

            <ul>

              {analysis.missingComponents.map((item, index) => (

                <li key={index}>{item}</li>

              ))}

            </ul>

          )}

        </div>

        {/* Faults */}

        <div className="card">

          <h3>Fault Detection</h3>

          {(analysis.faults || []).length === 0 ? (

            <p>No visible faults detected.</p>

          ) : (

            <ul>

              {analysis.faults.map((item, index) => (

                <li key={index}>{item}</li>

              ))}

            </ul>

          )}

        </div>

        {/* AI Suggestions */}

        <div className="card">

          <h3>AI Suggestions</h3>

          {(analysis.suggestions || []).length === 0 ? (

            <p>No suggestions available.</p>

          ) : (

            <ul>

              {analysis.suggestions.map((item, index) => (

                <li key={index}>{item}</li>

              ))}

            </ul>

          )}

        </div>

      </div>

    )}

  </div>

);

}
