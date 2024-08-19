import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        <div style={styles.section}>
          <h4>Contact Us</h4>
        </div>
        <div style={styles.section}>
          <h4>Follow Us</h4>
          <p>
            <a href="https://facebook.com" style={styles.link}>
              Facebook
            </a>
          </p>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    position: "fixed", // Закрепляем футер
    left: 0,
    bottom: 0, // Закрепляем его внизу экрана
    width: "100%", // Ширина 100% от экрана
    zIndex: 1000, // Устанавливаем z-index, чтобы футер был выше других элементов
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "0 auto",
    paddingBottom: "20px",
  },
  section: {
    flex: "1",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  footerBottom: {
    borderTop: "1px solid #444",
    paddingTop: "10px",
  },
};

export default Footer;
