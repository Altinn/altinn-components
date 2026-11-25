var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-B3JK86DP.js";import{B as a,u as d}from"./useBookmarks-M4udAsK6.js";import{B as l}from"./BookmarkModal-D5gsJZhK.js";import{L as u}from"./Layout-CIgk6UxX.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-RTLBsPgV.js";import"./BookmarkSettingsItem-Ba2g_hcu.js";import"./QueryLabel-BBA5vD7o.js";import"./Plus-UzcieS8Z.js";import"./Heading-DhZTTpsP.js";import"./useHighlightedText-DIT5s5Wk.js";import"./SettingsItemBase-CH16isHl.js";import"./ItemMedia-w7Ibrgnv.js";import"./Avatar-C5zwgekh.js";import"./AvatarGroup-CljQ4hw7.js";import"./ChevronUp-2E8wLm1d.js";import"./ChevronDown-eXgBXwsS.js";import"./ChevronRight-CXXN68ww.js";import"./ItemBase-CVpq_C38.js";import"./ItemLink-CI8JhxFv.js";import"./ItemControls-EPopScKo.js";import"./Badge-CHkrsaqO.js";import"./Tooltip-5MJkmhaO.js";import"./Typography-AZ3lf-vT.js";import"./MagnifyingGlass-Dar3Cjqj.js";import"./ContextMenu-B2Ts5CPe.js";import"./useDropdownMenuController-DrRN5BOH.js";import"./Dropdown-D-XZVyts.js";import"./SearchField-CYbBjrsH.js";import"./MenuListItem-Dv-zfi5J.js";import"./MenuListDivider-JnPQTBAl.js";import"./MenuItem-DcugXxJu.js";import"./CheckboxUncheckedIcon-DWGQqmR1.js";import"./RadioUncheckedIcon-BENOQjAf.js";import"./ItemLabel-UJIDw8s4.js";import"./FieldBase-BOLpoc-t.js";import"./Field-4Patn0Bt.js";import"./Label-0jV2FogB.js";import"./Input-Dn912l6M.js";import"./InformationSquare-DD61y5yY.js";import"./Pencil-8zXpV1nV.js";import"./Trash-XyOTEtSX.js";import"./SettingsModal-DE14g6gU.js";import"./ModalBody-CwO02btK.js";import"./Section-DBrjPmQz.js";import"./Flex-DTtFl6cz.js";import"./ButtonGroup-svkpHY7L.js";import"./ButtonIcon-CL9cJJTZ.js";import"./ButtonLabel-BWRZYF93.js";import"./TextField-Cntgt9Iw.js";import"./SkipLink-RCbbMY4N.js";import"./CookieBanner-DeF8tbcP.js";import"./Link-nyBdqDjQ.js";import"./Banner-EMpRl99Y.js";import"./GlobalHeader-B4i6zyAh.js";import"./useIsDesktop-CV7gQySW.js";import"./GlobalAccountButton-CWuo16M7.js";import"./Enter-Bmsepcvu.js";import"./GlobalMenuButton-DlkSCuXD.js";import"./MenuHamburger-buk28FFl.js";import"./AccountSelector-B9RDvL4R.js";import"./Switch-CIsn3VnQ.js";import"./AccountMenu-DHPdtaaD.js";import"./GlobalMenu-DNbtyV0e.js";import"./Checkmark-BlaG2503.js";import"./ArrowUndo-akLfJpcJ.js";import"./Globe-CITtRZvC.js";import"./BreadcrumbsLink-CVLW5LEg.js";import"./ArrowRight-DDv59QSS.js";import"./Footer-SU54PDkp.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
