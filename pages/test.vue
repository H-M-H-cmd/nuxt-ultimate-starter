<template>
    <div>
        <!-- Toast Example -->
        <Button variant="outline" @click="showToast">
            Add to calendar
        </Button>
    </div>
</template>
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()

function showToast() {
    console.log('showToast')
    let toastResult = toast({
        title: 'Scheduled: Catch up',
        description: 'Friday, February 10, 2023 at 5:57 PM',
    });
    console.log(toastResult)
}
</script>