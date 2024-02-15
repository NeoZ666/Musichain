// import React, { useState, useEffect } from 'react';
// import { AzureKeyCredential, TextAnalysisClient } from '@azure/ai-language-text';
// import { Document, Page, pdfjs } from 'react-pdf';
// import * as pdfjsLib from 'pdfjs-dist/webpack.mjs';


// function App() {
//   const [file, setFile] = useState(null);
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pdfText, setPdfText] = useState('');

//   useEffect(() => {
//     const handleTextExtraction = async () => {
//       try {
//         if (!file) {
//           return;
//         }

//         const reader = new FileReader();
//         reader.onload = async (e) => {
//           const pdfContent = e.target.result;

//           // Azure Text Analytics API credentials
//           const apiKey = '2a689840448d4661b85c2f69624d6b8b';
//           const endpoint = 'https://musichain.cognitiveservices.azure.com/';

//           const client = new TextAnalysisClient(endpoint, new AzureKeyCredential(apiKey));
//           const actions = [
//             {
//               kind: 'ExtractiveSummarization',
//               maxSentenceCount: 2,
//             },
//           ];

//           const extractedText = await extractTextFromPdf(pdfContent);
//           setPdfText(extractedText);

//           const documents = [extractedText];
//           const poller = await client.beginAnalyzeBatch(actions, documents, 'en');

//           const results = await poller.pollUntilDone();
//           const extractedSummaries = [];

//           for await (const actionResult of results) {
//             if (actionResult.kind !== 'ExtractiveSummarization') {
//               throw new Error(
//                 `Expected extractive summarization results but got: ${actionResult.kind}`
//               );
//             }
//             if (actionResult.error) {
//               const { code, message } = actionResult.error;
//               throw new Error(`Unexpected error (${code}): ${message}`);
//             }
//             for (const result of actionResult.results) {
//               if (result.error) {
//                 const { code, message } = result.error;
//                 throw new Error(`Unexpected error (${code}): ${message}`);
//               }
//               extractedSummaries.push(result.sentences.map((sentence) => sentence.text).join('\n'));
//             }
//           }
//           // Update state with the extracted summaries if needed
//         };

//         reader.readAsDataURL(file);
//       } catch (error) {
//         console.error('An error occurred during text extraction:', error);
//       }
//     };

//     handleTextExtraction();
//   }, [file]);

//   const onFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     setPageNumber(1);
//     setPdfText('');
//   };

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const onPageChange = (newPageNumber) => {
//     setPageNumber(newPageNumber);
//   };

//   return (
//     <div className="App">
//       <h1>PDF Extraction App</h1>
//       <input type="file" onChange={onFileChange} accept=".pdf" />
//       {file && (
//         <div>
//           <div>
//             <h2>PDF Viewer</h2>
//             <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//               <Page pageNumber={pageNumber} />
//             </Document>
//             <p className="mt-2 text-sm">
//               Page {pageNumber} of {numPages}
//             </p>
//           </div>
//           <div>
//             <h2>Extracted Text</h2>
//             <pre>{pdfText}</pre>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// async function extractTextFromPdf(pdfContent) {
//   return new Promise((resolve, reject) => {
//     const loadingTask = pdfjsLib.getDocument(pdfContent);
//     loadingTask.promise
//       .then((pdfDocument) => {
//         // Request a first page
//         return pdfDocument.getPage(1);
//       })
//       .then((pdfPage) => {
//         // Render the page to a text layer
//         return pdfPage.getTextContent();
//       })
//       .then((textContent) => {
//         // Extract text content
//         const text = textContent.items.map((item) => item.str).join('\n');
//         resolve(text);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { AzureKeyCredential, TextAnalysisClient } from '@azure/ai-language-text';
import { Document, Page, pdfjs } from 'react-pdf';
import * as pdfjsLib from 'pdfjs-dist/webpack.mjs';

function App() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfText, setPdfText] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const handleTextExtraction = async () => {
      try {
        if (!file) {
          return;
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
          const pdfContent = e.target.result;

          const extractedText = await extractTextFromPdf(pdfContent);
          setPdfText(extractedText);

          // Azure Text Analytics API credentials
          const apiKey = '2a689840448d4661b85c2f69624d6b8b';
          const endpoint = 'https://musichain.cognitiveservices.azure.com/';

          const client = new TextAnalysisClient(endpoint, new AzureKeyCredential(apiKey));
          const actions = [
            {
              kind: 'ExtractiveSummarization',
              maxSentenceCount: 20,
            },
          ];

          const documents = [extractedText];
          const poller = await client.beginAnalyzeBatch(actions, documents, 'en');

          const results = await poller.pollUntilDone();
          const extractedSummaries = [];

          for await (const actionResult of results) {
            if (actionResult.kind !== 'ExtractiveSummarization') {
              throw new Error(
                `Expected extractive summarization results but got: ${actionResult.kind}`
              );
            }
            if (actionResult.error) {
              const { code, message } = actionResult.error;
              throw new Error(`Unexpected error (${code}): ${message}`);
            }
            for (const result of actionResult.results) {
              if (result.error) {
                const { code, message } = result.error;
                throw new Error(`Unexpected error (${code}): ${message}`);
              }
              extractedSummaries.push(result.sentences.map((sentence) => sentence.text).join('\n'));
            }
          }
          // Set the summary in state
          setSummary(extractedSummaries.join('\n'));
        };

        reader.readAsDataURL(file);
      } catch (error) {
        console.error('An error occurred during text extraction:', error);
      }
    };

    handleTextExtraction();
  }, [file]);

  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPageNumber(1);
    setPdfText('');
    setSummary('');
  };

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const onPageChange = (newPageNumber) => {
//     setPageNumber(newPageNumber);
//   };

  return (
    <div className="flex flex-col gap-y-2 justify-center items-center">
      <h1 className='text-3xl text-center font-bold mt-2'>PDF Extraction & Summarization App</h1>
      <input className='border-2 p-4 border-slate-200 rounded-md' type="file" onChange={onFileChange} accept=".pdf" />
      {file && (
        <div className="flex mx-2">
          <div className="w-1/2 p-4">
            <h2 className='text-2xl font-bold text-slate-300'>PDF Viewer</h2>

            {/* LEFT */}
            <Document className="border-[10px] border-slate-400 h-[800px] overflow-y-auto" file={file} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p className="mt-2 text-sm">
              Page {pageNumber} of {numPages}
            </p>
          </div>

          {/* RIGHT  */}
          <div className='w-1/2 mt-4'>
            <h2 className='text-2xl font-bold text-slate-300'>Extracted Text</h2>
            <div className="p-4 border-[10px] border-slate-400 h-[800px] overflow-y-auto">
              <pre>{pdfText}</pre>
              <h2>Summary</h2>
              <pre>{summary}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

async function extractTextFromPdf(pdfContent) {
  return new Promise((resolve, reject) => {
    const loadingTask = pdfjsLib.getDocument(pdfContent);
    loadingTask.promise
      .then((pdfDocument) => pdfDocument.getPage(1))
      .then((pdfPage) => pdfPage.getTextContent())
      .then((textContent) => {
        const text = textContent.items.map((item) => item.str).join('\n');
        resolve(text);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default App;