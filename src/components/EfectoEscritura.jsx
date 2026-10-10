import { useEffect, useState } from "react";

const PHRASES = ["Hola ! soy Máximo", "Bienvenido a mi web"];

const EfectoEscritura = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const current = loopNum % PHRASES.length;
    const fullText = PHRASES[current];

    if (!isDeleting && text === fullText) {
      // Pausa 2 segundos al terminar de escribir la frase antes de empezar a borrar
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setTypingSpeed(100);
      return;
    }

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <p className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-2 pb-6 lg:pb-1 items-center min-h-[50px]">
      <span>{text}</span>
      <span className="animate-pulse text-yellow-200">|</span>
    </p>
  );
};

export default EfectoEscritura;