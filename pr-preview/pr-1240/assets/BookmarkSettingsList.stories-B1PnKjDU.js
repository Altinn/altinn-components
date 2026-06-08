import{a7 as t}from"./iframe-BtrieXtc.js";import{B as a,u as n}from"./useBookmarks-BAa81cTX.js";import{B as d}from"./BookmarkModal-CexpIG4i.js";import{L as c}from"./Layout-g3w_5Goj.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BNfzuibe.js";import"./BookmarkSettingsItem-DhaGhJ0x.js";import"./QueryLabel-DOFYZ5m_.js";import"./Plus-AauV6il6.js";import"./Heading-CdtnAJEW.js";import"./useHighlightedText-B6dVubhR.js";import"./SettingsItemBase-DWJ69Eh4.js";import"./ItemMedia-eBYq579p.js";import"./Avatar-CpJVuKGv.js";import"./AvatarGroup-B_fE5muE.js";import"./ChevronUp-ByxPUPOK.js";import"./ChevronDown-BfacC3TQ.js";import"./ChevronRight-DjbS-LPA.js";import"./ItemBase-BOh1wieW.js";import"./ItemLink-jSdmZiom.js";import"./ItemControls-DyiOoqOz.js";import"./Badge-BaL1X3jx.js";import"./Tooltip-CavTLnec.js";import"./Typography-BRa08Jyj.js";import"./MagnifyingGlass-C5aguymI.js";import"./ContextMenu-D3dKMSB7.js";import"./useDropdownMenuController-DeNWB_nX.js";import"./Dropdown-CPgwwZJ7.js";import"./SearchField-Du6Gz1k6.js";import"./FieldBase-CTDBNJ5K.js";import"./Field-D8_JVLdM.js";import"./Label-ERyazbFa.js";import"./Input-BbNTIeCv.js";import"./MenuListItem-BMqPUKCV.js";import"./MenuListHeading-D0-5HT2_.js";import"./MenuItem-CHl6gjJ7.js";import"./Checkmark-W3qwARKA.js";import"./ItemLabel-5cZaNnaj.js";import"./index-DyGDkSgg.js";import"./InformationSquare-BnFcng2B.js";import"./MenuElipsisHorizontal-26vaDD2T.js";import"./Pencil-xpNMExtu.js";import"./Trash-CK3701XQ.js";import"./SettingsModal-BH3rW1aX.js";import"./ModalBody-B4Te2i-O.js";import"./Section-UNmwoB7j.js";import"./Flex-Dld0WRRq.js";import"./ButtonGroup-CVtevVNY.js";import"./ButtonIcon-nvXcIoKP.js";import"./ButtonLabel-CyEgs9OW.js";import"./TextField-DM_urZ6l.js";import"./SkipLink-WSt9bEva.js";import"./Banner-BuwvPftE.js";import"./GlobalHeader-DNu-_WvX.js";import"./useIsDesktop-CHsg4d9V.js";import"./GlobalAccountButton-CULHmsvu.js";import"./Enter-DOAWNqFj.js";import"./GlobalMenuButton-fnhEuXTm.js";import"./MenuHamburger-INT75Sb9.js";import"./AccountSelector-CMxxOwzk.js";import"./Switch-BjdFyd00.js";import"./AccountMenu-lnvUR6rC.js";import"./GlobalMenu-zkrYnrbV.js";import"./ArrowUndo-DhKnKyUU.js";import"./Globe-o9O-O-tZ.js";import"./BreadcrumbsLink-Dabr0LDg.js";import"./ArrowRight-C4F-KsN1.js";import"./Footer-B70UoNBF.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
