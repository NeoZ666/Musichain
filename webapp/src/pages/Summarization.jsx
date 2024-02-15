// import React, { useState, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'tailwindcss/tailwind.css'; // Import the Tailwind CSS
// import * as pdfjsLib from 'pdfjs-dist/webpack.mjs';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// function Summarization() {
//   const [file, setFile] = useState(null);
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const onFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     setPageNumber(1);
//   };

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="flex">
//       <div className="w-1/2 p-4">
//         <div className="pdf-viewer-container">
//           <div className="pdf-upload">
//             <label htmlFor="pdfInput" className="custom-file-upload">
//               Choose PDF
//             </label>
//             <input
//               id="pdfInput"
//               type="file"
//               onChange={onFileChange}
//               accept=".pdf"
//               className="pdf-input"
//             />
//           </div>
//           {file && (
//             <div className="pdf-display">
//               <h2 className="mb-4">PDF Viewer</h2>
//               <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//                 <Page pageNumber={pageNumber} />
//               </Document>
//               <p className="mt-2 text-sm">
//                 Page {pageNumber} of {numPages}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="w-1/2 p-4">
//         {/* Add your summarization content here */}
//       </div>
//     </div>
//   );
// }

// export default Summarization;
