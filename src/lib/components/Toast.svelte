<script lang="ts">
    import { toasts, dismissToast } from '$lib/stores/toast';
    import { fly } from 'svelte/transition';
    import { X } from 'lucide-svelte';
</script>

<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
    {#each $toasts as toast (toast.id)}
        <div
            in:fly={{ x: 200, duration: 300 }}
            out:fly={{ x: 200, duration: 300 }}
            class="pointer-events-auto flex min-w-[300px] items-center justify-between gap-4 rounded-xl px-4 py-3 shadow-2xl backdrop-blur-md border border-white/10 text-white font-medium
            {toast.type === 'success' ? 'bg-green-500/80' : 
             toast.type === 'error' ? 'bg-red-500/80' : 'bg-blue-500/80'}"
        >
            <span>{toast.message}</span>
            <button onclick={() => dismissToast(toast.id)} class="text-white/70 hover:text-white transition-colors">
                <X size={18} />
            </button>
        </div>
    {/each}
</div>
