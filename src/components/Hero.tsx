import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Button } from './UI/Button';
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Create a glowing sphere
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9de2,
      transparent: true,
      opacity: 0.3
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    // Add a glow effect
    const glowGeometry = new THREE.SphereGeometry(2.2, 64, 64);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: {
          value: 0
        },
        color: {
          value: new THREE.Color(0xff9de2)
        }
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform vec3 color;
        uniform float time;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          float glow = sin(time * 2.0) * 0.1 + 0.9;
          gl_FragColor = vec4(color, intensity * glow);
        }
      `,
      transparent: true,
      side: THREE.BackSide
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowMesh);
    // Add floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
      colors[i] = Math.random();
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    // Position camera
    camera.position.z = 6;
    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      // Rotate sphere slowly
      sphere.rotation.y = elapsedTime * 0.1;
      glowMesh.rotation.y = elapsedTime * 0.1;
      // Update glow shader time uniform
      if (glowMaterial.uniforms) {
        glowMaterial.uniforms.time.value = elapsedTime;
      }
      // Rotate particles
      particles.rotation.y = elapsedTime * 0.05;
      // Render
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      // Clean up resources
      scene.remove(sphere);
      scene.remove(glowMesh);
      scene.remove(particles);
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  return <div id="home" ref={containerRef} className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* 3D/Column Staggered Animated Heading */}
        <motion.div
          className="mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
            hidden: {}
          }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-4 flex justify-center gap-1">
            {[..."Maria's"].map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 80, rotateX: 90 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', stiffness: 400, damping: 20 } }
                }}
                style={{ display: 'inline-block', perspective: 400 }}
              >
                <span className="font-normal drop-shadow-lg" style={{ display: 'inline-block' }}>{char === ' ' ? '\u00A0' : char}</span>
              </motion.span>
            ))}
            {/* Space between words */}
            <span style={{ width: 16, display: 'inline-block' }}></span>
            {[...'Circle'].map((char, i) => (
              <motion.span
                key={i + 100}
                variants={{
                  hidden: { opacity: 0, y: 80, rotateX: 90 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', stiffness: 400, damping: 20 } }
                }}
                style={{ display: 'inline-block', perspective: 400 }}
              >
                <span className="font-normal drop-shadow-lg" style={{ display: 'inline-block' }}>{char}</span>
              </motion.span>
            ))}
          </h1>
        </motion.div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }}>
          <p className="text-xl md:text-2xl font-light text-purple-100 mb-10">
            Skincare, Self-Care & Faith
          </p>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="flex flex-wrap justify-center gap-4">
          <a href="https://www.instagram.com/marias_circle_/" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 overflow-hidden px-6 py-2.5 text-base bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/25 hover:from-pink-600 hover:to-purple-700">
            <span className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-400/20 blur-xl animate-pulse"></span>
            <span className="relative z-10">Watch My Reels</span>
          </a>
          <a href="https://www.tiktok.com/@justmaria028?lang=en" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 overflow-hidden px-6 py-2.5 text-base bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/15 hover:shadow-lg hover:shadow-white/10">
            <span className="relative z-10">View TikTok</span>
          </a>
          <a href="mailto:justmaria028@gmail.com" className="relative flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 overflow-hidden px-6 py-2.5 text-base bg-transparent border border-white/30 text-white hover:border-white/70 hover:bg-white/5">
            <span className="relative z-10">Email Me</span>
          </a>
        </motion.div>
      </div>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1.5,
      delay: 1
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-200">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </motion.div>
    </div>;
}