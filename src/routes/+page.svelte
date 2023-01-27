<script>
	import 'highlight.js/styles/base16/dracula.css';

	import CodeBlock from '$lib/code/CodeBlock.svelte';
	import TableOfContents from './TableOfContents.svelte';
	import PropsTable from './PropsTable.svelte';

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

	let highlightLines = `<script>
    import CodeBlock from 'svhighlight';
    
    let code = \`...\`;
<\/script>

<CodeBlock 
    {code} 
    highlightLines="1-3, 5, 8-10" 
    highlightColor="bg-blue-400/20"
/>`;

	let codeFocusButtons = `<script lang="ts">
    import { CodeBlock, type FocusBlock } from 'svhighlight';
    
    let code = \`...\`;
    let focusBlocks: FocusBlock[] = [
		{ lines: '', text: 'Remove Blur' },
        { lines: '1-3, 5', scrollLine: 1, text: '1: Start' },
        { lines: '8-12', scrollLine: 8, text: '2: End' }
    ]
<\/script>

<CodeBlock {code} {focusBlocks} showFocusButtons={true} />`;

	let activeStore = `<script>
    import CodeBlock from 'svhighlight';
    
    let code = \`...\`;
    let focusBlocks = [
        { lines: '1-3, 5', scrollLine: 1 },
        { lines: '8-12', scrollLine: 8 }
    ]
    let activeFocusBlockStore = writable(0);
<\/script>

<button on:click={() => {$activeFocusBlockStore += 1}}>Next</button>

<CodeBlock {code} {focusBlocks} {activeFocusBlockStore} />`;

	let avoidErrors = `<\$\{''\}style>
<\$\{''\}/style>`;
</script>

<!-- <div class="sticky top-0 z-10"> -->
<div>
	<div class="flex justify-center items-center py-4 bg-gray-200">
		<h1
			class="block text-center text-4xl font-black font-sans tracking-tighter bg-gradient-to-r from-teal-600 via-blue-500 to-purple-600 bg-clip-text text-transparent p-1"
		>
			SvHighlight
		</h1>
	</div>
</div>
<div class="text-center font-extrabold text-2xl text-gray-700 mb-10">
	A code highlighter with blur and focus buttons for <iconify-icon
		class="text-xl"
		icon="logos:svelte-kit"
	/>
	using Highlight.js and <iconify-icon class="text-xl" icon="logos:tailwindcss" />.
</div>

<div class="flex justify-center">
	<CodeBlock
		code={svelteCode}
		language="svelte"
		{focusBlocks}
		showFocusButtons={true}
		dimensions="h-80 w-11/12 lg:w-7/12"
	/>
</div>

<div class="relative">
	<div class="sticky top-2">
		<div class="absolute hidden right-0 md:block md:right-2 lg:right-4 xl:right-24 my-4 rounded-lg">
			<TableOfContents target="#toc-target" width="md:w-[200px] lg:w-[260px]" />
		</div>
	</div>

	<div id="toc-target" class="w-11/12 mx-8 md:w-8/12 lg:w-5/12 lg:mx-auto mt-8 pb-32">
		<!-- Intallation -->
		<section>
			<h3>Installation</h3>

			<p class="font-sans">
				For the installation, simply install the package, as well as
				<a href="https://www.npmjs.com/package/highlight.js"> highlight.js </a>
				and
				<a href="https://tailwindcss.com/docs/guides/sveltekit"> TailwindCSS</a> (link to instructions
				on how to install Tailwind), with npm or pnpm.
			</p>

			<CodeBlock
				code="pnpm add svhighlight highlight.js"
				language="shell"
				showLineNumbers={false}
				showHeader={true}
				dimensions="w-full h-fit"
			/>
		</section>

		<!-- Highlighting Lines -->
		<section>
			<h3>Highlighting Lines</h3>
			<p>
				To highlight lines you can define a string with the line numbers that should be highlighted
				with the <code>highlightLines</code> prop. You can separate multiple lines with commas and
				add ranges. The highlight color can be changed with <code>highlightColor</code>.
			</p>

			<p>
				The full list of supported languages from highlight.js is <a
					href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md"
					>here</a
				>, and a list of available themes is
				<a href="https://github.com/highlightjs/highlight.js/tree/main/src/styles">here</a>.
			</p>

			<CodeBlock
				code={highlightLines}
				language="svelte"
				dimensions="w-full h-fit"
				highlightLines="6-10"
				focusType="highlight"
				highlightColor="bg-gray-400/20"
			/>
		</section>

		<!-- Focus Type -->
		<section>
			<h3>Focus Type</h3>
			<p>
				You can switch the focus type between <code>'highlight'</code> and <code>'blur'</code> using
				the <code>focusType</code> prop. By default blur is used.
			</p>
		</section>

		<!-- Focus Blocks -->
		<section>
			<h3>Focus Blocks</h3>

			<p>
				You can define a list of focus blocks, in which you can define lines that should be
				highlighted, as well as which line to scroll to when the focus block is active. If you are
				using Typescript, you can import the <code>FocusBlock</code> type from the library. If you
				want to see focus buttons for each focus block, you can set
				<code>showFocusButtons={'{true}'}</code>. Focus buttons can be customized with the
				<code>focusButtonClasses</code> prop.
			</p>

			<!-- dimensions="w-11/12 md:w-fit h-fit" -->
			<CodeBlock
				language="svelte"
				code={codeFocusButtons}
				dimensions="w-full h-fit"
				focusBlocks={[
					{ lines: '', text: 'Remove Blur' },
					{ lines: '4-8', text: '1: Define Blocks' },
					{ lines: '1, 11', text: '2: Add Code Block' }
				]}
				showFocusButtons={true}
			/>
		</section>

		<!-- Active Focus Store -->
		<section>
			<h3>Active Focus Store</h3>
			<p>
				You can either style the focus buttons to your liking with the <code
					>focusButtonClasses</code
				>
				prop, or remove them all together with the <code>showFocusButtons</code> prop.
			</p>
			<p>
				Additionally, if you rather create a different control for focus blocks, you can pass a
				store to <code>activeFocusBlockStore</code>. With the store you can control the active
				index. Here for example, a button will focus the next block in the <code>focusBlocks</code> list:
			</p>

			<CodeBlock
				language="svelte"
				code={activeStore}
				dimensions="w-full h-fit"
				highlightLines="4-8, 11, 13"
			/>
		</section>

		<!-- Dimensions & Style Props -->
		<section>
			<h3>Dimensions & Style Props</h3>
			<p>
				There are a lot of props to customize the look of the code block. Here I will only mention a
				few. For the complete list look at the table at the bottom of the page.
			</p>
			<p>
				By default the dimensions of the table are set to <code>'w-full h-fit'</code>, but you can
				change this with the <code>dimensions</code> prop.
			</p>
			<p>
				You can enable / disable both the header and the line numbers with <code>showHeader</code>
				and <code>showLineNumbers</code> respectively. You can change the displayed header text with
				the <code>headerText</code> prop, which by default is the uppercase of the specified language.
			</p>
			<p>
				To change the text size and default text color of non-highlighted code you can use the <code
					>text</code
				>
				(size) and <code>textColor</code> (color) props. You can change the background color of the
				code block with <code>background</code>.
			</p>
		</section>

		<!-- Errors -->
		<section>
			<h3>Avoiding Errors with Svelte Code</h3>
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
					dimensions="h-fit w-full"
				/>
			</p>
		</section>

		<!-- Props Overview -->
		<section>
			<h3>Props Overview</h3>

			<div class="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
				<PropsTable />
			</div>
		</section>
	</div>
</div>
