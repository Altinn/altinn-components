var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-Cb83cNHz.js";import{B as a,u as d}from"./useBookmarks-krScsx_D.js";import{B as l}from"./BookmarkModal-CMop6QZU.js";import{L as u}from"./Layout-Dff3kFcF.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D3abljbA.js";import"./BookmarkSettingsItem-C1rErcVf.js";import"./QueryLabel-D2zi5nK2.js";import"./Plus-DTEoGbp7.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./SettingsItemBase-Cp8OCg29.js";import"./ItemMedia-DqOX_qxk.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./ChevronUp-BCG2x0JT.js";import"./ChevronDown-CvYcy6of.js";import"./ChevronRight-C-6CVVq7.js";import"./ItemBase-kQ84sUK4.js";import"./ItemLink-BQ17I7eJ.js";import"./ItemControls-B2ksNOht.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./Typography-BPADIB9F.js";import"./MagnifyingGlass-C02McN1l.js";import"./ContextMenu-BmqCqerS.js";import"./useDropdownMenuController-Q85VC5Dx.js";import"./Dropdown-ANdQRx3c.js";import"./SearchField-HWu0obAx.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemLabel-BEqC8Tjb.js";import"./FieldBase-DBBKjPwf.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./Input-DdatSh7d.js";import"./InformationSquare-BiO92rri.js";import"./Pencil-BT4WtC0b.js";import"./Trash-lsGNewil.js";import"./SettingsModal-BNJ4T6iX.js";import"./ModalBody-CL-S6xSQ.js";import"./Section-ClBUDaq7.js";import"./Flex-mAUGJKsG.js";import"./ButtonGroup-BwzWu-pA.js";import"./ButtonIcon-B4Ur9LKF.js";import"./ButtonLabel-DO3-EdGM.js";import"./TextField-Cld7v0hg.js";import"./SkipLink-6B7b5F_a.js";import"./CookieBanner-jCRU0d03.js";import"./Link-DQQdOR66.js";import"./Banner-B1D4lRTG.js";import"./GlobalHeader-GY_0unjy.js";import"./useIsDesktop-bkDzo4_p.js";import"./GlobalAccountButton-YJVub4dC.js";import"./Enter-242fxigb.js";import"./GlobalMenuButton-Dr02kXNp.js";import"./MenuHamburger-CnSpXwtX.js";import"./AccountSelector-C0DI3fm4.js";import"./Switch-DIW_Z6WH.js";import"./AccountMenu-DZR0MJzN.js";import"./GlobalMenu-BMN2Sqk4.js";import"./Checkmark-CNvtSrOy.js";import"./ArrowUndo-B-nYNH6F.js";import"./Globe-DtcnCepT.js";import"./BreadcrumbsLink--x-4fvlt.js";import"./ArrowRight-CQNswdhZ.js";import"./Footer-CT_cgCIN.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
