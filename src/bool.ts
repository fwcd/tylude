// Booleans
type True = true;
type False = false;

// Basic predicates
type IsBool<B> = B extends True
    ? True
    : B extends False
        ? True
        : False;

// Negation
type Not<A> = A extends True
    ? False
    : True;

// Conjunction
type And<A, B> = A extends True
    ? B extends True
        ? True
        : False
    : False;

// Disjunction
type Or<A, B> = A extends True
    ? True
    : B extends True
        ? True
        : False;

// Exclusive disjunction
type Xor<A, B> = A extends True
    ? B extends True
        ? False
        : True
    : B extends True
        ? True
        : False;

// Subtype
type Extends<A, B> = A extends B
    ? True
    : False;

// Equality
type Equal<A, B> = And<Extends<A, B>, Extends<B, A>>;
