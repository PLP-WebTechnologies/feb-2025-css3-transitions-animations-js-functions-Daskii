window.addEventListener("DOMContentLoaded", () => {
    const colorSelector = document.getElementById("colorInput");
    const saveButton = document.getElementById("applyBtn");
    const syncButton = document.getElementById("syncBtn");
    const box = document.getElementById("visualBox");
  
    // Load saved color
    const storedColor = localStorage.getItem("userColor");
    if (storedColor) {
      box.style.backgroundColor = storedColor;
      colorSelector.value = storedColor;
    }
  
    // Apply and save user color
    saveButton.addEventListener("click", () => {
      const selectedColor = colorSelector.value;
      localStorage.setItem("userColor", selectedColor);
      animateBoxWithColor(selectedColor);
    });
  
    // Auto-sync with system dark/light mode
    syncButton.addEventListener("click", () => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const themeColor = prefersDark ? '#2c2c2c' : '#ffffff';
      localStorage.setItem("userColor", themeColor);
      colorSelector.value = themeColor;
      animateBoxWithColor(themeColor);
    });
  
    function animateBoxWithColor(color) {
      box.style.backgroundColor = color;
      box.classList.add("animated");
      setTimeout(() => box.classList.remove("animated"), 400);
    }
  });
  