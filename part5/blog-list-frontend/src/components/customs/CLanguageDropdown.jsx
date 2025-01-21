import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

// I18N
import { LOCALES } from "@i18n";

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

  img {
    width: 20px;
    height: 20px;
    border-radius: 2px;
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
  width: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
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

const CLanguageDropdown = ({ onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LOCALES.EN);

  useEffect(() => {
    const savedLocale =
      window.localStorage.getItem("localeLanguage") || LOCALES.EN.code;
    setSelectedLanguage(
      Object.values(LOCALES).find((lang) => lang.code === savedLocale)
    );
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    onLanguageChange(language.code);
    setIsOpen(false);

    window.localStorage.setItem("localeLanguage", language.code);
  };

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
    <DropdownContainer>
      <DropdownButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {selectedLanguage && <selectedLanguage.Flag />}
        {selectedLanguage.cap}
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
