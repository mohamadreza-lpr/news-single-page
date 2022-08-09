<template>
      <div id="app">
            <b-row align-v="end">
                  <b-col cols="12" xl="9" lg="9" md="12" sm="12" xs="12">
                        <b-row align-v="end">
                              <b-col id="verticalSec">
                                    <Exchange class="exchange" />
                              </b-col>
                        </b-row>
                  </b-col>
                  <b-col cols="12" xl="3" lg="3" md="12" sm="12" xs="12">
                        <b-card id="navbar">
                              <b-row>
                                    <b-col cols="12">
                                          <b-img :src="navLogo" fluid></b-img>
                                    </b-col>
                              </b-row>
                              <b-row class="mt-2 border-bottom m-1">
                                    <b-col>
                                          <b-row class="mt-1 justify-content-center">
                                                <span class="dateType">{{ persianDate }}</span>
                                          </b-row>
                                          <b-row class="mt-1 justify-content-center">
                                                <span class="dateType">{{ arabicDate }}</span>
                                          </b-row>
                                          <b-row class="my-2 justify-content-center">
                                                <span class="endateType">{{ engDate }}</span>
                                          </b-row>
                                    </b-col>
                              </b-row>
                              <b-row class="border-bottom m-1">
                                    <b-col>
                                          <Clock />
                                    </b-col>
                              </b-row>
                              <b-row id="news" class="border-bottom m-1 overflow-hidden">
                                    <News1 />
                              </b-row>
                              <b-row id="news" class="m-1 overflow-hidden">
                                    <News2 />
                              </b-row>
                        </b-card>
                  </b-col>
            </b-row>
            <b-row id="lastVerticalSection" class="mt-2">
                  <b-col md="12">
                        <Subtitle class="subtitle" />
                  </b-col>
            </b-row>
      </div>
</template>

<script>
import News1 from "./components/Sidebar-News1.vue";
import News2 from "./components/Sidebar-News2.vue";
import Clock from "./components/Malek-Clock.vue";
import Exchange from "./components/Exchange-Price.vue";
import Subtitle from "./components/Subtitle-Row.vue";
import * as moment from "jalali-moment";
import { BCard, BRow, BCol } from "bootstrap-vue";
export default {
      name: "App",
      components: {
            BCard,
            BRow,
            BCol,
            Clock,
            Exchange,
            Subtitle,
            News1,
            News2,
      },
      data() {
            return {};
      },
      computed: {
            navLogo() {
                  return require("./assets/navLogo.png");
            },
            persianDate() {
                  let persianDate = moment().locale("fa").format("dddd,Do MMMM YYYY");
                  return persianDate;
            },
            arabicDate() {
                  let arabicDate = moment().locale("ar").format("dddd,Do MMMM YYYY");
                  return arabicDate;
            },
            engDate() {
                  let arabicDate = moment().locale("en").format("dddd/Do MMMM YYYY");
                  return arabicDate;
            },
      },
      watch: {
            scrolToDown() {
                  var container = this.$el.querySelector("#news");
                  container.scrollTop = container.scrollHeight;
            },
      },
      methods: {
            logDate() {
                  let persianDate = moment().locale("fa").format("dddd, MMMM Do YYYY");
                  console.log(persianDate);
            },
      },
};
</script>

<style>
body {
      background-image: url("assets/z.png");
      background-size: cover;
      background-attachment: fixed;
      background-repeat: no-repeat;
}
#news {
      max-height: 100px;
}
#navbar {
      background-color: rgba(179, 179, 179, 0.775);
      height: 610px;
      border-radius: 15px;
      margin-left: 15px;
      overflow: hidden;
      margin-top: 10px;
}
#verticalSec {
      background-color: rgba(179, 179, 179, 0.775);
      border-radius: 15px;
      padding-right: 20px;
      overflow: hidden;
}
#lastVerticalSection {
      background-color: rgba(179, 179, 179, 0.775);
      border-radius: 15px;
}
#app {
      margin: 0px 20px;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      text-align: center;
}
.dateType {
      color: #ffffff;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
      font-size: 18px;
      font-weight: 700;
}
.endateType {
      color: #ffffff;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
      font-size: 16px;
      font-weight: 700;
}
.exchange {
      animation: moveExchange 20s linear infinite;
}
@keyframes moveExchange {
      100% {
            transform: translateX(-1000px);
      }
}
</style>
