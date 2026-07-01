// import { useState } from "react";

// import Sidebar from "../components/Sidebar/Sidebar";
// import UploadBox from "../components/upload/Upload";
// import AnalysisCard from "../components/Analysiscard/Analysiscard";
// import ChatMessages from "../components/Chatmsg/Chatmsg";
// import ChatInput from "../components/Chatinput/Chatinp";

// import { analyzePCB } from "../services/analysis";

// import "./dashboard.css";

// export default function DashboardLayout() {
//   const [image, setImage] = useState(null);

//   const [analysis, setAnalysis] = useState(null);

//   const [messages, setMessages] = useState([]);

//   const [loading, setLoading] = useState(false);

//   // Upload image or sample image
//   function handleImage(selectedImage) {
//     setImage(selectedImage);
//     setAnalysis(null);
//     setMessages([]);
//   }

//   // Analyze PCB
//   async function handleAnalyze() {
//     if (!image) {
//       alert("Please upload a PCB image.");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Show Thinking...
//       setMessages([
//         {
//           role: "ai",
//           text: "Thinking...",
//         },
//       ]);

//       const res = await analyzePCB(image);

//       console.log("Backend Response:", res);

//       setAnalysis(res.analysis);

//       // Replace Thinking...
//       setMessages([
//         {
//           role: "ai",
//           text: "PCB analyzed successfully. You can now ask questions about this PCB.",
//         },
//       ]);
//     } catch (err) {
//       console.error(err);

//       setMessages([
//         {
//           role: "ai",
//           text:
//             err.response?.data?.message ||
//             "Analysis failed. Please try again.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Chat (currently frontend only)
// async function sendQuestion(question) {
//   if (!question.trim()) return;

//   if (!analysis) {
//     alert("Please analyze a PCB first.");
//     return;
//   }

//   // Show user message immediately
//   setMessages((prev) => [
//     ...prev,
//     {
//       role: "user",
//       text: question,
//     },
//   ]);

//   try {
//     const res = await askPCBQuestion(
//       analysis,
//       question
//     );

//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "ai",
//         text: res.answer,
//       },
//     ]);
//   } catch (err) {
//     console.error(err);

//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "ai",
//         text:
//           err.message ||
//           "Unable to contact AI.",
//       },
//     ]);
//   }
// }

//   return (
//     <div className="layout">
//       {/* Sidebar */}
//       <Sidebar onSampleClick={handleImage} />

//       {/* Main */}
//       <main className="main-content">
//         <h1 className="title">PCB Analyzer AI</h1>

//         {/* Upload */}
//         <UploadBox
//           image={image}
//           onImageSelect={handleImage}
//         />

//         {/* Analyze Button */}
//         {image && (
//           <button
//             className="analyze-btn"
//             onClick={handleAnalyze}
//             disabled={loading}
//           >
//             {loading ? "Analyzing..." : "Analyze PCB"}
//           </button>
//         )}

//         {/* Analysis */}
//         {analysis && (
//           <AnalysisCard
//             analysis={analysis}
//           />
//         )}

//         {/* Chat */}
//         <ChatMessages messages={messages} />

//         <ChatInput onSend={sendQuestion} />
//       </main>
//     </div>
//   );
// }  



import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import UploadBox from "../components/upload/Upload";
import AnalysisCard from "../components/Analysiscard/Analysiscard";
import ChatMessages from "../components/Chatmsg/Chatmsg";
import ChatInput from "../components/Chatinput/Chatinp";

import { analyzePCB } from "../services/analysis";
import { askPCBQuestion } from "../services/chat";
import { generateReport } from "../utils/reportgenrator";

import "./layoutdash.css";

export default function DashboardLayout() {

  const [image, setImage] = useState(null);

  const [analysis, setAnalysis] = useState(null);

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [chatLoading, setChatLoading] = useState(false);

  // -----------------------------
  // Upload Image
  // -----------------------------
  function handleImage(selectedImage) {
    setImage(selectedImage);
    setAnalysis(null);
    setMessages([]);
  }

  // -----------------------------
  // Analyze PCB
  // -----------------------------
  async function handleAnalyze() {

    if (!image) {
      alert("Please upload a PCB image.");
      return;
    }

    try {

      setLoading(true);

      setMessages([
        {
          role: "ai",
          text: "Analyzing PCB..."
        }
      ]);

      const res = await analyzePCB(image);

      console.log("Analysis:", res);

      setAnalysis(res.analysis);

      setMessages([
        {
          role: "ai",
          text:
            "PCB analyzed successfully. Ask me anything about this PCB."
        }
      ]);

    } catch (err) {

      console.error(err);

      setMessages([
        {
          role: "ai",
          text:
            err.response?.data?.message ||
            "PCB analysis failed."
        }
      ]);

    } finally {

      setLoading(false);

    }

  }

  // -----------------------------
  // Ask AI
  // -----------------------------
  async function sendQuestion(question) {


    if (!question.trim()) return;

    if (!analysis) {

      alert("Please analyze a PCB first.");

      return;

    }

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question
      }
    ]);

    try {

      setChatLoading(true);

      const res = await askPCBQuestion(
        analysis,
        question
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            res.answer ||
            "No response received."
        }
      ]);

    } catch (err) {

      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            err.message ||
            "Unable to contact AI."
        }
      ]);

    } finally {

      setChatLoading(false);

    }

  }
  return (
    <div className="layout">

      {/* Sidebar */}
      <Sidebar onSampleClick={handleImage} />

      {/* Main Content */}
      <main className="main-content">

        <h1 className="title">
          PCB Analyzer AI
        </h1>

        {/* Upload */}
        <UploadBox
          image={image}
          onImageSelect={handleImage}
        />

        {/* Analyze Button */}
        {image && (

          <button
            className="analyze-btn"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading
              ? "Analyzing..."
              : "Analyze PCB"}
          </button>

        )}

        {/* Analysis */}

        {analysis && (

          <>

            {/* Header */}

            <div className="analysis-header">

              <h2>
                PCB Analysis Report
              </h2>

              <button
                className="download-btn"
                onClick={() =>
                  generateReport(analysis)
                }
              >
                📄 Download Report
              </button>

            </div>

            {/* Analysis Card */}

            <AnalysisCard
              analysis={analysis}
            />

          </>

        )}

        {/* Chat Section */}

        <div className="chat-section">

          <h2>
            AI PCB Assistant
          </h2>

          <p className="chat-subtitle">
            Ask questions about the analyzed PCB.
          </p>

          <ChatMessages
            messages={messages}
          />

          {chatLoading && (

            <div className="thinking">
              AI is thinking...
            </div>

          )}

          <ChatInput
            onSend={sendQuestion}
          />

        </div>      </main>
    </div>
  );
}