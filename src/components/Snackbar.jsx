import React, { useEffect } from 'react';
import './Snackbar.css';

const Snackbar = ({ message, type = 'error', isVisible, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`snackbar snackbar-${type}`}>
      <span className="snackbar-message">{message}</span>
      <button className="snackbar-close" onClick={onClose}>×</button>
    </div>
  );
};

export default Snackbar;
