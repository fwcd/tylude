// Type representing failed computation
type Fail<M> = { fail: M };

// Basic predicates
type IsFail<F> = F extends Fail<infer _>
    ? True
    : False;

// Catches the error from the first computation,
// but returns the right one.
type Catch<L, R> = L extends Fail<infer M>
    ? Fail<M>
    : R;
