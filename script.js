document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const headerCta = document.getElementById('header-cta');

    const handleScroll = () => {
        if (window.scrollY > 20) {
            // Apply scrolled styles
            header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
            header.classList.remove('bg-transparent', 'py-5');
            
            // Show CTA button
            headerCta.classList.remove('opacity-0', 'pointer-events-none');
            headerCta.classList.add('opacity-100');
        } else {
            // Revert to top styles
            header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
            header.classList.add('bg-transparent', 'py-5');
            
            // Hide CTA button
            headerCta.classList.add('opacity-0', 'pointer-events-none');
            headerCta.classList.remove('opacity-100');
        }
    };

    // Initial check
    handleScroll();

    // Event listener
    window.addEventListener('scroll', handleScroll);
});