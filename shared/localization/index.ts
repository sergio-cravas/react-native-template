import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";

import en from "./languages/en";
import es from "./languages/es";

const i18n = new I18n({ en, es });

i18n.locale = getLocales()[0].languageCode ?? "en";
i18n.enableFallback = true;

export default i18n;
/** Use Example */
// console.log(i18n.t("welcome"));
