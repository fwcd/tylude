// Peano numbers
type Zero = { zero: true };
type Succ<N> = { succ: N; };

// Addition
type Add<N, M> = N extends Succ<infer I>
    ? Succ<Add<I, M>>
    : M;
