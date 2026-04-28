"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Abstract 3D Element: A floating, rotating wireframe sphere/knot
    const geometry = new THREE.IcosahedronGeometry(4, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    // Particles (from original design but optimized)
    const pCount = 2000;
    const positions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    const pGeometry = new THREE.BufferGeometry();
    pGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x1A1A1A,
      transparent: true,
      opacity: 0.2,
    });
    const particles = new THREE.Points(pGeometry, pMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xD4AF37, 100, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      knot.rotation.x += 0.005;
      knot.rotation.y += 0.005;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default HeroCanvas;
