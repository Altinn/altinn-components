import{j as t}from"./iframe-JDDu8qct.js";import{B as a,u as n}from"./useBookmarks-B927IgWy.js";import{L as c}from"./Layout-CqYv2eDy.js";import{B as d}from"./BookmarkModal-BKptkpsT.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BxwOuuQR.js";import"./index--LOES4hQ.js";import"./SettingsSection-GInyrCOf.js";import"./Section-0xRJEQzM.js";import"./BookmarkSettingsItem-Chk00A9p.js";import"./QueryLabel-C4OKsj5_.js";import"./Plus-B0ASUJ6t.js";import"./useId-BWG34Gxg.js";import"./Heading-DTbUzRnV.js";import"./useHighlightedText-CEk7sGm4.js";import"./Skeleton-CG77vT0k.js";import"./SettingsItemBase-BLjp_FVb.js";import"./ChevronUp-Skyl4vcA.js";import"./ChevronDown-Bp0cSPFx.js";import"./ChevronRight-CAXd-oaR.js";import"./ItemLink-C0xhkHSa.js";import"./ItemMedia-Xjox6rUV.js";import"./XMark-YkWOq4QK.js";import"./Avatar-C90IY9ut.js";import"./AvatarGroup-iM9HxeRB.js";import"./Icon-DIHT6axv.js";import"./ItemControls-_7JFqe2W.js";import"./Badge-mnqqv4hK.js";import"./Tooltip-DdVbMRYJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-Dm0wt9US.js";import"./lite-DaUVFjkg.js";import"./Typography-yaBddsX3.js";import"./MagnifyingGlass-DxjT3S7Z.js";import"./ContextMenu-CY-OQIYm.js";import"./useDropdownMenuController-Dq4qSJid.js";import"./Dropdown-C4SP0e_D.js";import"./Button-DJdKIqrT.js";import"./button-xt_-egYh.js";import"./MenuElipsisHorizontal-3YEM2VfJ.js";import"./SearchField-CPeUZoGo.js";import"./FieldBase-D3HPIoAl.js";import"./Label-D5tTdPwy.js";import"./index-BaWoKolw.js";import"./Input-BYdHuux7.js";import"./input-qV3rGBnT.js";import"./MenuListItem-CSWiIfGI.js";import"./MenuListHeading-5MWZ1R2O.js";import"./MenuItem-C4GbvFyO.js";import"./Checkmark-D1rpd2hz.js";import"./useMenu-DwkqWK9f.js";import"./InformationSquare-CibJvFTt.js";import"./List-nBnRX5N2.js";import"./ListItem-D34g-riv.js";import"./Divider-CEupNHti.js";import"./Pencil-Ck_2vg13.js";import"./Trash-BUbta1pc.js";import"./SkipLink-DhjzLoLd.js";import"./Banner-CpOWy3kF.js";import"./GlobalHeader-Nyiaiope.js";import"./useIsDesktop-Y2CHoPsm.js";import"./GlobalAccountButton-ShTzW6cT.js";import"./Enter-8voGXUw8.js";import"./GlobalMenuButton-CQEoGbbI.js";import"./MenuHamburger-D7z-4ipp.js";import"./AccountSelector-BoFcIJVp.js";import"./heading-TPm_AWJd.js";import"./AccountMenu-CFZPJtUH.js";import"./Switch-BV9s5x1n.js";import"./GlobalMenu-CofNryLE.js";import"./ArrowUndo-OD1mDHyP.js";import"./Globe-D8fNhFMN.js";import"./BreadcrumbsLink-CdI_pAsN.js";import"./ArrowRight-G6csqhYC.js";import"./Footer-B-zsBcmx.js";import"./SettingsModal-BETMIUKy.js";import"./ModalBody-BI0E2lEd.js";import"./ButtonGroup-BtRMC3LR.js";import"./ButtonIcon-Dgd7YJHv.js";import"./ButtonLabel-BSXpWNmt.js";import"./TextField-kU4FMRNR.js";const Do={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ho=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ho as __namedExportsOrder,Do as default};
