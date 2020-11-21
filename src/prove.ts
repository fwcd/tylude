// A predicate that only type-checks if the type is true.
export function prove<T extends True>() {}

// A predicate that only type-checks if the types are equal.
export function proveEqual<T1, T2 extends T1>() {}
