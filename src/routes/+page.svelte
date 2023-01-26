<script>
	import 'highlight.js/styles/base16/dracula.css';

	import CodeBlock from '$lib/code/CodeBlock.svelte';

	let focusBlocks = [
		{ lines: '', text: 'Unblur' },
		{ lines: '1', scrollLine: 0, text: '1: Import CodeBlock' },
		{ lines: '3', scrollLine: 0, text: '2: Import CSS theme' },
		{ lines: '5-7', scrollLine: 3, text: '3: Define code' },
		{ lines: '11-18', scrollLine: 12, text: '4: Insert CodeBlock' }
	];

	let svelteCode = `<script>
	import CodeBlock from 'svhighlight';
    
    import 'highlight.js/styles/base16/dracula.css';

    let code = \`
        /** example code... /*
    \`;

<\/script>

<div class="flex justify-center">
    <CodeBlock
        language="svelte" 
        {code}
        showHeader={true}
        showLineNumbers={true}
    />
</div>`;
</script>

<h1 class="text-center text-4xl font-black font-sans tracking-tighter mt-8">SvHighlight</h1>
<h2 class="text-center font-extrabold text-2xl text-gray-700 mt-4">
	A code highlighter with blur and focus buttons for SvelteKit using Highlight.js and TailwindCSS.
</h2>

<div class="flex justify-center mt-8">
	<CodeBlock code={svelteCode} language="svelte" {focusBlocks} showFocusButtons={true} />
</div>
