import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ExternalLinkIcon = FaExternalLinkAlt as any;

interface PdfRendererProps {
  filePath: string;
}

const PdfRenderer: React.FC<PdfRendererProps> = ({ filePath }) => {
  return (
    <div className="w-full">
      {/* Link to open in new tab */}
      <div className="mb-4 flex justify-end">
        <a
          href={filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <ExternalLinkIcon />
          <span>Otwórz w nowej karcie</span>
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
        <iframe
          src={filePath}
          title="PDF Viewer"
          width="100%"
          height="800px"
          className="w-full min-h-screen"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default PdfRenderer;


