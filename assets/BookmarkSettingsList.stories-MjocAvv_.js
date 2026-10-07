import{a7 as t}from"./iframe-CSiNS2_t.js";import{B as a,u as n}from"./useBookmarks-CWPHMZxb.js";import{B as d}from"./BookmarkModal-DZ7ornNu.js";import{L as c}from"./Layout-4MupU4k4.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DQhM8YBj.js";import"./BookmarkSettingsItem-CUjfX3Ov.js";import"./QueryLabel-D7Xpm9Cm.js";import"./Plus-BIfsBTTp.js";import"./Heading-BPvQUGVy.js";import"./useHighlightedText-Cb4_TuQn.js";import"./SettingsItemBase-CWcxhBk7.js";import"./ItemMedia-DGv-wSpo.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./ChevronUp-DkTPAx2G.js";import"./ChevronDown-Cyaskzrl.js";import"./ChevronRight-dChxZgZA.js";import"./ItemBase-DDHhwE3C.js";import"./ItemLink-A7alqNSc.js";import"./ItemControls-Cqj4-f4C.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./Typography-tfUHPeKu.js";import"./MagnifyingGlass-L16wMwR7.js";import"./ContextMenu-DaihOZ4w.js";import"./useDropdownMenuController-BLzkNBR-.js";import"./Dropdown-DvIMOq-U.js";import"./SearchField-404uhg7e.js";import"./FieldBase-rPqTSW37.js";import"./Field-dYgOH5Kq.js";import"./Label-p2f33G11.js";import"./Input-BUqwhKEV.js";import"./MenuListItem-BphPPZ1-.js";import"./MenuListDivider-DaQR_cA_.js";import"./MenuListHeading-oP2DliYX.js";import"./MenuItem-EWHoKTTM.js";import"./Checkmark-BXugcN3r.js";import"./ItemLabel-C0x86jDQ.js";import"./InformationSquare-BVqQ7zdO.js";import"./MenuElipsisHorizontal-BPxxMSx9.js";import"./Pencil-qyLug8Jf.js";import"./Trash-BcSvu00l.js";import"./SettingsModal-CPFHCYMo.js";import"./ModalBody-DOzVYGFR.js";import"./Section-iGjVnzYd.js";import"./Flex-DavaSday.js";import"./ButtonGroup-D1fEqQ1N.js";import"./ButtonIcon-ZdtxxxtZ.js";import"./ButtonLabel-BCsBDwVV.js";import"./TextField-DL42MY-m.js";import"./SkipLink-D3iJ7k61.js";import"./CookieBanner-CKWZWaYc.js";import"./Banner-C2EalFdP.js";import"./GlobalHeader-Y06F2DwT.js";import"./useIsDesktop-BcvSdZS0.js";import"./GlobalAccountButton-DmQDN0wu.js";import"./Enter-BYyrWS8h.js";import"./GlobalMenuButton-QBNdcfTe.js";import"./MenuHamburger-BIDisRNk.js";import"./AccountSelector-BGy-SGuD.js";import"./Switch-DY1HilNX.js";import"./AccountMenu-BhWC5WRF.js";import"./GlobalMenu-BRJU6Z52.js";import"./ArrowUndo-BadzpM_H.js";import"./Globe-i9VwEU5k.js";import"./BreadcrumbsLink-Cu-H3rN3.js";import"./ArrowRight-Dz8Z6Xxm.js";import"./Footer-CLRP89pe.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
