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

<div class="flex justify-center">
	<h1
		class="block text-center text-4xl font-black font-sans tracking-tighter mt-8 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-transparent p-1"
	>
		SvHighlight
	</h1>
</div>
<h2 class="text-center font-extrabold text-2xl text-gray-700 mt-4">
	A code highlighter with blur and focus buttons for <iconify-icon
		class="text-xl"
		icon="logos:svelte-kit"
	/>
	using Highlight.js and <iconify-icon class="text-xl" icon="logos:tailwindcss" />.
</h2>

<div class="flex justify-center mt-8">
	<CodeBlock
		code={svelteCode}
		language="svelte"
		{focusBlocks}
		showFocusButtons={true}
		dimensions="h-96 w-11/12 md:w-8/12"
	/>
</div>

<div class="mx-auto w-11/12  md:w-8/12 mt-12">
	<section class="w-full">
		<h2 class="text-left font-extrabold text-2xl tracking-tight">Installation</h2>

		<p class="font-sans">
			For the installation, simply install the package with npm or pnpm and make sure to also
			install
			<a
				class="text-blue-700 font-bold hover:underline"
				href="https://www.npmjs.com/package/highlight.js"
			>
				highlight.js
			</a>
			and
			<a
				class="text-blue-700 font-bold hover:underline"
				href="https://tailwindcss.com/docs/guides/sveltekit"
			>
				TailwindCSS
			</a>.
		</p>

		<CodeBlock
			code="pnpm i svhighlight highlight.js"
			headerText=""
			language="shell"
			showLineNumbers={false}
			showHeader={true}
			dimensions="w-fit"
		/>
	</section>

	<section class="w-full mt-8">
		<h2 class="text-left font-extrabold text-2xl tracking-tight">Focus Type</h2>
	</section>

	<section class="w-full mt-8">
		<h2 class="text-left font-extrabold text-2xl tracking-tight">Focus Blocks</h2>
	</section>

	<section class="w-full mt-8">
		<h2 class="text-left font-extrabold text-2xl tracking-tight">Props Table</h2>
	</section>
</div>
