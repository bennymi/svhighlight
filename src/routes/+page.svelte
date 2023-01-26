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

	let avoidErrors = `<\$\{''\}style>
<\$\{''\}/style>`;
</script>

<div class="flex justify-center items-center p-8">
	<h1
		class="block text-center text-4xl font-black font-sans tracking-tighter bg-gradient-to-r from-teal-600 via-blue-500 to-purple-600 bg-clip-text text-transparent p-1"
	>
		SvHighlight
	</h1>
</div>
<h2 class="text-center font-extrabold text-2xl text-gray-700 mb-10">
	A code highlighter with blur and focus buttons for <iconify-icon
		class="text-xl"
		icon="logos:svelte-kit"
	/>
	using Highlight.js and <iconify-icon class="text-xl" icon="logos:tailwindcss" />.
</h2>

<div class="flex justify-center">
	<CodeBlock
		code={svelteCode}
		language="svelte"
		{focusBlocks}
		showFocusButtons={true}
		dimensions="h-80 w-11/12 md:w-8/12"
	/>
</div>

<div class="mx-auto w-11/12  md:w-8/12 mt-8 pb-20">
	<section>
		<h3>Installation</h3>

		<p class="font-sans">
			For the installation, simply install the package with npm or pnpm along with
			<a href="https://www.npmjs.com/package/highlight.js"> highlight.js </a>
			and
			<a href="https://tailwindcss.com/docs/guides/sveltekit"> TailwindCSS</a>.
		</p>

		<CodeBlock
			code="pnpm i svhighlight highlight.js"
			language="shell"
			showLineNumbers={false}
			showHeader={true}
			dimensions="w-fit"
		/>
	</section>

	<section>
		<h3>Focus Type</h3>
	</section>

	<section>
		<h3>Focus Blocks</h3>

		<p class="font-sans leading-relaxed">
			You can define a list of focus blocks, in which you can define lines that should be
			highlighted, as well as which line to scroll to when the focus block is active.
		</p>
	</section>

	<section>
		<h3>Active Focus Store</h3>
	</section>

	<section>
		<h3>Avoiding errors with Svelte code</h3>
		<p>
			When pasting Svelte code that you want to display, you have to escape the <span
				class="font-bold">closing</span
			>
			script tag to avoid errors:
			<code class="code">{`<\\\/script>`}</code>.
		</p>

		<p>
			Another error can occur if you have a
			<code class="code">{'<style>'}</code>
			tag in your string, in which case you might see
			<code class="code">{'*{}'}</code>added to the end of your code. This is due to some parsing
			error. You can read more about it in this
			<a
				href="https://stackoverflow.com/questions/75223639/strange-error-with-template-literal-adding-to-string/75224125#75224125"
			>
				Stackoverflow</a
			>
			thread. To avoid this, make sure that you add style tags like this:

			<CodeBlock
				language="svelte"
				headerText="<style> tag inside string"
				code={avoidErrors}
				dimensions="h-fit w-11/12 md:w-8/12"
			/>
		</p>
	</section>

	<section>
		<h3>Props Overview</h3>
	</section>
</div>
