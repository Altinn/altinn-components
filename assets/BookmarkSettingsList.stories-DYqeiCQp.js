import{a7 as t}from"./iframe-DMrRMxbq.js";import{B as a,u as n}from"./useBookmarks-CldlvPYc.js";import{B as d}from"./BookmarkModal-DP-ZRRnt.js";import{L as c}from"./Layout-JeqDW6pR.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CNg8vInV.js";import"./BookmarkSettingsItem-5IQWkzcz.js";import"./QueryLabel-Cs5R43NE.js";import"./Plus-CNvKeQn4.js";import"./Heading-BhmjWuIr.js";import"./useHighlightedText-qcaYlVq2.js";import"./SettingsItemBase-8tE--AV6.js";import"./ItemMedia-Dx1IKYEg.js";import"./Avatar-C6i6C6T9.js";import"./AvatarGroup-DVS-_6qx.js";import"./ChevronUp-iFSbc_bY.js";import"./ChevronDown-B_vMfdZY.js";import"./ChevronRight-ngEBzgMu.js";import"./ItemBase-Pn30j4Ce.js";import"./ItemLink-BR9CgO0o.js";import"./ItemControls-DNnHu-Ez.js";import"./Badge-CzHyduDR.js";import"./Tooltip-1SJQbRAy.js";import"./Typography-z164oB1T.js";import"./MagnifyingGlass-DofikZhZ.js";import"./ContextMenu-Bfc1xyI2.js";import"./useDropdownMenuController-V_PAwfJs.js";import"./Dropdown-B5Bg-WA0.js";import"./SearchField-nNatmuZA.js";import"./FieldBase-BwVJ7Sfq.js";import"./Field-DxDkeKhB.js";import"./Label-CB0_8IHy.js";import"./Input-CZPP85wE.js";import"./MenuListItem-CATFKnlr.js";import"./MenuListDivider-CzVCr-XK.js";import"./MenuListHeading-B9JHXv6C.js";import"./MenuItem-DLpEa2I6.js";import"./Checkmark-BUuDcLZs.js";import"./ItemLabel-DavwL6MJ.js";import"./InformationSquare-C88VQYSr.js";import"./MenuElipsisHorizontal-B8IDozkD.js";import"./Pencil-cfwYBQBM.js";import"./Trash-EXN3xZ3n.js";import"./SettingsModal-hbvHbbLI.js";import"./ModalBody-DyvDS6kr.js";import"./Section-R5IQ5vtB.js";import"./Flex-D4xbJs2N.js";import"./ButtonGroup-DGYAXoph.js";import"./ButtonIcon-CVi_n_n2.js";import"./ButtonLabel-DrLm7ODF.js";import"./TextField-CvMUKPG7.js";import"./SkipLink-4YbRrFwP.js";import"./CookieBanner-C_MDX-N6.js";import"./Banner-kW9XarUo.js";import"./GlobalHeader-eiSHWSql.js";import"./useIsDesktop-BZ5IVph7.js";import"./GlobalAccountButton-PnIW8EKf.js";import"./Enter-BqiFr20G.js";import"./GlobalMenuButton-C1DCU4FG.js";import"./MenuHamburger-LUIk6x4-.js";import"./AccountSelector-BRvHao2Y.js";import"./Switch-CPFxWEtZ.js";import"./AccountMenu-CmOp2xUf.js";import"./GlobalMenu-f-YUs_iC.js";import"./ArrowUndo-DjzOQXeb.js";import"./Globe-BfSA-wJy.js";import"./BreadcrumbsLink-Bf-OkN9K.js";import"./ArrowRight-BDzZD6JY.js";import"./Footer-Cy-1Nduu.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
