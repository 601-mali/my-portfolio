export function renderFooter() {
    const footerContainer = document.getElementById("footer");

    if (!footerContainer) {
        return;
    }

    const currentYear = new Date().getFullYear();

    footerContainer.innerHTML = `
        <footer class="site-footer" id="contact">

            <div class="footer-content">

                <div class="footer-info">
                    <a href="index.html" class="footer-logo-link"
                       aria-label="Barnabas Anyaora home">
                        <img
                            src="images/logo.png"
                            alt="Barnabas Anyaora logo"
                            class="footer-logo"
                        >
                    </a>

                    <p class="footer-description">
                        Full-Stack Web Developer building responsive
                        websites, practical web applications, and
                        reliable backend solutions.
                    </p>
                </div>

                <div class="footer-navigation">
                    <h3>Quick Links</h3>

                    <div class="footer-links">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="services.html">Services</a>
                    </div>
                </div>

                <div class="footer-contact">
                    <h3>Get In Touch</h3>

                    <p>Interested in working together?</p>

                    <a
                        class="text-link"
                        href="mailto:anyaorabarnabas@gmail.com"
                    >
                        Email Me
                    </a>

                    <h3 class="social-heading">Connect With Me</h3>

                    <div class="social-links">

                        <!-- WhatsApp -->
                        <a
                            href="https://wa.me/qr/W3PYST7SCT3KL1"
                            class="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.5-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 1 1 8.6 4.8Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.8 4.3 1.8.8 2.5.9 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/>
                            </svg>
                        </a>

                        <!-- Facebook -->
                        <a
                            href="https://www.facebook.com/share/1FNTgza2wQ/?mibextid=wwXIfr"
                            class="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            title="Facebook"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M24 12a12 12 0 1 0-13.875 11.85v-8.38H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.926-1.956 1.876V12h3.328l-.532 3.47h-2.796v8.38A12.003 12.003 0 0 0 24 12Z"/>
                            </svg>
                        </a>

                        <!-- Instagram -->
                        <a
                            href="https://www.instagram.com/barn_abas4u?xtok=MWt4NmJmcWQ0Y2Iwag%3D%3D&utm_source=qr"
                            class="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/>
                            </svg>
                        </a>

                        <!-- LinkedIn -->
                        <a
                            href="https://www.linkedin.com/in/barnabas-anyaora-b3b534295?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7X0g6Z1eQ9W8r5J4x2yV9g%3D%3D"
                            class="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.08 18.9H5.12V9.38h2.96v9.52ZM6.6 8.08a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM18.9 18.9h-2.96v-4.63c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.71H9.66V9.38h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v5.23Z"/>
                            </svg>
                        </a>

                        <!-- GitHub -->
                        <a
                            href="https://github.com/601-mali"
                            class="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.98 0 4.27-2.61 5.22-5.09 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"/>
                            </svg>
                        </a>

                    </div>
                </div>

            </div>

            <div class="footer-bottom">
                <p>
                    &copy; ${currentYear} Barnabas Anyaora.
                    All rights reserved.
                </p>
            </div>

        </footer>
    `;
}