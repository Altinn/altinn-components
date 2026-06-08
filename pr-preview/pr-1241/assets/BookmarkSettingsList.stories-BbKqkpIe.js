import{a7 as t}from"./iframe-KbHODQgb.js";import{B as a,u as n}from"./useBookmarks-OQLJOzVm.js";import{B as d}from"./BookmarkModal-DVPqglO8.js";import{L as c}from"./Layout-zPH4fyD9.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-veT1adJt.js";import"./BookmarkSettingsItem-Croif9Wd.js";import"./QueryLabel-Dl9509cP.js";import"./Plus-DWfYvBf0.js";import"./Heading-jxV4Y0yK.js";import"./useHighlightedText-uGguOCwY.js";import"./SettingsItemBase-DG21eKyz.js";import"./ItemMedia-vwuqAhM8.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./ChevronUp-DjGQTIt5.js";import"./ChevronDown-DDGA5gfO.js";import"./ChevronRight-wplb_UH2.js";import"./ItemBase-CTCHDdfF.js";import"./ItemLink-NIMU7q5y.js";import"./ItemControls-BYcmr1lT.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./Typography-C9K693Jo.js";import"./MagnifyingGlass-Db52e0Xc.js";import"./ContextMenu-DeNRHsXv.js";import"./useDropdownMenuController-C2TGyR2O.js";import"./Dropdown-2MkuZ1sA.js";import"./SearchField-BOprvfZ0.js";import"./FieldBase-Vfg8qV6A.js";import"./Field-B8zKs9Bz.js";import"./Label-C3jcdxRS.js";import"./Input-DwLHHyGz.js";import"./MenuListItem-D3mLd2IU.js";import"./MenuListHeading-BPNZa_yh.js";import"./MenuItem-BP2R6FfU.js";import"./Checkmark-CO83o23q.js";import"./ItemLabel-BW6ywGNt.js";import"./index-DNTFCYRR.js";import"./InformationSquare-DCyKofJQ.js";import"./MenuElipsisHorizontal-CV5BoB6D.js";import"./Pencil-BxnGjHRb.js";import"./Trash-Af7bx1Lq.js";import"./SettingsModal-_8PcUVyb.js";import"./ModalBody-BLUO0OyV.js";import"./Section-BQYKGPm8.js";import"./Flex-DJYB_We1.js";import"./ButtonGroup-D1R72gzy.js";import"./ButtonIcon-J3Dvocxh.js";import"./ButtonLabel-S0TUviQT.js";import"./TextField-BjErri7K.js";import"./SkipLink-Blj0zeEn.js";import"./Banner-CuUdzJys.js";import"./GlobalHeader-BpANGVsD.js";import"./useIsDesktop-vNPzihpg.js";import"./GlobalAccountButton-DaatQQtc.js";import"./Enter-CpZn4cxl.js";import"./GlobalMenuButton-XZi3ovFK.js";import"./MenuHamburger-CMlucM-D.js";import"./AccountSelector-NahkJjx4.js";import"./Switch-ym8FDDIw.js";import"./AccountMenu-DeYCZtkw.js";import"./GlobalMenu-BdpiVZy2.js";import"./ArrowUndo-Czf3yvOi.js";import"./Globe-Bqq8HH8f.js";import"./BreadcrumbsLink-Dur88p81.js";import"./ArrowRight-B3wkdOFg.js";import"./Footer-okdGhFgd.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const yo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,s as GroupedBookmarksList,yo as __namedExportsOrder,ho as default};
