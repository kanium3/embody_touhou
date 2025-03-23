<script lang="ts">
import Timeline from "../components/timeline.svelte";
import type { PageProps } from "./$types";
const { data }: PageProps = $props();
</script>

<svelte:head>
    <title>Embody Touhou</title>
    <meta name="description" content="Embody Touhouは発表活動を通して東方Project像を深めていく企画です。" />
</svelte:head>

<h1 class="text-5xl my-3 text-center">Embody Touhou</h1>
<p class="text-2xl text-center break-keep break-words ">あなたの東方を<wbr />形にしてみよう</p>
<h2 class="text-3xl my-5 text-center">発表物</h2>
<Timeline posts={data.posts} />