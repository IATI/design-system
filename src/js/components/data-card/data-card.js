/**
 * Data Card Sparkline functionality
 * Creates sparkline charts using Chart.js
 */

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Legend,
);

class DataCardSparkline {
  constructor(canvasElement, data, options = {}) {

    this.canvas = canvasElement;
    this.data = data;
    this.chart = null;
    this.options = {
      color: "red", // teal-500
      ...options,
    };

    this.init();
  }

  init() {

    if (!ChartJS) {
      return;
    }


    if (!this.canvas) {
      return;
    }

    // Check if canvas already has a chart and destroy it first
    const existingChart = ChartJS.getChart(this.canvas);
    if (existingChart) {
      existingChart.destroy();
    }

    const ctx = this.canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    try {
      this.chart = new ChartJS(ctx, {
        type: "line",
        data: {
          labels: this.data.labels || [],
          datasets: [
            {
              data: this.data.values || [],
              borderColor: this.options.color,
              borderWidth: 2,
              fill: false,
              pointRadius: 0,
              pointHoverRadius: 0,
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
            tooltip: {
              enabled: false,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        },
      });

    } catch (error) {
      // Chart creation failed
    }
  }

  destroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  updateData(newData) {
    if (this.chart) {
      this.chart.data.labels = newData.labels || [];
      this.chart.data.datasets[0].data = newData.values || [];
      this.chart.update();
    }
  }
}

// Auto-initialize sparklines on page load
function initializeSparklines() {

  const sparklines = document.querySelectorAll(".iati-data-card__sparkline");


  sparklines.forEach((canvas, index) => {

    // Skip if canvas already has a chart (unless we're going to replace it)
    const existingChart = ChartJS.getChart(canvas);
    if (existingChart) {
      return;
    }

    const dataAttr = canvas.getAttribute("data-sparkline");

    if (dataAttr) {
      try {
        const data = JSON.parse(dataAttr);
        new DataCardSparkline(canvas, data);
      } catch (e) {
      }
    } else {
    }
  });
}

// Use MutationObserver to detect when new content is added (for Storybook)
function setupMutationObserver() {

  const observer = new MutationObserver((mutations) => {
    let shouldInitialize = false;

    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Element node
            if (
              node.classList?.contains("iati-data-card") ||
              node.querySelector?.(".iati-data-card")
            ) {
              shouldInitialize = true;
            }
          }
        });
      }
    });

    if (shouldInitialize) {
      // Small delay to ensure DOM is fully updated
      setTimeout(initializeSparklines, 100);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

}

// Initialize when DOM is ready

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initializeSparklines();
    setupMutationObserver();
  });
} else {
  initializeSparklines();
  setupMutationObserver();
}

// Also try to initialize periodically for the first few seconds (Storybook workaround)
let initAttempts = 0;
const maxAttempts = 10;
const retryInterval = setInterval(() => {
  initAttempts++;

  const sparklines = document.querySelectorAll(".iati-data-card__sparkline");
  if (sparklines.length > 0) {
    clearInterval(retryInterval);
    initializeSparklines();
  } else if (initAttempts >= maxAttempts) {
    clearInterval(retryInterval);
  }
}, 500);

export { DataCardSparkline, initializeSparklines };
