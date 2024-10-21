import {
  ArchiveFillIcon,
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRedoIcon,
  ArrowRightIcon,
  BookmarkFillIcon,
  BookmarkIcon,
  CheckmarkIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  ClockDashedIcon,
  ClockIcon,
  CogIcon,
  DocPencilFillIcon,
  DocPencilIcon,
  EyeClosedIcon,
  EyeIcon,
  FileCheckmarkFillIcon,
  FileCheckmarkIcon,
  FileIcon,
  HospitalIcon,
  InboxFillIcon,
  InboxIcon,
  MenuElipsisHorizontalIcon,
  MenuGridIcon,
  MinusIcon,
  PersonGroupIcon,
  PadlockLockedIcon,
  PadlockUnlockedIcon,
  PaperclipIcon,
  PlusIcon,
  TeddyBearIcon,
  TrashFillIcon,
  TrashIcon,
  TruckIcon,
  XMarkIcon,
} from "@navikt/aksel-icons";

interface IconsMap {
  [key: string]: JSX.Element | { outline: JSX.Element; solid: JSX.Element };
}

export const iconsMap: IconsMap = {
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

  // settings

  cog: <CogIcon />,
  "person-group": <PersonGroupIcon />,

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
