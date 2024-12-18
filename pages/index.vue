<template>
    <div class="container py-10 space-y-8 overflow-x-hidden">
        Welcome to agd primary
        <nuxt-link to="/create-contract">
            <Button>
                Start
            </Button>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'Home',
    layout: 'default'
})
</script>