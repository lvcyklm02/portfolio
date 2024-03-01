console.log("IT’S ALIVE!");

function $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
};

let pages = [
    { url: "portfolio/", title: "Home" },
    { url: "portfolio/projects/", title: "Projects" },
    { url: "portfolio/cv/", title: "CV" },
    { url: "portfolio/contact/", title: "Contact" },
    { url: "https://github.com/lvcyklm02", title: "Profile" },
];

const ARE_WE_HOME = document.documentElement.classList.contains("home");

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    if (a.host !== location.host) {
        a.target = "_blank";
    }

    nav.append(a);
}

document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
			<option value="light dark">Auto</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
		</select>
	</label>`
);

let select = document.querySelector("select");

if ("colorScheme" in localStorage) {
    document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
    select.value = localStorage.colorScheme;
}

select.addEventListener("input", function (event) {
    document.documentElement.style.setProperty("color-scheme", event.target.value);
    localStorage.colorScheme = event.target.value;
    console.log("color scheme changed to", event.target.value);
});

// let navLinks = $$("nav a");
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// currentLink?.classList.add("current");

