/*
* "Universal Fetcher"
*
* As a software engineer at the company, you are constantly working on new and exciting projects
* that drive the company's success. Your team has been assigned the task of implementing
* a function that takes a product ID and returns the product details as an object.
* */

/**
 * In this task, you are a software engineer working for a large online retailer.
 * Your team has been tasked with implementing a function that takes a product ID
 * and returns the product details as an object.
 *
 * The product details object has the following shape:
 *
 * interface ProductDetails {
 *   id: string;
 *   name: string;
 *   price: number;
 *   inStock: boolean;
 *   category: string;
 * }
 *
 * To implement the function, you need to define a generic type that takes the
 * product ID as its type parameter and infers the result type based on the
 * following rules:
 *
 * - If the product ID is a string the result type is
 *   `ProductDetails`.
 * - If the product ID is a number, the result type is `ProductDetails[]`.
 * - If the product ID is any other type, the result type is `null`.
 *
 * Use a generic type to type the return value of the function.
 *
 * To complete the task, follow these instructions:
 *
 * 1. Define the `ProductDetails` interface that describes
 * the shape of the product details object.
 *
 * 2. Define the `getProductDetails` function that takes a product
 * ID as its argument and returns the product details as an object.
 * The function should apply the following rules to determine the result:
 *    - If the product ID is a string, the result is a `ProductDetails` object.
 *    - If the product ID is a number, the result is an array of `ProductDetails` objects.
 *    - If the product ID is any other type, the result is `null`.
 *
 * 3. Define the `InferredResultType` generic type that takes the
 * product ID as its type parameter and
 *    infers the result type based on the type of the product ID.
 *    Use the `extends` keyword and conditional
 *    types to implement the following type-inference rules:
 *    - If the product ID is a string, the result type is `ProductDetails`
 *    - If the product ID is a number, the result type is an array of `ProductDetails` objects.
 *    - If the product ID is any other type, the result type is `null`.
 *
 * 4. Use the `InferredResultType` type to type the return
 * value of the `getProductDetails` function.
 */

// -- Soilution -- //

// 1. Define the "ProductDetails" interface.

export interface ProductDetails {
  id: string
  name: string
  price: number
  inStock: boolean
  category: string
}

// 2. Implement "getProductDetails" function.

export function getProductDetails<T extends string | number> (
  productId: T
): InferredResultType<T> {
  if (typeof productId === 'string') {
    return <InferredResultType<T>> {}
  }

  if (typeof productId === 'number') {
    // XXX: Double Casting
    return <InferredResultType<T>> <ProductDetails[]> []
  }

  return <InferredResultType<T>> null
}

// 3. Define the infer type.
type InferredResultType<T extends string | number> = (
  T extends string
    ? ProductDetails
    : T extends number
      ? ProductDetails[]
      : null
)

// 4. Test the function
getProductDetails('P1') // Should return the object.
getProductDetails(2847) // Should return an array.
