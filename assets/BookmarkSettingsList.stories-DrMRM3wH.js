import{j as t}from"./iframe-D8UVhXtj.js";import{B as a,u as n}from"./useBookmarks-opk64wiv.js";import{L as c}from"./Layout-Bkx0XW1_.js";import{B as d}from"./BookmarkModal-BINYPC5i.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-C6te8drU.js";import"./index-DZ6CWLt4.js";import"./SettingsSection-BcB_fPeh.js";import"./Section-CECOJo4z.js";import"./BookmarkSettingsItem-BWpAvzVu.js";import"./QueryLabel-XhqpPWA7.js";import"./Plus-DWBglMau.js";import"./useId-B_5z_sER.js";import"./Heading-BAduz1Vr.js";import"./useHighlightedText-CniNcpSk.js";import"./Skeleton-DuOqXwDT.js";import"./SettingsItemBase-CCTULRo5.js";import"./ListItem-BMdkWFBB.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./XMark-RzwOtF1Q.js";import"./Icon-DPTwfvyC.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Badge-FbSzRhwU.js";import"./ChevronUp-ceXuKviy.js";import"./ChevronDown-B-wfcPIe.js";import"./ChevronRight-BBMrC_JJ.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./ContextMenu-_5Z_O_-3.js";import"./useDropdownMenuController-DzAqcIMc.js";import"./Dropdown-DCJfu5rP.js";import"./Tooltip-Z_wNKmlw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-CLjONwTq.js";import"./SearchField-DrqRDMva.js";import"./FieldBase-DzrGcQVO.js";import"./Typography-n-xWt5s-.js";import"./Label-b2Pkfnmh.js";import"./index-B_UnVtHx.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuListHeading-BCjwSnwp.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./Checkmark-DOivg6Pe.js";import"./useMenu-Bi-E8KDv.js";import"./InformationSquare-BUh6v1hF.js";import"./List-BMtt49y1.js";import"./Divider-CSLu3akR.js";import"./Pencil-BGmQy4Lz.js";import"./Trash-CZH-fdX8.js";import"./SkipLink-DPT1_8iJ.js";import"./GlobalHeader-DfshMxHq.js";import"./useIsDesktop-BHp6sORW.js";import"./GlobalAccountButton-C6YXzlSA.js";import"./Enter-mHn0qkqX.js";import"./GlobalMenuButton-S-qBq0sm.js";import"./MenuHamburger-Bl4YfJVQ.js";import"./AccountSelector-CnfkPvqh.js";import"./heading-CfT28zLm.js";import"./AccountMenu-wBGgCIwc.js";import"./Switch-kNgrHrgD.js";import"./GlobalMenu-CaU4RnUU.js";import"./ArrowUndo-D71UVseq.js";import"./Globe-D2pwTjeG.js";import"./LocaleSwitcher-DEfGTgmN.js";import"./DigdirLogomark-BreUWI_F.js";import"./SearchbarField-C9qphrgF.js";import"./AutocompleteItem-Olet9oGK.js";import"./DropdownBase-CcHs2eZC.js";import"./useClickOutside-C7CiGEtT.js";import"./GlobalMenuButton-tij3rl8x.js";import"./PadlockLocked-B9n2XiiK.js";import"./ButtonLabel-DjMPs_6z.js";import"./ButtonIcon-Dy7UhGq8.js";import"./BreadcrumbsLink-BtRWxLRJ.js";import"./ArrowRight-DGgwj-q9.js";import"./Footer-DX5kPn5y.js";import"./SettingsModal-onIrvMbJ.js";import"./ModalBase-Tr-DRHUm.js";import"./ModalBody-B3VA1SE5.js";import"./ButtonGroup-o1ngc8Xw.js";import"./TextField-IO3FktGq.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
