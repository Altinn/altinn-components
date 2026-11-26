var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-Dhr5kNpI.js";import{B as a,u as d}from"./useBookmarks-DXJpFpxC.js";import{B as l}from"./BookmarkModal-20LDTjZH.js";import{L as u}from"./Layout-b9_DASgO.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BGMvW90K.js";import"./BookmarkSettingsItem-a7e5MxCO.js";import"./QueryLabel-CkViHas5.js";import"./Plus-CJyVTS1m.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./SettingsItemBase-BD2Mivhr.js";import"./ItemMedia-C0ReNhrI.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./ChevronUp-CnX9Oj5-.js";import"./ChevronDown-CRBE2Pft.js";import"./ChevronRight-BnrL2uT7.js";import"./ItemBase-YnVoDumG.js";import"./ItemLink-r00OWv-Y.js";import"./ItemControls-CiyO-qr-.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./Typography-CiPthQfi.js";import"./MagnifyingGlass-qp743Sh-.js";import"./ContextMenu-BSYfi7oi.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./SearchField-Daiwk--y.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemLabel-D7TXcLH5.js";import"./FieldBase-C_75hFZi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./InformationSquare-B4yRDNra.js";import"./Pencil-pzOsxDSV.js";import"./Trash-DlyJC_yu.js";import"./SettingsModal-Ch2wktR-.js";import"./ModalBody-bj2s7Dy2.js";import"./Section-xZgyq4QZ.js";import"./Flex-CQB0dbJh.js";import"./ButtonGroup-DjJP_8QL.js";import"./ButtonIcon-3_G48aTa.js";import"./ButtonLabel-Dyo1xgTN.js";import"./TextField-BRsrf4PY.js";import"./SkipLink-D4aRwPBT.js";import"./CookieBanner-BYmyroC1.js";import"./Link-BcpX_Jbu.js";import"./Banner-B75RCubj.js";import"./GlobalHeader-HRR1BEKf.js";import"./useIsDesktop-9sPcRqaI.js";import"./GlobalAccountButton-CA2fQ84T.js";import"./Enter-B8y0P7tB.js";import"./GlobalMenuButton-CnciQBA6.js";import"./MenuHamburger-CsHjEoZC.js";import"./AccountSelector-Bgw129to.js";import"./Switch-DrTa1vix.js";import"./AccountMenu-BrVN1SqG.js";import"./GlobalMenu-CrWIFlwZ.js";import"./Checkmark-Dq0lqnYy.js";import"./ArrowUndo-Cco96Qbs.js";import"./Globe-CB-uD3-X.js";import"./BreadcrumbsLink-D3ZvT99q.js";import"./ArrowRight-CNFtkaIJ.js";import"./Footer-y517Vrur.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
