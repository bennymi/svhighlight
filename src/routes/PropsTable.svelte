<script lang="ts">
	type Prop = {
		prop: string;
		type: string;
		options: string;
		default: string;
		description: string;
	};

	let props: Prop[] = [
		{
			prop: 'language',
			type: 'string',
			options: '-',
			default: 'plaintext',
			description: 'Set the Highlight.js language used for syntax highlighting.'
		},
		{
			prop: 'code',
			type: 'string',
			options: '-',
			default: '-',
			description: 'Provide the code as a string.'
		},
		{
			prop: 'highlightLines',
			type: 'string',
			options: '-',
			default: '-',
			description: `Provide lines that should be highlighted. Ranges are accepted, e.g.: '1-5, 8, 10-12, 42'.`
		},
		{
			prop: 'focusType',
			type: 'string',
			options: `'blur' | 'highlight'`,
			default: 'blur',
			description: `Set focus type.`
		},
		{
			prop: 'showHeader',
			type: 'boolean',
			options: 'true | false',
			default: 'true',
			description: `Show header.`
		},
		{
			prop: 'headerText',
			type: 'string',
			options: '-',
			default: 'language.toUppercase()',
			description: `Set header text. Is the same as the language by default.`
		},
		{
			prop: 'showLineNumbers',
			type: 'boolean',
			options: 'true | false',
			default: 'true',
			description: `Show line numbers.`
		},
		{
			prop: 'focusBlocks',
			type: 'FocusBlock[]',
			options: '-',
			default: '[]',
			description: `Define focus blocks. The focus block type can be imported from the library.`
		},
		{
			prop: 'showFocusButtons',
			type: 'boolean',
			options: 'true | false',
			default: 'false',
			description: `Show focus buttons.`
		},
		{
			prop: 'activeFocusBlockStore',
			type: 'Writable<number>',
			options: '-',
			default: 'null',
			description: `Provide store that states which focus block index should be active.`
		},
		{
			prop: 'background',
			type: 'string',
			options: '-',
			default: 'bg-gray-900',
			description: `Provide classes to set the background color.`
		},
		{
			prop: 'headerClasses',
			type: 'string',
			options: '-',
			default: 'bg-gray-800 text-white/80 text-xs font-bold',
			description: `Provide classes to set the header style (background / text-color / etc).`
		},
		{
			prop: 'focusButtonClasses',
			type: 'string',
			options: '-',
			default:
				'flex-grow px-2 py-1 rounded-lg border-2 text-sm font-bold transition-all border-gray-900 text-gray-900 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500 hover:text-white',
			description: `Provide classes for the focus buttons.`
		},
		{
			prop: 'highlightLines',
			type: 'string',
			options: '-',
			default: '-',
			description: ``
		},
		{
			prop: 'highlightLines',
			type: 'string',
			options: '-',
			default: '-',
			description: ``
		}
	];
</script>

<table class="w-full text-sm text-center text-gray-400">
	<thead class="text-sm font-bold uppercase bg-gray-700 text-gray-400">
		<tr>
			<th scope="col" class="px-6 py-3"> Prop </th>
			<th scope="col" class="px-6 py-3"> Options </th>
			<th scope="col" class="px-6 py-3"> Default </th>
			<th scope="col" class="px-6 py-3"> Description </th>
		</tr>
	</thead>
	<tbody>
		<tr class="bg-white border-b bg-gray-900 border-gray-700">
			<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
				<code>language</code>
			</th>
			<td class="px-6 py-4">-</td>
			<td class="px-6 py-4"><code>'plaintext'</code></td>
			<td class="px-6 py-4">Set the Highlight.js language used for syntax highlighting.</td>
		</tr>
		<tr class="border-b bg-gray-800 border-gray-700">
			<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
				<code>code</code>
			</th>
			<td class="px-6 py-4">-</td>
			<td class="px-6 py-4"><code>''</code></td>
			<td class="px-6 py-4">Provide the code as a string.</td>
		</tr>
		<tr class="border-b bg-gray-900 border-gray-700">
			<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
				<code>highlightLines</code>
			</th>
			<td class="px-6 py-4"> - </td>
			<td class="px-6 py-4"> <code>''</code> </td>
			<td class="px-6 py-4"
				>Provide lines that should be highlighted. Ranges are accepted, e.g.: '1-5, 8, 10-12, 42'.</td
			>
		</tr>
		<tr class="border-b bg-gray-800 border-gray-700">
			<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
				<code>focusType</code>
			</th>
			<td class="px-6 py-4"> <code>'blur' | 'highlight'</code> </td>
			<td class="px-6 py-4"> <code>'blur'</code> </td>
			<td class="px-6 py-4"> Set focus type. </td>
		</tr>
		<tr class="border-b bg-gray-900 border-gray-700">
			<th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
				<code>showHeader</code>
			</th>
			<td class="px-6 py-4"><code>true | false</code></td>
			<td class="px-6 py-4"><code>true</code></td>
			<td class="px-6 py-4">Show header.</td>
		</tr>
	</tbody>
</table>
