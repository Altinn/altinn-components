import{j as t}from"./iframe-BDpWuaMs.js";import{B as a,u as n}from"./useBookmarks-BJ56Xyz-.js";import{L as c}from"./Layout-BOIj_IJj.js";import{B as d}from"./BookmarkModal-CmJvVBsp.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DU31aaKS.js";import"./QueryLabel-BgKu4SlG.js";import"./Plus-CPPR_4GW.js";import"./useId-BKmV9YxM.js";import"./Heading-D4nA4ZwT.js";import"./index-DVPUayQ0.js";import"./useHighlightedText-B13W4IFy.js";import"./Skeleton-DC_TZb2p.js";import"./SettingsItemBase-C3p6p24I.js";import"./ChevronUp-CUbZcbs3.js";import"./ChevronDown-Bc_cVxBY.js";import"./ChevronRight-BJTZ2o3o.js";import"./ItemLink-CfhFFB25.js";import"./ItemMedia-CHwsaJTx.js";import"./XMark-Cx5Omj8e.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Icon-4_NTN6mD.js";import"./ItemControls-BtUdj5a9.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./tooltip-DLcd2lCg.js";import"./Typography-DZRyPYmV.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./ContextMenu-CzieQggW.js";import"./useDropdownMenuController-P2ixjEDe.js";import"./Dropdown-COTBq4xu.js";import"./Button-m_FXpHGO.js";import"./MenuElipsisHorizontal-_yoYMfaf.js";import"./SearchField-D16JUOzv.js";import"./FieldBase-CGSHeWph.js";import"./Label-7jR2lGh9.js";import"./Input-BoCHA0_0.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuListHeading-XsWTeeVe.js";import"./MenuItem-BH8ygUTz.js";import"./Checkmark-DDYvLrrH.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";import"./InformationSquare-CS8D_BUZ.js";import"./Pencil-EFbeKFB7.js";import"./Trash-CUnIoKK5.js";import"./SkipLink-Dg_jsoNf.js";import"./Banner-D1GMLXFU.js";import"./GlobalHeader-2J0_QgLb.js";import"./useIsDesktop-BLdKrDcu.js";import"./GlobalAccountButton-DFxURiCJ.js";import"./Enter-feRUQkuK.js";import"./GlobalMenuButton-Cfq9yt_Z.js";import"./MenuHamburger-B-lY5jCd.js";import"./AccountSelector-BDaFLEcp.js";import"./AccountMenu-Cw03evOz.js";import"./Switch-BV6144DA.js";import"./GlobalMenu-DTND42M6.js";import"./ArrowUndo-B7yB7xi-.js";import"./Globe-Dvhx0NzZ.js";import"./BreadcrumbsLink-HIqYeQNh.js";import"./ArrowRight-3pwHXK49.js";import"./Footer-Crp62nQm.js";import"./SettingsModal-Bm7XFvqp.js";import"./ModalBody-B45xukPd.js";import"./Section-B9Daowr7.js";import"./Flex-zEgiMRQg.js";import"./ButtonGroup-DdOFFFWL.js";import"./ButtonIcon-BKilWA_u.js";import"./ButtonLabel-BQStCFIw.js";import"./TextField-BVtlLRT2.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
