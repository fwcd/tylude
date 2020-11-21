// A predicate that only type-checks if the type is true.
export function prove<T extends True>() {}

// A predicate that only type-checks if the types are equal.
// Strictly speaking, only a subtype relationship is enforced,
// however, since this library defines no subtypes, it can
// be used as if it would define equality.
export function proveExtends<T1, T2 extends T1>() {}
