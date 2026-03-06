import { ac_types } from "../../data/AcData";
import { redirect } from "next/navigation";

export default function ServicesPage() {
  // Redirect to default AC type (first one)
  const defaultAc = ac_types[0];
  const acSlug = defaultAc.name.toLowerCase().replace(/\s+/g, "-");

  redirect(`/services/${acSlug}`);
}
