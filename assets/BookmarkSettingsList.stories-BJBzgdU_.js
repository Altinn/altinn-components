import{j as t}from"./iframe-BaUVsogD.js";import{B as a,u as n}from"./useBookmarks-BFVUyU6c.js";import{L as c}from"./Layout-B2xuVG-W.js";import{B as d}from"./BookmarkModal-Bpz3hwsf.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CpmusUMb.js";import"./index-lARy5TPT.js";import"./SettingsSection-BnJ_XCyz.js";import"./Section-HLTaZdun.js";import"./BookmarkSettingsItem-KfM0NT1j.js";import"./QueryLabel-BZ1orZMX.js";import"./Plus-CnR__6G5.js";import"./useId-D8i_et7Z.js";import"./Heading-Cdi1sqyd.js";import"./useHighlightedText-C23yE0pM.js";import"./Skeleton-yH6qNAEo.js";import"./SettingsItemBase-CNBW0M2i.js";import"./ListItem-C1RL14_r.js";import"./Button-mtd2C5dd.js";import"./button-BfXez8v8.js";import"./use-merge-refs-BV0MipOU.js";import"./lite-DaUVFjkg.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./XMark-vPSUBj6u.js";import"./Icon-7hKeNARf.js";import"./Avatar-u9iGVwtH.js";import"./AvatarGroup-DFVM-aUE.js";import"./Badge-DkZxiFUy.js";import"./ChevronUp-DSCWrjOr.js";import"./ChevronDown-C0GjOYlf.js";import"./ChevronRight-sVn034m6.js";import"./MagnifyingGlass-DyxA-WAG.js";import"./ContextMenu-Ckw6t3Jk.js";import"./useDropdownMenuController-u6nv9687.js";import"./Dropdown-5b9N8l_a.js";import"./Tooltip-WJW_Z0af.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DJIO2eGB.js";import"./SearchField-BG-HK4fX.js";import"./FieldBase-CZ-07bnd.js";import"./Typography-BHJ2EAGl.js";import"./Label-Cge6OnF8.js";import"./index-D4SJX6je.js";import"./MenuListItem-Bh_jPdY2.js";import"./MenuListHeading-B40v5QW5.js";import"./MenuItem-6c1J0YV3.js";import"./ItemMedia-BVGZtNsE.js";import"./Checkmark-DTahSgDV.js";import"./useMenu-DnkwvAkg.js";import"./InformationSquare-CDbyjiK5.js";import"./List-SYbm324s.js";import"./Divider-dQKXouHw.js";import"./Pencil-afEDwrUF.js";import"./Trash-idftN5YP.js";import"./SkipLink-DNgxeHhY.js";import"./GlobalHeader-dw3Fc2VD.js";import"./useIsDesktop-bZVgpMG6.js";import"./GlobalAccountButton-T1-kCGPI.js";import"./Enter-BaeKWQZx.js";import"./GlobalMenuButton-ChuceCIE.js";import"./MenuHamburger-Bwvpj7GR.js";import"./AccountSelector-BRwkIzsS.js";import"./heading-PzoCxHBq.js";import"./AccountMenu-BK8n904R.js";import"./Switch-Bw0DTPNN.js";import"./GlobalMenu-C9nv15sT.js";import"./ArrowUndo-COPXkqMS.js";import"./Globe-C6d7JK_Y.js";import"./LocaleSwitcher-BFvJ83Lz.js";import"./DigdirLogomark-DY8iQdlX.js";import"./SearchbarField-ChbW028z.js";import"./AutocompleteItem-Vz8Y6irN.js";import"./DropdownBase-WUZxZLfi.js";import"./useClickOutside-B3ExyGqZ.js";import"./GlobalMenuButton-8tKtNF6k.js";import"./PadlockLocked-z-4XvHII.js";import"./ButtonLabel-CiJQtdb9.js";import"./ButtonIcon-xWoyjfjp.js";import"./BreadcrumbsLink-GBGn74zr.js";import"./ArrowRight-Rknum4BW.js";import"./Footer-BH-u8XBX.js";import"./SettingsModal-igvAbhZ-.js";import"./ModalBase-AGLO-MzB.js";import"./ModalBody-DSVV4dpo.js";import"./ButtonGroup-1O4V6IzI.js";import"./TextField-CEvtf_Rw.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Vo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Vo as __namedExportsOrder,To as default};
