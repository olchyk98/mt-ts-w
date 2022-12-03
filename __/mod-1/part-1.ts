/*
* > mod-1-part-1 <
*
* This part shows how
* the compiler inherits the
* variable type.
* */

/* ------------------------------ */
// 1.
export const initialPrice: number = 100
export const newPrice: number = 150
/* ------------------------------ */

/* ------------------------------ */
// 2. Inferred Type: "number"
export const increaseRate = newPrice / initialPrice
/* ------------------------------ */

/* ------------------------------ */
// 3. Variable Type: "string"
export const priceLabel = `${increaseRate}$`
/* ------------------------------ */

/* ------------------------------ */
// 4. Type Union: "string" or "number"
export const productIndex: string | number = 'TheProductIndex'
export let undefinedProductIndex: string | number
/* ------------------------------ */

// --- OUTPUT: ---
// XXX: The compiler is smart enough
// to understand that "productIndex"
// is a "string", and not "string | number".
type HoverOverMe = typeof productIndex
