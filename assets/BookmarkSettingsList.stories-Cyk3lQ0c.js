var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-DliZ2j7V.js";import{B as n,u as d}from"./useBookmarks-C4fmxk7o.js";import{B as l}from"./BookmarkModal-BShvaJgt.js";import{L as u}from"./Layout-0itpjW6z.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bhv2948N.js";import"./BookmarkSettingsItem-CsjpU9Z0.js";import"./QueryLabel-NdK-nZjf.js";import"./Plus-FziPzHrq.js";import"./Heading-CtKubyco.js";import"./useHighlightedText-D1lssxtb.js";import"./SettingsItemBase-BcoKJnXj.js";import"./ItemMedia-DsNtfucp.js";import"./Avatar-Bb13CEJH.js";import"./AvatarGroup-BP8b6NDq.js";import"./ChevronUp-yDNMXP2e.js";import"./ChevronDown-DO1dBJk1.js";import"./ChevronRight-_BaSemP0.js";import"./ItemBase-B9IKgDin.js";import"./ItemLink-MyE0gqTU.js";import"./ItemControls-rcas_vti.js";import"./Badge-CXvbGuU6.js";import"./Tooltip-rTlSPEDx.js";import"./Typography-Oc42wyxk.js";import"./MagnifyingGlass-BuxQzsSI.js";import"./ContextMenu-D6pTyVMF.js";import"./useDropdownMenuController-X1T9D1nQ.js";import"./Dropdown-BbS2MxJj.js";import"./SearchField-CHTtqi8q.js";import"./FieldBase-CUazmIBl.js";import"./Field-DYOclivh.js";import"./Label-F6glHlTT.js";import"./Input-BcFkd5TI.js";import"./MenuListItem-eO1CqTCm.js";import"./MenuListDivider-kl64fblZ.js";import"./MenuListHeading-DGDFRB8j.js";import"./MenuItem-BWlafNQ2.js";import"./Checkmark-D4_xXQHC.js";import"./ItemLabel-ChEAFnfF.js";import"./InformationSquare-Bli9QzR2.js";import"./MenuElipsisHorizontal-CJN3iyyv.js";import"./Pencil-BJUt9aKj.js";import"./Trash-CR_vY-TR.js";import"./SettingsModal-oK3DeDKP.js";import"./ModalBody-BFFzW0gc.js";import"./Section-DMRyqAwI.js";import"./Flex-BMB99n2z.js";import"./ButtonGroup-CWxuOyOz.js";import"./ButtonIcon-DHmUYEVQ.js";import"./ButtonLabel-DMMRQrGY.js";import"./TextField-DGmrfoia.js";import"./SkipLink-ChAXOTCJ.js";import"./CookieBanner-DVZqRdwK.js";import"./Banner-Bhe3Vmkc.js";import"./GlobalHeader-CDCTdJnq.js";import"./useIsDesktop-DmFMgreD.js";import"./GlobalAccountButton-DhGp9uH_.js";import"./Enter-BFNsHNEk.js";import"./GlobalMenuButton-BUvUT3hC.js";import"./MenuHamburger-BOtrt7de.js";import"./AccountSelector-CjAjfHVy.js";import"./Switch-C_H2f2Qb.js";import"./AccountMenu-CuHtLQfM.js";import"./GlobalMenu-egUmzDdz.js";import"./ArrowUndo-wAj8mUHm.js";import"./Globe-fARQJzgG.js";import"./BreadcrumbsLink-CCHcahVv.js";import"./ArrowRight-TfszhTPO.js";import"./Footer-tQkJai37.js";const Go={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{m as BookmarksList,s as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
