
export function renderNavbar() {
    const navbarContainer = document.getElementById("navbar");

    if (!navbarContainer) {
        return;
    }

    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    const navItems = [
        { label: "Home", href: "index.html" },
        { label: "Services", href: "services.html" },
        { label: "About", href: "about.html" },
        { label: "Contact", href: "#contact" }
    ];

    navbarContainer.innerHTML = `
        <header class="site-header">
            <nav class="navbar" aria-label="Main navigation">

                
<a class="logo" href="index.html" aria-label="Barnabas Anyaora home">
    <img src="images/logo.png" alt="Barnabas Anyaora logo">
</a>


                <button
                    class="menu-toggle"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="primary-navigation"
                >
                    ☰
                </button>

                <ul class="nav-links" id="primary-navigation">
                    ${navItems.map(item => {
                        const isCurrentPage =
                            item.href === currentPage;

                        return `
                            <li>
                                <a
                                    href="${item.href}"
                                    ${isCurrentPage
                                        ? 'aria-current="page"'
                                        : ""}
                                >
                                    ${item.label}
                                </a>
                            </li>
                        `;
                    }).join("")}
                </ul>

            </nav>
        </header>
    `;
}
