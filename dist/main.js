var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { ref } from "vue-demi";
import { computedAsync } from "@vueuse/core";
/**
 * Create an async computed object, with ability to refresh manually
 * @param {() => unknown} evaluationCallback Evaluation callback
 * @param {unknown} initialState Initial state while the async callback is evaluating
 * @param {AsyncComputedOptions} options Same as `AsyncComputedOptions` options from `computedAsync()` part of the `@vueuse/core` package
 * @returns {} `{ refresh(), loading, data }`
 */
var recomputedAsync = function (evaluationCallback, initialState, options) {
    if (options === void 0) { options = {}; }
    var loading = ref(false);
    var refresher = ref(0);
    var refresh = function () {
        refresher.value = Math.random();
    };
    var data = computedAsync(function () {
        if (refresher.value) { }
        return evaluationCallback();
    }, initialState, __assign({ evaluating: loading }, options));
    return {
        refresh: refresh,
        loading: loading,
        data: data,
    };
};
export { recomputedAsync };
