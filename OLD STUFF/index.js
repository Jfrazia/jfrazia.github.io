//Credit for better footers goes to https://stackoverflow.com/questions/53076202/stick-div-at-the-bottom-of-equally-height-cards

const body = document.getElementById("cardBody");

$.getJSON(
  "https://raw.githubusercontent.com/Jfrazia/jfrazia.github.io/main/index.json",
  function (data) {
    data.cards.forEach(createCard);
  }
);

function createCard(cardData) {
  base = document.createElement("div");
  base.className = "column is-one-third-desktop is-full-touch";
  body.appendChild(base);

  frame = document.createElement("div");
  frame.className = "box has-background-grey-lighter";
  base.appendChild(frame);

  card = document.createElement("div");
  card.className = "card equal-height";
  frame.appendChild(card);

  cardImage = document.createElement("div");
  cardImage.className = "card-image";
  card.appendChild(cardImage);

  cardFigure = document.createElement("figure");
  cardFigure.className = "image is-16by9";
  cardImage.appendChild(cardFigure);

  cardImageSrc = document.createElement("img");
  cardImageSrc.src = cardData.image;
  cardImageSrc.alt = "Loading...";
  cardFigure.appendChild(cardImageSrc);

  cardContent = document.createElement("div");
  cardContent.className = "card-content";
  card.appendChild(cardContent);

  cardTitle = document.createElement("div");
  cardTitle.className = "Media";
  cardContent.appendChild(cardTitle);

  cardMediaContent = document.createElement("div");
  cardMediaContent.className = "media-content";
  cardTitle.appendChild(cardMediaContent);

  cardTitleText = document.createElement("p");
  cardTitleText.className = "title is-4";
  cardTitleText.innerHTML = cardData.title;
  cardMediaContent.appendChild(cardTitleText);

  cardTags = document.createElement("div");
  cardTags.className = "tags";
  cardContent.appendChild(cardTags);

  if (cardData.tags != undefined || cardData.tags.length == 0) {
    cardData.tags.forEach((element) => {
      tagSpan = document.createElement("span");
      tagSpan.className = "tag " + element.color;
      tagSpan.innerHTML = element.title;
      cardTags.appendChild(tagSpan);
    });
  }
  
  cardMainBody = document.createElement("div");
  cardMainBody.className = "card-main-body";
  cardMainBody.innerHTML = cardData.description;
  cardContent.appendChild(cardMainBody);

  if (cardData.links != undefined || cardData.links.length == 0) {
    cardFooter = document.createElement("footer");
    cardFooter.className = "card-footer";
    card.appendChild(cardFooter);

    cardData.links.forEach((element) => {
      if (element.link != undefined && element.title != undefined) {
        buttonLink = document.createElement("a");
        buttonLink.href = element.link;
        //buttonLink.style = "margin-right:10px;"
        cardFooter.appendChild(buttonLink);
        button = document.createElement("button");
        button.className = "card-footer-item button is-link";
        button.innerHTML = element.title;
        buttonLink.appendChild(button);
      }
    });
  }
}