import{j as t}from"./iframe-Nkxls2w0.js";import{B as a,u as n}from"./useBookmarks-DqXeILxh.js";import{L as c}from"./Layout-zkHRE3mb.js";import{B as d}from"./BookmarkModal-DO0fVH_I.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-CoJ6Ea9t.js";import"./QueryLabel-C-N0DPNI.js";import"./Plus-DIAMQcGN.js";import"./useId-C8J5yFeN.js";import"./Heading-AZ4WQ_-Y.js";import"./index-M4TkGQLb.js";import"./useHighlightedText-BtUjP4Uj.js";import"./Skeleton-DNS4c1Rp.js";import"./SettingsItemBase-AQpsglss.js";import"./ChevronUp-UjgZK29V.js";import"./ChevronDown-DGUtPuYx.js";import"./ChevronRight-Bcpq3qt2.js";import"./ItemLink-CJbh8GaA.js";import"./ItemMedia-CsEr1Zw1.js";import"./XMark-D-ALqV0n.js";import"./Avatar-BDGJojEv.js";import"./AvatarGroup-BM9A-Bel.js";import"./Icon-qDX4JAC4.js";import"./ItemControls-BH6jrH_o.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./Typography-CZZfCvh6.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./ContextMenu-BNXGj103.js";import"./useDropdownMenuController-BB48Tjgy.js";import"./Dropdown-D5aFsl9a.js";import"./Button-Ds9vuGVD.js";import"./button-CK59nDyy.js";import"./MenuElipsisHorizontal-CFVZ-H4Q.js";import"./SearchField-Bb3Ffka2.js";import"./FieldBase-Drb41XPf.js";import"./Label-DRBFvXSF.js";import"./index-Bvwkp7W_.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuListHeading-CEofuJGo.js";import"./MenuItem-edMrv6Qw.js";import"./Checkmark-DHusaxnp.js";import"./useMenu-WCeLZ4vF.js";import"./InformationSquare-zR5D--CT.js";import"./Pencil-Bke20GIE.js";import"./Trash-3ZsUZg5A.js";import"./SkipLink-C3eAUp5R.js";import"./Banner-CR2T8d4d.js";import"./GlobalHeader-C43hCrm7.js";import"./useIsDesktop-B3v56MMA.js";import"./GlobalAccountButton-1LpwA0ez.js";import"./Enter-B5kYaJFx.js";import"./GlobalMenuButton-DgZ1n528.js";import"./MenuHamburger-RVcJ4Btq.js";import"./AccountSelector-BgAPchbc.js";import"./heading-DBVrBNvc.js";import"./AccountMenu-BBk-Oh_e.js";import"./Switch-C1jPtUo5.js";import"./GlobalMenu-DJxhhp8Y.js";import"./ArrowUndo-DCCluNxu.js";import"./Globe-0ZUE1Hkm.js";import"./BreadcrumbsLink-BuCc8KvJ.js";import"./ArrowRight-fyKGUXd8.js";import"./Footer-Blb1oOVu.js";import"./SettingsModal-CxkoOWEY.js";import"./ModalBody-BW4Wp4B4.js";import"./Section-DtOfuDKh.js";import"./Flex-BbiGghB8.js";import"./ButtonGroup-HCy2ouFP.js";import"./ButtonIcon-Du8IWwj9.js";import"./ButtonLabel-CHOaFLZI.js";import"./TextField-bLFklYeL.js";const wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const zo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,zo as __namedExportsOrder,wo as default};
