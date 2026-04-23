import{j as t}from"./iframe-DDirkHus.js";import{B as a,u as n}from"./useBookmarks-BdHzGqvh.js";import{L as c}from"./Layout-JdQJNewf.js";import{B as d}from"./BookmarkModal-BkUVRJlp.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CKMYHSxr.js";import"./index-B2YDfdyU.js";import"./SettingsSection-B29o0vs2.js";import"./Section-CUHbf36A.js";import"./BookmarkSettingsItem-C95u6t4i.js";import"./QueryLabel-CUifN9Z4.js";import"./Plus-DXvjiSe3.js";import"./useId-CVUrh2ea.js";import"./Heading-s9P5sHvn.js";import"./useHighlightedText-CWfqHJQe.js";import"./Skeleton-0VOrezcL.js";import"./SettingsItemBase-DBC9ng52.js";import"./ChevronRight-BUOZMhwy.js";import"./ItemLink-ClwPv_--.js";import"./ItemMedia-ZkVlWcbo.js";import"./XMark-DldqIUES.js";import"./Avatar-DMl0Fglw.js";import"./AvatarGroup-CxNYw_3L.js";import"./Icon-Cv1R39O2.js";import"./ItemControls-CqR56LSR.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-BGbR81wS.js";import"./ContextMenu-DZDnk7kI.js";import"./useDropdownMenuController-2ed30dPc.js";import"./Dropdown-CtjdzYco.js";import"./Button-CdMyOsNo.js";import"./button-CnVt3gpj.js";import"./MenuElipsisHorizontal-BkKgR8yc.js";import"./SearchField-CByF2bQh.js";import"./FieldBase-BNjKJDB0.js";import"./Typography-Do8CAd45.js";import"./Label-9QWpQ8Bw.js";import"./index-F2gU6D0V.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./MenuListItem-DoS1mSfo.js";import"./MenuListHeading-7XRfXaU1.js";import"./MenuItem-BsaYehiV.js";import"./Checkmark-MQqJd3cN.js";import"./useMenu-DLxXpcV8.js";import"./InformationSquare-D3Ojtweu.js";import"./List-Cjvw0Kzt.js";import"./ListItem-CNfUb6zi.js";import"./ChevronUp-CfXo5p6V.js";import"./ChevronDown-BujCn4TJ.js";import"./Divider-Cl3reezY.js";import"./Pencil-C0u2oaZd.js";import"./Trash-D38buOH3.js";import"./SkipLink-Bi_HVdLc.js";import"./GlobalHeader-0-fuVh-W.js";import"./useIsDesktop-Byt4gJYs.js";import"./GlobalAccountButton-CH07crJh.js";import"./Enter-txooyGSq.js";import"./GlobalMenuButton-IiL42zF-.js";import"./MenuHamburger-lKI_Kf6L.js";import"./AccountSelector-B0zHUHF5.js";import"./heading-B8ZS2Rso.js";import"./AccountMenu-57MaxCEA.js";import"./Switch-DcTcdqOA.js";import"./GlobalMenu-sGjXVQkA.js";import"./ArrowUndo-cRffdIA3.js";import"./Globe-qiPXxajI.js";import"./LocaleSwitcher-BkB8sfLE.js";import"./DigdirLogomark-CTqr-e4H.js";import"./SearchbarField-jvVLPlxQ.js";import"./AutocompleteItem-CbJGLhHb.js";import"./DropdownBase-BFhqzAXp.js";import"./useClickOutside-BxYZb6cF.js";import"./GlobalMenuButton-Ctj_6jAX.js";import"./PadlockLocked-Dmfb7QyW.js";import"./ButtonLabel-D_WD8Z8N.js";import"./ButtonIcon-Cvt6zSue.js";import"./BreadcrumbsLink-BFdNClmt.js";import"./ArrowRight-N6x-ZZtT.js";import"./Footer-DXvZOqC3.js";import"./SettingsModal-u_O97U3x.js";import"./ModalBase-DnjQHIZ0.js";import"./ModalBody-CM30JKF1.js";import"./ButtonGroup-B-c85YOq.js";import"./TextField-D1RIV1wY.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
