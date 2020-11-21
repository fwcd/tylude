# Tylude

A demonstration of TypeScript 4.1's [Recursive Conditional Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#recursive-conditional-types) that encodes Peano numbers and arithmetic on a type level.

## Examples

### Peano Numbers

```typescript
// Peano numbers
type Zero = "Zero";
type Succ<N> = { succ: N; };

// Aliases for convenience
type One = Succ<Zero>;
type Two = Succ<One>;

// Addition
type Add<N, M> = N extends Succ<infer Nminus1>
    ? Succ<Add<Nminus1, M>>
    : M;

// Example: Only type-checks if 1 + 1 = 2
proveExtends<Add<One, One>, Two>();
```

### Lists

```typescript
// Lists
type Nil = "Nil";
type Cons<X, Xs> = { x: X, xs: Xs };

// Aliases for convenience
type List1<X> = Cons<X, Nil>;
type List2<X, Y> = Cons<X, List1<Y>>;
type List3<X, Y, Z> = Cons<X, List2<Y, Z>>;

// Concatenation
type Append<Xs, Ys> = Xs extends Cons<infer X, infer Rs>
    ? Cons<X, Append<Rs, Ys>>
    : Ys;

// Example: Only type-checks if [1] + [2, 3] = [1, 2, 3]
proveExtends<
    Append<List1<1>, List2<2, 3>>,
    List3<1, 2, 3>
>();
```
