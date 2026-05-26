import{j as t}from"./iframe-DU0n7__8.js";import{B as a,u as n}from"./useBookmarks-Cjto0WgU.js";import{L as c}from"./Layout-CDrdHTwn.js";import{B as d}from"./BookmarkModal-kY30Tkm5.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-C56Sp0fh.js";import"./QueryLabel-CaEIA6-Q.js";import"./Plus-BxZePwQm.js";import"./useId-DCXiBgwp.js";import"./Heading-BrrIdLRc.js";import"./index-sAFX08uI.js";import"./useHighlightedText-Wa_y882s.js";import"./Skeleton-etbnaSOo.js";import"./SettingsItemBase-DMrHKdiZ.js";import"./ChevronUp-B4O89os7.js";import"./ChevronDown-Bfnu4XYc.js";import"./ChevronRight-B4fDZY6k.js";import"./ItemLink-B8GeE3YY.js";import"./ItemMedia-yH6oBbwQ.js";import"./XMark-DGVnrVrT.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./Icon-Dg7nJLrw.js";import"./ItemControls-BwQhe1K-.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./tooltip-UENHGvJl.js";import"./Typography-DOUoXZCv.js";import"./MagnifyingGlass-COVfkIqf.js";import"./ContextMenu-ki5GIL8X.js";import"./useDropdownMenuController-BCWUKN9Y.js";import"./Dropdown-Bvq9VpIR.js";import"./Button-pXyw-iqn.js";import"./MenuElipsisHorizontal-BxaMmiED.js";import"./SearchField-B4KuSSyF.js";import"./FieldBase-BIV16XC5.js";import"./Label-DSFEyVbW.js";import"./Input-Cjh3ClWU.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuListHeading-iogtqFYg.js";import"./MenuItem--8QkhFJ4.js";import"./Checkmark-CCpN8hs9.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./InformationSquare-Bfq2NTGF.js";import"./Pencil-DmC081bf.js";import"./Trash-MdbyzcW1.js";import"./SkipLink-DtUBT_fK.js";import"./Banner-B1v-1JYo.js";import"./GlobalHeader-8T2K0YMV.js";import"./useIsDesktop-C2Brmgmw.js";import"./GlobalAccountButton-BhzlUjed.js";import"./Enter-WxQAMlE7.js";import"./GlobalMenuButton-CkX6sJhh.js";import"./MenuHamburger--Lo7F4E1.js";import"./AccountSelector-CeYLjN3U.js";import"./AccountMenu-CJHw-x1F.js";import"./Switch-CRWhuB4h.js";import"./GlobalMenu-BDO3Pv-H.js";import"./ArrowUndo-Bx0cXSI_.js";import"./Globe-03FCv489.js";import"./BreadcrumbsLink-DMWRlgdL.js";import"./ArrowRight-DSxX6LAd.js";import"./Footer-CPbR1qGi.js";import"./SettingsModal-DHjDeK3E.js";import"./ModalBody-DelIgQsz.js";import"./Section-DwU7Gyqo.js";import"./Flex-C_O_eubX.js";import"./ButtonGroup-rBVDnBd_.js";import"./ButtonIcon-FC_tMBA0.js";import"./ButtonLabel-DfiBlqye.js";import"./TextField-Dl9QfE1k.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
