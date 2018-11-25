import React from 'react';
import Particles from 'react-particles-js';

export default () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            value_area: 1500
          }
        },
        line_linked: {
          enable: true,
          opacity: 0.02
        },
        move: {
          direction: 'right',
          speed: 0.06
        },
        size: {
          value: 2.5
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05
          }
        }
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: 'push'
          }
        },
        modes: {
          push: {
            particles_nb: 1
          }
        }
      },
      retina_detect: true
    }}
    style={{
      width: '100%',
      backgroundColor: `#0f243B`,
      position: 'absolute',
      zIndex: '-1'
    }}
  />
);
