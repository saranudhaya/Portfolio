document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let isColorChange = false;

    header.addEventListener('click', function() {
        if (isColorChange) {
            header.style.backgroundColor = '#333'; // Change the background color back to the default color
        } else {
            header.style.backgroundColor = getRandomColor(); // Change the background color to a random color
        }

        isColorChange = !isColorChange;
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
