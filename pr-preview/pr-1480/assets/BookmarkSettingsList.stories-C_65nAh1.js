var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-CqoHfDH7.js";import{B as a,u as d}from"./useBookmarks-dc2IVEW1.js";import{B as l}from"./BookmarkModal-CiggSHr5.js";import{L as u}from"./Layout-CSUzQI7d.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DC909dob.js";import"./BookmarkSettingsItem-DUAhTy_T.js";import"./QueryLabel-5ur60BDf.js";import"./Plus-DQZnEDJR.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./SettingsItemBase-CEruRLCu.js";import"./ItemMedia-Sf1LoSEA.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./ChevronUp-BraeWy4W.js";import"./ChevronDown-CPg5ddv-.js";import"./ChevronRight-jzUrV1wz.js";import"./ItemBase-BUrta6st.js";import"./ItemLink-BmS9PXKb.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./Typography-rh9OwAWr.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./ContextMenu-8eaHwukY.js";import"./useDropdownMenuController-jHmlB5TA.js";import"./useIsDesktop-DOYNI_br.js";import"./Dropdown-BxvitPqI.js";import"./SearchField-D-gn40zc.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuListDivider-BNYPxbgd.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemLabel-Bv-toCFX.js";import"./FieldBase-B4VpsYUB.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./InformationSquare-B2hWOsOH.js";import"./Pencil-Cydjce_N.js";import"./Trash-DDnja0xf.js";import"./SettingsModal-BNLp4N0e.js";import"./ModalBody-CiSC6mzB.js";import"./Section-DzgRr51L.js";import"./Flex-zJBPm08F.js";import"./ButtonGroup-Cf6Ux1xO.js";import"./ButtonIcon-CRl4eaFH.js";import"./ButtonLabel-DpOqQbl0.js";import"./TextField-BTeXfEgc.js";import"./SkipLink-Ds2RcVLC.js";import"./CookieBanner-CFMBRXMy.js";import"./Link-DR6nrsxT.js";import"./Banner-DQu6A5-G.js";import"./GlobalHeader-DWRMPzkc.js";import"./GlobalAccountButton-BvEMjebp.js";import"./Enter-B9MAPnXr.js";import"./GlobalMenuButton-DiyANMBE.js";import"./MenuHamburger-DSLGNBpT.js";import"./AccountSelector-BvBz0nl7.js";import"./Switch-C1zqeT7L.js";import"./AccountMenu-Fh_lK1IK.js";import"./GlobalMenu-CxNL_K9P.js";import"./Checkmark-6oHZmwOe.js";import"./ArrowUndo-CAunjfEO.js";import"./Globe-C2Y4iZjS.js";import"./BreadcrumbsLink-UdHkGk6j.js";import"./ArrowRight-B2OtfF5b.js";import"./Footer-BIpaMByz.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
