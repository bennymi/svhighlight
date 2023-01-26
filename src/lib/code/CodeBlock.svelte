<script lang="ts">
	import hljs from 'highlight.js';

	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	import type { FocusBlock, UpdatedFocusBlock } from './types';
	import Header from './Header.svelte';
	import CodeLine from './CodeLine.svelte';

	// Props (functionality)
	/** Set the Highlight.js language used for syntax highlighting. */
	export let language: string = 'plaintext';
	/** Provide the code as a string. */
	export let code: string = '';
	/** Provide lines that should be highlighted. Ranges are accepted, e.g.: '1-5, 8, 10-12, 42'. */
	export let highlightLines: string = '';
	/** TODO */
	// export let addedLines: string = '';
	/** TODO */
	// export let removedLines: string = '';
	/** Set focus type. */
	export let focusType: 'blur' | 'highlight' = 'blur';
	/** Show header. */
	export let showHeader: boolean = true;
	/** Set header text. Is the same as the language by default. */
	export let headerText: string = language.toUpperCase();
	/** Show line numbers. */
	export let showLineNumbers: boolean = true;
	/** Focus blocks. */
	export let focusBlocks: FocusBlock[] = [];
	/** Show focus buttons. */
	export let showFocusButtons: boolean = false;
	/** Provide store that states which focus block index should be active. */
	export let activeFocusBlockStore: Writable<number> | null = null;

	// Props (styles)
	/** Provide classes to set the background color. */
	export let background: string = 'bg-gray-900';
	/** Provide classes to set the header style (background / text-color / etc). */
	export let headerClasses: string = 'bg-gray-800 text-white/80 text-xs font-bold';
	/** Provide classes for the focus buttons. */
	export let focusButtonClasses: string =
		'flex-grow px-2 py-1 rounded-lg border-2 text-sm font-bold transition-all border-gray-900 text-gray-900 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500 hover:text-white';
	/** Provide classes to set the text size. */
	export let text: string = 'text-sm';
	/** Provide classes to set the default code text color. */
	export let textColor: string = 'text-white';
	/** Provide classes to set the default line number text color. */
	export let lineNumberTextColor: string = 'text-white/90';
	/** Provide classes to set the border radius. */
	export let rounded: string = 'rounded-lg';
	/** Provide classes to set dimensions of the code block. */
	export let dimensions: string = 'h-96 w-3/4 md:w-2/4';
	/** Provide classes to set highlight color. */
	export let highlightColor: string = 'bg-gray-200/10';

	// Local variables
	let uniqueID = Math.random().toString(16).slice(2); // Generate a unique ID.
	let hiddenCode: string = '';
	let highlightedLinesList: number[] = [];
	let blur = focusType === 'blur';
	let preElement: HTMLElement | null = null;
	let lineElement: HTMLElement | null = null;
	let lines: string[] = [];
	let updatedFocusBlocks: UpdatedFocusBlock[];

	const scrollToLine = (line: number) => {
		if (browser) {
			document
				.getElementById(`svhighlight-${uniqueID}-line-${line}`)
				?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
		}
	};

	// Animate a change in the focus block. Scroll to line and update focus.
	const handleFocusBlock = (block: UpdatedFocusBlock) => {
		highlightedLinesList = [];

		if (block.scrollLine) scrollToLine(block.scrollLine!);

		highlightedLinesList = block.highlightLines!;
	};

	// Create an array of numbers from start to stop.
	const arrayRange = (start: number, stop: number) =>
		Array.from({ length: stop - start }, (value, index) => start + index);

	onMount(async () => {
		if (language.toLowerCase() === 'svelte') {
			// If language is svelte first register the language with hljs.
			const { hljsDefineSvelte } = await import('./svelte-highlight');
			hljs.registerLanguage('svelte', hljsDefineSvelte);
			hiddenCode = hljs.highlight(code, { language: 'svelte' }).value.trim();
		} else {
			hiddenCode = hljs.highlight(code, { language }).value.trim();
		}
	});

	// Update the focus blocks with an extra parameter that holds the lines number array.
	$: {
		updatedFocusBlocks = focusBlocks.map((block) => ({
			...block,
			highlightLines: stringToLinesArray(block.lines)
		}));
	}

	// Determine if a line should be highlighted or not.
	$: applyHighlight = (line: number): boolean => {
		return focusType === 'highlight' && highlightedLinesList.indexOf(line) !== -1;
	};

	const stringToLinesArray = (l: string) => {
		/** Turns a string into a number array: '1-3, 42' -> [1, 2, 3, 42] */
		let linesArray: number[] = [];
		const splitHighlights: string[] = l.replace(/\s/g, '').split(',');

		splitHighlights.forEach((range) => {
			const splitRange: string[] = range.split('-');

			if (splitRange.length === 2) {
				linesArray = [
					...linesArray,
					...arrayRange(parseInt(splitRange[0]), parseInt(splitRange[1]) + 1)
				];
			} else {
				linesArray = [...linesArray, parseInt(splitRange[0])];
			}
		});

		// Return list, but first remove NaN values.
		return linesArray.filter((v) => !Number.isNaN(v));
	};

	// Get the lines as an array from it's string: '1-3, 42' -> [1, 2, 3, 42]
	$: if (highlightLines) {
		highlightedLinesList = [];
		highlightedLinesList = stringToLinesArray(highlightLines);
	}

	$: {
		// Take the code and turn it into individual lines without losing the highlighting from hljs.
		if (browser) {
			lineElement = document.createElement('div');

			preElement?.childNodes.forEach((node) => {
				if (node.nodeName === 'SPAN' && (<HTMLElement>node).innerHTML.includes('\n')) {
					const splitLines: string[] = (<HTMLElement>node).innerHTML.split('\n');

					splitLines.forEach((s, i) => {
						if (s !== '') {
							let newNode = node.cloneNode();
							(<HTMLElement>newNode).innerHTML = s;
							lineElement?.appendChild(newNode);
						}

						if (i !== splitLines.length - 1) {
							lineElement?.appendChild(document.createTextNode('\n'));
						}
					});
				} else {
					let newNode = node.cloneNode();
					(<HTMLElement>newNode).innerHTML = (<HTMLElement>node).innerHTML;
					lineElement!.appendChild(newNode);
				}
			});

			// Split element into array of lines and make sure that next lines characters that were removed by the split are not ignored (simply replace '' with ' ').
			lines = lineElement.innerHTML.split('\n');
			lines = lines.map((line) => (line === '' ? ' ' : line));
		}
	}

	// Update focus block when the active store changes.
	$: if (
		activeFocusBlockStore &&
		focusBlocks.length > 0 &&
		$activeFocusBlockStore! >= 0 &&
		$activeFocusBlockStore! < focusBlocks.length
	) {
		handleFocusBlock(updatedFocusBlocks[$activeFocusBlockStore!]);
	}

	// Check if blur should be applied to a line.
	$: applyBlur = (line: number): boolean => {
		return (
			focusType === 'blur' &&
			blur &&
			highlightedLinesList.length > 0 &&
			highlightedLinesList.indexOf(line) === -1
		);
	};

	// Handle hover
	$: disableBlur = (line: number) => {
		if (focusType === 'blur' && highlightedLinesList.indexOf(line) === -1) {
			blur = false;
		}
	};

	// Set the classes
	$: classesHeader = `${headerClasses} ${headerText}`;
	$: classesCodeBlock = `${background} ${text} ${textColor} ${rounded}`;
