class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FF5733, #3399FF);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .mobile-menu.open {
          max-height: 500px;
        }
      </style>
      <nav class="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <a href="/" class="flex items-center">
                <i data-feather="zap" class="text-primary w-8 h-8"></i>
                <span class="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">DragonCraftMC</span>
              </a>
            </div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-center space-x-8">
                <a href="/" class="nav-link text-white px-3 py-2 text-sm font-medium">Home</a>
                <a href="/shop" class="nav-link text-white px-3 py-2 text-sm font-medium">Shop</a>
                <a href="#" class="nav-link text-white px-3 py-2 text-sm font-medium">Leaderboards</a>
                <a href="#" class="nav-link text-white px-3 py-2 text-sm font-medium">Rules</a>
                <a href="/login" class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                  Login
                </a>
              </div>
            </div>
            
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
              <button id="mobile-menu-button" class="text-gray-300 hover:text-white focus:outline-none">
                <i data-feather="menu" class="w-6 h-6"></i>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu md:hidden bg-gray-900/95">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" class="block px-3 py-2 text-base font-medium text-white">Home</a>
            <a href="/shop" class="block px-3 py-2 text-base font-medium text-white">Shop</a>
            <a href="#" class="block px-3 py-2 text-base font-medium text-white">Leaderboards</a>
            <a href="#" class="block px-3 py-2 text-base font-medium text-white">Rules</a>
            <a href="/login" class="block w-full text-center bg-primary text-white px-4 py-2 rounded-md text-base font-medium mt-2">
              Login
            </a>
          </div>
        </div>
      </nav>
      <div class="h-16"></div> <!-- Spacer for fixed nav -->
    `;

    // Add mobile menu toggle functionality
    const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = mobileMenuButton.querySelector('i');
      if (mobileMenu.classList.contains('open')) {
        feather.replace(icon, { name: 'x' });
      } else {
        feather.replace(icon, { name: 'menu' });
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);