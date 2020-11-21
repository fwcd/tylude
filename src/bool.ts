// Booleans
type True = { _true: true };
type False = { _false: true };

// Negation
type Not<A> = A extends True
    ? False
    : True;

// Conjunction
type And<A, B> = A extends True
    ? (B extends True
        ? True
        : False)
    : False;

// Disjunction
type Or<A, B> = A extends True
    ? True
    : (B extends True
        ? True
        : False);

// Exclusive disjunction
type Xor<A, B> = A extends True
    ? (B extends True
        ? False
        : True)
    : (B extends True
        ? True
        : False);
