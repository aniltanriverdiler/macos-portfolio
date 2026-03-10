import type { Location } from "#types";

type Props = { location: Location };

export default function Folder({ location }: Props) {
  return <div className="p-4">Folder: {location.name}</div>;
}