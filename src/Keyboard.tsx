const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const buttonClasses = `w-full border-black border-2 border-solid aspect-square 
    uppercase p-2 font-bold cursor-pointer text-black text-2xl hover:bg-sky-500`;

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  disabled?: boolean;
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-9 gap-2">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${buttonClasses} ${isActive ? 'text-white bg-sky-300' : ""} ${
              isInactive ? 'opacity-30 cursor-not-allowed' : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}   
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
