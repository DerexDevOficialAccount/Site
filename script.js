document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality will be handled by navbar component
  
  // Form validation for login page
  const loginForm = document.querySelector('form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      if (!username || !password) {
        alert('Please fill in all fields');
        return;
      }
      
      // Simulate login (in a real app, this would be an API call)
      console.log('Login attempt with:', username);
      // Redirect to home page after "successful" login
      window.location.href = '/';
    });
  }
  
  // Add cart functionality for shop items
  const addToCartButtons = document.querySelectorAll('button:contains("Add to Cart")');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productName = this.closest('div').querySelector('h3').textContent;
      const price = this.closest('div').querySelector('span').textContent;
      
      // In a real app, this would add to a cart state or make an API call
      console.log(`Added ${productName} (${price}) to cart`);
      
      // Show a temporary notification
      const notification = document.createElement('div');
      notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg';
      notification.textContent = `Added ${productName} to cart!`;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 3000);
    });
  });
});

// Feather icons replacement
if (window.feather) {
  feather.replace();
}