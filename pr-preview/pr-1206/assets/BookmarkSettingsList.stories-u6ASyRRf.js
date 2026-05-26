import{p as t}from"./iframe-Ca1pxjCh.js";import{B as a,u as n}from"./useBookmarks-FKfmodO0.js";import{B as d}from"./BookmarkModal-lFp9Uqn2.js";import{L as c}from"./Layout-CuCTqQlv.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CVV4ErAO.js";import"./BookmarkSettingsItem-CnqKIlhE.js";import"./QueryLabel-BQjDexh0.js";import"./Plus-C2mGPGYW.js";import"./useId-DKdvhqLE.js";import"./Heading-BWtrIkld.js";import"./index-qsemo-NB.js";import"./useHighlightedText-B4z3dUTF.js";import"./Skeleton-CjJRr45L.js";import"./SettingsItemBase-BRIpfFkf.js";import"./ItemMedia-B1dbthGB.js";import"./XMark-D_G5yHBr.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Icon-DX2teY26.js";import"./ChevronUp-njmytnHj.js";import"./ChevronDown-BSf8h3gX.js";import"./ChevronRight-Dx7-HhpA.js";import"./ItemLink-BZQvVEJ1.js";import"./ItemControls-CcgtvJvT.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./tooltip-DBInG_0S.js";import"./Typography-B47euKof.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./ContextMenu-CZ_jSmTp.js";import"./useDropdownMenuController-D-Vc94VJ.js";import"./Dropdown-mQdbulVM.js";import"./Button-BUoYLOjU.js";import"./SearchField-CQtbSmEr.js";import"./FieldBase-B_jWg1W2.js";import"./Label-Dpkw0Wq9.js";import"./Input-CnEzvrKf.js";import"./MenuListItem-ChEwMlMz.js";import"./MenuListHeading-CfNBOaKJ.js";import"./MenuItem-LhE1AhKQ.js";import"./Checkmark-BNq65g6F.js";import"./index-C_HyNp1D.js";import"./InformationSquare-vAQpVtYs.js";import"./MenuElipsisHorizontal-Bwy8rMfn.js";import"./Pencil-DUVKEQRF.js";import"./Trash-CHO3PH3Q.js";import"./SettingsModal-BhsIDBtl.js";import"./ModalBody-DfLjWzAx.js";import"./Section-BSLTGuDV.js";import"./Flex-CU26bbCS.js";import"./ButtonGroup-Bt3kIkZr.js";import"./ButtonIcon-DcnGBPH8.js";import"./ButtonLabel-VpsJZKmQ.js";import"./TextField-B4w005z3.js";import"./SkipLink-B28xCE-N.js";import"./Banner-DreB_KuK.js";import"./GlobalHeader-BWfYn5jS.js";import"./useIsDesktop-yFsEw24L.js";import"./GlobalAccountButton-B6jHkhdr.js";import"./Enter-Mj2oKyhG.js";import"./GlobalMenuButton-SpKHJCZ4.js";import"./MenuHamburger-B57Oky4-.js";import"./AccountSelector-CV5tqM_-.js";import"./Switch-bAE40bod.js";import"./AccountMenu-CpDUjuDi.js";import"./GlobalMenu-yqvkxtaq.js";import"./ArrowUndo-DzsN0CWU.js";import"./Globe-CIgsGpV7.js";import"./BreadcrumbsLink-28UwBoEQ.js";import"./ArrowRight-k4XjWsje.js";import"./Footer-Csu2nDKR.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
