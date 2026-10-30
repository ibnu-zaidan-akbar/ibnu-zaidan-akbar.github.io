declare module 'aos/dist/aos.css';

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}