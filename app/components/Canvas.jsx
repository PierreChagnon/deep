import React, { useRef, useEffect, useState } from 'react';

const ParticleAnimation = () => {
    const canvasRef = useRef(null);
    const [canvasSize, setCanvasSize] = useState({ width: 3000, height: 2000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let particles = [];
        const numParticles = 1000;
        const circleRadius = 100; // Rayon du cercle au centre de l'image
        const particleLength = 50

        const initializeParticles = () => {
            // Initialiser les particules avec des positions aléatoires
            for (let i = 0; i < numParticles; i++) {
                const x = canvas.width / 2
                const y = canvas.height / 2
                particles.push({
                    x: 0,
                    y: 0,
                    speed: 1,
                    angle: Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x) + Math.PI,
                    show: 0
                });
            }
            // console.log(particles)
        };



        const updateCanvasSize = () => {
            const { width, height } = canvas.getBoundingClientRect();
            setCanvasSize({ width, height });
            initializeParticles();
        };

        // Mettre à jour la taille du canvas lors du chargement initial et du redimensionnement
        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        const update = () => {
            // Effacer le canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                // Mettre à jour la position de la particule
                particle.x += Math.cos(particle.angle) * particle.speed;
                particle.y += Math.sin(particle.angle) * particle.speed;

                // Dessiner la traînée uniquement si la particule est visible
                if (particle.show > 2) {
                    // console.log(particle.show)
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'; // Couleur blanche avec opacité
                    ctx.lineWidth = 2; // Épaisseur de la traînée
                    ctx.beginPath();
                    ctx.moveTo(particle.x - Math.cos(particle.angle) * particle.speed * particleLength, particle.y - Math.sin(particle.angle) * particle.speed * particleLength);
                    ctx.lineTo(particle.x, particle.y);
                    ctx.stroke();
                }

                // Si la particule sort du canvas, la réinitialiser au milieu de l'écran avec un angle aléatoire
                if (
                    particle.x < 0 ||
                    particle.x > canvas.width ||
                    particle.y < 0 ||
                    particle.y > canvas.height
                ) {
                    const angle = Math.random() * Math.PI * 2;
                    particle.x = canvas.width / 2 + Math.cos(angle) * circleRadius;
                    particle.y = canvas.height / 2 + Math.sin(angle) * circleRadius;
                    particle.angle = angle;
                    particle.show += 1
                }
            });

            requestAnimationFrame(update);
        };

        update();

        // Nettoyer lors du démontage du composant
        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            cancelAnimationFrame(update);
        };
    }, []); // Déclencher l'effet uniquement lors du montage initial

    return (
        <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        ></canvas>
    );
};

export default ParticleAnimation;
