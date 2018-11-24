const theme = {
  color: {
    accent: {
      primary: {
        base: '#0F243B',
        light: '#4EE1EC'
      },
      error: '#f21a2c'
    },
    background: {
      base: '#fff',
      light: '#f5f5f5',
      overlay: 'rgba(0, 0, 0, 0.5)'
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      base: '#fff',
    },
    elements: {
      line: 'rgba(255, 255, 255, 0.25)',
      icon: {
        base: '#aaa',
        active: '#222'
      }
    }
  },
  font: {
    family: 'Poppins, sans-serif',
    size: {
      base: '16px',
      heading: {
        primary: '3rem',
        secondary: '2rem',
        tertiary: '1.5rem',
        base: '1rem'
      },
      label: {
        primary: '1.125rem',
        secondary: '0.875rem',
        tertiary: '0.75rem',
        base: '1rem'
      }
    },
    weight: {
      base: '400',
      bold: '700'
    },
    lineHeight: {
      label: '1.2',
      heading: '1.3',
      caption: '1.5',
      text: '1.8'
    }
  },
  size: {
    borderRadius: {
      max: '50px',
      big: '12px',
      small: '6px',
    },
    line: '3px'
  },
  effects: {
    shadow: '0 3px 15px 0 rgba(0, 0, 0, 0.06)',
    transition: {
      quick: '0.2s ease-out',
      base: '0.4s ease-out',
      slow: '1s ease-out'
    }
  }
};

export default theme;
