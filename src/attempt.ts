/**
 * Executes a given operation and captures any error that occurs during its execution.
 * @source https://dev.to/dharamgfx/bye-bye-try-catch-blocks-meet-javascripts-safe-assignment-operator-proposal-1j7
 */

/**
 * Executes an asynchronous operation and returns a tuple containing either the result or an error.
 *
 * @template T - The type of the result returned by the operation.
 * @param operation - A function that performs an asynchronous operation and returns a promise.
 * @returns A promise that resolves to a tuple:
 *          - The first element is an `Error` if the operation fails, or `null` if it succeeds.
 *          - The second element is the result of the operation if it succeeds, or `null` if it fails.
 *
 * @example
 * ```typescript
 * const [error, result] = await attempt(async () => {
 *   return await fetchData();
 * });
 * if (error) {
 *   console.error('Operation failed:', error);
 * } else {
 *   console.log('Operation succeeded:', result);
 * }
 * ```
 */
export const attempt = async <T = unknown>(
    operation: () => Promise<T>
  ): Promise<[Error | null, T | null]> => {
    try {
      const result = await operation();
      return [null, result];
    } catch (error) {
      return [error as Error, null];
    }
  };
  