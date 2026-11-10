var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-Yc5vADWD.js";import{B as a,u as d}from"./useBookmarks-HjmSt1uP.js";import{B as l}from"./BookmarkModal-DNnOpIM9.js";import{L as u}from"./Layout-D0oQT3Dr.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CxtnSdnP.js";import"./BookmarkSettingsItem-Cic5ONuG.js";import"./QueryLabel-BN2MNQ4B.js";import"./Plus-BG9CstYb.js";import"./Heading-DEfYMi8I.js";import"./useHighlightedText-DPM1PtgE.js";import"./SettingsItemBase-D8FPmu9V.js";import"./ItemMedia-93ge468N.js";import"./Avatar-B1293ug9.js";import"./AvatarGroup-b9E5cL-B.js";import"./ChevronUp-CHIwOCup.js";import"./ChevronDown-DOVICByK.js";import"./ChevronRight-BvgS2wwu.js";import"./ItemBase-Bnlsc0Vh.js";import"./ItemLink-AwrKKBO4.js";import"./ItemControls-CBx0Fvi9.js";import"./Badge-B7caOYrZ.js";import"./Tooltip-ClWq0FMC.js";import"./Typography-BbQNKF3N.js";import"./MagnifyingGlass-D24TEFQh.js";import"./ContextMenu-TzZVtjIn.js";import"./useDropdownMenuController-CfW-t4Vt.js";import"./Dropdown-ClwEgS76.js";import"./SearchField-DuQI2WUG.js";import"./MenuListItem-D_xInwm_.js";import"./MenuListDivider-CBT6dc8U.js";import"./MenuItem-Do_eZo-E.js";import"./CheckboxUncheckedIcon-BTRLnzsL.js";import"./RadioUncheckedIcon-B5Tym566.js";import"./ItemLabel-CEwOeVMD.js";import"./FieldBase-Dm91Yu7W.js";import"./Field-CKipP2ZI.js";import"./Label-Coc0T7Cr.js";import"./Input-XB5O9fra.js";import"./InformationSquare-TRKWejmi.js";import"./Pencil-DQNWsbDh.js";import"./Trash-DtaM_GNe.js";import"./SettingsModal-DUyGtATO.js";import"./ModalBody-DUEHfhkT.js";import"./Section-CEOcJou8.js";import"./Flex-B3cYS6HF.js";import"./ButtonGroup-B5kerLtb.js";import"./ButtonIcon-CKHHrDRr.js";import"./ButtonLabel-D5BE_G-1.js";import"./TextField-B21FXhH9.js";import"./SkipLink-5s7iHcFe.js";import"./CookieBanner-Bv5jbEtk.js";import"./Link-NvhW_JA3.js";import"./Banner-BR7HfYZ0.js";import"./GlobalHeader-DtD7Bi_o.js";import"./useIsDesktop-BSuHAgib.js";import"./GlobalAccountButton-DOfFwmM4.js";import"./Enter-33WYXkGQ.js";import"./GlobalMenuButton-DAKf8ey0.js";import"./MenuHamburger-BZO_lHH1.js";import"./AccountSelector-BqS9VXnN.js";import"./Switch-D1NN4jqs.js";import"./AccountMenu-CgK3-AZU.js";import"./GlobalMenu-B-GfbJrP.js";import"./Checkmark-Bfjel_6l.js";import"./ArrowUndo-C9sxw3hI.js";import"./Globe-BdpCoWNM.js";import"./BreadcrumbsLink-B7mvbHEj.js";import"./ArrowRight-CfnTjRjZ.js";import"./Footer-BFZED0r-.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
