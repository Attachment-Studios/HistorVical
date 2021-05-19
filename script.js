
function update_nav_menu(idc1, idm1, idc2, occ1, ocm1, occ2) {
	let nav_menu = `
					<h5><a id=${idc1} onclick=${occ1}>Contents</a></h5>
					<h5><a id=${idm1} onclick=${ocm1}>HistorVical</a></h5>
					<h5><a id=${idc2} onclick=${occ2}>Contacts</a></h5>
`;
	document.getElementById('actions').innerHTML = nav_menu;
}

let main_page = `
			<h3>
				About Me, HistorVical
			</h3>
			<p>
				I am a computer enthusiast and indie game developer who was introduced to game development and coding at the age of 10 during a computer expo. 
				Ever since, game development and coding has been my passion. 
				You can go to my <a onclick="location.href='https://www.youtube.com/channel/UCfmJBJLReL496PUDgWKz-oA'">youtube channel</a> to get more info about my games and also about how i made them. 
				I'm not very good at coding or anything. 
				I'm just starting to get the hang of everything.
			</p><br>
			<h3>
				My Collabs? My Team-Efforts?
			</h3>
			<p>
				Currently collaborating with Attachment Aditya(Attachment Studios) and making some amazing projects. 
				For example, "MonsterCore", a 2d rpg game that is currently in development. 
				All other works can be seen in contents tab.
			</p><br>
			<h3>
				Wanna Say Hi To Me?
			</h3>
			<p>
				For contacting and community purposes all links are listed in contacts tab. 
				Also if you want, patreon is available to get me a cappuccino. 
				Plus you get some other benifits as well.
			</p>
`;

let contents_page = `
			<h3>
				Must Check Projects
			</h3>
			<p>
				<iframe src="https://itch.io/embed/1041651" height="167" width="552" frameborder="0"><a href="https://historvical-yt.itch.io/untitled-square-game">Untitled Square Game by HistorVical_YT</a></iframe>
				<br><br>
				<iframe src="https://itch.io/embed/999140" height="167" width="552" frameborder="0"><a href="https://historvical-yt.itch.io/quiz-for-game-dev">Quiz For Game Dev by HistorVical_YT</a></iframe>
				<br><br>
				<iframe src="https://itch.io/embed/730804" height="167" width="552" frameborder="0"><a href="https://historvical-yt.itch.io/trees-demo">Trees Demo by HistorVical_YT</a></iframe>
			</p><br>
			<h3>
				Few Interesting Videos
			</h3>
			<p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/kMMJrvQhPMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<br><br>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/8UoA691AB0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</p><br>
			<h3>
				One Channel Not Enough?
			</h3>
			<p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/3BvDODBEIRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</p><br>
			<h3>
				Wanna Subscribe?
			</h3>
			<p>
				HistorVical
				<br>
				<a href="https://www.youtube.com/channel/UCfmJBJLReL496PUDgWKz-oA"><img src="https://yt3.ggpht.com/ytc/AAUvwngRMo8I_ZpeDtdRDq1cH82YBD8_YRxeEchbEyqecfk=s176-c-k-c0x00ffffff-no-rj" width="100px" height="100px" style="border-radius: 1000px;" /></a>
				<br>
				HistorVical2 AKA AlsoHistorVical
				<br>
				<a href="https://www.youtube.com/channel/UC3iqyskkZjHH-3T3hg3aq7w"><img src="https://yt3.ggpht.com/ytc/AAUvwnjeeN-DABjZpB-JP-aE09xHX9vsySvw7-AzcFAU=s176-c-k-c0x00ffffff-no-rj" width="100px" height="100px" style="border-radius: 1000px;" /></a>
			</p>
`;

let contacts_page = `
			<h3>
				To Say Hi!
			</h3>
			<p>
				<a href="https://discord.gg/3V2tnZnq"><img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/604150242d4c6f111dc4e0e8_AMXD2mEvYtyJeooktUtHlCW0f3vrpbwrCN0KjvULcmHdfWBRaAyxA9cSiPn_t6wHhI4mm1qbImd2ewbgBQwm-EtT8hZVevgGiACcBFZ58UQC6EPLcV-mQtaHVb02PzhRrjrpYsnz.png" width="100px" height="100px" style="border-radius: 1000px;" /></a>
				<a href="https://twitter.com/HistorVical"><img src="https://pngimg.com/uploads/twitter/twitter_PNG95259.png" width="100px" height="100px" style="border-radius: 1000px;" /></a>
			</p><br>
			<h3>
				Streams And Videos!
			</h3>
			<p>
				<a href="https://www.youtube.com/channel/UCfmJBJLReL496PUDgWKz-oA"><img src="https://cdn.worldvectorlogo.com/logos/youtube-3.svg" width="100px" height="100px" style="border-radius: 1000px;" /></a>
				<a href="https://www.twitch.com/HistorVical"><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png" width="100px" height="100px" style="border-radius: 1000px;" /></a>
			</p><br>
			<h3>
				Projects Plus Source Code...
			</h3>
			<p>
				<a href="http://historvical-yt.itch.io/"><img src="https://img.icons8.com/windows/452/itch-io.png" width="100px" height="100px" style="border-radius: 1000px;" /></a>
				<a href="https://github.com/HistorVical"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="100px" height="100px" style="border-radius: 1000px;" /></a>
			</p><br>
			<h3>
				Wanna Support Me?
			</h3>
			<p>
				<a href="https://www.patreon.com/historvical"><img src="https://decentered.co.uk/wp-content/uploads/2019/12/patreon-logo-png-badge-7.png" width="100px" height="100px" style="border-radius: 1000px;" /></a>
			</p>
`;

function main_page_button_func() {
	update_nav_menu("contents-tab", "active", "contacts-tab", "contents_page_button_func()", "", "contacts_page_button_func()");
	document.getElementById('content').innerHTML = main_page;
	return "Main Page";
}

function contents_page_button_func() {
	update_nav_menu("active", "main-tab", "contacts-tab", "", "main_page_button_func()", "contacts_page_button_func()");
	document.getElementById('content').innerHTML = contents_page;
	return "Contents Page";
}

function contacts_page_button_func() {
	update_nav_menu("contents-tab", "main-tab", "active", "contents_page_button_func()", "main_page_button_func()", "");
	document.getElementById('content').innerHTML = contacts_page;
	return "Contents Page";
}
