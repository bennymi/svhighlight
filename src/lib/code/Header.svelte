<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatcher = createEventDispatcher();

	export let classesHeader: string = '';
	export let headerText: string = '';
	export let code: string = '';

	let copyState: boolean = false;

	const handleCopy = () => {
		// Add code to clipboard
		navigator.clipboard.writeText(code);

		// Give feedback
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 1500);

		/** @event {{}} copy - Fire event when code is copied.  */
		dispatcher('copy', {});
	};
</script>

<header
	class="svhighlight-header rounded-t-lg flex justify-between items-center p-2 pl-4 {classesHeader}"
>
	<!-- Language Text -->
	<span class="code-block-language">{headerText}</span>

	<!-- Copy Button -->
	<button
		class="svhighlight-copy-btn px-2 py-1 rounded-lg transition-all duration-200 text-white/70 hover:text-white/95"
		on:click={handleCopy}
	>
		{#if copyState}
			<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm-4 4q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22Z"
				/></svg
			>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.587Q3 20.825 3 20V7q0-.425.288-.713Q3.575 6 4 6t.713.287Q5 6.575 5 7v13h10q.425 0 .713.288q.287.287.287.712t-.287.712Q15.425 22 15 22ZM9 4v12V4Z"
				/></svg
			>
		{/if}
	</button>
</header>
