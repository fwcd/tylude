import { isEqual, isTrue, isFalse } from "./predicates";

// Using Peano arithemtic, we can add numbers.
// This example only type-checks if 1 + 1 = 2.
isEqual<
    Add<Succ<Zero>, Succ<Zero>>,
    Succ<Succ<Zero>>
>();

// Using aliases, we can concisely express larger
// computations too.
isEqual<Add<Two, Five>, Seven>();

// Other arithmetic operations work too.
isEqual<Sub<Five, Three>, Two>();
isEqual<Add<One, Three>, Mult<Two, Two>>();

// We can perform operations on lists too.
// This only type-checks if [1] + [2] = [1, 2]
isEqual<
    Append<
        Cons<One, Nil>,
        Cons<Two, Nil>
    >,
    Cons<One, Cons<Two, Nil>>
>();

// Similarly, we can use aliases for small lists:
isEqual<
    Append<List2<One, Two>, List3<Three, Four, Five>>,
    List5<One, Two, Three, Four, Five>
>();

// Boolean operators
isEqual<And<True, False>, False>();
isEqual<And<True, True>, True>();
isTrue<Or<True, False>>();
isFalse<Not<True>>();
