<script lang="ts">
	export let showLineNumbers: boolean = false;
	export let lineNumberTextColor: string = '';
	export let lineNumber: number;
	export let line: string = '';
	export let language: string = '';
</script>

<!-- Line Numbers -->
{#if showLineNumbers}
	<div
		class="absolute select-none w-10 pr-2 font-mono text-right transition-all duration-300 ease-in {lineNumberTextColor}"
	>
		{lineNumber}
	</div>
{/if}
<!-- Code -->
<div class="transition-all {showLineNumbers ? 'pl-12' : 'pl-2'} duration-200 ease-in">
	<pre class="whitespace-pre"><code class="language-{language}">{@html line}</code></pre>
</div>
