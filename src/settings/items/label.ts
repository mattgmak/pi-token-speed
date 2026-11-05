import { ScalarSettingsItem } from "./scalar";

export const DEFAULT_LABEL = "TPS:";

/**
 * Free-form status text shown after the icon.
 *
 * An empty value drops the text, so the status renders the icon alone.
 */
export class LabelSettingsItem extends ScalarSettingsItem<string> {
  constructor() {
    super({
      id: "label",
      label: "Status label",
      description: "Text shown after the icon (empty renders the icon alone)",
      default: DEFAULT_LABEL,
    });
  }
}
