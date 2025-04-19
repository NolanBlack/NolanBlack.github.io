class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
			<footer id="footer">

					<h1><strong>Nolan Black, Ph.D.</strong><br /> 
					Simulation Engineer |<br />
                    </h1>
				<div class="inner">
					<ul class="icons">
                        <li><a target="_blank" rel="noopener noreferrer"
                                href="https://github.com/NolanBlack"
                                class="icon brands fa-github"><span
                        class="label">Github</span></a></li>
                        <li><a target="_blank" rel="noopener noreferrer"
                                href="https://scholar.google.com/citations?user=_7hjAscAAAAJ&hl=en&oi=ao"
                                class="icon brands fa-google"><span
                        class="label">Google Scholar</span></a></li>
                        <li><a target="_blank" rel="noopener noreferrer"
                                href="https://orcid.org/0000-0001-5799-9917"
                                class="icon brands fa-orcid"><span
                        class="label">Google Scholar</span></a></li>
					</ul>
					<ul class="icons">
                        <li><a target="_blank" rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/nolanjblack/"
					            class="button primary small">Reach out via LinkedIn <i class="fas fa-external-link-alt"></i></a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; Nolan Black</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>
        `;
    }
}

customElements.define('custom-footer', Footer);
