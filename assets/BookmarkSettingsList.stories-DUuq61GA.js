import{a7 as t}from"./iframe-DdvxY_xq.js";import{B as a,u as n}from"./useBookmarks-iRDr0OFs.js";import{B as d}from"./BookmarkModal-BOo0minT.js";import{L as c}from"./Layout-kQ_rAEUm.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Cr8gFQCV.js";import"./BookmarkSettingsItem-DORpFo99.js";import"./QueryLabel-Sze88Gf_.js";import"./Plus-C9Ly1iUu.js";import"./Heading-CE6yLC7h.js";import"./useHighlightedText-BFt57PCX.js";import"./SettingsItemBase-CQVL7LEG.js";import"./ItemMedia-DUTgrI06.js";import"./Avatar-BkRf-LcA.js";import"./AvatarGroup-o6Z87nDX.js";import"./ChevronUp-C_S4jFxx.js";import"./ChevronDown-BoDhB4yd.js";import"./ChevronRight-C3Cb2zNm.js";import"./ItemBase-BUxw1lU_.js";import"./ItemLink-S0obXchf.js";import"./ItemControls-DoOKV45e.js";import"./Badge-CGTcd0en.js";import"./Tooltip-BRmZYzim.js";import"./Typography-CUBjJcUl.js";import"./MagnifyingGlass-BNJradcO.js";import"./ContextMenu-CcrpMEqP.js";import"./useDropdownMenuController-BKuLMBHY.js";import"./Dropdown-DHo9FStr.js";import"./SearchField-Cr3Gi8TV.js";import"./FieldBase-DD97eycm.js";import"./Field-Dc25EUil.js";import"./Label-CJtMWK76.js";import"./Input-2Gn2X0Ml.js";import"./MenuListItem-BiOJri4m.js";import"./MenuListHeading-CMTKGvH9.js";import"./MenuItem-L68RSDFn.js";import"./Checkmark-DJVRCLhU.js";import"./ItemLabel-C58CsJMo.js";import"./index-BdOTeIXC.js";import"./InformationSquare-CvBtG7YX.js";import"./MenuElipsisHorizontal-UkoNHz82.js";import"./Pencil-BIKCzQ1_.js";import"./Trash-CAj2zqGr.js";import"./SettingsModal-CwLHclOx.js";import"./ModalBody-DsO_o22C.js";import"./Section-lr4hansN.js";import"./Flex-Ban15jaQ.js";import"./ButtonGroup-D_joR3q8.js";import"./ButtonIcon-BH7NDyQX.js";import"./ButtonLabel-kMxmKDlJ.js";import"./TextField-Bv_39GkJ.js";import"./SkipLink-B925TUjB.js";import"./Banner-BPzmz5Ks.js";import"./GlobalHeader-B2QzOWd5.js";import"./useIsDesktop-AGWoK93p.js";import"./GlobalAccountButton-7E-72DTR.js";import"./Enter-DptF4vYL.js";import"./GlobalMenuButton-BdSZ5wBl.js";import"./MenuHamburger-WeCbK5N8.js";import"./AccountSelector-cIA8f3j9.js";import"./Switch-C2kkkoTe.js";import"./AccountMenu-DkgyqEhD.js";import"./GlobalMenu-CNgP95TM.js";import"./ArrowUndo-D_q0f42e.js";import"./Globe-gp5NDpeK.js";import"./BreadcrumbsLink-BxvaO_FK.js";import"./ArrowRight-BaYUyriL.js";import"./Footer-DQaZIBie.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const yo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,s as GroupedBookmarksList,yo as __namedExportsOrder,ho as default};
