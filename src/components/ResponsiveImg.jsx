const ResponsiveImg = ({ sources, sizes, alt, src, ...props }) => {
  return (
    <picture {...props}>
      {sources.map((source, index) => (
        <source media={sizes[index]} srcSet={source} key={index} />
      ))}
      <img src={src} alt={alt} />
    </picture>
  );
};

export default ResponsiveImg;
