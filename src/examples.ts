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

// We can perform operations on lists too.
// This only type-checks if [1] + [2] = [1, 2]
equal<
    Append<
        Cons<One, Nil>,
        Cons<Two, Nil>
    >,
    Cons<One, Cons<Two, Nil>>
>();

// Similarly, we can use aliases for small lists:
equal<
    Append<List2<One, Two>, List3<Three, Four, Five>>,
    List5<One, Two, Three, Four, Five>
>();
