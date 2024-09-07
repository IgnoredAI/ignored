// components/TypewriterTextView.jsx
"use client"; // This component needs to be client-side

import { useState, useEffect } from "react";

const textArray = ["Hi, can I use it for free?", "Hey, is this really secure?"];
const typingSpeed = 200; // Typing speed in milliseconds
const deletingSpeed = 150; // Speed for deleting

export function TypewriterTextView({ className }) { // Accept className as a prop
  const [textIndex, setTextIndex] = useState(0); // Index for selecting the text
  const [currentText, setCurrentText] = useState(""); // The current text being typed or deleted
  const [isDeleting, setIsDeleting] = useState(false); // Whether we're deleting
  const [delay, setDelay] = useState(typingSpeed); // Delay between typing and deleting

  useEffect(() => {
    const handleTyping = () => {
      const fullText = textArray[textIndex]; // Get the full text for the current index

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, prev.length - 1)); // Delete one character
        setDelay(deletingSpeed); // Set the delay for deleting
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1)); // Add one character
        setDelay(typingSpeed); // Set the delay for typing
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before starting to delete
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArray.length); // Move to the next text
      }
    };

    const timeout = setTimeout(handleTyping, delay); // Set timeout for typing effect

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [currentText, isDeleting, textIndex, delay]);

  return (
    <h2 className={`font-ppfragment ${className}`}> {/* Apply the className prop */}
      {currentText}
      <span className="blinking-cursor">|</span>
    </h2>
  );
}
