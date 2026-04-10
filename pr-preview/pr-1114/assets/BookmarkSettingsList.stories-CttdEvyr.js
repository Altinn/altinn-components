import{j as t}from"./iframe-BbAJh2l_.js";import{B as a,u as n}from"./useBookmarks-BfnNMWNI.js";import{L as c}from"./Layout-BlefDteI.js";import{B as d}from"./BookmarkModal-B1tV_gH7.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-c7I9zH32.js";import"./index-D4eFSvt3.js";import"./SettingsSection-DcDOC-Tt.js";import"./Section-DKBhzXh6.js";import"./BookmarkSettingsItem-DftcC9kO.js";import"./QueryLabel-BVV4lG_E.js";import"./Plus-Db8QMMb0.js";import"./useId-DlaeWOGU.js";import"./Heading-DtMkhgFU.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./Skeleton-DCAPmpFX.js";import"./SettingsItemBase-CTklnRrH.js";import"./ChevronRight-C-emBdlp.js";import"./ItemLink-ByFnaisq.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./XMark-CBD09dy-.js";import"./Avatar-j2CMQG5s.js";import"./AvatarGroup-D7oFGG3U.js";import"./Icon-BPIDnrjf.js";import"./ItemControls-B5jsMXbN.js";import"./Badge-Bayw0f9c.js";import"./MagnifyingGlass-DGbwovi2.js";import"./ContextMenu-WSksyULt.js";import"./useDropdownMenuController-C3VaoHjC.js";import"./Dropdown-oBR_mdc3.js";import"./Button-MneWcYDg.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./Tooltip-C777j_wE.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DkCmNo2T.js";import"./SearchField-DsP_4HyY.js";import"./FieldBase-DPxwAUyD.js";import"./Typography-Dc6esLAJ.js";import"./Label-BPdBz656.js";import"./index-BNnwLbXZ.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./MenuListItem-DT3pt1_M.js";import"./MenuListHeading-CDqxI5H7.js";import"./MenuItem-CGPdVF_D.js";import"./Checkmark-DCzlJj3W.js";import"./useMenu-YgVQ1Cwa.js";import"./InformationSquare-ina-Qzjq.js";import"./List-BLhrP6Wq.js";import"./ListItem-1XPivOtK.js";import"./ChevronUp-BK_whBfS.js";import"./ChevronDown-B5pHKuJa.js";import"./Divider-DNbY4sde.js";import"./Pencil-BfQO2BKA.js";import"./Trash-CReBsH0T.js";import"./SkipLink-CeCbhg0n.js";import"./GlobalHeader-CprVl9Sc.js";import"./useIsDesktop-CLdfxTOe.js";import"./GlobalAccountButton-GP-J4vew.js";import"./Enter-BnQRxA_F.js";import"./GlobalMenuButton-lsGvtnfM.js";import"./MenuHamburger-DD5Albkt.js";import"./AccountSelector-ECk_-4Qg.js";import"./heading-B6zctrux.js";import"./AccountMenu-BSgSTNnh.js";import"./Switch-DAFxZsdg.js";import"./GlobalMenu-D4e3uFE0.js";import"./ArrowUndo-pVsY4qWr.js";import"./Globe-DjjENoKK.js";import"./LocaleSwitcher-BE7LpRE8.js";import"./DigdirLogomark-C5l6MbAe.js";import"./SearchbarField-Cpy9Marg.js";import"./AutocompleteItem-tZKgj1qi.js";import"./DropdownBase-DrvyGdmc.js";import"./useClickOutside-Gtkv9Bjl.js";import"./GlobalMenuButton-BL56lH6C.js";import"./PadlockLocked-Bsh5zK5G.js";import"./ButtonLabel-DIGtAAjs.js";import"./ButtonIcon-NlGHLcOm.js";import"./BreadcrumbsLink-CSB0nW6U.js";import"./ArrowRight-q_aSapAv.js";import"./Footer-JM6Cp94G.js";import"./SettingsModal-AaCSZwHI.js";import"./ModalBase-BoJmG0Fd.js";import"./ModalBody-CkSLrsr5.js";import"./ButtonGroup-CfWicBai.js";import"./TextField-Bgl0Fv4z.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
