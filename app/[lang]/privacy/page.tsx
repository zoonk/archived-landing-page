import { LanguageParams } from "@/types";
import PrivacyPolicyEN from "./en";
import PrivacyPolicyPT from "./pt";

interface ContactPageProps {
  params: LanguageParams;
}

export default function PrivacyPolicy({ params }: ContactPageProps) {
  if (params.lang == "en") return <PrivacyPolicyEN />;
  if (params.lang == "pt") return <PrivacyPolicyPT />;
}
