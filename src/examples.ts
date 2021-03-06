import { prove, proveExtends } from "./prove";

// Using Peano arithemtic, we can add numbers.
// This example only type-checks if 1 + 1 = 2.
proveExtends<
    Add<Succ<Zero>, Succ<Zero>>,
    Succ<Succ<Zero>>
>();

// Using aliases, we can concisely express larger
// computations too.
proveExtends<Add<Two, Five>, Seven>();

// Other arithmetic operations work too.
// Note that multiplication can cause deeply nested
// types, which may be buggy as of TS 4.1.
proveExtends<Sub<Five, Three>, Two>();
proveExtends<Four, Mult<Two, Two>>();
proveExtends<Div<Four, Two>, Two>();
proveExtends<Rem<Eight, Eight>, Zero>();
proveExtends<Rem<Eight, Three>, Two>();

// We can even perform primality tests.
prove<Not<IsPrime<One>>>();
prove<IsPrime<Two>>();
prove<IsPrime<Three>>();
prove<Not<IsPrime<Four>>>();
prove<IsPrime<Five>>();
prove<Not<IsPrime<Six>>>();
prove<IsPrime<Seven>>();
prove<Not<IsPrime<Eight>>>();
prove<Not<IsPrime<Nine>>>();
prove<Not<IsPrime<Ten>>>();

// With comparison operators, we can check that
// the numbers are ordered correctly.
prove<Greater<One, Zero>>();
prove<Less<One, Three>>();
prove<Not<GreaterOrEqual<Four, Eight>>>();
prove<GreaterOrEqual<Eight, Eight>>();
prove<LessOrEqual<Two, Three>>();

// We can perform operations on lists too.
// This only type-checks if [1] + [2] = [1, 2]
proveExtends<
    Append<
        Cons<One, Nil>,
        Cons<Two, Nil>
    >,
    Cons<One, Cons<Two, Nil>>
>();

// Similarly, we can use aliases for small lists:
proveExtends<
    Append<List2<One, Two>, List3<Three, Four, Five>>,
    List5<One, Two, Three, Four, Five>
>();

// Boolean operators
proveExtends<And<True, False>, False>();
prove<Equal<And<True, True>, True>>();
prove<Or<True, False>>();
prove<Not<Not<True>>>();
