// Owlcarousel
$(document).ready(function () {
    $('#slider').owlCarousel(
        {
            loop: true,
            dots: true,
            center: true,
            responsive:
            {
                0:
                {
                    items: 1
                },
                750:
                {
                    items: 2
                },
                1170:
                {
                    items: 3
                },
            }
        });

    $('#arrow-l').click(function () {
        $('#slider').trigger('prev.owl.carousel');
    });

    $('#arrow-r').click(function () {
        $('#slider').trigger('next.owl.carousel');
    });
});
const themeToggle = document.getElementById('theme-toggle');

const lightTheme = {
  backgroundColor: '#f5f5f5',
  textColor: '#333',
  buttonBackgroundColor: '#fff',
  buttonTextColor: '#333',
};

const darkTheme = {
  backgroundColor: '#333',
  textColor: '#fff',
  buttonBackgroundColor: '#222',
  buttonTextColor: '#fff',
};

let currentTheme = lightTheme;

themeToggle.addEventListener('click', () => {
  document.body.style.backgroundColor = currentTheme === lightTheme
    ? darkTheme.backgroundColor
    : lightTheme.backgroundColor;

  document.body.style.color = currentTheme === lightTheme
    ? darkTheme.textColor
    : lightTheme.textColor;

  // Update button color and text to match new theme
  themeToggle.style.backgroundColor = currentTheme === lightTheme
    ? darkTheme.buttonBackgroundColor
    : lightTheme.buttonBackgroundColor;
  themeToggle.style.color = currentTheme === lightTheme
    ? darkTheme.buttonTextColor
    : lightTheme.buttonTextColor;

  currentTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
});

// Apply the system theme preference on initial load if supported
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDark) {
  document.body.style
}