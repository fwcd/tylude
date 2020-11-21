// Peano numbers
type Zero = "Zero";
type Succ<N> = { succ: N; };

// Aliases for convenience
type One = Succ<Zero>;
type Two = Succ<One>;
type Three = Succ<Two>;
type Four = Succ<Three>;
type Five = Succ<Four>;
type Six = Succ<Five>;
type Seven = Succ<Six>;
type Eight = Succ<Seven>;
type Nine = Succ<Eight>;
type Ten = Succ<Nine>;
type Eleven = Succ<Ten>;
type Twelve = Succ<Eleven>;
type Thirteen = Succ<Twelve>;
type Fourteen = Succ<Thirteen>;
type Fifteen = Succ<Fourteen>;
type Sixteen = Succ<Fifteen>;
type Seventeen = Succ<Sixteen>;
type Eighteen = Succ<Seventeen>;
type Nineteen = Succ<Eighteen>;
type Twenty = Succ<Nineteen>;

// Addition
type Add<N, M> = N extends Succ<infer I>
    ? Succ<Add<I, M>>
    : (N extends Zero
        ? M
        : Fail<"Cannot add non-number!">);

// Subtraction
type Sub<N, M> = M extends Succ<infer J>
    ? (N extends Succ<infer I>
        ? Sub<I, J>
        : Fail<"Cannot subtract below zero!">)
    : N;

// Multiplication
type Mult<N, M> = N extends Succ<infer I>
    ? Add<M, Mult<I, M>>
    : (N extends Zero ?
        Zero
        : Fail<"Cannot multiply non-number!">)
