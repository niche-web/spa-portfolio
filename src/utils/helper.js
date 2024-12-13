export const getProjImgUrl = (identificator, type) => {
  return new URL(
    `../assets/images/thumbnail-project-${identificator}-${type}.webp`,
    import.meta.url
  ).href;
};
