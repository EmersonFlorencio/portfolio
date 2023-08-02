
export default function Button({children, component: Component, ...resProps}) {
  return (
    <Component {...resProps}>{children}</Component>
  );
}
