import{j as t}from"./iframe-CdkbiINU.js";import{B as a,u as n}from"./useBookmarks-CZbOEUO9.js";import{L as c}from"./Layout-LN12fKls.js";import{B as d}from"./BookmarkModal-Dtpdl9ww.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-ImyOC9dQ.js";import"./QueryLabel-CY4lm9Jd.js";import"./Plus-BlZ2V0ro.js";import"./useId-BBNwfwR-.js";import"./Heading-pV_B_Yzg.js";import"./index-ClUlC5r_.js";import"./useHighlightedText-Z8eL_Nst.js";import"./Skeleton-DNrLKFK9.js";import"./SettingsItemBase-zrEv8Gr_.js";import"./ChevronUp-zAhIBGoC.js";import"./ChevronDown-DqPtLl_G.js";import"./ChevronRight-WcqCaCSB.js";import"./ItemLink-uRj7Y6jT.js";import"./ItemMedia-Mj1KUH0F.js";import"./XMark-CXTea0I2.js";import"./Avatar-Dqj4y4ce.js";import"./AvatarGroup-XhgZMwS_.js";import"./Icon-Cn1mWE7M.js";import"./ItemControls-2WNlOUKw.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./tooltip-ClrKYCC2.js";import"./Typography-CbNgqrog.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./ContextMenu-DKrW1DIT.js";import"./useDropdownMenuController-DY23hdKX.js";import"./Dropdown-B3ZWUXYU.js";import"./Button-DbqBa2Ra.js";import"./MenuElipsisHorizontal-Drry6q8X.js";import"./SearchField-D9zkHyRI.js";import"./FieldBase-CADFK9ds.js";import"./Label-DOiiUdXJ.js";import"./Input-CXgAq3E9.js";import"./MenuListItem-CwD3vAur.js";import"./MenuListHeading-DRaOclWG.js";import"./MenuItem-DuLXc_4R.js";import"./Checkmark-B8HStk1Z.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";import"./InformationSquare-lXhFqiHS.js";import"./Pencil-D7lUFaES.js";import"./Trash-D4pY1Rc-.js";import"./SkipLink-CML0sBUI.js";import"./Banner-BBhGqGPx.js";import"./GlobalHeader-Drip1D80.js";import"./useIsDesktop-BeFJPxgu.js";import"./GlobalAccountButton-PpS-HXEW.js";import"./Enter-DES-VDJ8.js";import"./GlobalMenuButton-B1CAeQET.js";import"./MenuHamburger-CYCqXYse.js";import"./AccountSelector-C2kSlN_v.js";import"./AccountMenu-eWReyBQ6.js";import"./Switch-Cw7IuUMn.js";import"./GlobalMenu-C_l3UvsO.js";import"./ArrowUndo-C2yeCY3h.js";import"./Globe-fe3HaoO0.js";import"./BreadcrumbsLink-tOvioorb.js";import"./ArrowRight-D3UAGOAj.js";import"./Footer-CUB00Xkk.js";import"./SettingsModal-p1UGJMFY.js";import"./ModalBody-B1FGT2pR.js";import"./Section-CxpgG4VY.js";import"./Flex-B60SO79o.js";import"./ButtonGroup-rFZEcV2R.js";import"./ButtonIcon-CyqeVLbn.js";import"./ButtonLabel-BTmVkbIz.js";import"./TextField-B9cNHav0.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
