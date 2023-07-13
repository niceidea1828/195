for (let zone of JSON.parse(localStorage.liked_g195)) {
  const pic = $(`
      <a href="map.html" class="pic">
          <img src="../png/z${zone}.png" alt="" class="zone" />
          <img src="../png/heart.png" alt="" class="heart" />
      </a>
      `);

  pic.click(function () {
    localStorage.zone_g195 = zone;
  });

  $(".pics").append(pic);
}
