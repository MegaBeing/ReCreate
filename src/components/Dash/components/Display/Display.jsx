import React, { useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
export default function Display({value}) {
    const iframeRef = useRef(null);
    useEffect(() => {
        try {
            const doc = new jsPDF();
            const generatePDF = new Function('doc', value);
            generatePDF(doc);
            const pdfDataUrl = doc.output('datauristring');
            iframeRef.current.src = pdfDataUrl;
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    }, [value]);
    return (
        <div className="display">
            <iframe ref={iframeRef} title="Preview" />
        </div>
    );

}