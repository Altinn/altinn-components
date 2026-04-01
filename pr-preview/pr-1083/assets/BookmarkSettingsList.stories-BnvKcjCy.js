import{j as t}from"./iframe-DxKlu2kD.js";import{B as a,u as n}from"./useBookmarks-zZzb_lUT.js";import{L as c}from"./Layout-C9i48Gy-.js";import{B as d}from"./BookmarkModal-kW9ZZLqy.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CFZAXqgp.js";import"./index-BWCSYHeO.js";import"./SettingsSection-CEAxqHNm.js";import"./Section-5cGBq3ET.js";import"./BookmarkSettingsItem-TbAeEpAs.js";import"./QueryLabel-9PVapst6.js";import"./Plus-Dz67JQoo.js";import"./useId-_YfdAmsW.js";import"./Heading-m7XVygop.js";import"./useHighlightedText-DHBtHLKn.js";import"./Skeleton-niSIm0IT.js";import"./SettingsItemBase-DrhskNnl.js";import"./ListItem-BFQ5Iogs.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./XMark-C1fx_pyo.js";import"./Icon-CrZKj0Yv.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Badge-4TJDD2P9.js";import"./ChevronUp-CoEIha6w.js";import"./ChevronDown-C5m-qI-T.js";import"./ChevronRight-DCeYx28-.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./ContextMenu-BRoNLVIW.js";import"./useDropdownMenuController-cNOqav4I.js";import"./Dropdown-BlFnr1UG.js";import"./Tooltip-DFu8-nHR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Brj3vs9F.js";import"./SearchField-yItf8ktv.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Checkmark-C9NR0hmL.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";import"./List-C5g4_qse.js";import"./Divider-CHLjagug.js";import"./Pencil-CJFXQ6QR.js";import"./Trash-BduIn3aS.js";import"./SkipLink-DQXSxsAm.js";import"./GlobalHeader-DB-IkWsY.js";import"./useIsDesktop-BOE7l-hO.js";import"./GlobalAccountButton-CBWME_mE.js";import"./Enter-AGjjGuPu.js";import"./GlobalMenuButton-D7PmTt2o.js";import"./MenuHamburger-W1FDwBr8.js";import"./AccountSelector-Duvejp4R.js";import"./heading-jTnIlddE.js";import"./AccountMenu-SjpBIltx.js";import"./Switch-BzdDuGzs.js";import"./GlobalMenu-Ckbcmmd3.js";import"./ArrowUndo-BeF4mKpq.js";import"./Globe-eyFWzdKT.js";import"./LocaleSwitcher-sArRYORf.js";import"./DigdirLogomark-CUyaUXyD.js";import"./SearchbarField-DxqtDh0S.js";import"./AutocompleteItem-BmmZWTfe.js";import"./DropdownBase-DaCnHxjM.js";import"./useClickOutside-uhEEdzFg.js";import"./GlobalMenuButton-Vcss85wZ.js";import"./PadlockLocked-0QQ-kzkD.js";import"./ButtonLabel-DyfUioWj.js";import"./ButtonIcon-Cd03PLYe.js";import"./BreadcrumbsLink-yV83uJc4.js";import"./ArrowRight-DMu2HrHk.js";import"./Footer-DIcNzeYs.js";import"./SettingsModal-D2YwlUzk.js";import"./ModalBase-DpPU055p.js";import"./ModalBody-DiTxFtGR.js";import"./ButtonGroup-CKoZVXux.js";import"./TextField-sxh8TgHs.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Vo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Vo as __namedExportsOrder,To as default};
