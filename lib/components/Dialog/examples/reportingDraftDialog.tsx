import type { DialogProps } from "../";
import { reportingDialog } from "./reportingDialog";

export const reportingDraftDialog: DialogProps = {
  ...reportingDialog,
  status: {
    value: "draft",
    label: "Utkast",
  },
  timeline: {
    title: "1 utkast",
    items: [
      {
        updatedAt: "2024-11-27 10:24",
        updatedAtLabel: "27. november 2024 kl 10.24",
        summary: "Utkast opprettet",
        items: [
          {
            type: { value: "draft", label: "Utkast" },
            sender: {
              type: "person",
              name: "Ola Nordmann",
            },
            title: "Bedriftsdata",
            summary: "Bedriftsdata er levert.",
            attachments: {
              title: "1 vedlegg",
              items: [
                {
                  label: "Bedriftsdata.pdf",
                  href: "",
                },
              ],
            },
          },
        ],
      },
    ],
  },
};
