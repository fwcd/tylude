# Tylude

A demonstration of TypeScript 4.1's [Recursive Conditional Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#recursive-conditional-types) that encodes Peano numbers and arithmetic on a type level.

## Examples

### Peano Numbers

```typescript
type Zero = { zero: true };
type Succ<N> = { succ: N; };

type One = Succ<Zero>;
type Two = Succ<One>;

type Add<N, M> = N extends Succ<infer I>
    ? Succ<Add<I, M>>
    : M;

// Only type-checks if 1 + 1 = 2
equal<Add<One, One>, Two>();
```
