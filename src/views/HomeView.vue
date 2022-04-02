 <script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import CardItem from "../components/CardItem.vue";
</script>

<script>
export default {
  components: { CardItem },
  data() {
    return {
      cards: [
        {
          icon: "https://img.icons8.com/color/344/over_the_moon.png",
          title: "Rocket Science",
          description: "Sometimes it goes boom.",
          tags_array: [
            {
              text: "Rocket Science",
              style: "background-color: #008888;",
            },
            {
              text: "Science",
              style: "background-color: #008888;",
            },
            {
              text: "Physics",
              style: "background-color: #008888;",
            },
          ],
        },
        {
          icon: "https://img.icons8.com/color/344/informatics.png",
          title: "Informatics",
          description: "101001 0100101 01001010 0101 010 001010 010 0100 0101010 0100 10",
          tags_array: [
            {text: "Informatics", style: "background-color: #008888;"},
            {text: "Basics", style: "background-color: #008888;"},
            {text: "Logic", style: "background-color: #008888;"},
          ],
        },
        {
          icon: "https://img.icons8.com/color/344/math.png",
          title: "Maths Basics",
          description: "The Basics",
          tags_array: [
            {text: "Maths", style: "background-color: #008888;"},
             {
              text: "Basics",
              style: "background-color: #008888;",
            },
          ],
        },
         {
          icon: "https://img.icons8.com/color/344/formula-fx.png",
          title: "Maths Advanced",
          description: "Math is cool",
          tags_array: [
            {
              text: "Maths",
              style: "background-color: #008888;",
            },
             {
              text: "Advanced",
              style: "background-color: #008888;",
            },
          ],
        },
        {
          icon: "https://img.icons8.com/external-becris-flat-becris/344/external-science-literary-genres-becris-flat-becris.png",
          title: "Science",
          description: "Mad scientists are here",
          tags_array: [
            {
              text: "Science",
              style: "background-color: #008888;",
            },
          ],
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2234/2234697.png",
          title: "History",
          description: "When did they do what ?",
          tags_array: [
            {
              text: "History",
              style: "background-color: #008888;",
            },
            {
              text: "Boring",
              style: "background-color: #008888;",
            },
          ],
        },
        {
          icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-physics-online-education-flaticons-lineal-color-flat-icons-2.png",
          title: "Physics",
          description: "It's going to get physical.",
          tags_array: [
            {
              text: "Physics",
              style: "background-color: #008888;",
            },
            {
              text: "Not so Boring",
              style: "background-color: #008888;",
            },
          ],
        },
        {
          icon: "https://img.icons8.com/color/344/chemistry-book.png",
          title: "Chemistry",
          description: "We mix some stuff to make some other stuff.",
          tags_array: [
            {
              text: "Chemistry",
              style: "background-color: #008888;",
            },
            {
              text: "Not so Boring",
              style: "background-color: #008888;",
            },
          ],
        },
        {
          icon: "https://img.icons8.com/color/344/literature--v1.png",
          title: "Literature",
          description: "We do be readin'",
          tags_array: [
            {
              text: "Literature",
              style: "background-color: #008888;",
            },
            {
              text: "Advanced",
              style: "background-color: #008888;",
            },
          ],
        },
         {
          icon: "https://img.icons8.com/color/344/art-book.png",
          title: "Art",
          description: "Art",
          tags_array: [
            {
              text: "Art",
              style: "background-color: #008888;",
            },
            {
              text: "Creative",
              style: "background-color: #008888;",
            },
          ],
        },
         {
          title: "Dummy",
          description: "Lorem ipsum dolor sit amet",
          tags_array: [
            {
              text: "Tag",
              style: "background-color: #008888;",
            },
            {
              text: "Another Tag",
              style: "background-color: #008888;",
            },
          ],
        },
         {
          title: "Dummy",
          description: "Lorem ipsum dolor sit amet",
          tags_array: [
            {
              text: "Tag",
              style: "background-color: #008888;",
            },
            {
              text: "Another Tag",
              style: "background-color: #008888;",
            },
          ],
        },
         {
          title: "Dummy",
          description: "Lorem ipsum dolor sit amet",
          tags_array: [
            {
              text: "Tag",
              style: "background-color: #008888;",
            },
            {
              text: "Another Tag",
              style: "background-color: #008888;",
            },
          ],
        },
         {
          title: "Dummy",
          description: "Lorem ipsum dolor sit amet",
          tags_array: [
            {
              text: "Tag",
              style: "background-color: #008888;",
            },
            {
              text: "Another Tag",
              style: "background-color: #008888;",
            },
          ],
        },
         {
          title: "Dummy",
          description: "Lorem ipsum dolor sit amet",
          tags_array: [
            {
              text: "Tag",
              style: "background-color: #008888;",
            },
            {
              text: "Another Tag",
              style: "background-color: #008888;",
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="Home">
    <h1 msg="Build-a-cursus"></h1>
    <CardItem v-for="card in cards" v-bind="card"></CardItem>
  </div>
</template>

<style scoped>
.Home {
  display: flex;
  flex-wrap: wrap;
}
</style>
