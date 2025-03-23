<script lang="ts">
import type { Posts } from "$lib";
import {
	post_as_article,
	post_as_presentation,
	post_as_video,
} from "./post.svelte";
const { posts }: { posts: Posts } = $props();
</script>

<ul class="relative border-s-5 m-2 before:bg-aqn before:content-[' ']">
    {#each posts as post}
        {#if post.kind === "Article" }
            <li>{@render post_as_article(post.url, post.title, post.author, post.date ?? new Date().toLocaleDateString())}</li>
        {:else if post.kind === "Video" }
            <li>{@render post_as_video(post.url, post.title, post.author, post.date ?? new Date().toLocaleDateString())}</li>
        {:else}
            <li>{@render post_as_presentation(post.url, post.title, post.author, post.date ?? new Date().toLocaleDateString())}</li>
        {/if}
    {/each}
</ul>
