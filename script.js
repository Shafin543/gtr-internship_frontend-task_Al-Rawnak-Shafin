document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('#navbar');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const dashboardImage = document.querySelector('.dashboard-image img');
    const container = document.querySelector('.dashboard-image');

    container.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const tiltX = (y - 0.5) * 10; 
        const tiltY = (x - 0.5) * -10; 

        dashboardImage.style.transform = `
            perspective(1000px)
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
            scale3d(1.05, 1.05, 1.05)
        `;

        const shadowX = tiltY * 5;
        const shadowY = tiltX * 5;
        dashboardImage.style.boxShadow = `
            ${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.4)
        `;
    });

    container.addEventListener('mouseleave', () => {
        dashboardImage.style.transform = 'none';
        dashboardImage.style.boxShadow = 'none';
    });
});