</script>

<div class="svhiglight flex flex-col {dimensions}">
	{#if showFocusButtons && updatedFocusBlocks.length > 0}
		<div class="svhiglight-focus-buttons flex justify-start flex-wrap gap-x-4 gap-y-2">
			{#each updatedFocusBlocks as block, i}
				<button class={focusButtonClasses} on:click={() => handleFocusBlock(block)}>
					{block.text ?? `Focus ${i}`}
				</button>
			{/each}
		</div>
	{/if}

	{#if language && code}
		<div class="svhiglight-block flex flex-col overflow-auto mt-2 {classesCodeBlock}">
			<!-- Header -->
			{#if showHeader}
				<Header {classesHeader} {headerText} {code} on:copy />
			{/if}

			<!-- This element is hidden. We are only using it to bind it to a variable which has the correct childNodes of the code that should be displayed.
		The other method of creating a new element with document.createElement('div') and setting the innerHTML of it did not work, so this is a hack. -->
			{#if hiddenCode}
				<pre class="hidden"><code bind:this={preElement} class="code-block-code language-{language}"
						>{@html hiddenCode}</code
					></pre>
			{/if}

			<!-- Code display block -->
			{#if lines.length > 0}
				<div class="overflow-auto p-2">
					<!-- Lines -->
					{#each lines as line, i}
						<div
							id="svhighlight-{uniqueID}-line-{i}"
							class="relative transition-all duration-300 ease-in {applyHighlight(i)
								? highlightColor
								: ''} 
							{applyBlur(i) ? 'blur-[0.095rem] opacity-60' : ''}"
							on:mouseenter={() => disableBlur(i)}
							on:mouseleave={() => (blur = true)}
						>
							<CodeLine {showLineNumbers} {lineNumberTextColor} lineNumber={i} {line} {language} />
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>
