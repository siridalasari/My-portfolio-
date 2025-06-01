import React from 'react';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}><a href="#about" style={styles.a}>About</a></li>
        <li style={styles.li}><a href="#projects" style={styles.a}>Projects</a></li>
        <li style={styles.li}><a href="#contact" style={styles.a}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    margin: '0 15px',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
  }
};

export default Navbar;
