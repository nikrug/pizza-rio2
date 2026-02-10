<template>
        <div class="slider-styled">
          <div class=" slider"></div>
        </div>

</template>

  
<style lang="scss" scoped>
@import './style.scss';
.noUi-origin{
  width: 100%;
}
</style>

<script setup lang="ts">
import noUiSlider from 'nouislider';

function formatTime (value: number): string {
  const pad = (n: number): string => ('0' + n).slice(-2)
  const mins = Math.floor(value)
  return `${pad(Math.floor(mins / 60))}:${pad(mins % 60)}`
}

window.addEventListener('DOMContentLoaded', () => {
  const sliderElements = document.querySelectorAll('.slider');

  sliderElements.forEach((slider) => {
    const startValues = [0, 120]; // Change start values as needed.
    noUiSlider.create(slider as HTMLElement, {
      start: startValues,
      step: 1,
      connect: true,
      range: {
        min: 0,
        max: 180
      },
      tooltips: {
        to: formatTime,
        from: (value) => {
          const num = parseFloat(value);
          return !isNaN(num) ? num : 0;
        }
      }
    });

    // Change the width of the .noUi-origin elements
    const origins = slider.querySelectorAll('.noUi-origin');
    origins.forEach((origin) => {
      (origin as HTMLElement).style.width = '100%';
    });

  });
});
</script>