export function generateAccounts(count = 10000) {
  const groups = ["primary", "favourites", "secondary", "groups"];
  const types: Array<"person" | "company"> = ["person", "company"];
  const names = [
    "Mathias Dyngeland",
    "Bergen bar",
    "Sportsklubben Brann",
    "Keeperhansker AS",
    "Stadion drift AS",
    "Landslaget",
  ];

  return Array.from({ length: count }, (_, i) => {
    const type = types[Math.floor(Math.random() * types.length)];
    const groupId = groups[Math.floor(Math.random() * groups.length)];
    const name = names[Math.floor(Math.random() * names.length)];

    const account = {
      id: `party:account${i}`,
      groupId,
      type,
      name,
      badge: {
        label: `${Math.floor(Math.random() * 50) + 1}`,
      },
      alertBadge: { label: `${Math.floor(Math.random() * 10) + 1} uleste` },
      accountNames: [""],
      selected: false,
    };

    if (Math.random() > 0.7) {
      account.alertBadge = {
        label: `${Math.floor(Math.random() * 10) + 1} uleste`,
      };
    }

    if (groupId === "groups") {
      account.accountNames = names.slice(
        0,
        Math.floor(Math.random() * names.length) + 1
      );
      account.selected = false;
    }

    return account;
  });
}
