<template>
      <div class="py-2">
            <b-row align-v="center">
                  <b-col cols="6">
                        <b-row align-v="center">
                              <b-col cols="12" xl="6" lg="6" md="6" sm="12" class="d-flex flex-row justify-content-center">
                                          <h5 class="text-white">فخور: 1450 ریال</h5>
                                          <b-img id="img" class="ml-3" :src="redPng" fluid></b-img>
                              </b-col>
                              <b-col cols="12" xl="6" lg="6" md="6" sm="12" class="blueBackgroud d-flex flex-row justify-content-center">
                                          <h5 class="text-white">(+112) فملی: 1450ریال</h5>
                                          <b-img id="img" class="ml-3" :src="greenPng" fluid></b-img>
                              </b-col>
                        </b-row>
                  </b-col>
                  <b-col cols="6">
                        <b-row align-v="center">
                              <b-col cols="12" xl="6" lg="6" md="6" sm="12" class="d-flex flex-row justify-content-center">
                                          <h5 class="text-white d-flex flex-nowrap">(-112)آلمینیوم 1450 ریال</h5>
                                          <b-img id="img" class="ml-2" :src="redPng" fluid></b-img>
                              </b-col>
                              <b-col cols="12" xl="6" lg="6" md="6" sm="12" class="blueBackgroud d-flex flex-row justify-content-center">
                                          <h5 class="text-white">(+112)مس:1450ریال</h5>
                                          <b-img id="img" class="ml
                                          -3" :src="greenPng" fluid></b-img>
                              </b-col>
                        </b-row>
                  </b-col>
            </b-row>
      </div>
</template>
<script>
export default {
      computed: {
            greenPng() {
                  return require("../assets/green.png");
            },
            redPng() {
                  return require("../assets/red.png");
            },
      },
};
</script>
<style>
#img {
      width: 30px;
      height: 30px;
}
.blueBackgroud {
      background-color: rgb(31, 53, 141);
      border-radius: 5px;
      flex-wrap: nowrap;
      padding: 5px 0px;
}
</style>
