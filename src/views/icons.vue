<template>
	<div class="languages" id="Languages">
		<div class="dev-icons">
			<ul>

				<li class="icon html5">
					<i class="devicon-html5-plain"></i>
					<p>HTML5</p>
				</li>

				<li class="icon css3">
					<i class="devicon-css3-plain"></i>
					<p>CSS3</p>
				</li>

				<li class="icon javascript">
					<i class="devicon-javascript-plain"></i>
					<p>JavaScript</p>
				</li>
				
				<li class="icon linux">
					<i class="devicon-typescript-plain"></i>
					<p>TypeScript</p>
				</li>

				<li class="icon linux">
					<i class="devicon-svelte-plain"></i>
					<p>Svelte</p>
				</li>

				<li class="icon python">
					<i class="devicon-python-plain"></i>
					<p>Python</p>
				</li>

				<li class="icon c">
					<i class="devicon-c-plain"></i>
					<p>C</p>
				</li>

				<li class="icon cplusplus">
					<i class="devicon-cplusplus-plain"></i>
					<p>C++</p>
				</li>

				<li class="icon flask">
					<i class="devicon-java-plain"></i>
					<p>Java</p>
				</li>
				
				<li class="icon linux">
					<i class="devicon-react-original"></i>
					<p>React</p>
				</li>

				<li class="icon linux">
					<i class="devicon-jquery-plain"></i>
					<p>JQuery</p>
				</li>

			</ul>
		</div>

	</div>
</template>

<script>
</script>

<style lang="scss" scoped>

.languages {
	width: 59vw; 
	height: 100px;
	border-radius: 1rem;
	border-top: 1px solid rgba(255, 255, 255, 0.35);

}

.icon {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	padding-left: 0;
	list-style: none;
	font-size: 3rem;
	margin-bottom: 0;
	margin-top: 0;
	text-align: center;

	&:hover {
		opacity: 1;

	}
}


.icon p {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 10px;
	color: #868e96;
}

.icon:hover p {
	color: #645beb;
}



.dev-icons {
	width: 100%; 
	height: 100%;
	
}

.dev-icons ul {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 100%; 
	height: 100%;
	list-style-type: none;
}

.dev-icons li {
	text-shadow: 1px 0 3px rgba(100, 116, 139, 0.25), -1px 0 3px rgba(100, 116, 139, 0.25);

}

.c i {
	color: #868e96;
}

.c i:hover {
	color: #03599c;
}

.cplusplus i {
	color: #868e96;
}

.cplusplus i:hover {
	color: #9c033a;
}

.html5 i {
	color: #868e96;
}

.html5 i:hover {
	color: #e54d26;
}

.css3 i {
	color: #868e96;
}

.css3 i:hover {
	color: #3d8fc6;
}

.javascript i {
	color: #868e96;
}

.javascript i:hover {
	color: #f0db4f;
}

.python i {
	color: #868e96;
}

.python i:hover {
	color: #ffd845;
}

.flask i {
	color: #868e96;
}

.flask i:hover {
	color: #010101;
}

.linux i {
	color: #868e96;
}

.linux i:hover {
	color: #000;
}


@media (max-width: 520px) {
	.languages {
		display: grid;
		width: 90vw;
	
	}

	.icons{
		display: flex;
		margin-top: 0px;
		width: inherit;
	}
	.material-icons{
		display: flex;
		flex-direction: row;
		margin: 10px 0 10px 0;

	}
	.icon{
		width: 20%;
		font-size: 2rem;
	}

}


</style>