type Props = {
  children?: JSX.Element | JSX.Element[];
};
export default function PageContainer({ children }: Props) {
  return <div className="w-10/12 m-auto">{children}</div>;
}
