const ResponsiveImg = ({ sources, sizes, ...props }) => {
  return <img srcSet={sources} sizes={sizes} {...props} />;
};

export default ResponsiveImg;
