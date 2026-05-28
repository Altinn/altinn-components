import{p as t}from"./iframe-DrMVe4hJ.js";import{B as a,u as n}from"./useBookmarks-9VJpw9Sw.js";import{B as d}from"./BookmarkModal-zy-7blk1.js";import{L as c}from"./Layout-CMusrhEd.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CrRt-E4f.js";import"./BookmarkSettingsItem-DuMeil2c.js";import"./QueryLabel-DcDaMQuD.js";import"./Plus-CPTNbqFv.js";import"./useId-CwrI0QJg.js";import"./Heading-DYwrq57L.js";import"./index-B2LUQ97G.js";import"./useHighlightedText-BA3QT9FH.js";import"./Skeleton-BKl0bJYN.js";import"./SettingsItemBase-B5pF_5of.js";import"./ItemMedia-B9-jRKLO.js";import"./XMark-BXMpu0Gf.js";import"./Avatar-toOOZ7nf.js";import"./AvatarGroup-CVynWGO_.js";import"./Icon-CK8FcAiF.js";import"./ChevronUp-CD8uiaYc.js";import"./ChevronDown--vsRLj1W.js";import"./ChevronRight-u16zgCRT.js";import"./ItemBase-DuWKD7l0.js";import"./ItemLink-Cz_W1z7X.js";import"./ItemControls-ztKmX_ZB.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./tooltip-BY1BnveL.js";import"./Typography-BZD6V0ik.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./ContextMenu-Dtj8L1E_.js";import"./useDropdownMenuController-BAGvidc8.js";import"./Dropdown-CG27uion.js";import"./Button-B40GVZAo.js";import"./SearchField-BnuJ-svS.js";import"./FieldBase-C4Wnopmd.js";import"./Label-QaOAiYFD.js";import"./Input-kqR7j7M6.js";import"./MenuListItem-D8f5vRSf.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./MenuItem-B27UidAs.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./index-j3-eoKUd.js";import"./InformationSquare-J3q8zJp8.js";import"./MenuElipsisHorizontal-BLWR8eqI.js";import"./Pencil-DSvwE8vz.js";import"./Trash-DgVztnIf.js";import"./SettingsModal-C32hC9f4.js";import"./ModalBody-ClYSa-ii.js";import"./Section-BOFb_opG.js";import"./Flex-Bv-_adYq.js";import"./ButtonGroup-Bxqmt3uG.js";import"./ButtonIcon-DJjLAXS2.js";import"./ButtonLabel-s3GO9UyL.js";import"./TextField-DfaPQYZk.js";import"./SkipLink-BX0Sk14S.js";import"./Banner-CYJ-GFc3.js";import"./GlobalHeader-HqAOspum.js";import"./useIsDesktop-BPcHKUeF.js";import"./GlobalAccountButton-D-pGviYt.js";import"./Enter-CSMdGEsW.js";import"./GlobalMenuButton-CSr5zULA.js";import"./MenuHamburger-DFEV7Ips.js";import"./AccountSelector-FLYfbKiC.js";import"./Switch-Dnru9sKh.js";import"./AccountMenu-DaOWAbw-.js";import"./GlobalMenu-BdhZCIDm.js";import"./ArrowUndo-DXCdgahn.js";import"./Globe-BHi7RQK5.js";import"./BreadcrumbsLink-Ct-YnSsW.js";import"./ArrowRight-T6aW628X.js";import"./Footer-Dv2u6hjp.js";const _o={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Oo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Oo as __namedExportsOrder,_o as default};
