export const getProjImgUrl = (identificator, type) => {
  return new URL(
    `../assets/images/custom/thumbnail-project-${identificator}-${type}.webp`,
    import.meta.url
  ).href;
};
