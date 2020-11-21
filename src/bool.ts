// Booleans
type True = true;
type False = false;

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

// Equality
type Equals<A, B> = B extends A
    ? (A extends B
        ? True
        : False)
    : False;
