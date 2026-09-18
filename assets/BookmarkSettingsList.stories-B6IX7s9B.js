import{a7 as t}from"./iframe-IRVPXNFV.js";import{B as a,u as n}from"./useBookmarks-BtIaWann.js";import{B as d}from"./BookmarkModal-DG1e4Cun.js";import{L as c}from"./Layout-D4VUbYdr.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Z61iJGID.js";import"./BookmarkSettingsItem-DA_NI6pO.js";import"./QueryLabel-BugM0fgX.js";import"./Plus-0ZWJqdTS.js";import"./Heading-DjAzNFDQ.js";import"./useHighlightedText-CG_8__up.js";import"./SettingsItemBase-BB8InGjM.js";import"./ItemMedia-DU76sJ68.js";import"./Avatar-drWAMmf1.js";import"./AvatarGroup-Caex7Tu5.js";import"./ChevronUp-XQJa99GN.js";import"./ChevronDown-BYfLgaaQ.js";import"./ChevronRight-Bn5bOelp.js";import"./ItemBase-DtEv3ijz.js";import"./ItemLink-DatqdAYi.js";import"./ItemControls-Bn-WW8C9.js";import"./Badge-CAyEKJhq.js";import"./Tooltip-D0XSM2S5.js";import"./Typography-B61DVKU1.js";import"./MagnifyingGlass-C_Mjm1Zn.js";import"./ContextMenu-Bplb67T8.js";import"./useDropdownMenuController-DopJQueH.js";import"./Dropdown-DwPiUxwC.js";import"./SearchField-Bpwou897.js";import"./FieldBase-DMT9IhQO.js";import"./Field-DlQFxQyh.js";import"./Label-Di1y72qz.js";import"./Input-CgzWa5OM.js";import"./MenuListItem-DCSMARma.js";import"./MenuListDivider-DU-lQLUQ.js";import"./MenuListHeading-C_D2K51_.js";import"./MenuItem-CiVcHyvu.js";import"./Checkmark-D5V-_R2S.js";import"./ItemLabel-CfB3mva_.js";import"./InformationSquare-Bchi5e6i.js";import"./MenuElipsisHorizontal-D9YhkAkN.js";import"./Pencil-BckPYGKH.js";import"./Trash-3AGSyQl4.js";import"./SettingsModal-DHpAPTlm.js";import"./ModalBody-BicCMsex.js";import"./Section-D1bZZmzH.js";import"./Flex-oS8OWrEi.js";import"./ButtonGroup-BVNMP4FP.js";import"./ButtonIcon-6bTpUQZK.js";import"./ButtonLabel-C7Jt6L6t.js";import"./TextField-BqIbEMLW.js";import"./SkipLink-CyezMBFE.js";import"./CookieBanner-nMwS0J4I.js";import"./Banner-Bsj-pnBu.js";import"./GlobalHeader-CuYGCnug.js";import"./useIsDesktop-CzIjbv_Q.js";import"./GlobalAccountButton-4n_DVQ-q.js";import"./Enter-DSuv2faY.js";import"./GlobalMenuButton-C3UVqFuL.js";import"./MenuHamburger-CB8eJRYC.js";import"./AccountSelector-CcUWemsK.js";import"./Switch-DSh8QHWd.js";import"./AccountMenu-DgzL3rCb.js";import"./GlobalMenu-Cr7lbfVa.js";import"./ArrowUndo-BMZdAc_2.js";import"./Globe-9M0p9cK7.js";import"./BreadcrumbsLink-Ce74a_0l.js";import"./ArrowRight-D5LzH5Kb.js";import"./Footer-DD2kBf4z.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
