import { prove, proveEqual } from "./prove";

// Using Peano arithemtic, we can add numbers.
// This example only type-checks if 1 + 1 = 2.
proveEqual<
    Add<Succ<Zero>, Succ<Zero>>,
    Succ<Succ<Zero>>
>();

// Using aliases, we can concisely express larger
// computations too.
proveEqual<Add<Two, Five>, Seven>();

// Other arithmetic operations work too.
// Note that multiplication can cause deeply nested
// types, which may be buggy as of TS 4.1.
proveEqual<Sub<Five, Three>, Two>();
proveEqual<Four, Mult<Two, Two>>();

// With comparison operators, we can check that
// the numbers are ordered correctly.
prove<Greater<One, Zero>>();
prove<Less<One, Three>>();
prove<Not<GreaterOrEqual<Four, Eight>>>();
prove<GreaterOrEqual<Eight, Eight>>();
prove<LessOrEqual<Two, Three>>();

// We can perform operations on lists too.
// This only type-checks if [1] + [2] = [1, 2]
proveEqual<
    Append<
        Cons<One, Nil>,
        Cons<Two, Nil>
    >,
    Cons<One, Cons<Two, Nil>>
>();

// Similarly, we can use aliases for small lists:
proveEqual<
    Append<List2<One, Two>, List3<Three, Four, Five>>,
    List5<One, Two, Three, Four, Five>
>();

// Boolean operators
proveEqual<And<True, False>, False>();
prove<Equal<And<True, True>, True>>();
prove<Or<True, False>>();
prove<Not<Not<True>>>();
