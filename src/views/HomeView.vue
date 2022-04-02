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
          icon: "https://cdn-icons-png.flaticon.com/512/2285/2285537.png",
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
          icon: "https://cdn-icons-png.flaticon.com/512/897/897406.png",
          title: "Maths Basics",
          description: "The Basics",
          tags_array: [
            {
              text: "Maths",
              style: "background-color: #008888;",
            },
             {
              text: "Basics",
              style: "background-color: #008888;",
            },
          ],
        },
         {
          icon: "https://cdn-icons-png.flaticon.com/512/897/897406.png",
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
          icon: "https://cdn-icons-png.flaticon.com/512/3081/3081530.png",
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
          icon: "https://cdn-icons.flaticon.com/png/512/3224/premium/3224018.png?token=exp=1648934341~hmac=5db3d934a1098a6b8f4fc0d932b124cb",
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
          icon: "https://cdn-icons-png.flaticon.com/512/3655/3655592.png",
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
