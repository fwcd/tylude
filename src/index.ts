type Zero = { zero: true };
type Succ<N> = { succ: N; }

type Add<N, M> = N extends Succ<infer I>
    ? Succ<Add<I, M>>
    : M;

function forceEqual<T1, T2 extends T1>() {}

// Only type-checks if 1 + 1 = 2
forceEqual<Add<Succ<Zero>, Succ<Zero>>, Succ<Succ<Zero>>>();
