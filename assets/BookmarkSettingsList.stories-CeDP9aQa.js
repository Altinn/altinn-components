import{a7 as t}from"./iframe-BBxI6Qoj.js";import{B as a,u as n}from"./useBookmarks-D8iAsp_U.js";import{B as d}from"./BookmarkModal-LYcmp7Gq.js";import{L as c}from"./Layout-DBSRfOHo.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B76EeFEP.js";import"./BookmarkSettingsItem-DxkR421N.js";import"./QueryLabel-DQnX2ifk.js";import"./Plus-CVz3L4Fh.js";import"./Heading-D61lhVl1.js";import"./useHighlightedText-CESRz6Ap.js";import"./SettingsItemBase-DQaHfCrc.js";import"./ItemMedia-vu0P71y8.js";import"./Avatar-DrVCUDP7.js";import"./AvatarGroup-D15nbx4o.js";import"./ChevronUp-3jRKbU-M.js";import"./ChevronDown-BJPfgMjs.js";import"./ChevronRight-DVToFFYf.js";import"./ItemBase-z_U1AOBq.js";import"./ItemLink-Cj4Bv3sX.js";import"./ItemControls-BooS5V5d.js";import"./Badge-BWCWk7xl.js";import"./Tooltip-DgvofOl5.js";import"./Typography-DsE98WBK.js";import"./MagnifyingGlass-BMZG2bcC.js";import"./ContextMenu-DnwF159F.js";import"./useDropdownMenuController-BP3UF-Yt.js";import"./Dropdown-BGDRJ2sL.js";import"./SearchField-CTzRwjSn.js";import"./FieldBase-De9CwOeM.js";import"./Field-CklQ3uRY.js";import"./Label-DAepOqrA.js";import"./Input-C6iRvbsc.js";import"./MenuListItem-D68tduCT.js";import"./MenuListHeading-lkQwQf3s.js";import"./MenuItem-B1Q66lNx.js";import"./Checkmark-CSwkO33y.js";import"./ItemLabel-2sb7Udx3.js";import"./index-CrzqWcTU.js";import"./InformationSquare-DpMeWUxz.js";import"./MenuElipsisHorizontal-D2O7BZ44.js";import"./Pencil-DyXfKaaU.js";import"./Trash-DJ7iEv1M.js";import"./SettingsModal-DAtA4H0Z.js";import"./ModalBody-p8b8lRFV.js";import"./Section-2oE2jyh4.js";import"./Flex-DehNIx1U.js";import"./ButtonGroup-xNpv9tyz.js";import"./ButtonIcon-__oVwPy4.js";import"./ButtonLabel-CtWAJHpe.js";import"./TextField-jx3_jaTi.js";import"./SkipLink-BzRH_5Wl.js";import"./Banner--gUGmORl.js";import"./GlobalHeader-JbFRhCji.js";import"./useIsDesktop-CbM6cjnW.js";import"./GlobalAccountButton-Bna488uj.js";import"./Enter-BCoOYWSk.js";import"./GlobalMenuButton-D7pL8q1U.js";import"./MenuHamburger-CvD6asOf.js";import"./AccountSelector-C_I36wK8.js";import"./Switch-DUcCtjYA.js";import"./AccountMenu-DQjmE_c6.js";import"./GlobalMenu-DBJZtdXl.js";import"./ArrowUndo-pEhOslZu.js";import"./Globe-CKeX3ou_.js";import"./BreadcrumbsLink-BwC98CjP.js";import"./ArrowRight-uL6zEJ5R.js";import"./Footer-D3FXo1We.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
