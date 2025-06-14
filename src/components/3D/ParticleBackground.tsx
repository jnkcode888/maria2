import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Scene setup
    const scene = new THREE.Scene();
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorOptions = [new THREE.Color(0xffaacc), new THREE.Color(0xcc88ff), new THREE.Color(0xaaddff), new THREE.Color(0xffffff) // white
    ];
    for (let i = 0; i < count * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 100; // x
      positions[i + 1] = (Math.random() - 0.5) * 100; // y
      positions[i + 2] = (Math.random() - 0.5) * 100; // z
      // Color
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });
    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    // Handle resize
    const handleResize = () => {
      // Update sizes
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Update camera
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      // Update renderer
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);
    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      // Rotate particles slowly
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = elapsedTime * 0.025;
      // Move particles based on mouse position
      const mouseX = (window.innerWidth / 2 - (window.mouseX || 0)) * 0.0005;
      const mouseY = (window.innerHeight / 2 - (window.mouseY || 0)) * 0.0005;
      particles.rotation.y += (mouseX - particles.rotation.y) * 0.05;
      particles.rotation.x += (mouseY - particles.rotation.x) * 0.05;
      // Render
      renderer.render(scene, camera);
      // Call animate again on the next frame
      requestAnimationFrame(animate);
    };
    animate();
    // Track mouse position
    window.mouseX = 0;
    window.mouseY = 0;
    const updateMousePosition = (e: MouseEvent) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    };
    window.addEventListener('mousemove', updateMousePosition);
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', updateMousePosition);
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);
  return <div ref={containerRef} className="absolute inset-0 -z-0" />;
}
// Add type definition for window
declare global {
  interface Window {
    mouseX?: number;
    mouseY?: number;
  }
}