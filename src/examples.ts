import { equal } from "./predicates";

// Using Peano arithemtic, we can add numbers.
// This example only type-checks if 1 + 1 = 2.
equal<
    Add<Succ<Zero>, Succ<Zero>>,
    Succ<Succ<Zero>>
>();

// Using aliases, we can concisely express larger
// computations too.
equal<Add<Two, Five>, Seven>();

// Subtraction can be done too.
equal<Sub<Five, Three>, Two>();
