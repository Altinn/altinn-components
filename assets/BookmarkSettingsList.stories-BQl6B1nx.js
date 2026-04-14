import{j as t}from"./iframe-gnB9S1An.js";import{B as a,u as n}from"./useBookmarks-DSrBsVJL.js";import{L as c}from"./Layout-rUp8BQpM.js";import{B as d}from"./BookmarkModal-BLDCDalT.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-Dhq417nc.js";import"./index-C4jL9APw.js";import"./SettingsSection-DIVzSU0e.js";import"./Section-0HIHqGS0.js";import"./BookmarkSettingsItem-jOTmajeT.js";import"./QueryLabel-DvLVyde7.js";import"./Plus-p8k1KwpY.js";import"./useId-B9nFNwMW.js";import"./Heading-uoQ4E1Gx.js";import"./useHighlightedText-BAP0b8E_.js";import"./Skeleton-_K166C5F.js";import"./SettingsItemBase-BULdEXiL.js";import"./ChevronRight-CmdeYhPT.js";import"./ItemLink-CC8guiT_.js";import"./ItemMedia-B78XDhUs.js";import"./XMark-F0lxfgWB.js";import"./Avatar-otyGg43a.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Icon-CL2c9__7.js";import"./ItemControls-0hV_6Ao9.js";import"./Badge-D2lHyQ6d.js";import"./MagnifyingGlass-LdJ8MC-9.js";import"./ContextMenu-lyfY76oB.js";import"./useDropdownMenuController-4NcEcuey.js";import"./Dropdown-C0Ynf067.js";import"./Button-Cf61aO7p.js";import"./button-CCpZP8rq.js";import"./use-merge-refs-W_EFMAqs.js";import"./lite-DaUVFjkg.js";import"./Tooltip-D-gwYEuh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-D2vAb7CX.js";import"./SearchField-CW2AroNW.js";import"./FieldBase-BbR80WA9.js";import"./Typography-uy1P5_7q.js";import"./Label-Bqs-eWs1.js";import"./index-DXeuHUJe.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./MenuListItem-Cw2vF4tQ.js";import"./MenuListHeading-BN0bXZhY.js";import"./MenuItem-DVF0RjTG.js";import"./Checkmark-D8iTH_Nd.js";import"./useMenu-DEo-iQ-R.js";import"./InformationSquare-CRWfnij7.js";import"./List-CTy1OnCl.js";import"./ListItem-9SoGvFex.js";import"./ChevronUp-C8nzXkEI.js";import"./ChevronDown-CiJH-Uj-.js";import"./Divider--EGssROD.js";import"./Pencil-C_J2dT-u.js";import"./Trash-R2DUJthc.js";import"./SkipLink-D9-5guCy.js";import"./GlobalHeader-CrjZ5OHf.js";import"./useIsDesktop-Lh8WydK5.js";import"./GlobalAccountButton-BjYNX_yf.js";import"./Enter-C2tqY5HT.js";import"./GlobalMenuButton-Ct7_26AU.js";import"./MenuHamburger-UwfHPvv0.js";import"./AccountSelector--vcEOQAz.js";import"./heading-BgozAnZI.js";import"./AccountMenu-D_cuAzQ4.js";import"./Switch-CXAJ8NCk.js";import"./GlobalMenu-D7zsAZ2X.js";import"./ArrowUndo-Bzf3zYG1.js";import"./Globe-CrPWgLEB.js";import"./LocaleSwitcher-DcxhC9YW.js";import"./DigdirLogomark-MAkI9ini.js";import"./SearchbarField-B-z4d2NM.js";import"./AutocompleteItem-BMCwRYTe.js";import"./DropdownBase-o4XK_oxD.js";import"./useClickOutside-Dg3BIqlh.js";import"./GlobalMenuButton-CQNQ68Sj.js";import"./PadlockLocked-DZtmii2A.js";import"./ButtonLabel-Bfm3OKtX.js";import"./ButtonIcon-DXQ5NF_g.js";import"./BreadcrumbsLink-Bz9XwIgo.js";import"./ArrowRight-hwUAmRVG.js";import"./Footer-C_w18oPF.js";import"./SettingsModal-D4YcMiZm.js";import"./ModalBase-Bh7XTBfE.js";import"./ModalBody-DX9UYdaL.js";import"./ButtonGroup-b_-H3sds.js";import"./TextField-CP6RlAXf.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
