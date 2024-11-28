import React, { useState, useEffect, useCallback, useMemo } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const TextForm = (props) => {
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState({ minutes: 0, seconds: 0 });
  const [showOutput, setShowOutput] = useState(false);

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  const handleTextToSpeech = useCallback((text) => {
    const synth = window.speechSynthesis;
    if (synth.speaking) return;
    if (text !== '') {
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.onend = () => console.log('SpeechSynthesisUtterance.onend');
      utterThis.onerror = (event) => console.error('SpeechSynthesisUtterance.onerror', event);
      synth.speak(utterThis);
    }
  }, []);

  const handleStartListening = useCallback(() => {
    if (typeof SpeechRecognition.startListening === 'function') {
      handleTextToSpeech(text);
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    } else {
      console.error('startListening function is not available.');
    }
  }, [handleTextToSpeech, resetTranscript, text]);

  const handleStopListening = useCallback(() => {
    if (typeof SpeechRecognition.stopListening === 'function') {
      SpeechRecognition.stopListening();
      setText(transcript);
      setShowOutput(true);
    } else {
      console.error('stopListening function is not available.');
    }
  }, [transcript]);

  const handleOnChange = (event) => {
    setText(event.target.value);
    setShowOutput(false);
  };

  const handleUpClick = () => {
    setOutput(text.toUpperCase());
    setShowOutput(true);
  };

  const handleLowClick = () => {
    setOutput(text.toLowerCase());
    setShowOutput(true);
  };

  const handleRemoveExtraSpaces = () => {
    const trimmedText = text.replace(/\s+/g, ' ').trim();
    setOutput(trimmedText);
    setShowOutput(true);
  };

  const handleWordCount = () => {
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);

    const averageWordsPerMinute = 200;
    const estimatedMinutes = Math.floor(words.length / averageWordsPerMinute);
    const estimatedSeconds = Math.ceil((words.length / averageWordsPerMinute - estimatedMinutes) * 60);

    setReadingTime({ minutes: estimatedMinutes, seconds: estimatedSeconds });
    setShowOutput(true);
  };

  const handleClearClick = () => {
    setText('');
    setOutput('');
    setWordCount(0);
    setReadingTime({ minutes: 0, seconds: 0 });
    setShowOutput(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output || text)
      .then(() => alert('Text copied to clipboard!'))
      .catch((error) => console.error('Failed to copy:', error));
  };

  const handleExportAsFile = () => {
    const blob = new Blob([output || text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'output.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const darkenColor = useMemo(() => (color, percent) => {
    // A simple algorithm to darken a color
    const f = parseInt(color.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = f >> 16,
      G = (f >> 8) & 0x00FF,
      B = f & 0x0000FF;
    return `#${(0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1)}`;
  }, []);

  const buttonStyle = useCallback((bgColor) => ({
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: bgColor,
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.2s',
    margin: '5px',
    '&:hover': { backgroundColor: darkenColor(bgColor, 0.2) },
    '&:active': { transform: 'scale(0.98)' },
  }), [darkenColor]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        {props.heading}
      </h1>

      <div style={textareaContainerStyle}>
        <textarea
          rows="5"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter text here..."
          style={textareaStyle}
        />
        <button
          onClick={handleClearClick}
          style={clearButtonStyle}
          title="Clear text"
        >
          X
        </button>
      </div>

      <div style={buttonContainerStyle}>
        <button
          onClick={handleUpClick}
          style={buttonStyle('#3f51b5')}
          title="Convert to Upper Case"
        >
          UPPERCASE
        </button>

        <button
          onClick={handleLowClick}
          style={buttonStyle('#f44336')}
          title="Convert to Lower Case"
        >
          lowercase
        </button>

        <button
          onClick={handleRemoveExtraSpaces}
          style={buttonStyle('#4caf50')}
          title="Remove Extra Spaces"
        >
          Remove Extra Spaces
        </button>

        <button
          onClick={handleCopy}
          style={buttonStyle('#9c27b0')}
          title="Copy Text"
        >
          Copy
        </button>

        <button
          onClick={handleExportAsFile}
          style={buttonStyle('#ff9800')}
          title="Export as File"
        >
          Export as File
        </button>
      </div>

      <div style={buttonContainerStyle}>
        <button
          onClick={handleStartListening}
          style={buttonStyle('#3f51b5')}
          title="Start Listening"
        >
          Start Listening
        </button>

       
      </div>

      {showOutput && (
        <div style={outputContainerStyle}>
          <h3 style={outputHeadingStyle}>
            Output
          </h3>
          <p style={outputTextStyle}>
            {output}
          </p>
        </div>
      )}

      {wordCount > 0 && (
        <div style={outputContainerStyle}>
          <h3 style={outputHeadingStyle}>
            Word Count & Reading Time
          </h3>
          <p style={outputTextStyle}>
            Words: {wordCount}
          </p>
          <p style={outputTextStyle}>
            Reading Time: {readingTime.minutes} minute(s) {readingTime.seconds} second(s)
          </p>
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  maxWidth: '800px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f5f5f5',
  margin: '20px auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#333',
};

const textareaContainerStyle = {
  position: 'relative',
  marginBottom: '20px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  resize: 'none',
};

const clearButtonStyle = {
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-50%)',
  backgroundColor: '#f44336',
  border: 'none',
  color: '#fff',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const buttonContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginBottom: '20px',
};

const outputContainerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const outputHeadingStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: '#333',
};

const outputTextStyle = {
  fontSize: '1.1rem',
  color: '#555',
};

export default TextForm;
