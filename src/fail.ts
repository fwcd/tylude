// Type representing failed computation
type Fail<M> = { fail: M };

// Catches the error from the first computation,
// but returns the right one.
type Catch<L, R> = L extends Fail<infer M>
    ? Fail<M>
    : R;
