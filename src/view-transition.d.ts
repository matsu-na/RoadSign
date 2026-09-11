declare global {
  interface Document {
    startViewTransition?: (cb: () => void | Promise<void>) => {
      readonly ready: Promise<void>;
      readonly finished: Promise<void>;
    };
  }
}

export {};
