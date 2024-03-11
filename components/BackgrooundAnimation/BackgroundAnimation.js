import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;

  perspective: 2px;
`;


const BackgroundAnimation = () => {
  const svgRef = useRef(null);
  const particles = [];

  useEffect(() => {
    const svg = svgRef.current;

    // Initialize parameters
    const sigma = 10;
    const rho = 28;
    const beta = 8 / 3;
    const dt = 0.01;

    // Create particles with different initial positions
    const initialPositions = [
      { x: 1, y: 0, z: 0 },
      { x: -2, y: 0, z: 0 },
      { x: 2, y: 0, z: 0 },
      { x: -1, y: 0, z: 0 }
    ];

    // Create particles
    initialPositions.forEach((position, index) => {
      const particle = document.createElementNS("http://www.w3.org/2000/svg", "path");
      particle.setAttribute("fill", "none");
      particle.setAttribute("stroke-width", "0.6");
      particle.setAttribute("r", "5");
      particle.style.filter = "url(#glow)";
      svg.appendChild(particle);
      particles.push({ element: particle, trail: [], ...position, index });
    });

    // Create glow effect
    const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute("id", "glow");
    svg.appendChild(filter);
    const feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
    feGaussianBlur.setAttribute("stdDeviation", "2");
    filter.appendChild(feGaussianBlur);

    // Animate particles
    function animate() {
      particles.forEach((particle) => {
        const point = lorenzAttractor(sigma, rho, beta, dt, particle.x, particle.y, particle.z);
        particle.x = point.x;
        particle.y = point.y;
        particle.z = point.z;
        // Update particle positions and trails
        const cx = particle.x * 60 + 500;
        const cy = -particle.z * 60 + 1000;
        particle.trail.push({ x: cx, y: cy });
        if (particle.trail.length > 2000) {
          particle.trail.shift(); // Remove oldest trail point
        }

        // Draw trail
        const trailPath = particle.trail.reduce((path, pos, index) => {
          return index === 0 ? `M ${pos.x} ${pos.y}` : `${path} L ${pos.x} ${pos.y}`;
        }, "");
        particle.element.setAttribute("d", trailPath);

        // Set trail color based on trail position
        const color = calculateTrailColor(particle.trail);
        particle.element.setAttribute("stroke", color);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  // Implement Lorenz Attractor Equations
  function lorenzAttractor(sigma, rho, beta, dt, x, y, z) {
    const dx = sigma * (y - x);
    const dy = x * (rho - z) - y;
    const dz = x * y - beta * z;
    return {
      x: x + dt * dx,
      y: y + dt * dy,
      z: z + dt * dz
    };
  }

  // Function to calculate trail color based on trail position
  function calculateTrailColor(trail) {
    // Example: Color based on distance from the origin (0, 0)
    const distance = Math.sqrt(trail[trail.length - 1].x ** 2 + trail[trail.length - 1].y ** 2);
    const color = distance > 10 ? 'purple' : 'black';
    return color;
  }

  return (
    <BackgroundContainer>
      <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 1920 1080">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </BackgroundContainer>
  );
}

export default BackgroundAnimation;
