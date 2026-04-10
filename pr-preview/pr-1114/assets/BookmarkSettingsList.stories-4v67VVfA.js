import{j as t}from"./iframe-BmFIVBn_.js";import{B as a,u as n}from"./useBookmarks-DJs5PP0q.js";import{L as c}from"./Layout-C-sGSGjr.js";import{B as d}from"./BookmarkModal-BK1r19tR.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CFezmhlL.js";import"./index-3BUTcXKg.js";import"./SettingsSection--CUIl9Kc.js";import"./Section-8wZRyHWu.js";import"./BookmarkSettingsItem-BdqUdljg.js";import"./QueryLabel-DAp7MuQj.js";import"./Plus-DVwzyLY6.js";import"./useId-ClegSKnE.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./Skeleton-DRn19mA6.js";import"./SettingsItemBase-Ad-naNyj.js";import"./ChevronRight-DcRWf4tm.js";import"./ItemLink-CbhqGqnO.js";import"./ItemMedia-CCYQNyqL.js";import"./XMark-DPeWQ31a.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Icon-zZDqlwOf.js";import"./ItemControls-B2xjI1HN.js";import"./Badge-DoiHwmxA.js";import"./MagnifyingGlass-B0C_9vni.js";import"./ContextMenu-BSs9gTuy.js";import"./useDropdownMenuController-D8IQ0jaC.js";import"./Dropdown-OBdyljPV.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./Tooltip-B1Uxs2J8.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-1g4ibsMX.js";import"./SearchField-BQQnPaDG.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./MenuListItem-INuSyNfv.js";import"./MenuListHeading-D4ZyNWhk.js";import"./MenuItem-BvPBRlig.js";import"./Checkmark-DWNi5SDl.js";import"./useMenu-BRAeQdeQ.js";import"./InformationSquare-Ct2wAfNF.js";import"./List-DKOvmWxK.js";import"./ListItem-CaiNUw8w.js";import"./ChevronUp-DNi3P42Z.js";import"./ChevronDown-B_BWwBHT.js";import"./Divider-BzRFkj3B.js";import"./Pencil-CFPT9nVE.js";import"./Trash-eorIYi8J.js";import"./SkipLink-CDalTioY.js";import"./GlobalHeader-9nNHyNJ1.js";import"./useIsDesktop-DRH7pKvW.js";import"./GlobalAccountButton-Bf0ijC4c.js";import"./Enter-CrFD7q1W.js";import"./GlobalMenuButton-C0YW8UdD.js";import"./MenuHamburger-DON02Xtn.js";import"./AccountSelector-Fp4QdO8s.js";import"./heading-DDh33riJ.js";import"./AccountMenu-DkJxUI7S.js";import"./Switch-72xu8gyc.js";import"./GlobalMenu-DMJlr2BX.js";import"./ArrowUndo-Bbp1RnaE.js";import"./Globe-CS0vj-xA.js";import"./LocaleSwitcher-Dh4nP8eN.js";import"./DigdirLogomark-D3-1m7Uz.js";import"./SearchbarField-DW-BwLGs.js";import"./AutocompleteItem-DYqbhP49.js";import"./DropdownBase-BLNkKCkf.js";import"./useClickOutside-DEjsvD2U.js";import"./GlobalMenuButton-CpiwPikz.js";import"./PadlockLocked-C26Pv4Gt.js";import"./ButtonLabel-JoMzXma_.js";import"./ButtonIcon-BhDAFAtm.js";import"./BreadcrumbsLink-BEnEhEUM.js";import"./ArrowRight-CoKGj20P.js";import"./Footer-D-M5p2B-.js";import"./SettingsModal-CSSxsvFR.js";import"./ModalBase-C8uvGW6d.js";import"./ModalBody-DgmBWAGP.js";import"./ButtonGroup-DOYzKGQP.js";import"./TextField-DNty29AR.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
