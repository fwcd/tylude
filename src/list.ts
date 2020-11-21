// Lists
type Nil = { nil: true };
type Cons<X, Xs> = { x: X, xs: Xs };

// Aliases for convenience
type List1<X> = Cons<X, Nil>;
type List2<X, Y> = Cons<X, List1<Y>>;
type List3<X, Y, Z> = Cons<X, List2<Y, Z>>;
type List4<X, Y, Z, W> = Cons<X, List3<Y, Z, W>>;
type List5<X, Y, Z, W, A> = Cons<X, List4<Y, Z, W, A>>;
type List6<X, Y, Z, W, A, B> = Cons<X, List5<Y, Z, W, A, B>>;
type List7<X, Y, Z, W, A, B, C> = Cons<X, List6<Y, Z, W, A, B, C>>;
type List8<X, Y, Z, W, A, B, C, D> = Cons<X, List7<Y, Z, W, A, B, C, D>>;

// Concatenation
type Append<Xs, Ys> = Xs extends Cons<infer X, infer Rs>
    ? Cons<X, Append<Rs, Ys>>
    : (Xs extends Nil
        ? Ys
        : Fail<"Cannot append to non-list!">);
