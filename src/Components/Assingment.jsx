import React, { useState } from 'react';
import './Assignment.css'; // updated file name
import axios from 'axios';
import Navbar from './Navbar';

const Assignment = () => {
  const [Title, setTitle] = useState('');
  const [Disc, setDisc] = useState('');
  const [Deadline, setDeadline] = useState('');
  const [Files, setFiles] = useState([]);
  const [message, setMessage] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (indexToRemove) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', Title);
    formData.append('description', Disc);
    formData.append('deadline', Deadline);
    Files.forEach((file) => formData.append('files', file));

    try {
      await axios.post('http://localhost:8080/assignments', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('✅ Task added successfully!');
      setTimeout(() => setMessage(null), 3000);
      setTitle('');
      setDisc('');
      setDeadline('');
      setFiles([]);
    } catch (err) {
      console.error('Upload error:', err);
      setMessage('❌ Upload failed. Please try again.');
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <>
      <Navbar />

      <div className="assignment-container">
        <div className="overlay"></div>

        <div className="assignment-card">
          <h2 className="form-title">Create New Assignment</h2>

          <form onSubmit={submitHandler}>
            {message && <div className="form-alert">{message}</div>}

            <div className="form-grid">
              <div>
                <label htmlFor="title" className="form-label">Task Title</label>
                <input
                  id="title"
                  type="text"
                  className="form-input"
                  placeholder="What needs to be done?"
                  value={Title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="description" className="form-label">Description</label>
                <input
                  id="description"
                  type="text"
                  className="form-input"
                  placeholder="Add some details..."
                  value={Disc}
                  onChange={(e) => setDisc(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="deadline" className="form-label">Deadline</label>
                <input
                  id="deadline"
                  type="date"
                  className="form-input"
                  value={Deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="files" className="form-label">Upload Files</label>
                <input
                  id="files"
                  type="file"
                  multiple
                  className="form-input"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {Files.length > 0 && (
              <div className="file-list">
                <h4>📁 Selected Files:</h4>
                <ul>
                  {Files.map((file, index) => (
                    <li key={index}>
                      <span className="file-name">📄 {file.name}</span>
                      <span className="file-size">({(file.size / 1024).toFixed(2)} KB)</span>
                      <button type="button" onClick={() => removeFile(index)}>✖</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="submit"
              disabled={!Title.trim() || !Disc.trim() || !Deadline}
              className="submit-button"
            >
              ➕ Add New Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Assignment;
