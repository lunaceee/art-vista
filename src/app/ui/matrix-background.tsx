import React, { useRef, useEffect } from 'react';

type MatrixBackgroundProps = {
    text?: string;       // Characters to use, defaults to "Art Vista"
    fontSize?: number;   // Font size in pixels, defaults to 20
    color?: string;      // Text color, defaults to "#0F0" (green)
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
    text = "Art Vista",
    fontSize = 20,
    color = "#c4b5fd",
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set the canvas size to match the window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        // Create character array from provided text
        const matrixChars = text.split("");
        let columns = canvas.width / fontSize;
        let drops: number[] = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            // Create trailing effect by fading the canvas
            ctx.fillStyle = "rgba(245, 243, 255, 0.02)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set text styling
            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;

            // Draw a character for each drop
            for (let i = 0; i < drops.length; i++) {
                const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                // Randomly reset the drop once it goes off-screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 80);

        // Handle window resize events
        const handleResize = () => {
            resizeCanvas();
            columns = canvas.width / fontSize;
            drops = Array(Math.floor(columns)).fill(1);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, [text, fontSize, color]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[-1]" />;
};

export default MatrixBackground;
