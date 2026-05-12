import{j as t}from"./iframe-BUZW8AMM.js";import{B as a,u as n}from"./useBookmarks-9vTMfwpA.js";import{L as c}from"./Layout-BtNZqBvp.js";import{B as d}from"./BookmarkModal-BJs0U_Hh.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-Dz1K3E_z.js";import"./QueryLabel-DmTAUC8y.js";import"./Plus-BWMMx9bM.js";import"./useId-CoMggIDA.js";import"./Heading-BBJzhiZm.js";import"./index-DDG5Qp_D.js";import"./useHighlightedText-Df1F8nSN.js";import"./Skeleton-2WT-jYKy.js";import"./SettingsItemBase-DZ_I7vZA.js";import"./ChevronUp-Cmvg9ZuE.js";import"./ChevronDown-C7e7c8oq.js";import"./ChevronRight-Be2F8dIE.js";import"./ItemLink-pH7m12-R.js";import"./ItemMedia-lV46z_8W.js";import"./XMark-N_5CtkVA.js";import"./Avatar-VmI9f2FC.js";import"./AvatarGroup-BSpRcNGO.js";import"./Icon-pO_LYxKU.js";import"./ItemControls-CILw3fe6.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-Cq-TarIz.js";import"./lite-DaUVFjkg.js";import"./Typography-DPxU9lqg.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./ContextMenu-DWxhfZ1J.js";import"./useDropdownMenuController-ocgtyANg.js";import"./Dropdown-B9D2leTq.js";import"./Button-gpqpzK6E.js";import"./button-Bzfkec0d.js";import"./MenuElipsisHorizontal-Dq6dZaad.js";import"./SearchField-DOgIBcSC.js";import"./FieldBase-D0VPfoZq.js";import"./Label-EV3PcI6g.js";import"./index-BxrYGQ_D.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./MenuListItem-DOB3vVPI.js";import"./MenuListHeading-BbGKJ44d.js";import"./MenuItem-B9Qpze_W.js";import"./Checkmark-B1cvuYYq.js";import"./useMenu-DzfOGhde.js";import"./index-B1N1jCNu.js";import"./InformationSquare-D87nn8LZ.js";import"./Pencil-C7V01fPG.js";import"./Trash-CBYCI39t.js";import"./SkipLink-BH85XRTj.js";import"./Banner-CHaR_lTw.js";import"./GlobalHeader-CwtldYy5.js";import"./useIsDesktop-B3Kf1_kp.js";import"./GlobalAccountButton-ChDH8eEo.js";import"./Enter-QOjqzb8v.js";import"./GlobalMenuButton-BTY7MIVd.js";import"./MenuHamburger-BwbXv_3L.js";import"./AccountSelector-BdLq9o7q.js";import"./heading-yFKmy4mk.js";import"./AccountMenu-DzDo23pz.js";import"./Switch-CFAy6nJV.js";import"./GlobalMenu-DLMrNCvB.js";import"./ArrowUndo-DP3wQisr.js";import"./Globe-ghm5oPz9.js";import"./BreadcrumbsLink-yC0UMR4E.js";import"./ArrowRight-DDuYd5Sn.js";import"./Footer-C9UkhiRm.js";import"./SettingsModal-2DOGG5hN.js";import"./ModalBody-BtJGyYre.js";import"./Section-DQEzrtai.js";import"./Flex-ErkwFvdj.js";import"./ButtonGroup-BdRMlEte.js";import"./ButtonIcon-DbIrT_gT.js";import"./ButtonLabel-CQvjwTEk.js";import"./TextField-De0Y2qe5.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ao=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ao as __namedExportsOrder,zo as default};
