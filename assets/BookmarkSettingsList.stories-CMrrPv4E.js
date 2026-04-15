import{j as t}from"./iframe-Bka3lqwZ.js";import{B as a,u as n}from"./useBookmarks-CN2-P4So.js";import{L as c}from"./Layout-B0dnLNlZ.js";import{B as d}from"./BookmarkModal-DvBZWgMb.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CDu7UET9.js";import"./index-97QH58ax.js";import"./SettingsSection-CnME4B34.js";import"./Section-DgAAlgWN.js";import"./BookmarkSettingsItem-uAqlWQpk.js";import"./QueryLabel-B9pbQKbm.js";import"./Plus-Cr5OOVFj.js";import"./useId-BOUKUp4S.js";import"./Heading-BxCaPg4n.js";import"./useHighlightedText-DGjnrdw2.js";import"./Skeleton-ECUY2hPc.js";import"./SettingsItemBase-B0z-i7MF.js";import"./ChevronRight-1C-HJkAE.js";import"./ItemLink-C9-2FncN.js";import"./ItemMedia-Ca3m8l5m.js";import"./XMark-BopKFElT.js";import"./Avatar-DUWR3kRV.js";import"./AvatarGroup-mAK5Ma76.js";import"./Icon-DoXRGO_6.js";import"./ItemControls-abhSx9yX.js";import"./Badge-Dr-ny6rj.js";import"./MagnifyingGlass-ohRS00MN.js";import"./ContextMenu-D2ehfNYC.js";import"./useDropdownMenuController-DQoP6UHy.js";import"./Dropdown-BPOECmw-.js";import"./Button-DIVYOCsY.js";import"./button-CqWrgnGb.js";import"./use-merge-refs-CTw0OEaY.js";import"./lite-DaUVFjkg.js";import"./Tooltip-tPkJ6t7_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-BosBpfbA.js";import"./SearchField-CSZgV0pa.js";import"./FieldBase-BlSXl2oz.js";import"./Typography-CMwGEMpO.js";import"./Label-Bo_SdTne.js";import"./index-CQEQ6FSB.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./MenuListItem-DQuvdYRk.js";import"./MenuListHeading-g29dlFn5.js";import"./MenuItem-CQZjBmzk.js";import"./Checkmark-Bf4nZE-q.js";import"./useMenu-Cu8ej4cj.js";import"./InformationSquare-BNmERE6I.js";import"./List-DrMi80p5.js";import"./ListItem-CvqbKmOV.js";import"./ChevronUp-1mXV-FY3.js";import"./ChevronDown-7HdAqi_x.js";import"./Divider-BS5IHdZL.js";import"./Pencil-CQqiGmRF.js";import"./Trash-CKkWVRjk.js";import"./SkipLink-BItzPXmf.js";import"./GlobalHeader-CYwQjFnJ.js";import"./useIsDesktop-CD3cIJ_t.js";import"./GlobalAccountButton-B6uSesqL.js";import"./Enter-Cf0uIiLz.js";import"./GlobalMenuButton-eV1BHStv.js";import"./MenuHamburger-Jx8psQzX.js";import"./AccountSelector-DKqcgb-o.js";import"./heading-B9ZbdWY0.js";import"./AccountMenu-Gq3XIbMp.js";import"./Switch-BEx3_1xn.js";import"./GlobalMenu-DG51-Dax.js";import"./ArrowUndo-DmOTw-PR.js";import"./Globe-BjBVeJDm.js";import"./LocaleSwitcher-BBAKVJBF.js";import"./DigdirLogomark-D7HSE_dM.js";import"./SearchbarField-qiWMG-1y.js";import"./AutocompleteItem-C3wMsO3s.js";import"./DropdownBase-kw0JlleQ.js";import"./useClickOutside-afXVzWjz.js";import"./GlobalMenuButton-Bxl24uIP.js";import"./PadlockLocked-DOz1AsHg.js";import"./ButtonLabel-DqK0tKkl.js";import"./ButtonIcon-olOKGEVR.js";import"./BreadcrumbsLink-D7KfsIwm.js";import"./ArrowRight-BJiXxkts.js";import"./Footer-Uqr1Pszy.js";import"./SettingsModal-Df_Asiil.js";import"./ModalBase-BcOJelni.js";import"./ModalBody-erGC5Qsu.js";import"./ButtonGroup-DnIZGAD0.js";import"./TextField-ml4b6CR9.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Xo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Xo as __namedExportsOrder,Wo as default};
