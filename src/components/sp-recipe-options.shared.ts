type WithoutUndefined<T> = { [K in keyof T]: Exclude<T[K], undefined> };

export function omitUndefined<T extends Record<string, unknown>>(
  input: T,
): WithoutUndefined<T> {
  const result = {} as WithoutUndefined<T>;
  for (const key in input) {
    const value = input[key];
    if (value !== undefined) result[key] = value as WithoutUndefined<T>[typeof key];
  }
  return result;
}
