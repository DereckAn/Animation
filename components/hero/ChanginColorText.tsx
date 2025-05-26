interface ChanginColorTextProps {
  text: string;
  className?: string;
}

export const ChanginColorText = ({
  text,
  className,
}: ChanginColorTextProps) => {
  return (
    <span
      className={className}
      style={{
        fontSize: "clamp(1rem, 7vw, 15rem)",
        whiteSpace: "nowrap",
        animation: "colorTransition 2s ease-in-out 3s forwards",
      }}
    >
      {text}
    </span>
  );
};
