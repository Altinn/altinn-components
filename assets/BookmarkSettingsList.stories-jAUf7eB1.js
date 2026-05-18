import{j as t}from"./iframe-Bk_HwK4l.js";import{B as a,u as n}from"./useBookmarks-BLCAQUK8.js";import{L as c}from"./Layout-DMzQhhMc.js";import{B as d}from"./BookmarkModal-DH0rQiWK.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-DPdB3j_G.js";import"./QueryLabel-CZc9dsnK.js";import"./Plus-Db6y3gEP.js";import"./useId-WArpTTRC.js";import"./Heading-D6li-Zgs.js";import"./index-Bj80ru-z.js";import"./useHighlightedText-BjD5CEaG.js";import"./Skeleton-CZ4GHxMp.js";import"./SettingsItemBase-QKrgQ9kJ.js";import"./ChevronUp-DmnNnXSw.js";import"./ChevronDown-Butud2ye.js";import"./ChevronRight-BEdxYQXL.js";import"./ItemLink-C7GmrZNk.js";import"./ItemMedia-QvgC3e5a.js";import"./XMark-BlM7H2uk.js";import"./Avatar-B1R5c004.js";import"./AvatarGroup-CkGvw6sL.js";import"./Icon-BbsTdu7G.js";import"./ItemControls-DoACt_K_.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./Typography-9_XA-VKE.js";import"./MagnifyingGlass-BtHw2Y5y.js";import"./ContextMenu-Ddpj-J5p.js";import"./useDropdownMenuController--BMHU_Uw.js";import"./Dropdown-DDGzAAFH.js";import"./Button-DXv-zg1S.js";import"./button-DRIhbrAI.js";import"./MenuElipsisHorizontal-Dp80SMX0.js";import"./SearchField-CcfOce7B.js";import"./FieldBase-zuKERQJx.js";import"./Label-D1l41OtR.js";import"./index-RvDLUlZV.js";import"./Input-kPMzbuYu.js";import"./input-6lO9tGv_.js";import"./MenuListItem-p80RBs_A.js";import"./MenuListHeading-RVi62nau.js";import"./MenuItem-BW0J3eqZ.js";import"./Checkmark-BwmprQFp.js";import"./useMenu-BNIm_aif.js";import"./index-BL_SwWgZ.js";import"./InformationSquare-D1WxufmY.js";import"./Pencil-oFql5W3J.js";import"./Trash-D4QcHzdr.js";import"./SkipLink-CNDGWICJ.js";import"./Banner-DjaEdV5f.js";import"./GlobalHeader-BvERlZj1.js";import"./useIsDesktop-DtaFkEnB.js";import"./GlobalAccountButton-B48oWHvp.js";import"./Enter-BTsqsWJv.js";import"./GlobalMenuButton-CwOQpq-X.js";import"./MenuHamburger-CKMlqnsy.js";import"./AccountSelector-D7vSqsSf.js";import"./heading-D5vp04a9.js";import"./AccountMenu-nqWsIwM6.js";import"./Switch-Dp4vFwT2.js";import"./GlobalMenu-DBRHlNQB.js";import"./ArrowUndo-DFEq1-Ux.js";import"./Globe-bFqWwKDV.js";import"./BreadcrumbsLink-DXiaezw9.js";import"./ArrowRight-CFWaHxT6.js";import"./Footer-D8m_3clk.js";import"./SettingsModal-DkPNb1kC.js";import"./ModalBody-BjB278uQ.js";import"./Section-DaLGW2Wx.js";import"./Flex-CqtyDzLK.js";import"./ButtonGroup-IyhiSPmN.js";import"./ButtonIcon-2DuRl7EZ.js";import"./ButtonLabel-B7SI3ORL.js";import"./TextField-ByOQI3xh.js";const zo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
