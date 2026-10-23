var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-C320xpwq.js";import{B as n,u as d}from"./useBookmarks-BL8MvWAZ.js";import{B as l}from"./BookmarkModal-DDQrNJMJ.js";import{L as u}from"./Layout-B8s1Yicf.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CNq5BiUb.js";import"./BookmarkSettingsItem-BPvF8spO.js";import"./QueryLabel-BkUAtmuj.js";import"./Plus-ZWKQtzTH.js";import"./Heading-C_k6PbIN.js";import"./useHighlightedText-DSoWCMjQ.js";import"./SettingsItemBase-DtQq9leE.js";import"./ItemMedia-DXXjb0Ql.js";import"./Avatar-DiTaWPNi.js";import"./AvatarGroup-C3ZQ77zA.js";import"./ChevronUp-DyDxvCOy.js";import"./ChevronDown-y1vJePuN.js";import"./ChevronRight-0obYraG7.js";import"./ItemBase-CYhiMb3u.js";import"./ItemLink-CKqvDdvY.js";import"./ItemControls-PDJ9i9Cv.js";import"./Badge-CKNKkFIN.js";import"./Tooltip-CJNSgf5y.js";import"./Typography-DeOYXGTy.js";import"./MagnifyingGlass-BNq1j2pw.js";import"./ContextMenu-Bo0gZwkj.js";import"./useDropdownMenuController-sAJd3n4N.js";import"./Dropdown-DOQP5U0B.js";import"./SearchField-BvARDiuT.js";import"./MenuListItem-BqKoFA4P.js";import"./MenuListHeading-BpIk0QC_.js";import"./MenuItem-RBRvsnc4.js";import"./Checkmark-DXZzi-ZC.js";import"./ItemLabel-DED-sXIi.js";import"./FieldBase-CS4MYGp7.js";import"./Field-WScL1nVe.js";import"./Label-CArvchbl.js";import"./Input-Butkrn3v.js";import"./MenuListDivider-DFJO6x9b.js";import"./InformationSquare-BVSTZ5OZ.js";import"./MenuElipsisHorizontal-2Rt6dBTk.js";import"./Pencil-Cht8aZPA.js";import"./Trash-CVaRXKAa.js";import"./SettingsModal-CTd1zDlQ.js";import"./ModalBody-BULMryTE.js";import"./Section-CQzKKRAw.js";import"./Flex-vd8VAqWN.js";import"./ButtonGroup-BhnnwPdG.js";import"./ButtonIcon-D8kUPsWY.js";import"./ButtonLabel-XfOtcHaz.js";import"./TextField-0ILAc4vl.js";import"./SkipLink-jnbR-ln8.js";import"./CookieBanner-BwWd3p2Z.js";import"./Link-CK47N41p.js";import"./Banner-BLCkBNXA.js";import"./GlobalHeader-LOVrAtVB.js";import"./useIsDesktop-vnwmm91F.js";import"./GlobalAccountButton-HRF24Cy_.js";import"./Enter-CPkKyFVm.js";import"./GlobalMenuButton-CfdWCzfD.js";import"./MenuHamburger-CkyOXOBY.js";import"./AccountSelector-CbXpO1vP.js";import"./Switch-CWssEnQq.js";import"./AccountMenu-8oVSJmzt.js";import"./GlobalMenu-Ln8xFO4g.js";import"./ArrowUndo-DyZTn8wI.js";import"./Globe-CTKberuz.js";import"./BreadcrumbsLink-DEbZBh4a.js";import"./ArrowRight-B2lyLnMs.js";import"./Footer-Bfq4ZQcs.js";const Uo={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const _o=["BookmarksList","GroupedBookmarksList"];export{m as BookmarksList,s as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
