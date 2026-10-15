var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-BaqLtPTs.js";import{B as n,u as d}from"./useBookmarks-D3zrRZpN.js";import{B as l}from"./BookmarkModal-F6wWXWly.js";import{L as u}from"./Layout-YCw9v4AM.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C1bmwhZm.js";import"./BookmarkSettingsItem-CfpSUfxH.js";import"./QueryLabel-B_MiZMoU.js";import"./Plus-C5MYAhCf.js";import"./Heading-CDNNIgnR.js";import"./useHighlightedText-sWqW6aCW.js";import"./SettingsItemBase-BqOvTG08.js";import"./ItemMedia-CLNTwl7K.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./ChevronUp-DC2GE9BE.js";import"./ChevronDown-T0hrSAlY.js";import"./ChevronRight-Dg4XRKaD.js";import"./ItemBase-CZF7Y01p.js";import"./ItemLink-DASRyS3K.js";import"./ItemControls-BPS_hDHQ.js";import"./Badge-Dh4HGE2C.js";import"./Tooltip-DfSLGLjy.js";import"./Typography-DwSVJfAa.js";import"./MagnifyingGlass-D84zuplr.js";import"./ContextMenu-BrVBWBa2.js";import"./useDropdownMenuController-omw4CUeb.js";import"./Dropdown-BUS7xPa_.js";import"./SearchField-BCMYwn2Y.js";import"./FieldBase-BEQqqs0u.js";import"./Field-D5dVA89M.js";import"./Label-Wvr4cn-z.js";import"./Input-BbFz6Lbp.js";import"./MenuListItem-sXMtvpJ-.js";import"./MenuListDivider-iw10_T6H.js";import"./MenuListHeading-Cp83ODWk.js";import"./MenuItem-D9hVuXrM.js";import"./Checkmark-B7wTOCbv.js";import"./ItemLabel-D68tVwEb.js";import"./InformationSquare-DB9gl9c1.js";import"./MenuElipsisHorizontal-VAfXYfAO.js";import"./Pencil-CeiyYpCD.js";import"./Trash-DdPBT6N6.js";import"./SettingsModal-1p4U1o-8.js";import"./ModalBody-n_1CR2eM.js";import"./Section-C__1PXg0.js";import"./Flex-DAfEpjHq.js";import"./ButtonGroup-BJPVaBTK.js";import"./ButtonIcon-vCCOEFdH.js";import"./ButtonLabel-CYdCAiFt.js";import"./TextField-C8XNl_7d.js";import"./SkipLink-DmI-ASGR.js";import"./CookieBanner-CCmHrdLD.js";import"./Banner-C1HX02Xb.js";import"./GlobalHeader-BlNn5riX.js";import"./useIsDesktop-DA4wHaly.js";import"./GlobalAccountButton-C3nBJomz.js";import"./Enter-B84KAbyR.js";import"./GlobalMenuButton-BpQWntjE.js";import"./MenuHamburger-Be95533-.js";import"./AccountSelector-DlukmgXm.js";import"./Switch-cEGCs3Qc.js";import"./AccountMenu-DuSeNgSJ.js";import"./GlobalMenu-Cb-JaOpc.js";import"./ArrowUndo-pSENVqmS.js";import"./Globe-V7uKo-Sp.js";import"./BreadcrumbsLink-Dy1lwRL_.js";import"./ArrowRight-CV47hUo5.js";import"./Footer-C9pBl0qR.js";const Go={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
