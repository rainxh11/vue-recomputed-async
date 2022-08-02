import { AsyncComputedOptions } from "@vueuse/core";
/**
 * Create an async computed object, with ability to refresh manually
 * @param {() => unknown} evaluationCallback Evaluation callback
 * @param {unknown} initialState Initial state while the async callback is evaluating
 * @param {AsyncComputedOptions} options Same as `AsyncComputedOptions` options from `computedAsync()` part of the `@vueuse/core` package
 * @returns {} `{ refresh(), loading, data }`
 */
declare const recomputedAsync: (evaluationCallback: () => unknown, initialState: unknown, options?: AsyncComputedOptions) => {
    refresh: () => void;
    loading: import("@vue/composition-api").Ref<boolean>;
    data: import("@vue/composition-api").Ref<unknown>;
};
export { recomputedAsync };
