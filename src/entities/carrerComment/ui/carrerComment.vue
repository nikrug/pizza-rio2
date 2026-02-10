<script setup>

const props = defineProps({
  commentImg: {
    type: String,
    default:'/images/carrer/Nikita.png',
  },

  commentImgclass:{
    type: String,
    default:'carrier__coment-img',
  },

  commentTitle: {
    type: String,
    default:'Никита',
  },

  commentText: {
    type: String,
    default:'Хороший, веселый и активный персонал. Получил незабываемые впечатления как от коллектива, так и от приготовления еды для гостей.',
  },

  commentTime: {
    type: String,
    default:'13:25',
  },

  commentImgsee: {
    type:String,
    default:'carrier__coment-img-none',
  },
  commentTextBox: {
    type:String,
    default:'carrier__coment-text-box',
  },
});
</script>


<template>
  <div class="carrier__comment-body">
    <img :class="props.commentImgclass" :src="props.commentImg">
    <div class="carrier__comment">
        <div :class="props.commentTextBox">
            <div class="carrier__coment-title">{{ props.commentTitle }}</div>
            <div class="carrier__coment-text">{{ props.commentText }}</div>
            <div class="carrier__comment-corner">
              <div class="carrier__coment-time">{{ props.commentTime }}</div>
              <img :class="props.commentImgsee" src="/images/carrer/vacancy-chat-readed.svg">
            </div>
        </div>
  </div>
  </div>
</template>

  
<style lang="scss">
@import './style.scss';
</style>