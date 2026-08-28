import{a7 as t}from"./iframe-C9sF4CIH.js";import{B as a,u as n}from"./useBookmarks-BhzQzYbt.js";import{B as d}from"./BookmarkModal-BWxATIUD.js";import{L as c}from"./Layout-DbTMO45R.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BFGedA5y.js";import"./BookmarkSettingsItem-CO_noOgU.js";import"./QueryLabel-BRnURNuR.js";import"./Plus-t80sr0p5.js";import"./Heading-CN6nglwQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./SettingsItemBase-kU9_c0w6.js";import"./ItemMedia-Ck6acBMI.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./ChevronUp-Bw8O-5uv.js";import"./ChevronDown-DNNZgNQx.js";import"./ChevronRight-BzqVHEpk.js";import"./ItemBase-CbO6Ng8R.js";import"./ItemLink-LcJuXaju.js";import"./ItemControls-BU12ltKZ.js";import"./Badge-dpJAfWyX.js";import"./Tooltip-hEd8MeM6.js";import"./Typography-BQsARAdQ.js";import"./MagnifyingGlass-BaBs8vmN.js";import"./ContextMenu-ZXotIdMM.js";import"./useDropdownMenuController-D4Y6GTjn.js";import"./Dropdown-Bt-2pNLb.js";import"./SearchField-C_Ji_EMe.js";import"./FieldBase-BZH1Lr7P.js";import"./Field-D40vPUUg.js";import"./Label-BQs4ZavD.js";import"./Input-DZS0C5P8.js";import"./MenuListItem-C9rtWM2n.js";import"./MenuListDivider-D0Dk3XM8.js";import"./MenuListHeading-CQYtGjFy.js";import"./MenuItem-DU1kbbfo.js";import"./Checkmark-CL2jgLCm.js";import"./ItemLabel-Cb55IGYj.js";import"./InformationSquare-BmRwhtkQ.js";import"./MenuElipsisHorizontal-BiPwQStA.js";import"./Pencil-Dbe-ud83.js";import"./Trash-DtuzqxyC.js";import"./SettingsModal-Bifh5L4V.js";import"./ModalBody-CtBEkc_A.js";import"./Section-Ca3vkTbM.js";import"./Flex-DnMHh9vb.js";import"./ButtonGroup-D3X_1KmS.js";import"./ButtonIcon-D2wF1g1O.js";import"./ButtonLabel-CEN1m5GJ.js";import"./TextField-CXuTUxrC.js";import"./SkipLink-sR8eN8KA.js";import"./CookieBanner-DRbuFaIU.js";import"./Banner-F9jAQmTH.js";import"./GlobalHeader-9TD58EFb.js";import"./useIsDesktop-Bs_0tRsF.js";import"./GlobalAccountButton-DCNO2xux.js";import"./Enter-DjTqwWlq.js";import"./GlobalMenuButton-DzKVMMYx.js";import"./MenuHamburger-DQqXp455.js";import"./AccountSelector-DPq9TyaQ.js";import"./Switch-DTc2sA6x.js";import"./AccountMenu-KMM-WYh2.js";import"./GlobalMenu-BZdo7Lgm.js";import"./ArrowUndo-BCB2Wpm6.js";import"./Globe-B-4iZdGi.js";import"./BreadcrumbsLink-B_5wbeSS.js";import"./ArrowRight-C_e3H3Ut.js";import"./Footer-D0TOqRi0.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
