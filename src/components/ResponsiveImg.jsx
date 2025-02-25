const ResponsiveImg = ({ sources, sizes, alt, src, ...props }) => {
  return (
    <picture {...props}>
      <source media={sizes.small} srcSet={sources.small} />
      <source media={sizes.large} srcSet={sources.large} />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default ResponsiveImg;
