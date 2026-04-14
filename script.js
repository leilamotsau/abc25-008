document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
 
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
 
            // Collect selected products
            const checkboxes = document.querySelectorAll('.form-check-input:checked');
            let selectedProducts = [];
            checkboxes.forEach(cb => {
                selectedProducts.push(cb.value);
            });
 
            // Validation
            if (name === '' || email === '') {
                document.getElementById('formStatus').innerHTML = '<div class="alert alert-danger">Name and email are required.</div>';
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                document.getElementById('formStatus').innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
                return;
            }
            if (selectedProducts.length === 0) {
                document.getElementById('formStatus').innerHTML = '<div class="alert alert-warning">Please select at least one product.</div>';
                return;
            }
 
            // Build success message
            let productList = selectedProducts.join(', ');
            let fullMessage = `Name: ${name}\nEmail: ${email}\nProducts: ${productList}\nAdditional details: ${message || 'None'}`;
 
            // Simulate sending (in a real project, you'd send this to a server)
            console.log(fullMessage);
            document.getElementById('formStatus').innerHTML = `<div class="alert alert-success">Thank you ${name}! We received your request for: ${productList}. We'll contact you soon.</div>`;
            form.reset();
        });
    }
});
 
