<template>
    <div>
<v-navigation-drawer v-model="drawer" app clipped floating temporary>
      <v-list dense>
        <v-row class="ma-2 mb-3">
          <!-- <v-icon class="mx-4" large>mdi-video</v-icon> -->
          <v-toolbar-title class="align-center">
            <span class="title">kebele</span>
          </v-toolbar-title>
        </v-row>
        <!-- sayfalar -->

<v-list-item v-for="item in items" :key="item.icon" link>
<router-link :to=item.page>
    <v-row>
        <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
    </v-row>
          
</router-link>
        </v-list-item>

        
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="theme" color="blue" />
          </v-list-item-action>
          <v-list-item-title>dark</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <!-- <v-icon class="mx-4" large>mdi-video</v-icon> -->
      <v-toolbar-title class="align-center">
        <!-- <span class="title">kebele</span> -->
      </v-toolbar-title>
      <v-spacer />

      <!-- <v-text-field
        class="mt-6"
        solo
        placeholder="ara..."
        single-line
        append-icon="mdi-magnify"
        color="white"
      />
      <v-spacer /> -->
      <!-- <v-btn class="ml-0" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn class="ma-2" icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn> -->
      <div>
        <!-- <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="250"
          offset-x
        >
          <template v-slot:activator="{ on }">
            <v-avatar size="40">
              <img v-on="on" src="../src/assets/40speed.gif" />
            </v-avatar>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>IRON MAN</v-list-item-title>
                  <v-list-item-subtitle>Tony STARK</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider />
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-title>ayarlar</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="theme" color="purple" />
                </v-list-item-action>
                <v-list-item-title>dark</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" text @click="menu = false"
                >çıkış yap</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-menu> -->
      </div>
    </v-app-bar>
    </div>
</template>

<script>
    export default {
  name: "Navdrawer",
  components: {
    
  },
  data: () => ({
    menu: false,
    theme: false,
    drawer: false,
    items: [
      { icon: "mdi-home", text: "home", page: "/home" },
      { icon: "mdi-face", text: "about", page: "/about" },
      { icon: "mdi-info", text: "projects", page: "/projects" },
      { icon: "mdi-playlist-play", text: "contacts", page: "/contacts" },
      { icon: "mdi-clock", text: "blog", page: "blog" },
    ],
  }),
  watch: {
    theme: function(next) {
      this.$vuetify.theme.dark = next;
    },
  },
};
</script>

<style scoped>

</style>