const zoneCoords = [
  [85.657444, 51.817988],
  [132.281044, 43.294468],
  [20.301769, 54.941284],
  [40.254603, 43.684277],
  [33.965791, 44.392998],
  [38.630264, 46.863505]
];

const pic = $(`
<div class="pic">
    <img src="../png/z${localStorage.zone_g195}.png" alt="" class="zone" />
    <img src="../png/heart.png" alt="" class="heart" />
</div>
`);

$(".pic").append(pic);

let map;

console.log(zoneCoords[localStorage.zone_g195 - 1]);

main();
async function main() {
  await ymaps3.ready;

  map = new ymaps3.YMap(document.getElementById("map"), {
    location: {
      center: zoneCoords[localStorage.zone_g195 - 1],
      zoom: 13
    }
  });

  map.addChild(new ymaps3.YMapDefaultSchemeLayer());
}
