<script lang="ts">
	import { onMount } from 'svelte';
	import { Requests } from '../../services/requests';

	let tabs: any[] = [];
	let selectedTab: string = 'home';

	const removeHash = () => {
		setTimeout(() => {
			history.replaceState(
				'',
				document.title,
				window.location.origin + window.location.pathname + window.location.search
			);
		}, 5);
	};

	onMount(() => {
		let doc = Array.from(document.getElementsByClassName('section'));
		let ids: string[] = [];
		doc.forEach((div) => {
			ids.push(div.id);
		});
		let request = new Requests();

		request.getTabs(ids).then((res) => {
			res.json().then((pages) => {
				tabs = pages;
			});
		});
	});
</script>

<div id="header">
	<header>
		<ul>
			{#each tabs as page}
				<li>
					<a
						href={page.url}
						class={selectedTab === `${page.name}` ? 'selected' : ''}
						on:click={() => {
							selectedTab = `${page.name}`;
							removeHash();
						}}
					>
						{page.name}
					</a>
				</li>
			{/each}
		</ul>
	</header>
</div>

<style>
	#header {
		position: sticky;
		top: 0;
		z-index: 10;
	}
	a.selected {
		letter-spacing: 4px;
		font-size: x-large;
		font-weight: 400;
		margin: 0 22px;
	}

	header {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background-color: rgb(26, 26, 26);
		height: 8vh;
		margin: 0%;
		padding: 0%;
	}
	ul {
		align-items: center;
		display: flex;
		list-style: none;
	}
	a {
		letter-spacing: 2px;
		margin-right: 20px;
		color: white;
		text-decoration: none;
		list-style: none;
		text-transform: uppercase;
		transition: font-size 100ms linear, font-weight 100ms linear, letter-spacing 100ms linear;
	}

	a:hover {
		letter-spacing: 4px;
		font-size: x-large;
		font-weight: 400;
	}
</style>
