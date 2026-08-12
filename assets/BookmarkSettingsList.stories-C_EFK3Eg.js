import{a7 as t}from"./iframe-BOq385O8.js";import{B as a,u as n}from"./useBookmarks-D7LMgiFh.js";import{B as d}from"./BookmarkModal-I3HAvKQn.js";import{L as c}from"./Layout-wudQ00uA.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-RUc5K2KC.js";import"./BookmarkSettingsItem-H1eWnlTH.js";import"./QueryLabel-26WLPKAT.js";import"./Plus-7pPCm0cp.js";import"./Heading-BGbBHiZX.js";import"./useHighlightedText-COTrDIB8.js";import"./SettingsItemBase-C9i7Dtoh.js";import"./ItemMedia-BFjKYKIC.js";import"./Avatar-DGnXzkTF.js";import"./AvatarGroup-C-pwgfnB.js";import"./ChevronUp-DtZBQ8_H.js";import"./ChevronDown-ByPuuZmk.js";import"./ChevronRight-8gth-Lkl.js";import"./ItemBase-D0RDacFK.js";import"./ItemLink-CYEiKVLs.js";import"./ItemControls-qKJDjHzO.js";import"./Badge-IhlpDjWl.js";import"./Tooltip-HwSyglqV.js";import"./Typography-DYb-ep--.js";import"./MagnifyingGlass-DLwuof1g.js";import"./ContextMenu-66ekmVcw.js";import"./useDropdownMenuController-Bc426jVC.js";import"./Dropdown-B3R21JXo.js";import"./SearchField-1cIkQLXt.js";import"./FieldBase-SENAbJS5.js";import"./Field-BAObIoZk.js";import"./Label-CJalMe_4.js";import"./Input-B8j-6nyc.js";import"./MenuListItem-C3dH633T.js";import"./MenuListDivider-DW1VkhOq.js";import"./MenuListHeading-B04brtcm.js";import"./MenuItem-C887Ld9X.js";import"./Checkmark-BfJs351m.js";import"./ItemLabel-32-F56Tw.js";import"./InformationSquare-ChpInVUG.js";import"./MenuElipsisHorizontal-Dl29S16F.js";import"./Pencil-DKdqqxEe.js";import"./Trash-CZ2Z9NgZ.js";import"./SettingsModal-BFCJlhuD.js";import"./ModalBody-CnCSIXjS.js";import"./Section-B7vrx1o8.js";import"./Flex-CyZuoM67.js";import"./ButtonGroup-D8WIpAHE.js";import"./ButtonIcon-By9qcYwT.js";import"./ButtonLabel-BXEtCYpU.js";import"./TextField-CqnZ-ScL.js";import"./SkipLink-B8bToWK4.js";import"./Banner-C6NPmyVy.js";import"./GlobalHeader-DQ-2Yj6f.js";import"./useIsDesktop-BmRCZ7jt.js";import"./GlobalAccountButton-a3opwitw.js";import"./Enter-C9D2pmVO.js";import"./GlobalMenuButton-D2eY6o_d.js";import"./MenuHamburger-5u_HMvvr.js";import"./AccountSelector-S6whGXp2.js";import"./Switch-kVfS8bk3.js";import"./AccountMenu-TCts2bcC.js";import"./GlobalMenu-CUwxN7Bm.js";import"./ArrowUndo-BRAjq8UN.js";import"./Globe-D6RnMHjZ.js";import"./BreadcrumbsLink-D9VGLC8K.js";import"./ArrowRight-DwCygRAD.js";import"./Footer-BgqROVlF.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
