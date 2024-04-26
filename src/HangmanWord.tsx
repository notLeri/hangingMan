type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps): JSX.Element {
  return (
    <div className="flex gap-2 text-8xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter: string, index: number) => (
        <span className="border-solid border-black border-b-4" key={index}>
          <span
            className={`${guessedLetters.includes(letter) || reveal ? "visible" : "invisible"}
            ${!guessedLetters.includes(letter) && reveal ? "text-red-500" : "text-sky-600"}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
