class myNavbarJs extends HTMLElement {
    connectedCallBack() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="navbar-nav">
                    <a id="navbar-link" href="#welcome-section">welcome</a>
                    <a id="navbar-link" href="#projects">projects</a>
                </div>
            </nav>
        `
    }
}

customElements.define('myNavbar', myNavbarJs)