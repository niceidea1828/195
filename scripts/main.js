if (!localStorage.liked_g195) {
  localStorage.liked_g195 = "[]";
}

const liked = JSON.parse(localStorage.liked_g195);

for (let i = 0; i < 6; i++) {
  const pic = $(`
    <div class="pic">
        <img src="../png/z${i + 1}.png" alt="" class="zone" />
        <img src="../png/heart.png" alt="" class="heart ${
          liked.includes(i + 1) ? "" : "na"
        }" />
    </div>
    `);

  pic.click(function () {
    $(this).find(".heart").toggleClass("na");

    if (!liked.includes(i + 1)) {
      liked.push(i + 1);
    } else {
      liked.splice(liked.indexOf(i + 1), 1);
    }

    localStorage.liked_g195 = JSON.stringify(liked);
  });

  $(".pics").append(pic);
}
