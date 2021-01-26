<template>
  <div class="container">
    <div id="emergency">
      <a href="/emergency">
        <b-button pill variant="outline-danger" size="lg" id="urgent"
          >Find help right now</b-button
        >
      </a>
    </div>
    <h1>Find Proffesionals in your area</h1>
    <GmapMap
      class="map"
      :center="coordinates"
      :zoom="7"
      map-type-id="terrain"
      style="width: 800px; height: 400px"
      streetViewControl: true
      fullScreenControl: false
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <gmap-marker
        :position="coordinates"
        :clickable="true"
        :draggable="false">
      </gmap-marker>
    </GmapMap>
    <div class="helpers"><h1>Ion Ionescu</h1>
    <p>Hi. Im a psychitrist and I am here to help<br>Str. 1 Decembrie 1989 nr.27</p></div>
    <div class="helpers"><h1>Ion Andrei</h1>
    <p>Hi. Im a psychologist and I am here to help<br>Str. Intratrea Doinei nr.2</p></div>
    <div class="helpers"><h1>Cristian Psihologu</h1>
    <p>Hi. Im a psychologist and I am here to help online or from my office.
      <br>Str. Stefan cel Mare nr.12</p></div>
    <div class="helpers"><h1>Andrei Naturistu</h1>
    <p>Hi. Im a natural nutritionist and I am here to help online and from my office
      <br>Str. Grigore Popa nr.1</p></div>
      <mdb-input label="Search" type="text" class="mt-0"/>
  </div>
  </template>

<script>
import { mdbInput } from 'mdbvue';

export default {
  name: 'mdbSearchEcample',
  components: {
    mdbInput,
  },
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      // eslint-disable-next-line no-alert
      .catch((error) => alert(error));
  },
};
</script>

<style>
h1 {
  border: aquamarine;
  margin: 20%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  vertical-align: 9%;
}

#urgent {
  margin: 20px;
}

.searchbar {
  margin: 10px;
  left: 10px;
}

.helpers {
    border: 1px solid black;
    margin-left:auto;
    margin-right:0;
    margin: 10px;
    vertical-align:right;
}

.map{
  vertical-align:left;
  display:inline-block;
}
p {
  border: 1px aqua;
}
</style>
