/**
 * wedding-data.js — Customer-facing editable data layer for ever-after-bloom
 * Edit this file to update couple names, wedding date, story, chapters, venue, images, and background music.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Vinay",
    bride: "Aditi",
    initials: "V & A",
  },
  dateISO: "2026-11-21T19:30:00+05:30",
  dateLabel: "Saturday, 21 November 2026",
  timeLabel: "7:30 in the evening",
  venue: {
    name: "Yamuna Valley",
    address: "Near TOLL TAX, Aliyapur, Ghatampur, Kanpur Nagar",
    mapsQuery: "Yamuna Valley near TOLL TAX, Aliyapur, Ghatampur, Kanpur Nagar",
  },
  dressCode: "Festive Indian — pastels, ivory & gold",
  hero: {
    kicker: "Together with our families",
    eyebrow: "Save the Date",
    blessing: "Two rivers, one sky",
  },
  story: {
    title: "The Two of Them",
    subtitle: "A love story in three brushstrokes",
    groom: {
      name: "Vinay",
      role: "The Groom",
      text: "Learned to cook from his grandmother and to be patient from long train rides. He remembers every song he has ever loved, and hums them slightly wrong on purpose.",
    },
    bride: {
      name: "Aditi",
      role: "The Bride",
      text: "Grew up chasing monsoon light with a sketchbook under her arm. She still stops mid-sentence for a good sunset, and she laughs before the joke has finished landing.",
    },
  },
  chapters: [
    {
      no: "I",
      title: "A Courtyard in Winter",
      when: "December 2021",
      text: "They met beside a fountain at a friend's mehndi, arguing gently about whether the marigolds were orange or gold. Neither of them won.",
    },
    {
      no: "II",
      title: "Letters and Long Calls",
      when: "2022 — 2024",
      text: "Two cities, one time zone, and a habit of narrating ordinary evenings to each other until the ordinary began to feel rare.",
    },
    {
      no: "III",
      title: "The Lanterns",
      when: "October 2025",
      text: "On a rooftop above the old city, he asked. She had already said yes somewhere around the second lantern.",
    },
    {
      no: "IV",
      title: "And Now, You",
      when: "November 2026",
      text: "The palace gates open, the sky turns rose, and the story waits for the people who made it possible.",
    },
  ],
  footer: {
    line1: "Come early. Stay late.",
    line2: "Dance badly with us.",
    signoff: "With all our love, Vinay & Aditi",
  },
  music: {
    src: "./editable/assets/bg-music.mp3",
    autoplay: true,
    loop: true,
  },
  images: {
    seal: "./editable/assets/invite-seal.png",
    openVideo: "./editable/assets/invite-open.mp4",
    lantern: "./editable/assets/lantern.png",
    heroPalace: "./editable/assets/hero-palace.jpg",
    bougainvillea: "./editable/assets/bougainvillea.png",
    goldFlourish: "./editable/assets/gold-flourish.png",
    portraitBride: "",
    portraitGroom: "",
    mapPlate: "./editable/assets/map-plate.jpg",
    weddingCar: "",
    gardenCourtyard: "./editable/assets/garden-courtyard.jpg",
    sceneDancing: "",
    sceneWalking: "./editable/assets/scene-walking.jpg",
    sceneBalcony: "./editable/assets/scene-balcony.jpg",
    sceneHands: "",
    couple1: "./editable/assets/couple1.jpg",
    couple2: "./editable/assets/couple2.jpg",
    coupleLanterns: "",
    sunsetSky: "./editable/assets/sunset-sky.jpg",
  },
};
