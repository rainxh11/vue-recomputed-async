import { ref } from "vue-demi";
import { AsyncComputedOptions, computedAsync } from "@vueuse/core";

/**
 * Create an async computed object, with ability to refresh manually
 * @param {() => unknown} evaluationCallback Evaluation callback
 * @param {unknown} initialState Initial state while the async callback is evaluating
 * @param {AsyncComputedOptions} options Same as `AsyncComputedOptions` options from `computedAsync()` part of the `@vueuse/core` package  
 * @returns {} `{ refresh(), loading, data }`
 */
const recomputedAsync = (
  evaluationCallback: () => unknown,
  initialState: unknown,
  options: AsyncComputedOptions = {}
)  => {
  const loading = ref(false);
  const refresher = ref(0);
  const refresh = () => {
    refresher.value = Math.random();
  };

  const data = computedAsync(
    () => {
      if (refresher.value) {}

      return evaluationCallback();
    },
    initialState,
    { evaluating: loading, ...options }
  );

  return {
    refresh,
    loading,
    data,
  };
};

export { recomputedAsync };
