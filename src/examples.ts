import { equal } from "./predicates";

// Only type-checks if 1 + 1 = 2
equal<
    Add<Succ<Zero>, Succ<Zero>>,
    Succ<Succ<Zero>>
>();
