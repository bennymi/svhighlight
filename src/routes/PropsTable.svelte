<script lang="ts">
	type Prop = {
		prop: string;
		type: string;
		options: string;
		default: string;
		description: string;
		show: boolean;
	};

	let props: Prop[] = [
		{
			prop: 'language',
			type: 'string',
			options: '-',
			default: 'plaintext',
			description: 'Set the Highlight.js language used for syntax highlighting.',
			show: false
		},
		{
			prop: 'code',
			type: 'string',
			options: '-',
			default: '-',
			description: 'Provide the code as a string.',
			show: false
		},
		{
			prop: 'highlightLines',
			type: 'string',
			options: '-',
			default: '-',
			description: `Provide lines that should be highlighted. Ranges are accepted, e.g.: '1-5, 8, 10-12, 42'.`,
			show: false
		},
		{
			prop: 'focusType',
			type: 'string',
			options: `'blur' | 'highlight'`,
			default: 'blur',
			description: `Set focus type.`,
			show: false
		},
		{
			prop: 'showHeader',
			type: 'boolean',
			options: 'true | false',
			default: 'true',
			description: `Show header.`,
			show: false
		},
		{
			prop: 'headerText',
			type: 'string',
			options: '-',
			default: 'language.toUppercase()',
			description: `Set header text. Is the same as the language by default.`,
			show: false
		},
		{
			prop: 'showLineNumbers',
			type: 'boolean',
			options: 'true | false',
			default: 'true',
			description: `Show line numbers.`,
			show: false
		},
		{
			prop: 'focusBlocks',
			type: 'FocusBlock[]',
			options: '-',
			default: '[]',
			description: `Define focus blocks. The focus block type can be imported from the library.`,
			show: false
		},
		{
			prop: 'showFocusButtons',
			type: 'boolean',
			options: 'true | false',
			default: 'false',
			description: `Show focus buttons.`,
			show: false
		},
		{
			prop: 'activeFocusBlockStore',
			type: 'Writable<number>',
			options: '-',
			default: 'null',
			description: `Provide store that states which focus block index should be active.`,
			show: false
		},
		{
			prop: 'background',
			type: 'string',
			options: '-',
			default: 'bg-gray-900',
			description: `Provide classes to set the background color.`,
			show: false
		},
		{
			prop: 'headerClasses',
			type: 'string',
			options: '-',
			default: 'bg-gray-800 text-white/80 text-xs font-bold',
			description: `Provide classes to set the header style (background / text-color / etc).`,
			show: false
		},
		{
			prop: 'focusButtonClasses',
			type: 'string',
			options: '-',
			default:
				'flex-grow px-2 py-1 rounded-lg border-2 text-sm font-bold transition-all border-gray-900 text-gray-900 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500 hover:text-white',
			description: `Provide classes for the focus buttons.`,
			show: false
		},
		{
			prop: 'codeTextClasses',
			type: 'string',
			options: '-',
			default: 'text-sm text-white',
			description: `Provide classes to set the code text style (size and color).`,
			show: false
		},
		{
			prop: 'lineNumberTextColor',
			type: 'string',
			options: '-',
			default: 'text-white/90',
			description: `Provide classes to set the default line number text color.`,
			show: false
		},
		{
			prop: 'rounded',
			type: 'string',
			options: '-',
			default: 'rounded-lg',
			description: `Provide classes to set the CodeBlock border radius.`,
			show: false
		},
		{
			prop: 'dimensions',
			type: 'string',
			options: '-',
			default: 'w-full h-fit',
			description: `Provide classes to set dimensions of the code block.`,
			show: false
		},
		{
			prop: 'highlightColor',
			type: 'string',
			options: '-',
			default: 'bg-gray-200/10',
			description: `Provide classes to set highlight color.`,
			show: false
		}
	];
</script>

<table class="w-full text-sm text-center text-white">
	<thead class="text-sm font-bold uppercase text-white bg-teal-700">
		<tr>
			<th scope="col" class="text-white px-6 py-3 font-bold"> Prop </th>
			<th scope="col" class="text-white px-6 py-3 font-bold"> Type </th>
			<th scope="col" class="text-white px-6 py-3 font-bold"> Options </th>
			<th scope="col" class="text-white px-6 py-3 font-bold"> Default <br /> (Click to Expand) </th>
			<th scope="col" class="text-white py-3 text-left font-bold"> Description </th>
		</tr>
	</thead>
	<tbody class="text-white">
		{#each props as prop, i}
			<tr
				class="border-b border-teal-600/20 h-10 overflow-auto hover:bg-teal-600 {i % 2 === 0
					? 'bg-gray-900'
					: 'bg-gray-800'}"
			>
				<th scope="row" class="text-white px-6 py-2 font-bold whitespace-nowrap">
					<code class="font-mono">{prop.prop}</code>
				</th>
				<td class="px-1 whitespace-nowrap">{prop.type}</td>
				<td class="px-1 whitespace-nowrap"><code class="font-mono">{prop.options}</code></td>
				<td class="px-1 ">
					{#if prop.default.split(' ').length < 3}
						<code class="font-mono">{prop.default}</code>
					{:else}
						<button
							class="px-1 font-bold font-mono transition-all hover:"
							on:click={() => (props[i].show = !props[i].show)}
						>
							{prop.show ? prop.default : '{...}'}
						</button>
					{/if}
				</td>
				<td class="px-2 whitespace-nowrap text-left">{prop.description}</td>
			</tr>
		{/each}
	</tbody>
</table>
