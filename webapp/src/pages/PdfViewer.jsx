import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const PdfViewer = () => {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onPageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-200 h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <input
          type="file"
          onChange={onFileChange}
          accept=".pdf"
          className="bg-white p-2 border border-gray-300 rounded mb-4"
        />
        {file && (
          <div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p className="mt-2 text-sm">
              Page {pageNumber} of {numPages}
            </p>
            <div className="flex mt-2">
              <button
                onClick={() => onPageChange(pageNumber - 1)}
                disabled={pageNumber <= 1}
                className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Previous
              </button>
              <button
                onClick={() => onPageChange(pageNumber + 1)}
                disabled={pageNumber >= numPages}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
