import{j as t}from"./iframe-V8BRfBgT.js";import{B as a,u as n}from"./useBookmarks-DCfqEYdd.js";import{L as c}from"./Layout-DS8svBca.js";import{B as d}from"./BookmarkModal-BhuD5T58.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DtQmnqL0.js";import"./QueryLabel-BxPUsrn3.js";import"./Plus-DYqQ5ZW1.js";import"./useId-Cpax_hNq.js";import"./Heading-CGSCg4GY.js";import"./index-Dg3z2A9f.js";import"./useHighlightedText-DnT87ATC.js";import"./Skeleton-BQtaEJM-.js";import"./SettingsItemBase-BV6WBeO5.js";import"./ChevronUp-DYD-_Lcf.js";import"./ChevronDown-Dj082slW.js";import"./ChevronRight-Cz_uty1S.js";import"./ItemLink-B6sA5uMo.js";import"./ItemMedia-C3tA4Zzy.js";import"./XMark-C45HvrEl.js";import"./Avatar-BDDvrYzF.js";import"./AvatarGroup-KHWc8S2T.js";import"./Icon-BWOTtVf8.js";import"./ItemControls-BctCfWNT.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./Typography-BiIpQq_S.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./ContextMenu-D6_jywBP.js";import"./useDropdownMenuController-B5tdkj26.js";import"./Dropdown-ChJd6AE_.js";import"./Button-BlxzDMPI.js";import"./button-2-meUg78.js";import"./MenuElipsisHorizontal-DkUfYG-z.js";import"./SearchField-D2AXVYp0.js";import"./FieldBase-DENJ-wBn.js";import"./Label-DdQ1zxpY.js";import"./index-ByKBsU4r.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuListHeading-nXDmyZ7G.js";import"./MenuItem-DQUORZa0.js";import"./Checkmark-BKwfqVUb.js";import"./useMenu-D2cFOQcG.js";import"./index-84oeY8HP.js";import"./InformationSquare-Bxq9CYlT.js";import"./Pencil-CaJ-c92M.js";import"./Trash-BZTx2yoj.js";import"./SkipLink-XE89HiH5.js";import"./Banner-CdvdYJhx.js";import"./GlobalHeader-W4TQvnUS.js";import"./useIsDesktop-Bl9_iylm.js";import"./GlobalAccountButton-D1niDOz_.js";import"./Enter-BTLcflkc.js";import"./GlobalMenuButton-JCXthAIP.js";import"./MenuHamburger-BATPuSR-.js";import"./AccountSelector-K8BxGoPa.js";import"./heading-DRHKTNUx.js";import"./AccountMenu-BEGmSxR4.js";import"./Switch-tNambPi0.js";import"./GlobalMenu-6qJ841gB.js";import"./ArrowUndo-ZeGtF0l8.js";import"./Globe-DF7sL7sD.js";import"./BreadcrumbsLink-DcG-L0Vs.js";import"./ArrowRight-tNKEYIfv.js";import"./Footer-Y_g0CgdM.js";import"./SettingsModal-DeDDsN3r.js";import"./ModalBody-6Y6EgB47.js";import"./Section-BCm3_cLa.js";import"./Flex-Cr7oVI5u.js";import"./ButtonGroup-GmtwjaC0.js";import"./ButtonIcon-Cv74LTLY.js";import"./ButtonLabel-Du-lXLEM.js";import"./TextField-Dm4BLBNO.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ao=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ao as __namedExportsOrder,zo as default};
