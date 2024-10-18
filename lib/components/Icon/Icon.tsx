import React from "react";
import {
  // chevron
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,

  // arrows
  ArrowRedoIcon,
  ArrowLeftIcon,
  ArrowRightIcon,

  // plus, minus
  PlusIcon,
  MinusIcon,

  // menu
  MenuElipsisHorizontalIcon,
  MenuGridIcon,

  // categories
  TruckIcon,
  HospitalIcon,
  TeddyBearIcon,
  XMarkIcon,
  PaperclipIcon,

  // padloc
  PadlockLockedIcon,
  PadlockUnlockedIcon,

  // eye
  EyeIcon,
  EyeClosedIcon,

  // clock
  ClockDashedIcon,
  ClockIcon,

  // inbox
  InboxIcon,
  InboxFillIcon,
  DocPencilIcon,
  DocPencilFillIcon,
  FileCheckmarkIcon,
  FileCheckmarkFillIcon,
  ArchiveIcon,
  ArchiveFillIcon,
  TrashIcon,
  TrashFillIcon,

  // checkmark
  CheckmarkIcon,

  // file
  FileIcon,

  // bookmark
  BookmarkIcon,
  BookmarkFillIcon,
} from "@navikt/aksel-icons";

const icons = {
  checkmark: <CheckmarkIcon />,

  // plus
  plus: <PlusIcon />,
  minus: <MinusIcon />,

  // arrows
  "arrow-redo": <ArrowRedoIcon />,
  "arrow-left": <ArrowLeftIcon />,
  "arrow-right": <ArrowRightIcon />,
  "padlock-locked": <PadlockLockedIcon />,
  "padlock-unlocked": <PadlockUnlockedIcon />,

  // meta
  clock: <ClockIcon />,
  "clock-dashed": <ClockDashedIcon />,
  paperclip: <PaperclipIcon />,
  eye: <EyeIcon />,
  "eye-closed": <EyeClosedIcon />,

  // x-mark
  "x-mark": <XMarkIcon />,

  // chevron
  "chevron-left": <ChevronLeftIcon />,
  "chevron-right": <ChevronRightIcon />,
  "chevron-down": <ChevronDownIcon />,
  "chevron-up": <ChevronUpIcon />,
  "chevron-up-down": <ChevronUpDownIcon />,

  // menu
  "menu-grid": <MenuGridIcon />,
  "menu-ellipsis": <MenuElipsisHorizontalIcon />,

  // document
  file: <FileIcon />,

  // categories
  truck: <TruckIcon />,
  hospital: <HospitalIcon />,
  "teddy-bear": <TeddyBearIcon />,

  // inbox
  inbox: {
    outline: <InboxIcon />,
    solid: <InboxFillIcon />,
  },
  "doc-pencil": {
    outline: <DocPencilIcon />,
    solid: <DocPencilFillIcon />,
  },
  "file-checkmark": {
    outline: <FileCheckmarkIcon />,
    solid: <FileCheckmarkFillIcon />,
  },
  archive: {
    outline: <ArchiveIcon />,
    solid: <ArchiveFillIcon />,
  },
  trash: {
    outline: <TrashIcon />,
    solid: <TrashFillIcon />,
  },
  bookmark: {
    outline: <BookmarkIcon />,
    solid: <BookmarkFillIcon />,
  },
};

import { SvgIcon } from "./SvgIcon";
export type IconVariant = "solid" | "outline";

interface IconProps {
  name: string;
  variant?: IconVariant;
  className?: string;
  width: string;
  height: string;
}

export const Icon = ({
  name,
  variant = "outline",
  className,
  width = "1em",
  height = "1em",
}: IconProps) => {
  let svgIcon;

  if (icons[name]) {
    if (variant && icons[name][variant]) {
      svgIcon = icons[name][variant];
    } else if (icons[name]) {
      svgIcon = icons[name];
    }
  } else if (name) {
    return <span>{name}</span>;
  }

  return (
    <SvgIcon
      svgIconComponent={svgIcon}
      width={width}
      height={height}
      className={className}
    />
  );
};
