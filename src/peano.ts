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

// Basic predicates
type IsNumber<N> = N extends Succ<infer _>
    ? True
    : N extends Nil
        ? True
        : False;

// Addition
type Add<N, M> = N extends Succ<infer Nminus1>
    ? Succ<Add<Nminus1, M>>
    : N extends Zero
        ? M
        : Fail<"Cannot add non-number!">;

// Subtraction
type Sub<N, M> = M extends Succ<infer Jminus1>
    ? N extends Succ<infer Nminus1>
        ? Sub<Nminus1, Jminus1>
        : Fail<"Cannot subtract below zero!">
    : N;

// Multiplication
type Mult<N, M> = N extends Succ<infer Nminus1>
    ? Add<M, Mult<Nminus1, M>>
    : N extends Zero
        ? Zero
        : Fail<"Cannot multiply non-number!">

// '<=' implementation (by repeatedly subtracting both sides until one of them is 0)
type LessOrEqual<N, M> = N extends Succ<infer Nminus1>
    ? M extends Succ<infer J>
        ? LessOrEqual<Nminus1, J>
        : M extends Zero
            ? False
            : Fail<"Cannot compare when right-hand side is non-number!">
    : N extends Zero
        ? True
        : Fail<"Cannot compare when left-hand side is non-number!">;

// '>', '>=' and '<' implementation (derived from '<=')
type Greater<N, M> = Catch<LessOrEqual<N, M>, Not<LessOrEqual<N, M>>>;
type GreaterOrEqual<N, M> = Catch<LessOrEqual<N, M>, Or<Greater<N, M>, Equal<N, M>>>;
type Less<N, M> = Catch<LessOrEqual<N, M>, Not<GreaterOrEqual<N, M>>>;

// Division with remainder implementation (by repeatedly subtracting)
type DivWithRemImpl<N, M, Q> = M extends Zero
    ? Fail<"Cannot divide by zero!">
    : Less<N, M> extends True
        ? [Q, N]
        : DivWithRemImpl<Sub<N, M>, M, Succ<Q>>;

// Division
type Div<N, M> = DivWithRemImpl<N, M, Zero> extends [infer Q, infer _]
    ? Q
    : Fail<"Cannot perform division!">;

// Remainder
type Rem<N, M> = DivWithRemImpl<N, M, Zero> extends [infer _, infer R]
    ? R
    : Fail<"Cannot compute remainder!">;

// Divisibility test
type Divides<N, M> = Equal<Rem<N, M>, Zero>

// Primality test implementation (using trial division)
type IsPrimeImpl<N, I> = LessOrEqual<N, One> extends True
    ? False
    : N extends Two
        ? True
        : GreaterOrEqual<I, Two> extends True
            ? Divides<N, I> extends True
                ? False
                : I extends Succ<infer Iminus1>
                    ? IsPrimeImpl<N, Iminus1>
                    : Fail<"Index less than zero during primality test!">
            : True;

// Primality test
type IsPrime<N> = N extends Succ<infer Nminus1>
    ? IsPrimeImpl<N, Nminus1>
    : False;
