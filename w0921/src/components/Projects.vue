<template>
  <v-container>
    <div>{{ ps[1].isim }}</div>
    <!-- <img src="../assets/weather.png" alt=""> -->
    <div><img :src="image" alt="" /></div>

    <v-row class="mb-4">
      <v-col
        sm="6"
        md="4"
        lg="3"
        xl="2"
        v-for="(item, index) in ps.length"
        :key="index"
      >
        <v-card>
          <!-- <v-img
            heigth="200px"
            :src="`https://picsum.photos/500/300?images=${index + 1}`"
            :lazy-src="`https://picsum.photos/10/5?images=${index + 1}`"
          /> -->
          <v-img
            heigth="200px"
            :src="ps[index].image"
            :lazy-src="ps[index].image"
          />
          <v-card-subtitle> number {{ item }} </v-card-subtitle>
          <v-card-text class="text-primary">
            <div>başlık alanı</div>
            <div>başlık içeriği</div>
          </v-card-text>
          <v-card-actions>
            <!-- <v-btn color="orange" text>kaydet</v-btn> -->
            <v-btn color="orange" text
              ><a
                :href="ps[index].adres"
                target="_blank"
                rel="noopener noreferrer"
                >{{ ps[index].isim }}</a
              ></v-btn
            >
            <br />
            <!-- <v-btn color="orange" text><a :href=adres target="_blank" rel="noopener noreferrer">{{ps[item].isim}}</a></v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Projects",
  components: {},
  data: () => ({
    adres: "https://paintykebele.netlify.app/",
    isim: "paint benzeri",
    image: "../assets/weather.png",
    letter: "P",

    ps: [
      {
        adres: "https://vuehava.netlify.app/",
        isim: "hava durumu",
        image: "../assets/weather.png",
        letter: "P",
      },
      {
        adres: "https://kursun.netlify.app/",
        isim: "kursun",
        image: "../assets/bullet.png",
      },
      {
        adres: "https://vuecanavar.netlify.app/",
        isim: "canavar",
        image: "../assets/weather.png",
      },
      {
        adres: "https://kebeletodo.netlify.app/",
        isim: "todo",
        image: "../assets/bullet.png",
      },
      {
        adres: "https://paintykebele.netlify.app/",
        isim: "painty",
      },
      {
        adres: "https://paintykebele.netlify.app/",
        isim: "painty",
      },
      {
        adres: "https://paintykebele.netlify.app/",
        isim: "painty",
      },
      {
        adres: "https://paintykebele.netlify.app/",
        isim: "painty",
      },
      {
        adres: "https://paintykebele.netlify.app/",
        isim: "painty",
      },
    ],
  }),
};
</script>

<style scoped></style>
