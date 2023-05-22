function whateverFunction() {
  let called = false;
  return () => {
    if (called) {
      throw new Error("can only be called once");
    }
    called = true;
  };
}

export const canOnlyRunOnce = whateverFunction();
