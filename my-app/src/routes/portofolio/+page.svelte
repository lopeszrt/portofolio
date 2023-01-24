<script lang="ts">
	import Header from '../../Components/header.svelte';
	import { onMount } from 'svelte';
	import { Requests } from '../../../services/requests';
	let langs: any[] = [];
	let skills: any[] = [];
	let areas: any[] = [];
	let jobs: any[] = [];
	let education: any[] = [];
	let projects: any[] = [];
	let about: string;
	onMount(() => {
		let request = new Requests();

		request.getLangs().then((res) => {
			res.json().then((languages) => {
				langs = languages;
			});
		});

		request.getSkills().then((res) => {
			res.json().then((myskills) => {
				let areaMap: any[] = [];
				skills = myskills;
				skills.forEach((skill) => {
					areaMap.push({
						id: skill.area_id,
						name: skill.area_name,
						skills: []
					});
				});
				areaMap = areaMap.filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
				areaMap.forEach((area) => {
					skills.forEach((skill) => {
						if (area.id === skill.area_id) area.skills.push(skill.skill_name);
					});
				});
				areas = areaMap;
			});
		});

		about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	});
</script>

<head>
	<title>I'm Lopes</title>
</head>

<Header />
<main>
	<div id="home" class="section">
		<div id="landingPage">
			<div id="title">Hello! I'm Gonçalo Lopes</div>
		</div>
	</div>
	<div id="about" class="section">
		<div class="lplaceHolder">
			<div class="bar1" />
			<div class="bar2" />
			<div class="title">About me</div>
		</div>
		<div class="text">
			{about}
		</div>
	</div>
	<div id="skills" class="section">
		<div class="lplaceHolder">
			<div class="bar1" />
			<div class="bar2" />
			<div class="title">Skills</div>
		</div>
		<div class="content">
			<ul>
				{#each areas as area}
					<div class="area">
						<li class="areas">{area.name}</li>
					</div>
				{/each}
			</ul>
		</div>
	</div>
	<div id="education" class="section">
		<div class="lplaceHolder">
			<div class="bar1" />
			<div class="bar2" />
			<div class="title">Education</div>
		</div>
		<ul>
			{#each education as edu}
				<li class="langText">{edu.name}</li>
				<li class="proficiencyText">{edu.bio}</li>
			{/each}
		</ul>
	</div>
	<div id="experience" class="section">
		<div class="lplaceHolder">
			<div class="bar1" />
			<div class="bar2" />
			<div class="title">Experience</div>
		</div>
		<ul>
			{#each jobs as job}
				<li class="langText">{job.name}</li>
				<li class="proficiencyText">{job.bio}</li>
			{/each}
		</ul>
	</div>
	<div id="projects" class="section">
		<div class="lplaceHolder">
			<div class="bar1" />
			<div class="bar2" />
			<div class="title">Projects</div>
			<ul>
				{#each projects as project}
					<li class="langText">{project.name}</li>
					<li class="bioText">{project.bio}</li>
				{/each}
			</ul>
		</div>
	</div>
	<div id="languages" class="section">
		<div class="lplaceHolder">
			<div class="bar1" />
			<div class="bar2" />
			<div class="title">Languages</div>
		</div>
		<ul>
			{#each langs as lang}
				<li class="langText">{lang.name}</li>
				<li class="proficiencyText">{lang.proficiency}</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	#landingPage {
		position: sticky;
		background: url('https://i.stack.imgur.com/90nGa.jpg') no-repeat center center fixed;
		background-size: cover;
		width: 100%;
		height: 92vh;
	}
</style>
