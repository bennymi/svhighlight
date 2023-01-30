let svhighlightExample = `<script>
    import { CodeBlock } from 'svhighlight';

    import 'highlight.js/styles/base16/dracula.css';

    let code = \`
        /** example code... /*
    \`;
<\/script>

<CodeBlock
    language="svelte" 
    {code}
    showHeader={true}
    showLineNumbers={true}
/>`;

let installation = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/svhighlight/**/*.svelte"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

let highlightLines = `<script>
    import { CodeBlock } from 'svhighlight';

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

let activeStore = `<script lang="ts">
    import { CodeBlock, type FocusBlock} from 'svhighlight';

    let code = \`...\`;
    let focusBlocks: FocusBlock[] = [
        { lines: '1-3, 5', scrollLine: 1 },
        { lines: '8-12', scrollLine: 8 }
    ]
    let activeFocusBlockStore = writable(0);
<\/script>

<button on:click={() => {$activeFocusBlockStore += 1}}>Next</button>

<CodeBlock {code} {focusBlocks} {activeFocusBlockStore} />`;

let avoidErrors = `<\$\{''\}style>
<\$\{''\}/style>`;

export {
    svhighlightExample,
    installation,
    highlightLines,
    codeFocusButtons,
    activeStore,
    avoidErrors
}