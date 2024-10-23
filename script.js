const arrayContainer = document.getElementById('array-container');
let array = [];

// Function to generate random array
function generateArray(size = 50) {
    array = [];
    arrayContainer.innerHTML = ''; // Clear previous bars
    for (let i = 0; i < size; i++) {
        const value = Math.floor(Math.random() * 100) + 1;
        array.push(value);

        // Create array bars
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(bar);
    }
}

// Function to swap two elements in the DOM
function swap(el1, el2) {
    const temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Bubble Sort Algorithm
async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            bars[j].classList.add('active');
            bars[j + 1].classList.add('active');

            if (array[j] > array[j + 1]) {
                await new Promise(resolve => setTimeout(resolve, 100)); // Delay for visualization
                swap(bars[j], bars[j + 1]);

                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

            bars[j].classList.remove('active');
            bars[j + 1].classList.remove('active');
        }
        bars[array.length - i - 1].classList.add('sorted');
    }
    bars[0].classList.add('sorted');
}

// Event listeners for buttons
document.getElementById('newArray').addEventListener('click', generateArray);
document.getElementById('bubbleSort').addEventListener('click', bubbleSort);

// Generate the initial array on page load
generateArray();
