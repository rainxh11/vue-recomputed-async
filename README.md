# vue-recomputed-async
[![NPM version](https://img.shields.io/npm/v/vue-recomputed-async.svg)](https://www.npmjs.com/package/vue-recomputed-async)

Vue.js extended computed composable with async, initial state &amp; manual refresh support
this library aims to provide better code integration by providing a single function that eliminate the need to create and call a fetch function, creating a sperate loading & data objects manually handling the fetch function errors, lazy evualation, providing an initial default state in case of in progress evaluation or failure
### Comparison with regular `computed()` & `vueuse` `computedAsync()`:
|Feature|`computed()`|`computedAsync()`|`recomputedAsync()`|
|-|-|-|-|
|Dependency Tracking & Reactivity|✅|✅|✅|
|Async Support|❌|✅|✅|
|Initial State|❌|✅|✅|
|Lazy Evaluation|❌|✅|✅|
|Evaulation State|❌|✅|✅|
|Manual Re-evaluation|❌|❌|✅|
#### Use cases:
- providing initial data state, while fetching data from API
- ability to refresh the data that might be changed without being tied to any dependecy a normal computed would not be able to react to
# Install
```bash
npm i vue-recomputed-async
```
# Example Usage:
```vue
<template>
    <div>
        <div v-if="peopleLoading">Loading People...</div>
        <div v-for="person in people" :key="person.name">
            {{ person.name }}
        </div>
        <button @click="refreshPeople">Refresh</button>
    </div>
</template>

<script setup>
import { recomputedAsync } from 'vue-recomputed-async';
import { getPeople } from './people-api'

const {
    data: people,
    loading: peopleLoading,
    refresh: refreshPeople,
} = recomputedAsync(async () => {
    return await getPeople()
}, [])
</script>
```

#### The `options` parameter:
Since this package is an extension that uses [`computedAsync`](https://vueuse.org/core/computedasync/) composable from [`@vueuse/core`](https://vueuse.org/) package the hood, you can override the `options`

#### Return object:
|Field|Description|
|-|-|
|`refresh()`| a function that rexecute the evaluation callback function to refresh the computed value |
|`data`| a reactive object that holds the the value returned the callback function, if the callback failed or still evaluation, it holds the initial value provided|
|`loading`| returns `true` if the callback function is still evaluating