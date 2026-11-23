var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-HroKCH1i.js";import{B as a,u as d}from"./useBookmarks-_q6qloW1.js";import{B as l}from"./BookmarkModal-Bvh2xEv-.js";import{L as u}from"./Layout-BJWTle-B.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DLxClmSr.js";import"./BookmarkSettingsItem-BUD8Y2ch.js";import"./QueryLabel-C26Ke2lK.js";import"./Plus-CnaATfP4.js";import"./Heading-ButwX4Fz.js";import"./useHighlightedText-BR2lgM5a.js";import"./SettingsItemBase-FifKIRIq.js";import"./ItemMedia-BGnaafVo.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./ChevronUp-CmHElL6S.js";import"./ChevronDown-DmtpYDji.js";import"./ChevronRight-CnU_-vpz.js";import"./ItemBase-DIAn1C91.js";import"./ItemLink-Cd5xME8U.js";import"./ItemControls-P_AZ0k9Y.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./Typography-mUXdli5h.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./ContextMenu-BKY8RZIH.js";import"./useDropdownMenuController-Ba1nZRew.js";import"./Dropdown-CxvfuUHz.js";import"./SearchField-DdJVtzp5.js";import"./MenuListItem-DW9PJpJL.js";import"./MenuListDivider-DtrGkUUW.js";import"./MenuItem-CIYGtEiF.js";import"./CheckboxUncheckedIcon-HP_EJry3.js";import"./RadioUncheckedIcon-Ds8PcFs2.js";import"./ItemLabel-BExOJJ8K.js";import"./FieldBase-Dy7F34xJ.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./Input-KntdUcqG.js";import"./InformationSquare-uPdk22J8.js";import"./Pencil-BF3eZjlq.js";import"./Trash-CnguooS_.js";import"./SettingsModal-DcnN5o9V.js";import"./ModalBody-BQv1Fp6f.js";import"./Section-C0qOnBgx.js";import"./Flex-CL3BtjUZ.js";import"./ButtonGroup-Ds7x4PTq.js";import"./ButtonIcon-NRkGjrsB.js";import"./ButtonLabel-BQfOlvzM.js";import"./TextField-Bz7blcaa.js";import"./SkipLink-BsMHl5Dl.js";import"./CookieBanner-D5zydMJa.js";import"./Link-bcRJX1ul.js";import"./Banner-BECRe8uM.js";import"./GlobalHeader-Bdu0hHXo.js";import"./useIsDesktop-BTCUyq0Y.js";import"./GlobalAccountButton-Ci9Ajpvf.js";import"./Enter-BTzvw947.js";import"./GlobalMenuButton-C2xvSLNT.js";import"./MenuHamburger-Ca2SrZOe.js";import"./AccountSelector-DFjKkW66.js";import"./Switch-CjSSR8lu.js";import"./AccountMenu-Dghf-kj5.js";import"./GlobalMenu-B2C0Dikk.js";import"./Checkmark-rGl1e__H.js";import"./ArrowUndo-D_aPg2Cn.js";import"./Globe-BdekqIrA.js";import"./BreadcrumbsLink-BWF5RF-c.js";import"./ArrowRight-BJR7CRKc.js";import"./Footer-CWkOOgTl.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
