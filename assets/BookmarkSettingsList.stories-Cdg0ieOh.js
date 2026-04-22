import{j as t}from"./iframe-C5YDQF8t.js";import{B as a,u as n}from"./useBookmarks-CJ2oI-WY.js";import{L as c}from"./Layout-BSGbHGwR.js";import{B as d}from"./BookmarkModal-drNYvbsJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-6suuLzFU.js";import"./index-Wv9BNi45.js";import"./SettingsSection-CrVOSZMb.js";import"./Section-Dr7qREfG.js";import"./BookmarkSettingsItem-9O9Ni9OI.js";import"./QueryLabel-dmaVmPOw.js";import"./Plus-Dly6Qmjb.js";import"./useId-D8_RB8wa.js";import"./Heading-DpfkgbSv.js";import"./useHighlightedText-n06FiY88.js";import"./Skeleton-Drx-E9Fo.js";import"./SettingsItemBase-CR7xFp4Y.js";import"./ChevronRight-N4TcqxLw.js";import"./ItemLink-BHq-nEBb.js";import"./ItemMedia-FRtQjDq_.js";import"./XMark-DdTqeOk-.js";import"./Avatar-BGjXXmrj.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Icon-CecLgcvt.js";import"./ItemControls-B4P5BjHw.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-C8sdFhVy.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-CEZChhW1.js";import"./ContextMenu-D457U-Bj.js";import"./useDropdownMenuController-BRCJdC3F.js";import"./Dropdown-r5WY9yG7.js";import"./Button-BZAGm3c0.js";import"./button-CCJ82TCy.js";import"./MenuElipsisHorizontal-DeUO5vCb.js";import"./SearchField-DhRNQpTW.js";import"./FieldBase-BeNWnE8F.js";import"./Typography-yp9Qf0rT.js";import"./Label-DtjEPZjV.js";import"./index-B1UWFYtY.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./MenuListItem-Dn26XcpH.js";import"./MenuListHeading-b0m4AzBM.js";import"./MenuItem-WQ9gCGs0.js";import"./Checkmark-B_9eKN07.js";import"./useMenu-BhI6CQre.js";import"./InformationSquare-BnjsTJI5.js";import"./List-Boa0b6al.js";import"./ListItem-Drd2VZlP.js";import"./ChevronUp-4JOxusLP.js";import"./ChevronDown-C8XWqM8H.js";import"./Divider-Dv1yq08v.js";import"./Pencil-DZR5nqW5.js";import"./Trash-D8RBkZPj.js";import"./SkipLink-DNOg7NHT.js";import"./GlobalHeader-CA-B7Xma.js";import"./useIsDesktop-CUL1litC.js";import"./GlobalAccountButton-DHI5w5T-.js";import"./Enter-CBf-22pX.js";import"./GlobalMenuButton-B5VTqUyx.js";import"./MenuHamburger-CzLGV6Fr.js";import"./AccountSelector-CZO_KYNg.js";import"./heading-C5g45Nor.js";import"./AccountMenu-C9TvoUjI.js";import"./Switch-CCPkcRPo.js";import"./GlobalMenu-CjWNltRl.js";import"./ArrowUndo-CoYWG19L.js";import"./Globe-hsiQLHF9.js";import"./LocaleSwitcher-CIgR89RS.js";import"./DigdirLogomark-DXwtxIrk.js";import"./SearchbarField-D7TJ6WRw.js";import"./AutocompleteItem-CrPMhRE0.js";import"./DropdownBase-ZZ0efeFO.js";import"./useClickOutside-DUMp00Li.js";import"./GlobalMenuButton-LO1OTDFH.js";import"./PadlockLocked-BITt1ywl.js";import"./ButtonLabel-CoTsOCoc.js";import"./ButtonIcon-DRcTjkMx.js";import"./BreadcrumbsLink-COCGco-V.js";import"./ArrowRight-xA-FdZ6J.js";import"./Footer-DmAh6056.js";import"./SettingsModal-BBU9uJSV.js";import"./ModalBase-CZBI8oQS.js";import"./ModalBody-C4j48ml-.js";import"./ButtonGroup-Z2Cev14m.js";import"./TextField-CFz75KxP.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <>
      <BookmarkSettingsList items={items} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  const groups = {
    '1': {
      title: 'Med tittel'
    },
    '2': {
      title: 'Uten tittel'
    }
  };
  return <>
      <BookmarkSettingsList items={items} groups={groups} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...m.parameters?.docs?.source}}};const Xo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Xo as __namedExportsOrder,Wo as default};
