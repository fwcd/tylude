// Lists
type Nil = { nil: true };
type Cons<X, Xs> = { x: X, xs: Xs };

// Concatenation
type Append<Xs, Ys> = Xs extends Cons<infer X, infer Rs>
    ? Cons<X, Append<Rs, Ys>>
    : (Xs extends Nil
        ? Ys
        : Fail<"Cannot append to non-list!">);
