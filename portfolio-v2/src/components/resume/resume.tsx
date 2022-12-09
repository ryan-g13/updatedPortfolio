import React from 'react';
import { Document, Page } from 'react-pdf';
import './resume.scss';
// @ts-expect-error:
import * as resume from '../../assets/Ryan_Groesch_Resume.pdf';

export default class Resume extends React.Component {
  state = {
    numPages: 0,
    pageNumber: 1,
  }
// @ts-expect-error:
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  handleNext = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  }

  handlePrevious = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  }

  renderPagination = (pageNumber:number, numPages:number) => {
    let previousButton = <button className='small-button fancy-link resume-btn' onClick={this.handlePrevious}>Previous</button>;
    if (pageNumber === 1) {
      previousButton = <button className='small-button resume-btn' disabled={true} onClick={this.handlePrevious}>Previous</button>;
    }
    let nextButton = <button className="small-button fancy-link" onClick={this.handleNext}>Next Page</button>;
    if (pageNumber === numPages) {
      nextButton = <button className="small-button" disabled={true} onClick={this.handleNext}>Next Page</button>;
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

  render() {
    const { pageNumber, numPages } = this.state;
    
    let pagination = null;
    if (numPages) {
      pagination = this.renderPagination(pageNumber, numPages);
    }

    return (
      <div className='resume' >
        <h1>View my work and education history below.</h1>
        <button className='download-button fancy-link'><a href={resume} download="Ryan_Groesch_Resume">Download</a></button> 
        <div className="resume-pdf">
          <Document 
            file={resume}
            onLoadSuccess={this.onDocumentLoad} className="viewable-resume"
            // @ts-expect-error:
            width='720'> 
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div className="button-box">
          {pagination}
        </div>
      </div>
    );
  }
}
