class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
			<header id="header">
				<div class="inner">
					<a href="#" class="image avatar"><img src="images/avatar.jpg" alt="" /></a>
					<h1><strong>Nolan Black, Ph.D.</strong><br /> 
					Simulation Engineer |<br />
                    </h1>
                    <h5>
                        Design Optimization<br />
                        Computational Mechanics<br />
                        Physics-informed ML
                    </h5>
				</div>
			</header>
        `;
    }
}

customElements.define('custom-header', Header);
