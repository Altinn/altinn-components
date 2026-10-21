var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-CHdTRX1S.js";import{B as n,u as d}from"./useBookmarks-BouDIS0a.js";import{B as l}from"./BookmarkModal-BXEeRD4-.js";import{L as u}from"./Layout-BAdKeMc2.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-erQCXILL.js";import"./BookmarkSettingsItem-DY1BMlr3.js";import"./QueryLabel-CMjZ_eIU.js";import"./Plus-XpG4Dc8n.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./SettingsItemBase-DVmYVQzH.js";import"./ItemMedia-BQC5N1RJ.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./ChevronUp-Bc1dDmk3.js";import"./ChevronDown-BTY70Kvu.js";import"./ChevronRight-h2GXZqhR.js";import"./ItemBase-Dt1Xxwib.js";import"./ItemLink-C4ONfugD.js";import"./ItemControls-D53PO9xK.js";import"./Badge-ZdmE6gaR.js";import"./Tooltip-CYLMyUyD.js";import"./Typography-6g7ttECm.js";import"./MagnifyingGlass-DoQnYB7U.js";import"./ContextMenu-D-52UC8M.js";import"./useDropdownMenuController-D8aBOA94.js";import"./Dropdown-lGfq8dlC.js";import"./SearchField-CHvi1Rr9.js";import"./MenuListItem-BuMUeh0I.js";import"./MenuListHeading-BF6vRJ1G.js";import"./MenuItem-C43FNrfh.js";import"./Checkmark-BvCukKJy.js";import"./ItemLabel-BnULnKGe.js";import"./FieldBase-CkHB3870.js";import"./Field-8ZiKnfLQ.js";import"./Label-CJ7sG7Qi.js";import"./Input-CiIWWSBU.js";import"./MenuListDivider-tQrfQ--u.js";import"./InformationSquare-B7p_A_2X.js";import"./MenuElipsisHorizontal-BzRZw6re.js";import"./Pencil-fBmO9hF7.js";import"./Trash-j20aQRbZ.js";import"./SettingsModal-ciEMEXzg.js";import"./ModalBody-BiQ99NwW.js";import"./Section-C-qQMjwL.js";import"./Flex-BzRwEaeD.js";import"./ButtonGroup-DccEHAHc.js";import"./ButtonIcon-BDrjexQx.js";import"./ButtonLabel-DN7WHzkG.js";import"./TextField-DV1D8C-w.js";import"./SkipLink-BGR3gUHZ.js";import"./CookieBanner-EX49xoo3.js";import"./Link-CgqRBP1_.js";import"./Banner-bPhDqDex.js";import"./GlobalHeader-BvkS7HKk.js";import"./useIsDesktop-BkKeRcUN.js";import"./GlobalAccountButton-eIHSniiH.js";import"./Enter-CqcCQCxA.js";import"./GlobalMenuButton-B6AJMXt4.js";import"./MenuHamburger-DGqoRL5Z.js";import"./AccountSelector-DGdQw3BV.js";import"./Switch-DlUvEvai.js";import"./AccountMenu-C_aIb6mU.js";import"./GlobalMenu-eyIbcXM5.js";import"./ArrowUndo-BxOUoQQA.js";import"./Globe-KQBmjpCv.js";import"./BreadcrumbsLink-aESNMqqg.js";import"./ArrowRight-DVUtDFtL.js";import"./Footer-Dvv8b_dg.js";const Uo={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
