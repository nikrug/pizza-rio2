<template>
        <button>
            <img class="play-pause-button" src="/images/music-img/play-button.svg">
        </button>

</template>


<script setup lang="ts">
import './style.scss';

const playPauseButtons = document.querySelectorAll<HTMLImageElement>('.play-pause-button')

playPauseButtons.forEach(button => {
  // Теперь мы ищем родительский элемент .music-player__player-song
  const audio = button.closest<HTMLElement>('.music-player__player-song')?.querySelector<HTMLAudioElement>('.audio')

  if (audio) { // Дополнительная проверка на существование элемента audio
    button.onclick = function () {
      if (audio.paused) {
        audio.play()
        button.src = '/images/music-img/pause-button.svg' // Иконка паузы
      } else {
        audio.pause()
        button.src = '/images/music-img/play-button.svg' // Иконка воспроизведения
      }
    }
  } else {
    console.error('Audio element not found for button: ', button)
  }
})

</script>