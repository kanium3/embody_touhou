<script lang="ts">
import "../app.css";
import Header from "../components/header.svelte";
const { children } = $props();
</script>

<header>
    <Header />
</header>
<main class="flex justify-center items-baseline">
    <div class="max-w-6/12 px-4">
        {@render children()}
    </div>
</main>

<style lang="postcss">
    @reference tailwindcss;

    :global(html) {
        background-color: var(--color-remilia-as-background);
    }
</style>