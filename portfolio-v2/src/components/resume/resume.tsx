import {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import './resume.scss';
import resume from '../../assets/Ryan_Groesch_SDE_Resume.pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoad = ( {numPages}:any ) => {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  }

  const handlePrevious = () => {
    setPageNumber(pageNumber - 1);
  }

  const renderPagination = (pageNumber:number, numPages:any) => {
    let previousButton = <button className='small-button fancy-link resume-btn' onClick={handlePrevious}>Previous</button>;
    if (pageNumber === 1) {
      previousButton = <button className='small-button resume-btn' disabled={true} onClick={handlePrevious}>Previous</button>;
    }
    let nextButton = <button className="small-button fancy-link" onClick={handleNext}>Next Page</button>;
    if (pageNumber === numPages) {
      nextButton = <button className="small-button" disabled={true} onClick={handleNext}>Next Page</button>;
    }
    return (
      <nav>
        <ul className="button-box">
          {previousButton}
          <p id="pageText">Page {pageNumber} of {numPages}</p>
          {nextButton}
        </ul>
      </nav>
    );
  }
   
  let pagination = null;
  if (numPages) {
    pagination = renderPagination(pageNumber, numPages);
  }

  return (
    <div className='resume' >
      <h1>View my work and education history below.</h1>
      <button className='download-button fancy-link'><a href={resume} download="Ryan_Groesch_Resume">Download</a></button> 
      <div className="resume-pdf">
        <Document 
          file={resume}
          onLoadSuccess={onDocumentLoad} 
          className="viewable-resume"
          renderMode="svg"
          > 
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className="button-box">
        {pagination}
      </div>
    </div>
  );
}

export default Resume;