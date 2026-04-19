import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt, FaTrash, FaUpload } from 'react-icons/fa';

const STORAGE_KEY = 'portfolio_resume_file';
const MAX_FILE_SIZE_MB = 2;

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const Resume = () => {
  const [resume, setResume] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const savedResume = localStorage.getItem(STORAGE_KEY);
    if (!savedResume) return;

    try {
      setResume(JSON.parse(savedResume));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setStatusMessage('');

    const validFile = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!validFile) {
      setStatusMessage('Please upload a PDF, DOC, or DOCX file.');
      event.target.value = '';
      return;
    }

    const fileSizeMb = file.size / (1024 * 1024);
    if (fileSizeMb > MAX_FILE_SIZE_MB) {
      setStatusMessage(`File is too large. Keep it under ${MAX_FILE_SIZE_MB}MB.`);
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const uploadedResume = {
        name: file.name,
        size: file.size,
        uploadedAt: new Date().toISOString(),
        dataUrl: reader.result,
      };

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(uploadedResume));
        setResume(uploadedResume);
        setStatusMessage('Resume uploaded successfully.');
      } catch {
        setStatusMessage('Upload failed. Try a smaller file.');
      }
    };

    reader.onerror = () => {
      setStatusMessage('Could not read this file. Try again.');
    };

    reader.readAsDataURL(file);
    event.target.value = '';
  };

  const removeResume = () => {
    localStorage.removeItem(STORAGE_KEY);
    setResume(null);
    setStatusMessage('Saved resume removed.');
  };

  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="resume-content"
      >
        <p className="resume-intro">
          Upload your latest resume and keep it available for quick viewing and downloading.
        </p>

        <label htmlFor="resume-upload" className="upload-button">
          <FaUpload />
          <span>Upload Resume</span>
        </label>
        <input
          id="resume-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleUpload}
          className="resume-file-input"
        />

        {statusMessage && <p className="resume-status">{statusMessage}</p>}

        {resume ? (
          <>
            <div className="resume-meta">
              <p><strong>File:</strong> {resume.name}</p>
              <p><strong>Size:</strong> {formatBytes(resume.size)}</p>
              <p><strong>Uploaded:</strong> {new Date(resume.uploadedAt).toLocaleString()}</p>
            </div>
            <div className="resume-actions">
              <a href={resume.dataUrl} className="cta-button secondary" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
                <span>Open Resume</span>
              </a>
              <a href={resume.dataUrl} className="cta-button primary" download={resume.name}>
                <FaDownload />
                <span>Download Resume</span>
              </a>
              <button type="button" className="resume-remove-button" onClick={removeResume}>
                <FaTrash />
                <span>Remove</span>
              </button>
            </div>
          </>
        ) : (
          <p className="resume-empty-state">No resume uploaded yet.</p>
        )}

        <p className="resume-note">
          Uploaded files are stored in this browser. If you deploy this site publicly, also keep a final resume
          file in your project&apos;s public folder and link to it.
        </p>
      </motion.div>
    </section>
  );
};

export default Resume;
