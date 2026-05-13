import{j as t}from"./iframe-DkQPO9ro.js";import{B as a,u as n}from"./useBookmarks-IRghSpKU.js";import{L as c}from"./Layout-C9wm3cxr.js";import{B as d}from"./BookmarkModal-DzAcslCP.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-BEq8PBRQ.js";import"./QueryLabel-C4uQfAVe.js";import"./Plus-DTlIM-KK.js";import"./useId-CwF4wxTL.js";import"./Heading-Otl-Ib-S.js";import"./index-BrTdOUlk.js";import"./useHighlightedText-BlkM7iRt.js";import"./Skeleton-8DklmnzK.js";import"./SettingsItemBase-okg423NT.js";import"./ChevronUp-1RXiKLsv.js";import"./ChevronDown-CbPk4DLa.js";import"./ChevronRight-Ddmldm4v.js";import"./ItemLink-z5fThoi9.js";import"./ItemMedia-CHWY5IG3.js";import"./XMark-5G2rqhrX.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./Icon-Dao4TSf9.js";import"./ItemControls-Czqw_jtP.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./Typography-cgJeIGtL.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./ContextMenu-Dd8TL9fD.js";import"./useDropdownMenuController-tv24Gc_I.js";import"./Dropdown-DDoGMqNi.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./MenuElipsisHorizontal-BJkqF5yI.js";import"./SearchField-BFSdJUV0.js";import"./FieldBase-BPqKon2e.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./MenuItem-BCrg9AvC.js";import"./Checkmark-JWLDNW8H.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./InformationSquare-DS3QJ89x.js";import"./Pencil-Asf3rVo6.js";import"./Trash-C8jSETfh.js";import"./SkipLink-E16yWgeI.js";import"./Banner-Br0WSxiA.js";import"./GlobalHeader-IcwxybF9.js";import"./useIsDesktop-Dz-OMeoK.js";import"./GlobalAccountButton-XS7oC2wJ.js";import"./Enter-YjTQHWom.js";import"./GlobalMenuButton-CSjLcU9z.js";import"./MenuHamburger-CDbgLMEh.js";import"./AccountSelector-CK0TFOGZ.js";import"./heading-Dzxt-Xj0.js";import"./AccountMenu-DFEyY2mN.js";import"./Switch-DagNs5eW.js";import"./GlobalMenu-DAnQblRj.js";import"./ArrowUndo-CchR6_Y_.js";import"./Globe-kuwFCIDb.js";import"./BreadcrumbsLink-BAgWVLB6.js";import"./ArrowRight-BoKSjLde.js";import"./Footer-Bh5XJ8H1.js";import"./SettingsModal-CIbtSnKL.js";import"./ModalBody-GvvO4sGF.js";import"./Section-DUH4Cyq_.js";import"./Flex-Cy28VffD.js";import"./ButtonGroup-3KQzrPQQ.js";import"./ButtonIcon-HEZ4yPr4.js";import"./ButtonLabel-teAu4cwf.js";import"./TextField-DUUYp28e.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ao=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ao as __namedExportsOrder,zo as default};
