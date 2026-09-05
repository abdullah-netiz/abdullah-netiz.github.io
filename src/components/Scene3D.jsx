import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Scene3D() {
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 18;

    // 2. Optimized WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // 3. Central 3D Holographic Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing icosahedron
    const innerGeo = new THREE.IcosahedronGeometry(3.6, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // Outer cybernetic ring (torus)
    const ringGeo = new THREE.TorusGeometry(5.2, 0.08, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8a2be2,
      transparent: true,
      opacity: 0.6,
      wireframe: true
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(6.0, 0.06, 16, 100),
      new THREE.MeshBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.4,
        wireframe: true
      })
    );
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = Math.PI / 6;
    coreGroup.add(ring2);

    // Central solid pulsing core
    const solidCore = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 24, 24),
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: false,
        transparent: true,
        opacity: 0.25
      })
    );
    coreGroup.add(solidCore);

    // 4. Neural Synapses / Floating Nodes
    const particleCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    const spread = 24;
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * (spread * 0.7);
      const z = (Math.random() - 0.5) * 14;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle Points
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.22,
      transparent: true,
      opacity: 0.85
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Dynamic Synapse Connection Lines
    const maxLines = 120;
    const linePositions = new Float32Array(maxLines * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x8a2be2,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const lineSystem = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineSystem);

    // 5. Mouse Interaction Tracking with Smooth Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2.5;
      targetY = -y * 2.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. Viewport Visibility & Tab Active Optimization (Prevents CPU/GPU lag!)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 7. Animation Loop with Clock
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Skip GPU render if not visible (saves 100% battery & stops hanging)
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / group parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      coreGroup.rotation.y += 0.008;
      coreGroup.rotation.x += 0.004;
      coreGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.1;

      ring1.rotation.z += 0.012;
      ring2.rotation.y += 0.015;

      // Pulse the central core
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      solidCore.scale.set(pulse, pulse, pulse);

      // Camera responds gently to mouse
      camera.position.x = mouseX * 2;
      camera.position.y = mouseY * 2;
      camera.lookAt(0, 0, 0);

      // Animate Particles
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += particleVelocities[i].x;
        positions[i3 + 1] += particleVelocities[i].y;
        positions[i3 + 2] += particleVelocities[i].z;

        // Wrap around bounds
        if (Math.abs(positions[i3]) > spread / 2) particleVelocities[i].x *= -1;
        if (Math.abs(positions[i3 + 1]) > (spread * 0.7) / 2) particleVelocities[i].y *= -1;
        if (Math.abs(positions[i3 + 2]) > 7) particleVelocities[i].z *= -1;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Update Lines connecting close nodes
      let lineIndex = 0;
      const linePosArray = lineGeo.attributes.position.array;
      const maxDistance = 4.8;

      for (let i = 0; i < particleCount && lineIndex < maxLines; i++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        for (let j = i + 1; j < particleCount && lineIndex < maxLines; j++) {
          const x2 = positions[j * 3];
          const y2 = positions[j * 3 + 1];
          const z2 = positions[j * 3 + 2];

          const distSq = (x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2;
          if (distSq < maxDistance * maxDistance) {
            linePosArray[lineIndex * 6] = x1;
            linePosArray[lineIndex * 6 + 1] = y1;
            linePosArray[lineIndex * 6 + 2] = z1;
            linePosArray[lineIndex * 6 + 3] = x2;
            linePosArray[lineIndex * 6 + 4] = y2;
            linePosArray[lineIndex * 6 + 5] = z2;
            lineIndex++;
          }
        }
      }

      // Clear remaining line coordinates
      for (let k = lineIndex * 6; k < maxLines * 6; k++) {
        linePosArray[k] = 0;
      }
      lineGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount to avoid leaks
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      solidCore.geometry.dispose();
      solidCore.material.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing z-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Interactive 3D Agentic Neural Core (Move cursor to orbit)"
    >
      {/* 3D Canvas status overlay */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-[11px] font-mono text-cyan-400 border border-cyan-500/20">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>WebGL 60FPS: {isHovered ? 'Active Tracking' : 'Idle Orbit'}</span>
      </div>
    </div>
  );
}
