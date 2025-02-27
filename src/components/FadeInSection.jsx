import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
