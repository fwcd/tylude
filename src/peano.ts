// Peano numbers
type Zero = { zero: true };
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

// Addition
type Add<N, M> = N extends Succ<infer I>
    ? Succ<Add<I, M>>
    : M;

// Subtraction
type Sub<N, M> = M extends Succ<infer J>
    ? (N extends Succ<infer I>
        ? Sub<I, J>
        : Fail) // cannot subtract below zero
    : N;
