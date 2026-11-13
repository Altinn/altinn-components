var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-r-PzxnFG.js";import{B as a,u as d}from"./useBookmarks-CFCpnabl.js";import{B as l}from"./BookmarkModal-DFUXZ16l.js";import{L as u}from"./Layout-DiBl5Ss_.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BMl9Yb_c.js";import"./BookmarkSettingsItem-BCYFdpsO.js";import"./QueryLabel-DNW7hyld.js";import"./Plus-C3gc2Iai.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./SettingsItemBase-YCR0c7jg.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ChevronUp-B0s8dawY.js";import"./ChevronDown-BD5i-hxE.js";import"./ChevronRight-DoF3revo.js";import"./ItemBase-CTpIDqLP.js";import"./ItemLink-BAk2uFkE.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./Typography-DZA02yZr.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./ContextMenu-Cek1quhS.js";import"./useDropdownMenuController-D2Eauaak.js";import"./useIsDesktop-Di7DAkKs.js";import"./Dropdown-tD-rtn-3.js";import"./SearchField-Cn8qUcxo.js";import"./commonTexts-CG1mkCQM.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemLabel-DE7oETkr.js";import"./FieldBase-D95hzyfr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./InformationSquare-x0k9ph8l.js";import"./Pencil-B-n9dhwv.js";import"./Trash-0c2zCAv3.js";import"./SettingsModal-BdZ7Q-Ay.js";import"./ModalBody-B-L7EXsI.js";import"./Section-DH0F_yu4.js";import"./Flex-DRLqoZbu.js";import"./ButtonGroup-tpSmkUGs.js";import"./ButtonLabel-DKmNFHli.js";import"./TextField-CvCwRuU3.js";import"./SkipLink-CxAmd6fp.js";import"./CookieBanner-FV1KTXzV.js";import"./Link-Cir18kU1.js";import"./Banner-BLHl1LXV.js";import"./GlobalHeader-B2yCgO-g.js";import"./GlobalAccountButton-DLB0nold.js";import"./Enter-C5EQ7SBG.js";import"./GlobalMenuButton-CtToZxYI.js";import"./MenuHamburger-BBbrRald.js";import"./AccountSelector-7QzxMRVr.js";import"./Switch-BcyiU8sz.js";import"./AccountMenu-4Pvbq0L4.js";import"./GlobalMenu-IlPBKVIs.js";import"./Checkmark-D0ulgpJN.js";import"./ArrowUndo-BHFoGQzk.js";import"./Globe-cKjoRVPR.js";import"./BreadcrumbsLink-C2WcbWT1.js";import"./ArrowRight-iKU0eq0k.js";import"./Footer-DHBjbd5P.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
