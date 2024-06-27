const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const addResponseTime = <TArgs extends unknown[], TResponse>(
  fn: (...args: TArgs) => TResponse,
) => {
  return async (...args: TArgs): Promise<TResponse> => {
    await sleep(500);
    return fn(...args);
  };
};

export { addResponseTime };
