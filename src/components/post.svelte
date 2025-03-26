<script lang="ts" module>
import Icon from "@iconify/svelte";

export { post_as_article, post_as_presentation, post_as_video };
</script>

{#snippet post_as_article(url: string, title: string, author: string, date: string)}
    <a href="{url}">
        <div class="m-3 p-2 shadow-xl border-3 border-remilia rounded-lg">
            <Icon icon="material-symbols:article" width="56" height="56" />
            <h3 class="text-2xl break-keep break-words">{@html title}</h3>
            <p>{author}</p>
            <span>{date}</span>
        </div>
    </a>
{/snippet}

{#snippet post_as_video(url: string, title: string, author: string, date: string)}
    <a href="{url}">
        <div class="m-3 p-2 shadow-xl border-3 border-remilia rounded-lg">
            <Icon icon="octicon:video-16" width="56" height="56" />
            <h3 class="text-2xl break-keep break-words">{@html title}</h3>
            <p>{author}</p>
            <span>{date}</span>
        </div>
    </a>
{/snippet}

{#snippet post_as_presentation(url: string, title: string, author: string, date: string)}
    <a href="{url}">
        <div class="m-3 p-2 shadow-xl border-3 border-remilia rounded-lg">
            <Icon icon="mdi:presentation" width="56" height="56" />
            <h3 class="text-2xl break-keep break-words">{@html title}</h3>
            <p>{author}</p>
            <span>{date}</span>
        </div>
    </a>
{/snippet}
