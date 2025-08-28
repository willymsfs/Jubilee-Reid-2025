// Main presentation functionality
document.addEventListener('DOMContentLoaded', function() {
  const slidesContainer = document.getElementById('slides');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slideCounter = document.getElementById('slideCounter');
  
  let currentSlideIndex = 0;
  
  // Initialize slides
  function initSlides() {
    // Create all slides
    slidesData.forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
      if (slide.className) {
        slideElement.classList.add(slide.className);
      }
      
      const slideContentElement = document.createElement('div');
      slideContentElement.className = 'slide-content';
      slideContentElement.innerHTML = slide.content;
      
      slideElement.appendChild(slideContentElement);
      slidesContainer.appendChild(slideElement);
    });
    
    updateSlideCounter();
    initCharts();
  }
  
  // Navigation functions
  function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    // Ensure index is within bounds
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;
    
    // Remove active class from all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Add active class to current slide
    slides[index].classList.add('active');
    
    currentSlideIndex = index;
    updateSlideCounter();
    
    // Reinitialize charts when they come into view
    if (slidesData[index].id === 'jubilee-timeline') {
      initTimelineChart();
    } else if (slidesData[index].id === 'jubilee-types') {
      initJubileeTypesChart();
    } else if (slidesData[index].id === 'intellectual-theme') {
      initIntellectualProgrammingChart();
    }
  }
  
  function goToPrevSlide() {
    goToSlide(currentSlideIndex - 1);
  }
  
  function goToNextSlide() {
    goToSlide(currentSlideIndex + 1);
  }
  
  function updateSlideCounter() {
    slideCounter.textContent = `${currentSlideIndex + 1} / ${slidesData.length}`;
  }
  
  // Initialize charts
  function initCharts() {
    // Charts will be initialized when their slides become active
  }
  
  // Timeline chart
  function initTimelineChart() {
    const ctx = document.getElementById('timelineChart');
    if (!ctx) return;
    
    // Clear any existing chart
    if (ctx.chart) {
      ctx.chart.destroy();
    }
    
    // Sample data for significant Jubilee years
    const data = {
      labels: ['1300', '1350', '1450', '1500', '1750', '1900', '1925', '1950', '1975', '2000', '2015', '2025'],
      datasets: [{
        label: 'Jubilee Years',
        data: [1300, 1350, 1450, 1500, 1750, 1900, 1925, 1950, 1975, 2000, 2015, 2025],
        backgroundColor: '#1a3c6e',
        borderColor: '#1a3c6e',
        pointBackgroundColor: '#8b9dc3',
        pointBorderColor: '#fff',
        pointRadius: 6,
        pointHoverRadius: 8
      }]
    };
    
    ctx.chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            display: false
          },
          x: {
            title: {
              display: true,
              text: 'Year'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Timeline of Significant Jubilee Years',
            font: {
              size: 18
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const year = context.parsed.x;
                let pope = '';
                
                if (year === 1300) pope = 'Pope Boniface VIII';
                else if (year === 1350) pope = 'Pope Clement VI';
                else if (year === 1450) pope = 'Pope Nicholas V';
                else if (year === 1500) pope = 'Pope Alexander VI';
                else if (year === 1750) pope = 'Pope Benedict XIV';
                else if (year === 1900) pope = 'Pope Leo XIII';
                else if (year === 1925) pope = 'Pope Pius XI';
                else if (year === 1950) pope = 'Pope Pius XII';
                else if (year === 1975) pope = 'Pope Paul VI';
                else if (year === 2000) pope = 'Pope John Paul II';
                else if (year === 2015) pope = 'Pope Francis';
                else if (year === 2025) pope = 'Pope Francis';
                
                return `Year: ${year}, Pope: ${pope}`;
              }
            }
          }
        }
      }
    });
  }
  
  // Jubilee types chart
  function initJubileeTypesChart() {
    const ctx = document.getElementById('jubileeTypesChart');
    if (!ctx) return;
    
    // Clear any existing chart
    if (ctx.chart) {
      ctx.chart.destroy();
    }
    
    const data = {
      labels: ['Ordinary', 'Extraordinary'],
      datasets: [{
        label: 'Number of Jubilees',
        data: [25, 5],
        backgroundColor: ['#1a3c6e', '#8b9dc3'],
        borderWidth: 1
      }]
    };
    
    ctx.chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Count'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Jubilee Type'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Number of Ordinary and Extraordinary Jubilee Years',
            font: {
              size: 18
            }
          }
        }
      }
    });
  }
  
  // Intellectual programming chart
  function initIntellectualProgrammingChart() {
    const ctx = document.getElementById('intellectualProgrammingChart');
    if (!ctx) return;
    
    // Clear any existing chart
    if (ctx.chart) {
      ctx.chart.destroy();
    }
    
    ctx.chart = new Chart(ctx, {
      type: 'pie',
      data: intellectualProgrammingData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Types of Intellectual Programming Activities',
            font: {
              size: 18
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = Math.round((value / total) * 100);
                return `${label}: ${percentage}%`;
              }
            }
          }
        }
      }
    });
  }
  
  // Event listeners
  prevBtn.addEventListener('click', goToPrevSlide);
  nextBtn.addEventListener('click', goToNextSlide);
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    } else if (e.key === 'ArrowRight') {
      goToNextSlide();
    }
  });
  
  // Initialize
  initSlides();
});

