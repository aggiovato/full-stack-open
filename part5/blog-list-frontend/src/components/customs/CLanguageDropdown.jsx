// EXTERNAL MODULES
import { useState, useEffect, useRef } from "react";
// ANIMATIONS
import { motion, AnimatePresence } from "framer-motion";
// STYLES
import styled from "styled-components";
// I18N
import { LOCALES } from "@i18n";

/*********************************************************************************** */

const CLanguageDropdown = ({ onLanguageChange }) => {
  // states for dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LOCALES.EN);
  const dropdownRef = useRef(null);

  // useEffect to get the saved language and set it as selected
  useEffect(() => {
    const savedLocale =
      window.localStorage.getItem("localeLanguage") || LOCALES.EN.code;
    setSelectedLanguage(
      Object.values(LOCALES).find((lang) => lang.code === savedLocale)
    );
  }, []);

  // useEffect to close the dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // function to handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    onLanguageChange(language.code);
    setIsOpen(false);

    window.localStorage.setItem("localeLanguage", language.code);
  };

  // variants for dropdown animation
  const dropdownVariants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      originY: 0,
      transition: { duration: 0.5, type: "spring", damping: 10 },
    },
    closed: {
      opacity: 0,
      scale: 0.9,
      y: -10,
      originY: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {selectedLanguage && <selectedLanguage.Flag />}
        <span>{selectedLanguage.cap}</span>
      </DropdownButton>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
          >
            {Object.values(LOCALES).map((lang) => (
              <DropdownItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
                whileHover={{ x: 6, y: -1, scale: 0.95 }}
              >
                <lang.Flag />
                {lang.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </AnimatePresence>
    </DropdownContainer>
  );
};

export default CLanguageDropdown;

/*********************************************************************************** */

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled(motion.button)`
  background: #033a4e;
  color: #d5f8fd;
  border: 1px solid #1f7a8c;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  width: 80px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: #1f7a8c;
  }

  @media (max-width: 480px) {
    border: none;
    background: transparent;
    margin: 0;
    padding: 0;
    width: auto;

    &:hover {
      background: transparent;
      box-shadow: none;
    }

    span {
      display: none;
    }

    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

const DropdownMenu = styled(motion.ul)`
  position: absolute;
  top: 100%;
  right: 0;
  background: #033a4e;
  border: 1px solid #1f7a8c;
  border-radius: 8px;
  margin-top: 8px;
  list-style: none;
  padding: 10px 0;
  width: 140px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media (max-width: 480px) {
    width: 125px;
  }
`;

const DropdownItem = styled(motion.li)`
  padding: 8px 10px;
  color: #d5f8fd;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: #1f7a8c;
    box-shadow: 0 0 5px rgba(31, 157, 169, 0.5);
  }
`;
