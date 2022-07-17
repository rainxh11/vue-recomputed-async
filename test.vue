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