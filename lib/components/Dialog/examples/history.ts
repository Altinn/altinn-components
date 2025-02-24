import { activityLogItems } from ".";

export const historyItems: DialogActivityProps[] = activityLogItems?.filter(
  (item) => item.type === "information" || item.transmissions
);
