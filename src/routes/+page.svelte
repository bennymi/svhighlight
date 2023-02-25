<script>
	import 'highlight.js/styles/base16/dracula.css';

	import CodeBlock from '$lib/code/CodeBlock.svelte';
	import TableOfContents from './TableOfContents.svelte';
	import PropsTable from './PropsTable.svelte';

	import {
		svhighlightExample,
		installation,
		highlightLines,
		codeFocusButtons,
		activeStore,
		avoidErrors
	} from './codedefinitions';

	const meta = {
		title: 'SvHighlight: Code Highlighter for Svelte / SvelteKit & Tailwind CSS',
		description:
			'A code highlighter for Svelte, with line blur and highligthing and focus buttons. The component can be easily customized with TailwindCSS.'
	};

	let focusBlocks = [
		{ lines: '', text: 'Unblur' },
		{ lines: '1', scrollLine: 0, text: '1: Import CodeBlock' },
		{ lines: '3', scrollLine: 1, text: '2: Import CSS theme' },
		{ lines: '5-7', scrollLine: 3, text: '3: Define code' },
		{ lines: '10-15', scrollLine: 15, text: '4: Insert CodeBlock' }
	];
</script>

<svelte:head>
	<title>{meta.title}</title>
	<!-- Meta Tags -->
	<meta name="description" content={meta.description} />
	<meta
		name="keywords"
		content="svelte, sveltekit, code, highlighter, syntax, highlighting, blur, highlight.js, highlightjs, prism.js, prismjs, tailwind, line numbers, torchlight"
	/>
	<meta name="author" content="Benedikt Mielke" />
	<meta name="robots" content="index,follow" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="SvelteShow" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://svhighlight.vercel.app" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
</svelte:head>

<!-- <div class="sticky top-0 z-10"> -->
<div>
	<div class="flex justify-center items-center py-4">
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
		code={svhighlightExample}
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

	<div id="toc-target" class="w-11/12 mx-4 md:w-8/12 lg:w-5/12 lg:mx-auto mt-8 pb-32">
		<!-- Intallation -->
		<section>
			<h2>Installation</h2>

			<p>
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

			<p class="mt-4">
				Once you have Tailwind installed you need to update the <code>tailwind.config.cjs</code>
				file, to make sure that Tailwind knows to also compile files from this package. Simply add the
				following line to the
				<code>content</code>:
			</p>

			<CodeBlock
				code={installation}
				language="typescript"
				showHeader={true}
				highlightLines="4"
				headerText="tailwind.config.cjs"
				highlightColor="bg-green-500/20"
				focusType="highlight"
				dimensions="w-full h-fit"
			/>
		</section>

		<!-- Highlighting Lines -->
		<section>
			<h2>Highlighting Lines</h2>
			<p>
				To highlight lines you can define a string with the line numbers that should be highlighted
				with the <code>highlightLines</code> prop. You can separate multiple lines with commas and
				add ranges. The highlight color can be changed with <code>highlightColor</code>.
			</p>

			<p>
				The highlight.js repo has a full <a
					href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md"
					>list of supported languages</a
				>, as well as a
				<a href="https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md"
					>list of available themes</a
				>.
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
			<h2>Focus Type</h2>
			<p>
				You can switch the focus type between <code>'highlight'</code> and <code>'blur'</code> using
				the <code>focusType</code> prop. By default blur is used.
			</p>
		</section>

		<!-- Focus Blocks -->
		<section>
			<h2>Focus Blocks</h2>

			<p>
				You can define a list of focus blocks, in which you can define lines that should be
				highlighted, as well as which line to scroll to when the focus block is active. If you are
				using Typescript, you can import the <code>FocusBlock</code> type from the library. If you
				want to see focus buttons for each focus block, you can set
				<code>showFocusButtons={'{true}'}</code>. Setting <code>lines: ''</code> will not highlight
				any lines, so it can also be used as an "unblur" button. To specify the text in a button you
				can set the <code>text</code> property.
			</p>
			<p>
				Focus buttons can be customized with the
				<code>focusButtonClasses</code> prop.
			</p>

			<!-- dimensions="w-11/12 md:w-fit h-fit" -->
			<CodeBlock
				language="svelte"
				code={codeFocusButtons}
				dimensions="w-full h-fit"
				focusBlocks={[
					{ lines: '', text: 'Remove Blur' },
					{ lines: '1, 4-8', text: '1: Define Blocks' },
					{ lines: '1, 11', text: '2: Add Code Block' }
				]}
				showFocusButtons={true}
			/>
		</section>

		<!-- Active Focus Store -->
		<section>
			<h2>Active Focus Store</h2>
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
				highlightLines="1, 4-8, 11, 13"
			/>
		</section>

		<!-- Dimensions & Style Props -->
		<section>
			<h2>Dimensions & Style Props</h2>
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
					>codeTextClasses</code
				>
				prop. You can change the background color of the code block with <code>background</code>.
			</p>

			<h3>Adding Line Number Bar</h3>
			<p>
				You can add a bar between the line numbers and the code by updating the <code
					>lineNumberTextClasses</code
				> prop:
			</p>

			<CodeBlock
				language="svelte"
				code={`<CodeBlock
	{code}
	lineNumberTextClasses="text-white\/90 border-r-2 border-white\/90"
/>`}
				dimensions="w-full h-fit"
				highlightLines="2"
				headerText="Customization: Line Numbers"
				lineNumberTextClasses="text-white/90 border-r-2 border-white/90"
			/>
		</section>

		<!-- Errors -->
		<section>
			<h2>Avoiding Errors with Svelte Code</h2>

			<p>
				The easiest way to avoid parsing errors of your string codes is to define your strings in a
				separate <code class="code">.ts</code> or <code class="code">.js</code> file and import them
				into your svelte file. This also keeps your svelte file cleaner and allows you to avoid the steps
				below.
			</p>

			<p>
				If you want to define the code in your svelte file then you need to be aware of the
				following steps. When pasting Svelte code that you want to display, you have to escape the <span
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
			<h2>Props Overview</h2>

			<div class="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
				<PropsTable />
			</div>
		</section>

		<!-- Acknowledgements -->
		<section>
			<h2>Acknowledgements</h2>
			<p>
				This component was adopted from <a href="https://www.skeleton.dev/utilities/codeblocks"
					>Skeleton UI's CodeBlock</a
				>
				component and inspired by their customizability, as well as
				<a href="https://torchlight.dev/">Torchlight's syntax highlighting API</a>.
			</p>
		</section>
	</div>
</div>
