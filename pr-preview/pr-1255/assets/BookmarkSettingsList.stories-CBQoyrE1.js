import{a7 as t}from"./iframe-h3kpEY-8.js";import{B as a,u as n}from"./useBookmarks-BhsRIg_e.js";import{B as d}from"./BookmarkModal-BRPFuaof.js";import{L as c}from"./Layout-DtfClpX6.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DIh14msT.js";import"./BookmarkSettingsItem-DB3ybs5d.js";import"./QueryLabel-fllJX9am.js";import"./Plus-BtMtwdOE.js";import"./Heading-Dn7fEFx7.js";import"./useHighlightedText-Lwubglq6.js";import"./SettingsItemBase-C8Rpd_nQ.js";import"./ItemMedia-DOHb0jsR.js";import"./Avatar-xrrnEYLD.js";import"./AvatarGroup-COWd8M-x.js";import"./ChevronUp-ChyOGEvh.js";import"./ChevronDown-lfOvIfMJ.js";import"./ChevronRight-zeeAR8pp.js";import"./ItemBase-C2eJ02ZF.js";import"./ItemLink-CuqdYmxq.js";import"./ItemControls-DTSXitWE.js";import"./Badge-DXobaynz.js";import"./Tooltip-DgP5yGn4.js";import"./Typography-ByLPxgtz.js";import"./MagnifyingGlass-Df6AiRyH.js";import"./ContextMenu-CoG70u__.js";import"./useDropdownMenuController-BHvOgZtq.js";import"./Dropdown-BZC5Raej.js";import"./SearchField-pLL_WmAV.js";import"./FieldBase-CnX5WdHy.js";import"./Field-BzJVbJyd.js";import"./Label-DRrcRV0r.js";import"./Input-BilJ5YTK.js";import"./MenuListItem-DdKH3BDS.js";import"./MenuListDivider-BDzgWude.js";import"./MenuListHeading-B8DJ5av2.js";import"./MenuItem-CJxVZTG4.js";import"./Checkmark-qxd_V6S7.js";import"./ItemLabel-DwG1GkVg.js";import"./index-BRnuOkic.js";import"./InformationSquare-TM9O4ixW.js";import"./MenuElipsisHorizontal-DBgqCiOI.js";import"./Pencil-DTJ42TSO.js";import"./Trash-Bbf21dp0.js";import"./SettingsModal-DxrZ8oAm.js";import"./ModalBody-lChWNEBC.js";import"./Section-CgbWqpsb.js";import"./Flex-BmiGVQGS.js";import"./ButtonGroup-CTYKvx28.js";import"./ButtonIcon-CkVeYQtg.js";import"./ButtonLabel-DuUqN0Cv.js";import"./TextField-Dq4vf-_T.js";import"./SkipLink-BTrrVk3o.js";import"./Banner-D3CUVGr2.js";import"./GlobalHeader-DbONu3gK.js";import"./useIsDesktop-CEwRenMP.js";import"./GlobalAccountButton-TxNOomJT.js";import"./Enter-CRzvfXkr.js";import"./GlobalMenuButton-DtmAQ8dT.js";import"./MenuHamburger-OG4LFxGd.js";import"./AccountSelector-BUDTnCJ0.js";import"./Switch-JWXrNjhf.js";import"./AccountMenu-4WhElmsX.js";import"./GlobalMenu-BAElCxZm.js";import"./ArrowUndo-BNIaEQ0f.js";import"./Globe-D5GaK9AD.js";import"./BreadcrumbsLink-DDRIWfdO.js";import"./ArrowRight-BHwxkP2p.js";import"./Footer-CZO8bq-d.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
