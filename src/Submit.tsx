import React from 'react';
import './Submit.css';

export const Submit: React.FC = () => {
  return (
    <div className="page-container submit-page">
      <div className="submit-content">
        <h1 className="headline-display">JOIN THE ROSTER</h1>
        <p className="submit-subtext">DROPPING YOUR ARCHIVE ON THE MONOLITH.</p>

        <form className="brutalist-form" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label>Brand Name</label>
            <input type="text" placeholder="ENTER BRAND NAME" />
          </div>

          <div className="form-group">
            <label>IG Handle / Website</label>
            <input type="text" placeholder="@HANDLE OR URL" />
          </div>

          <div className="form-group">
            <label>Brand Description</label>
            <textarea placeholder="TELL US YOUR STORY..." rows={4}></textarea>
          </div>

          <div className="form-group upload-group">
            <label>Upload Your Vision (PDF/JPG)</label>
            <div className="upload-box">
              <span>DRAG & DROP ASSETS</span>
            </div>
          </div>

          <button type="submit" className="button-submit">SUBMIT TO THE CULTURE</button>
        </form>
      </div>
    </div>
  );
};
