const head = (
    <div 
        className="w-14 h-14 rounded-full border-solid border-black border-8 absolute top-12 right-[-25px]"
    />
)
const body = (
    <div 
        className="w-2.5 h-24 border-10 bg-black absolute top-24 right-[-2px]"
    />
)
const left_arm = (
    <div 
        className="w-24 h-2.5 rounded-full border-solid border-black border-10 bg-black absolute top-32 right-0 rotate-12"
    />
)
const right_arm = (
    <div 
        className="w-24 h-2.5 rounded-full border-solid border-black border-10 bg-black absolute top-32 right-[-88px] rotate-[-12deg]"
    />
)
const left_leg = (
    <div 
        className="w-24 h-2.5 bg-black absolute top-44 right-0 origin-bottom-right rotate-[-60deg]"
    />
)
const right_leg = (
    <div 
        className="w-24 h-2.5 bg-black absolute top-44 right-[-90px] origin-bottom-left rotate-[60deg]"
    />
)

const body_parts = [head, body, left_arm, right_arm, left_leg, right_leg];

type HangmanDrawingProp = {
    numberOfGuesses: number;
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProp) {
    return (
        <div className="relative">
            {body_parts.slice(0, numberOfGuesses)}
            <div className="h-12 w-2.5 bg-black ml-80 absolute" />
            <div className="h-2.5 w-[200px] bg-black ml-32" />
            <div className="h-[400px] w-2.5 bg-black ml-32" />
            <div className="h-2.5 w-[250px] bg-black" />
        </div>
    )
}

export default HangmanDrawing