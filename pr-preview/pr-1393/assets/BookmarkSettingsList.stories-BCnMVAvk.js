import{a7 as t}from"./iframe-ypmT5Gk0.js";import{B as a,u as n}from"./useBookmarks-C2Dtye9Y.js";import{B as d}from"./BookmarkModal-wdvUtOkx.js";import{L as c}from"./Layout-DE_9T14a.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Roya_qW1.js";import"./BookmarkSettingsItem-DxxIKrOs.js";import"./QueryLabel-CTgAISS6.js";import"./Plus-Dbutg6U0.js";import"./Heading-DYP7M4_m.js";import"./useHighlightedText-BRp5NYS8.js";import"./SettingsItemBase-itMtK-j2.js";import"./ItemMedia-4IfksOuS.js";import"./Avatar-CjSTwin0.js";import"./AvatarGroup-SlU2nii8.js";import"./ChevronUp-BtRg68CV.js";import"./ChevronDown-BK7qLjN-.js";import"./ChevronRight-3_fnpscT.js";import"./ItemBase-DYa9_HNX.js";import"./ItemLink-rWBtZ4Hb.js";import"./ItemControls-Bqvxib6z.js";import"./Badge-X9Z0TOu_.js";import"./Tooltip-Blob_TyK.js";import"./Typography-D_BM_-lf.js";import"./MagnifyingGlass-BsJL0696.js";import"./ContextMenu-D5kYo8B_.js";import"./useDropdownMenuController-Bdups_kS.js";import"./Dropdown-DooXOQKf.js";import"./SearchField-gC-2ROHv.js";import"./FieldBase-BZNWpkh0.js";import"./Field-fCHogA_W.js";import"./Label-CuLDpT5S.js";import"./Input-CoYipzRW.js";import"./MenuListItem-aY-AAikt.js";import"./MenuListDivider-p3sa3VdL.js";import"./MenuListHeading-j9n_Lc05.js";import"./MenuItem-CZo5oRhh.js";import"./Checkmark-kMy6EMLN.js";import"./ItemLabel-BlYQpqbv.js";import"./InformationSquare-BGmi6Zvl.js";import"./MenuElipsisHorizontal-7XqACgFh.js";import"./Pencil-CD1iIUVv.js";import"./Trash-CccdzDMj.js";import"./SettingsModal-NpQrKLMe.js";import"./ModalBody--kpGACBM.js";import"./Section-DHk6b8dD.js";import"./Flex-Chd0QM3i.js";import"./ButtonGroup-CRz61zp4.js";import"./ButtonIcon-DpuhnEWK.js";import"./ButtonLabel-CXIu-UcJ.js";import"./TextField-CCO_4OXa.js";import"./SkipLink-Dmj6XsAN.js";import"./CookieBanner-B8k1HGdM.js";import"./Banner-DMBV7tds.js";import"./GlobalHeader-DK4fbfP6.js";import"./useIsDesktop-PxNvtLHb.js";import"./GlobalAccountButton-CQvD92YT.js";import"./Enter-BI3IQ34V.js";import"./GlobalMenuButton-BribFtYh.js";import"./MenuHamburger-DnW-FkzB.js";import"./AccountSelector-oX6erb_P.js";import"./Switch-CfqPQUwK.js";import"./AccountMenu-s3Se8P3c.js";import"./GlobalMenu-BPOeGTHR.js";import"./ArrowUndo-BZUngnyS.js";import"./Globe-CcZbALqM.js";import"./BreadcrumbsLink-B-_mNzdJ.js";import"./ArrowRight-onOHfT1O.js";import"./Footer-BF-O6qkt.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
