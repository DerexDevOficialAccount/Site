class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .social-icon {
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-3px);
        }
      </style>
      <footer class="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mb-4 text-primary">DragonCraftMC</h3>
              <p class="text-gray-400">The ultimate fusion of Dragon Ball power and Minecraft creativity!</p>
            </div>
            
            <div>
              <h3 class="text-lg font-bold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="/" class="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="/shop" class="text-gray-400 hover:text-white transition">Shop</a></li>
                <li><a href="/login" class="text-gray-400 hover:text-white transition">Login</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition">Rules</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-bold mb-4">Server Info</h3>
              <ul class="space-y-2">
                <li class="text-gray-400">Version: 1.19.2</li>
                <li class="text-gray-400">IP: play.dragoncraftmc.com</li>
                <li class="text-gray-400">Players: 342/500</li>
                <li class="text-gray-400">Uptime: 99.8%</li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-bold mb-4">Connect With Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="social-icon text-gray-400 hover:text-[#5865F2]">
                  <i data-feather="message-circle" class="w-6 h-6"></i>
                </a>
                <a href="#" class="social-icon text-gray-400 hover:text-[#1DA1F2]">
                  <i data-feather="twitter" class="w-6 h-6"></i>
                </a>
                <a href="#" class="social-icon text-gray-400 hover:text-[#6441A5]">
                  <i data-feather="twitch" class="w-6 h-6"></i>
                </a>
                <a href="#" class="social-icon text-gray-400 hover:text-[#FF0000]">
                  <i data-feather="youtube" class="w-6 h-6"></i>
                </a>
              </div>
              
              <div class="mt-6">
                <h4 class="text-sm font-bold mb-2 text-gray-400">NEWSLETTER</h4>
                <div class="flex">
                  <input type="email" placeholder="Your email" class="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-primary w-full">
                  <button class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r">
                    <i data-feather="send" class="w-4 h-4"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">© 2023 DragonCraftMC. Not affiliated with Mojang or Toei Animation.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="#" class="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" class="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" class="text-gray-400 hover:text-white text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);