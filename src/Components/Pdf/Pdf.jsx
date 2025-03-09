import React, { useEffect, useState } from "react";
import pdfMake from "pdfmake/build/pdfmake.min";
import pdfFonts from "pdfmake/build/vfs_fonts";
import styles from "./Pdf.module.less";
import Loader from "../../Loader/Loader";

export default function Pdf({ stream, outputState }) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [docDefinition, setDocDefinition] = useState({})
  useEffect(() => {
    const pdfMakeObj = {
      content: []
    };
    stream.forEach((ele) => {
      pdfMakeObj.content.push(outputState[ele])
    })
    setDocDefinition(pdfMakeObj)
  }, [outputState])
  useEffect(() => {
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    });
    return () => URL.revokeObjectURL(pdfUrl);
  }, [docDefinition]);

  return (
    <div className={styles.container}>
      {pdfUrl ? (
        <iframe src={pdfUrl} width="100%" height="100%"></iframe>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
