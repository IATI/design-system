import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Filler,
);

// Initialise sparklines when DOM is ready
function initialiseSparklines() {
  const sparklines = document.querySelectorAll(".iati-data-card__sparkline");

  sparklines.forEach((canvas) => {
    const dataAttr = canvas.getAttribute("data-sparkline");

    if (dataAttr) {
      try {
        const data = JSON.parse(dataAttr);
        const ctx = canvas.getContext("2d");

        new ChartJS(ctx, {
          type: "line",
          data: {
            labels: data.labels,
            datasets: [
              {
                data: data.values,
                borderColor: "#155366",
                borderWidth: 2,
                fill: true,
                backgroundColor: "#E6F9FE",
                pointRadius: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            elements: {
              point: {
                radius: 0,
              },
            },
            scales: {
              y: {
                display: false,
              },
              x: {
                display: false,
              },
            },
          },
        });
      } catch (e) {
        console.error("Failed to create sparkline:", e);
      }
    }
  });
}

// MutationObserver for Storybook dynamic content
function setupMutationObserver() {
  const observer = new MutationObserver(() => {
    setTimeout(initialiseSparklines, 50);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Initialise when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initialiseSparklines();
    setupMutationObserver();
  });
} else {
  initialiseSparklines();
  setupMutationObserver();
}

export { initialiseSparklines };
